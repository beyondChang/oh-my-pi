import { type EnglishTranslationKey, en } from "./locales/en";
import { zhCN } from "./locales/zh-CN";
import { zhCNCommands } from "./locales/zh-CN-commands";
import { settingsZhCN } from "./locales/zh-CN-settings";
import { settingsZhCNLate } from "./locales/zh-CN-settings-late";
import { settingsZhCNLateContext } from "./locales/zh-CN-settings-late-context";
import { settingsZhCNLateModel } from "./locales/zh-CN-settings-late-model";
import { zhCNUiText } from "./locales/zh-CN-ui";

export type Language = "en" | "zh-CN";
export type TranslationKey = EnglishTranslationKey;
export type TranslationVariables = Readonly<Record<string, string | number | boolean | null | undefined>>;
export type LanguageChangedListener = (language: Language) => void;

const languageAliases: Readonly<Record<string, Language>> = {
	en: "en",
	english: "en",
	英文: "en",
	zh: "zh-CN",
	"zh-cn": "zh-CN",
	"zh-hans": "zh-CN",
	chinese: "zh-CN",
	中文: "zh-CN",
};

let currentLanguage: Language = "en";
const languageListeners = new Set<LanguageChangedListener>();

export function normalizeLanguage(value: unknown): Language | undefined {
	if (typeof value !== "string") return undefined;
	return languageAliases[value.trim().toLowerCase()];
}

export function getLanguage(): Language {
	return currentLanguage;
}

export function initializeLanguage(value: unknown): Language {
	const language = normalizeLanguage(value) ?? "zh-CN";
	return setLanguage(language);
}

export function setLanguage(value: unknown): Language {
	const language = normalizeLanguage(value);
	if (!language || language === currentLanguage) return currentLanguage;

	currentLanguage = language;
	for (const listener of [...languageListeners]) listener(currentLanguage);
	return currentLanguage;
}

export function onLanguageChanged(listener: LanguageChangedListener): () => void {
	languageListeners.add(listener);
	return () => languageListeners.delete(listener);
}

function resolveTranslation(key: string): string {
	const englishText = Object.hasOwn(en, key) ? en[key as TranslationKey] : undefined;
	if (currentLanguage === "en") return englishText ?? key;
	return zhCN[key as TranslationKey] ?? englishText ?? key;
}

function interpolate(text: string, variables: TranslationVariables | undefined): string {
	if (!variables) return text;
	return text.replace(
		/\{\{\s*([\w.-]+)\s*\}\}|\{([\w.-]+)\}|%\{([\w.-]+)\}/g,
		(match, doubleName: string | undefined, singleName: string | undefined, percentName: string | undefined) => {
			const name = doubleName ?? singleName ?? percentName;
			if (!name || !Object.hasOwn(variables, name)) return match;
			const value = variables[name];
			return value === null || value === undefined ? "" : String(value);
		},
	);
}

export function t(key: string, variables?: TranslationVariables): string {
	return interpolate(resolveTranslation(key), variables);
}

const chineseUiText = new Map<string, string>();
for (const key of Object.keys(en) as TranslationKey[]) {
	const englishText = en[key];
	const chineseText = zhCN[key];
	if (chineseText !== undefined && chineseText !== englishText) chineseUiText.set(englishText, chineseText);
}
for (const [englishText, chineseText] of Object.entries(zhCNUiText)) {
	if (englishText !== chineseText) chineseUiText.set(englishText, chineseText);
}
for (const [englishText, chineseText] of Object.entries(zhCNCommands)) {
	if (englishText !== chineseText) chineseUiText.set(englishText, chineseText);
}
for (const settings of [settingsZhCN, settingsZhCNLate, settingsZhCNLateModel, settingsZhCNLateContext]) {
	for (const [englishText, chineseText] of Object.entries(settings)) {
		if (englishText !== chineseText && !chineseUiText.has(englishText)) chineseUiText.set(englishText, chineseText);
	}
}

/**
 * Settings contain many numeric choices whose English unit is part of the
 * generated label (for example `15 minutes` or `500 lines`). Keep the raw
 * value untouched, but translate these display-only units without duplicating
 * every numeric choice in the resource table.
 */
function localizeCommonSettingValue(text: string): string | undefined {
	const numericUnit = text.match(
		/^(\d+(?:\.\d+)?)\s+(lines?|seconds?|minutes?|hours?|days?|reminders?|requests?|turns?|messages?|items?|tasks?)$/i,
	);
	if (numericUnit) {
		const unit = numericUnit[2]?.toLowerCase();
		const translatedUnit = unit?.startsWith("line")
			? "行"
			: unit?.startsWith("second")
				? "秒"
				: unit?.startsWith("minute")
					? "分钟"
					: unit?.startsWith("hour")
						? "小时"
						: unit?.startsWith("day")
							? "天"
							: unit?.startsWith("reminder")
								? "次提醒"
								: unit?.startsWith("request")
									? "次请求"
									: unit?.startsWith("turn")
										? "回合"
										: unit?.startsWith("item")
											? "项"
											: unit?.startsWith("task")
												? "个任务"
												: "条消息";
		return `${numericUnit[1]} ${translatedUnit}`;
	}

	const defaultTokenCount = text.match(/^Default;\s*(~?\s*\d+(?:\.\d+)?\s*[KM]?)\s+tokens?$/i);
	if (defaultTokenCount) return `默认；${defaultTokenCount[1]} 个令牌`;
	const tokenCount = text.match(/^(~?\s*\d+(?:\.\d+)?\s*[KM]?)\s+tokens?$/i);
	if (tokenCount) return `${tokenCount[1]} 个令牌`;
	return undefined;
}

/**
 * Provider, model, and tool identifiers keep their English names in the
 * Chinese interface: these compact status texts embed them alongside words
 * like "active" or "available".
 */
const dynamicStatusPatterns: ReadonlyArray<readonly [RegExp, (match: RegExpMatchArray) => string]> = [
	[/^Tools: none available$/, () => "工具：无可用"],
	[/^Tools: (\d+) active \/ (\d+) available$/, m => `工具：${m[1]} 个启用 / ${m[2]} 个可用`],
	[/^Tools: (\d+) available$/, m => `工具：${m[1]} 个可用`],
	[/^Context: unavailable$/, () => "上下文：不可用"],
	[/^Context: (\d+)% \((.+)\)$/, m => `上下文：${m[1]}%（${m[2]}）`],
	[/^Force: no active tools$/, () => "强制：没有启用的工具"],
	[/^Force: (\d+) active tools$/, m => `强制：${m[1]} 个启用的工具`],
	[/^Browser: disabled$/, () => "浏览器：已禁用"],
	[/^Browser: headless$/, () => "浏览器：无头模式"],
	[/^Browser: visible$/, () => "浏览器：可见模式"],
	[/^Jobs: none$/, () => "后台任务：无"],
	[/^Jobs: (\d+) running(?:, (\d+) recent)?$/, m => `后台任务：${m[1]} 个运行中${m[2] ? `，${m[2]} 个最近` : ""}`],
	[/^Skills: none$/, () => "技能：无"],
	[/^Skills: (.+)$/, m => `技能：${m[1]}`],
	[/^Advisor: (\w+)$/, m => `顾问：${localizeAdvisorState(m[1] ?? "")}`],
	[/^(\d+) match$/, m => `${m[1]} 个匹配`],
	[/^(\d+) matches$/, m => `${m[1]} 个匹配`],
	[/^Session compacted 1 time$/, () => "会话已压缩 1 次"],
	[/^Session compacted (\d+) times$/, m => `会话已压缩 ${m[1]} 次`],
];

function localizeAdvisorState(state: string): string {
	switch (state.toLowerCase()) {
		case "on":
			return "已启用";
		case "off":
			return "已禁用";
		case "idle":
			return "空闲";
		case "reviewing":
			return "审查中";
		case "paused":
			return "已暂停";
		default:
			return state;
	}
}

/**
 * Translate an exact, known English UI string; unknown dynamic text stays unchanged.
 */
export function localizeUiText(text: string): string {
	if (currentLanguage === "en") return text;
	const exact = chineseUiText.get(text);
	if (exact !== undefined) return exact;
	for (const [pattern, format] of dynamicStatusPatterns) {
		const match = text.match(pattern);
		if (match) return format(match);
	}
	return localizeCommonSettingValue(text) ?? text;
}

export { en } from "./locales/en";
export { zhCN } from "./locales/zh-CN";
