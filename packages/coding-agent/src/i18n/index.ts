import { type EnglishTranslationKey, en } from "./locales/en";
import { zhCN } from "./locales/zh-CN";
import { zhCNCliText } from "./locales/zh-CN-cli";
import { zhCNCommands } from "./locales/zh-CN-commands";
import { settingsZhCN } from "./locales/zh-CN-settings";
import { settingsZhCNLate } from "./locales/zh-CN-settings-late";
import { settingsZhCNLateContext } from "./locales/zh-CN-settings-late-context";
import { settingsZhCNLateModel } from "./locales/zh-CN-settings-late-model";
import { settingsZhCNExtra } from "./locales/zh-CN-settings-extra";
import { zhCNTuiText } from "./locales/zh-CN-tui";
import { zhCNTuiOverlays } from "./locales/zh-CN-tui-overlays";
import { zhCNStatus } from "./locales/zh-CN-status";
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
	for (const listener of languageListeners) listener(currentLanguage);
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
for (const [englishText, chineseText] of Object.entries(zhCNTuiText)) {
	if (englishText !== chineseText && !chineseUiText.has(englishText)) chineseUiText.set(englishText, chineseText);
}
for (const [englishText, chineseText] of Object.entries(zhCNTuiOverlays)) {
	if (englishText !== chineseText && !chineseUiText.has(englishText)) chineseUiText.set(englishText, chineseText);
}
for (const [englishText, chineseText] of Object.entries(zhCNCliText)) {
	if (englishText !== chineseText && !chineseUiText.has(englishText)) chineseUiText.set(englishText, chineseText);
}
for (const [englishText, chineseText] of Object.entries(zhCNStatus)) {
	if (englishText !== chineseText && !chineseUiText.has(englishText)) chineseUiText.set(englishText, chineseText);
}
for (const settings of [
	settingsZhCN,
	settingsZhCNLate,
	settingsZhCNLateModel,
	settingsZhCNLateContext,
	settingsZhCNExtra,
]) {
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
	[
		/^Python eval unavailable \((.+)\); eval will run JavaScript only\. Install Python 3\.8\+ or set python\.interpreter, then verify with `omp setup python --check`\.$/,
		m =>
			`Python 评估不可用（${m[1]}）；eval 将只运行 JavaScript。请安装 Python 3.8+ 或设置 python.interpreter，然后用 \`omp setup python --check\` 验证。`,
	],
	[
		/^Eval tool unavailable: (.+), and JavaScript eval is disabled\. Install Python 3\.8\+ or set python\.interpreter, then verify with `omp setup python --check`\.$/,
		m =>
			`Eval 工具不可用：${m[1]}，且 JavaScript 评估已被禁用。请安装 Python 3.8+ 或设置 python.interpreter，然后用 \`omp setup python --check\` 验证。`,
	],
	// Details that probe messages carry verbatim (the surrounding sentence is translated above).
	[/^No working Python interpreter found\. Tried: (.+)$/, m => `没有可用的 Python 解释器。已尝试：${m[1]}`],
	// Approval prompts. Tool names, paths and reasons are user- or provider-supplied
	// identifiers: only the framing words around them are translated.
	[/^Allow tool: (.+)$/, m => `允许工具：${m[1]}`],
	[/^Reason: (.+)$/, m => `原因：${m[1]}`],
	[/^Arguments:$/, () => "参数："],
	[/^Approve Directory: (.+)$/, m => `允许目录：${m[1]}`],
	[/^Always Approve Directory: (.+)$/, m => `始终允许目录：${m[1]}`],
	[/^Approve (.+) for this session$/, m => `本会话内允许 ${m[1]}`],
	[/^Approve and keep context \((.+)\)$/, m => `批准并保留上下文（${m[1]}）`],
	[/^Python executable not found on PATH$/, () => "在 PATH 中找不到 Python 可执行文件"],
	// Help appendix lines that embed a path or program name.
	[/^Session storage directory \(default: (.+)\)$/, m => `会话存储目录（默认：${m[1]}）`],
	[/^Execute Python code \(requires: (.+)\)$/, m => `执行 Python 代码（需要：${m[1]}）`],
	// Tree selector and model browser empty states, which embed a query or a key hint.
	[/^No entries match search "(.+)"$/, m => `没有匹配搜索 “${m[1]}” 的条目`],
	[/^No entries match search "(.*)"\. Press $/, m => `没有匹配搜索 “${m[1]}” 的条目。按 `],
	[/^Press (.+) to clear the search$/, m => `按 ${m[1]} 清空搜索`],
	[/^Press (.+) to show all, (.+) for default$/, m => `按 ${m[1]} 显示全部，按 ${m[2]} 恢复默认`],
	[/^(\d+) entries hidden by the current filter (.+)$/, m => `当前筛选条件 ${m[2]} 隐藏了 ${m[1]} 个条目`],
	[/^ to clear the search$/, () => " 清空搜索"],
	[/^ to show all, $/, () => " 显示全部，"],
	[/^ for default$/, () => " 恢复默认"],
	// Model browser / hub discovery states, which embed a provider label or an age.
	[
		/^No matching models in (.+)\. Switch to All models to search every provider\.$/,
		m => `在 ${m[1]} 中没有匹配的模型。切换到「所有模型」可搜索全部供应商。`,
	],
	[
		/^Using cached model list from (.+)\. Live refresh is still pending\.$/,
		m => `正在使用 ${m[1]} 的缓存模型列表，实时刷新仍待完成。`,
	],
	[
		/^Provider unavailable\. Using cached model list from (.+)\.$/,
		m => `供应商不可用。正在使用 ${m[1]} 的缓存模型列表。`,
	],
	[/^Discovery failed: (.+)$/, m => `模型发现失败：${m[1]}`],
	[
		/^Discovery endpoint (.+) returned 404\. Point baseUrl at the host that serves \/models \(usually \.\.\.\/v1\)\.$/,
		m => `发现端点 ${m[1]} 返回 404。请将 baseUrl 指向提供 /models 的主机（通常是 .../v1）。`,
	],
	// Autocomplete status lines that embed a model id or a count.
	[/^Model: (.+)$/, m => `模型：${m[1]}`],
	[/^Presets: (\d+) saved$/, m => `预设：已保存 ${m[1]} 个`],
	[
		/^Arguments passed to (\S+) unchanged \(options, -c COMMAND, a script and its arguments\)$/,
		m => `原样传给 ${m[1]} 的参数（选项、-c COMMAND、脚本及其参数）`,
	],
	[/^Presets: none saved$/, () => "预设：无已保存"],
	[/^Pasted (\d+) lines$/, m => `已粘贴 ${m[1]} 行`],
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
 * `nested` lets a status pattern translate the detail it embeds without recursing forever.
 */
export function localizeUiText(text: string, nested = false): string {
	if (currentLanguage === "en") return text;
	const exact = chineseUiText.get(text);
	if (exact !== undefined) return exact;
	for (const [pattern, format] of dynamicStatusPatterns) {
		const match = text.match(pattern);
		if (match) {
			// A nested detail (path, spawn error) gets its own translation entry when it has one.
			if (nested) return format(match);
			const translated = match.map(part => (typeof part === "string" ? localizeUiText(part, true) : part));
			return format(translated as unknown as RegExpMatchArray);
		}
	}
	return localizeCommonSettingValue(text) ?? text;
}

export { en } from "./locales/en";
export { zhCN } from "./locales/zh-CN";
