import { afterEach, beforeEach, describe, expect, it, vi } from "bun:test";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { removeWithRetries, setAgentDir, setProjectDir, VERSION } from "@oh-my-pi/pi-utils";
import { currentBuildHost, OMP_BUILD } from "../../src/cli/build-service";
import { fetchReleaseBuild, getLatestRelease, updateRepo } from "../../src/cli/github-release";
import { runUpdateCommand } from "../../src/cli/update-cli";
import { cfgUpdateChannel } from "../../src/modes/settings";
import { AgentStorage } from "../../src/session/agent-storage";
import { beginSettingsTest, restoreSettingsTestState, type SettingsTestState } from "../helpers/settings-test-state";

type FetchInput = string | URL | Request;

const REPO = "acme/omp";

/** A GitHub release body with `version` and `assets`, defaulting to the checksum manifest. */
function releaseBody(
	version: string,
	assets: Array<{ name: string; size: number; url?: string }>,
	overrides: Record<string, unknown> = {},
): Record<string, unknown> {
	return {
		tag_name: `v${version}`,
		draft: false,
		prerelease: version.includes("-"),
		assets: assets.map(asset => ({
			name: asset.name,
			size: asset.size,
			digest: null,
			browser_download_url: asset.url ?? `https://github.com/${REPO}/releases/download/v${version}/${asset.name}`,
		})),
		...overrides,
	};
}

function stubFetch(respond: (url: string) => Response, requests: string[] = []): string[] {
	const fetchStub = Object.assign(
		async (input: FetchInput) => {
			const url = String(input);
			requests.push(url);
			return respond(url);
		},
		{ preconnect: globalThis.fetch.preconnect },
	);
	vi.spyOn(globalThis, "fetch").mockImplementation(fetchStub);
	return requests;
}

describe("updateRepo", () => {
	it("defaults to this project's repository and rejects anything that is not owner/name", () => {
		expect(updateRepo(undefined)).toBe("beyondChang/oh-my-pi");
		expect(updateRepo("https://github.com/acme/omp.git")).toBe("acme/omp");
		expect(() => updateRepo("acme")).toThrow("expected owner/name");
	});
});

describe("getLatestRelease", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns the newest stable release that already has its checksum manifest", async () => {
		const requests = stubFetch(url => {
			if (!url.includes("/releases?")) return new Response(null, { status: 404 });
			return Response.json([
				releaseBody("18.21.0", [{ name: "omp-linux-x64", size: 10 }]),
				releaseBody("18.20.2", [{ name: "SHA256SUMS.txt", size: 900 }]),
				releaseBody("18.20.1", [{ name: "SHA256SUMS.txt", size: 900 }]),
			]);
		});

		const release = await getLatestRelease({ repo: REPO });

		expect(release.version).toBe("18.20.2");
		expect(release.tag).toBe("v18.20.2");
		expect(release.channel).toBe("stable");
		expect(requests[0]).toBe("https://api.github.com/repos/acme/omp/releases?per_page=30&page=1");
	});

	it("skips drafts and prereleases on the stable channel and finds canaries only on the canary channel", async () => {
		stubFetch(() =>
			Response.json([
				releaseBody("18.21.0-canary.3", [{ name: "SHA256SUMS.txt", size: 900 }]),
				releaseBody("18.22.0", [{ name: "SHA256SUMS.txt", size: 900 }], { draft: true }),
				releaseBody("18.20.2", [{ name: "SHA256SUMS.txt", size: 900 }]),
			]),
		);

		expect((await getLatestRelease({ repo: REPO })).version).toBe("18.20.2");
		expect((await getLatestRelease({ repo: REPO, channel: "canary" })).version).toBe("18.21.0-canary.3");
	});

	it("reports no qualifying release with the channel's recovery hint", async () => {
		stubFetch(() => Response.json([]));

		await expect(getLatestRelease({ repo: REPO, channel: "canary" })).rejects.toThrow(
			"No published canary release with SHA256SUMS.txt",
		);
	});

	it("surfaces an API failure instead of falling back to any other source", async () => {
		stubFetch(() => new Response(null, { status: 500, statusText: "Server Error" }));

		await expect(getLatestRelease({ repo: REPO })).rejects.toThrow("GitHub answered 500");
	});
});

describe("fetchReleaseBuild", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("pairs this host's asset with its SHA256SUMS.txt digest", async () => {
		const host = await currentBuildHost();
		const fileName = OMP_BUILD.fileName(host, "18.20.2");
		const content = "binary bytes";
		const sha = Bun.SHA256.hash(content, "hex");
		stubFetch(url => {
			if (url.endsWith("/SHA256SUMS.txt")) {
				return new Response(`${sha}  ${fileName}\n${"0".repeat(64)}  other-file\n`);
			}
			if (!url.includes("/releases?")) return new Response(null, { status: 404 });
			return Response.json([
				releaseBody("18.20.2", [
					{ name: "SHA256SUMS.txt", size: 900 },
					{ name: fileName, size: Buffer.byteLength(content) },
				]),
			]);
		});

		const release = await getLatestRelease({ repo: REPO });
		const build = await fetchReleaseBuild(release);

		expect(build).toEqual({
			version: "18.20.2",
			file: { name: fileName, size: Buffer.byteLength(content), sha256: sha },
			download: `https://github.com/${REPO}/releases/download/v18.20.2/${fileName}`,
		});
	});

	it("refuses a release whose manifest does not list this host's asset", async () => {
		const host = await currentBuildHost();
		const fileName = OMP_BUILD.fileName(host, "18.20.2");
		stubFetch(url => {
			if (url.endsWith("/SHA256SUMS.txt")) return new Response(`${"a".repeat(64)}  unrelated\n`);
			if (!url.includes("/releases?")) return new Response(null, { status: 404 });
			return Response.json([
				releaseBody("18.20.2", [
					{ name: "SHA256SUMS.txt", size: 900 },
					{ name: fileName, size: 10 },
				]),
			]);
		});

		const release = await getLatestRelease({ repo: REPO });

		await expect(fetchReleaseBuild(release)).rejects.toThrow(`has no checksum for ${fileName}`);
	});
});

describe("runUpdateCommand version source", () => {
	const dirs: string[] = [];
	let settingsState: SettingsTestState | undefined;

	// `runUpdateCommand` initializes the global Settings singleton from the
	// project and agent dirs; point both at a scratch dir so the host's config
	// is never read, and drop the singleton afterwards so later files get a
	// fresh `Settings.init()`.
	beforeEach(async () => {
		settingsState = beginSettingsTest();
		const scratch = await fs.realpath(await fs.mkdtemp(path.join(os.tmpdir(), "omp-update-settings-")));
		dirs.push(scratch);
		setProjectDir(scratch);
		setAgentDir(path.join(scratch, "agent"));
	});

	afterEach(async () => {
		AgentStorage.close();
		restoreSettingsTestState(settingsState);
		settingsState = undefined;
		await Promise.all(dirs.splice(0).map(dir => removeWithRetries(dir)));
	});

	/**
	 * Make PATH a fresh directory holding only what the test puts there, so no
	 * brew, mise, bun, npm, or omp of the host takes part in target resolution.
	 */
	async function isolatePath(): Promise<string> {
		const dir = await fs.realpath(await fs.mkdtemp(path.join(os.tmpdir(), "omp-update-path-")));
		dirs.push(dir);
		process.env.PATH = dir;
		return dir;
	}

	function quiet(): { logs: string[] } {
		const logs: string[] = [];
		vi.spyOn(console, "log").mockImplementation((...args: unknown[]) => {
			logs.push(args.join(" "));
		});
		vi.spyOn(console, "error").mockImplementation((...args: unknown[]) => {
			logs.push(args.join(" "));
		});
		vi.spyOn(process, "exit").mockImplementation(((code?: number) => {
			throw new Error(`process.exit(${code}): ${logs.join("\n")}`);
		}) as typeof process.exit);
		vi.spyOn(cfgUpdateChannel, "get").mockReturnValue("stable");
		return { logs };
	}

	it("checks GitHub with a timeout and never asks npm for a version", async () => {
		await isolatePath();
		quiet();
		const requests: string[] = [];
		stubFetch(() => Response.json([]), requests);

		await expect(runUpdateCommand({ force: false, check: true })).rejects.toThrow("Failed to check for updates");

		expect(requests.some(url => url.includes("api.github.com"))).toBe(true);
		expect(requests.some(url => url.includes("registry.npmjs.org"))).toBe(false);
	});

	it.skipIf(process.platform === "win32")(
		"replaces a standalone binary with the release asset named by its checksum manifest",
		async () => {
			const dir = await isolatePath();
			const ompPath = path.join(dir, "omp");
			await Bun.write(ompPath, "#!/bin/sh\necho omp/1.0.0\n");
			await fs.chmod(ompPath, 0o755);
			const next = "#!/bin/sh\necho omp/999.0.0\n";
			const host = await currentBuildHost();
			const fileName = OMP_BUILD.fileName(host, "999.0.0");
			const sha = Bun.SHA256.hash(next, "hex");
			const { logs } = quiet();
			const requests = stubFetch(url => {
				if (url.includes("/releases?")) {
					return Response.json([
						releaseBody("999.0.0", [
							{ name: "SHA256SUMS.txt", size: 900 },
							{ name: fileName, size: Buffer.byteLength(next) },
						]),
					]);
				}
				if (url.endsWith("/SHA256SUMS.txt")) return new Response(`${sha}  ${fileName}\n`);
				if (url.endsWith(`/${fileName}`)) return new Response(next);
				return new Response(null, { status: 404 });
			});

			await runUpdateCommand({ force: false, check: false });

			expect(requests.some(url => url.includes("registry.npmjs.org"))).toBe(false);
			expect(await Bun.file(ompPath).text()).toBe(next);
			expect(logs.some(line => line.includes("Updated to 999.0.0"))).toBe(true);
		},
	);

	it("reports the installed version without installing anything under --check", async () => {
		await isolatePath();
		quiet();
		stubFetch(url =>
			url.includes("/releases?")
				? Response.json([releaseBody(VERSION, [{ name: "SHA256SUMS.txt", size: 900 }])])
				: new Response(null, { status: 404 }),
		);

		const outcome = await runUpdateCommand({ force: false, check: true });

		expect(outcome).toEqual({ kind: "current" });
	});
});
