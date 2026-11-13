/**
 * English UI strings owned by the coding agent.
 *
 * Upstream text remains the baseline. Chinese resources override the same keys
 * (or the same literal English strings through {@link localizeUiText}) so an
 * untranslated addition safely falls back to English.
 */
export const en = {
	"common.error": "Error",
	"common.errorPrefix": "Error:",
	"common.warning": "Warning",
	"common.warningPrefix": "Warning:",
	"common.unknown": "Unknown",
	"common.enabled": "Enabled",
	"common.disabled": "Disabled",
	"language.name": "Language",
	"language.english": "English",
	"language.chinese": "Simplified Chinese",
	"language.current": "Current language:",
	"language.changed": "Language changed to:",
	"language.unknown": "Unknown language. Use /language en or /language zh-CN.",
	"language.command.description": "Switch interface language",
	"language.command.english": "Use the English interface",
	"language.command.chinese": "Use the Simplified Chinese interface",
	"language.command.usage": "Usage: /language [en|zh-CN]",
	"settings.title": "Settings",
	"settings.language": "Language",
	"settings.language.description": "Language used for the OMP user interface",
	"settings.useEnglish": "Use the English interface",
	"settings.useChinese": "Use the Simplified Chinese interface",
	"ui.updateAvailable": "Update Available",
	"ui.newVersion": "New version",
	"ui.updateCommand": "is available. Run:",
	"commands.settings.description": "Open settings menu",
	"commands.setup.description": "Open provider setup",
	"commands.setup.providers": "Configure sign-in and web search providers",
} as const;

export type EnglishTranslationKey = keyof typeof en;

export default en;
