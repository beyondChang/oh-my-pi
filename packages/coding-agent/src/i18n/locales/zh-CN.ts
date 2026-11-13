import type { EnglishTranslationKey } from "./en";

/** Chinese overrides for the stable translation keys in `en.ts`. */
export const zhCN: Partial<Record<EnglishTranslationKey, string>> = {
	"common.error": "错误",
	"common.errorPrefix": "错误：",
	"common.warning": "警告",
	"common.warningPrefix": "警告：",
	"common.unknown": "未知",
	"common.enabled": "已启用",
	"common.disabled": "已禁用",
	"language.name": "语言",
	"language.english": "英语",
	"language.chinese": "简体中文",
	"language.current": "当前语言：",
	"language.changed": "语言已切换为：",
	"language.unknown": "未知语言。请使用 /language en 或 /language zh-CN。",
	"language.command.description": "切换界面语言",
	"language.command.english": "使用英文界面",
	"language.command.chinese": "使用简体中文界面",
	"language.command.usage": "用法：/language [en|zh-CN]",
	"settings.title": "设置",
	"settings.language": "语言",
	"settings.language.description": "OMP 用户界面使用的语言",
	"settings.useEnglish": "使用英文界面",
	"settings.useChinese": "使用简体中文界面",
	"ui.updateAvailable": "有可用更新",
	"ui.newVersion": "新版本",
	"ui.updateCommand": "已可用。请运行：",
	"commands.settings.description": "打开设置菜单",
	"commands.setup.description": "打开供应商设置",
	"commands.setup.providers": "配置登录和网页搜索供应商",
};

export default zhCN;
