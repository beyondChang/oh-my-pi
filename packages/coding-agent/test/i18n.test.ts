import { afterEach, describe, expect, it } from "bun:test";
import { Settings } from "@oh-my-pi/pi-coding-agent/config/settings";
import { createSettingsHost } from "@oh-my-pi/pi-coding-agent/config/settings-ui";
import { PluginListComponent } from "@oh-my-pi/pi-tui/overlays/plugin-settings";
import { initTheme } from "@oh-my-pi/pi-tui/theme";
import {
	getLanguage,
	initializeLanguage,
	localizeUiText,
	normalizeLanguage,
	setLanguage,
	t,
} from "@oh-my-pi/pi-coding-agent/i18n";
import { cfgLanguage } from "@oh-my-pi/pi-coding-agent/modes/settings";
import { getSettingsForTab } from "@oh-my-pi/pi-tui/overlays/settings-defs";

describe("i18n", () => {
	afterEach(() => {
		initializeLanguage("en");
	});

	it("defaults the language setting to Simplified Chinese and normalizes names", () => {
		expect(cfgLanguage.default).toBe("zh-CN");
		expect(normalizeLanguage("en")).toBe("en");
		expect(normalizeLanguage("English")).toBe("en");
		expect(normalizeLanguage("英文")).toBe("en");
		expect(normalizeLanguage("zh")).toBe("zh-CN");
		expect(normalizeLanguage("ZH-HANS")).toBe("zh-CN");
		expect(normalizeLanguage("中文")).toBe("zh-CN");
		expect(normalizeLanguage("fr")).toBeUndefined();
		expect(normalizeLanguage(undefined)).toBeUndefined();
	});

	it("initializes, changes, and reports the active language", () => {
		initializeLanguage("chinese");
		expect(getLanguage()).toBe("zh-CN");
		expect(setLanguage("english")).toBe("en");
		expect(getLanguage()).toBe("en");
	});

	it("falls back to English and preserves unknown keys", () => {
		setLanguage("zh-CN");
		expect(t("common.error")).toBe("错误");
		expect(t("language.command.description")).toBe("切换界面语言");
		expect(t("i18n.unknown.key")).toBe("i18n.unknown.key");
	});

	it("localizes only exact known UI text in Chinese", () => {
		setLanguage("zh-CN");
		expect(localizeUiText("Error:")).toBe("错误：");
		expect(localizeUiText("Open settings menu")).toBe("打开设置菜单");
		expect(localizeUiText("Error: user supplied text")).toBe("Error: user supplied text");
		expect(localizeUiText("user supplied text")).toBe("user supplied text");
	});

	it("localizes compact dynamic status texts without touching identifiers", () => {
		setLanguage("zh-CN");
		expect(localizeUiText("Tools: 12 active / 21 available")).toBe("工具：12 个启用 / 21 个可用");
		expect(localizeUiText("Jobs: none")).toBe("后台任务：无");
		expect(localizeUiText("Browser: headless")).toBe("浏览器：无头模式");
		expect(localizeUiText("2 matches")).toBe("2 个匹配");
		expect(localizeUiText("Session compacted 3 times")).toBe("会话已压缩 3 次");
		expect(localizeUiText("Model claude-sonnet-5-5 ready")).toBe("Model claude-sonnet-5-5 ready");
	});

	it("localizes the plugins settings page through its callback", async () => {
		await initTheme();
		setLanguage("zh-CN");
		const strip = (text: string): string => text.replace(/\x1b\[[0-9;?]*[A-Za-z]/g, "");
		const emptyList = new PluginListComponent(
			[],
			{ onNpmSelect: () => {}, onMarketplaceSelect: () => {}, onCancel: () => {} },
			localizeUiText,
		);
		const rendered = strip(emptyList.render(70).join("\n"));
		expect(rendered).toContain("插件");
		expect(rendered).toContain("没有安装插件");
		expect(rendered).toContain("安装 npm 插件：");
	});

	it("keeps UI text unchanged in English", () => {
		initializeLanguage("en");
		expect(localizeUiText("Error:")).toBe("Error:");
		expect(localizeUiText("Open settings menu")).toBe("Open settings menu");
	});

	it("localizes settings metadata without changing raw values", async () => {
		await Settings.init({ inMemory: true });
		setLanguage("zh-CN");
		const host = createSettingsHost();
		const language = getSettingsForTab(host.entries, "appearance", host.localize).find(
			setting => setting.path === "language",
		);
		expect(language?.label).toBe("语言");
		expect(language?.description).toBe("OMP 用户界面使用的语言");
		expect(host.get("language")).toBe("zh-CN");
	});

	it("keeps stable English group ids while displaying Chinese headings", () => {
		setLanguage("zh-CN");
		const host = createSettingsHost();
		const settingsForTab = getSettingsForTab(host.entries, "appearance", host.localize);
		const themed = settingsForTab.find(setting => setting.group === "Theme");
		expect(themed?.displayGroup).toBe("主题");
		expect(themed?.group).toBe("Theme");
	});
});
