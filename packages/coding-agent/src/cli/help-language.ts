/**
 * The language used by `--help`, which renders before the settings store opens.
 *
 * The store is the authority for every other surface, but loading it pulls in
 * agent.db, migrations and the whole registry graph — too much for a command
 * that must print help and exit. Help therefore reads the same two sources in
 * the same order at the minimum cost: the `OMP_LANGUAGE` environment variable,
 * then the `language:` key of the global and project `config.yml` layers.
 *
 * An unreadable or invalid file leaves the previous language in place; help is
 * never the place to fail on configuration.
 */
import * as path from "node:path";

import { MAIN_CONFIG_FILENAMES, getAgentDir } from "@oh-my-pi/pi-utils/dirs";
import { logger } from "@oh-my-pi/pi-utils";
import { setCliTextTranslator } from "@oh-my-pi/pi-utils/cli-i18n";

import { initializeLanguage, localizeUiText } from "../i18n";

const PROJECT_CONFIG_DIR = ".omp";

/** Read `language:` from one YAML config file; undefined when absent or unreadable. */
async function readLanguageFrom(filePath: string): Promise<unknown> {
	try {
		const parsed: unknown = Bun.YAML.parse(await Bun.file(filePath).text());
		if (parsed === null || typeof parsed !== "object") return undefined;
		return (parsed as Record<string, unknown>).language;
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
			logger.debug("help: unreadable config file", { path: filePath, error: String(error) });
		}
		return undefined;
	}
}

/** The config files help consults: global layer first, project layer last so it wins. */
function configCandidates(cwd: string): string[] {
	const agentDir = getAgentDir();
	return [
		...MAIN_CONFIG_FILENAMES.map(name => path.join(agentDir, name)),
		...MAIN_CONFIG_FILENAMES.map(name => path.join(cwd, PROJECT_CONFIG_DIR, name)),
	];
}

/**
 * Resolve the help language and register the CLI translator. Any failure falls
 * back to the default language rather than breaking `omp --help`.
 */
export async function installCliTranslator(cwd: string = process.cwd()): Promise<void> {
	let language: unknown = process.env.OMP_LANGUAGE ?? process.env.PI_LANGUAGE;
	for (const candidate of configCandidates(cwd)) {
		const fromFile = await readLanguageFrom(candidate);
		if (fromFile !== undefined) language = fromFile;
	}
	initializeLanguage(language);
	setCliTextTranslator(localizeUiText);
}
