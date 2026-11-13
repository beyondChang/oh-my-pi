import { afterEach, describe, expect, it, vi } from "bun:test";
import { Settings } from "@oh-my-pi/pi-coding-agent/config/settings";
import { getLanguage, initializeLanguage } from "@oh-my-pi/pi-coding-agent/i18n";
import { cfgLanguage } from "@oh-my-pi/pi-coding-agent/modes/settings";
import { executeAcpBuiltinSlashCommand } from "@oh-my-pi/pi-coding-agent/slash-commands/acp-builtins";
import { buildTuiBuiltinSlashCommands } from "@oh-my-pi/pi-coding-agent/slash-commands/builtin-registry";

function createRuntime() {
	const settings = Settings.isolated();
	const output = vi.fn();
	const refreshCommands = vi.fn(async () => {});
	return {
		output,
		refreshCommands,
		runtime: {
			settings,
			output,
			refreshCommands,
		},
	};
}

describe("/language", () => {
	afterEach(() => {
		initializeLanguage("zh-CN");
	});

	it("persists the selected language and refreshes command metadata", async () => {
		const h = createRuntime();
		const result = await Reflect.apply(executeAcpBuiltinSlashCommand, undefined, ["/language zh-CN", h.runtime]);
		expect(result).toEqual({ consumed: true });
		expect(cfgLanguage.get(h.runtime.settings)).toBe("zh-CN");
		expect(getLanguage()).toBe("zh-CN");
		expect(h.refreshCommands).toHaveBeenCalledTimes(1);
		expect(h.output.mock.calls[0]?.[0]).toContain("简体中文");
	});

	it("accepts aliases and rejects unsupported values without changing settings", async () => {
		const h = createRuntime();
		await Reflect.apply(executeAcpBuiltinSlashCommand, undefined, ["/language 中文", h.runtime]);
		await Reflect.apply(executeAcpBuiltinSlashCommand, undefined, ["/language fr", h.runtime]);
		expect(cfgLanguage.get(h.runtime.settings)).toBe("zh-CN");
		expect(h.output.mock.calls[1]?.[0]).toContain("未知语言");
	});

	it("localizes built-in command descriptions after the language changes", () => {
		initializeLanguage("zh-CN");
		const commands = buildTuiBuiltinSlashCommands({ ctx: {} as never });
		expect(commands.find(command => command.name === "settings")?.description).toBe("打开设置菜单");
		expect(commands.find(command => command.name === "language")?.description).toBe("切换界面语言");
	});
});
