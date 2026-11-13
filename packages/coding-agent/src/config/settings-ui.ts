import { TERMINAL } from "@oh-my-pi/pi-tui";
import { isNativeRendering } from "@oh-my-pi/pi-tui/native/state";
import {
	SETTING_TABS,
	TAB_LEADS,
	TAB_METADATA,
	type AnyUiMetadata,
	type SettingsDisplayEntry,
	type SettingsHost,
} from "@oh-my-pi/pi-tui/overlays/settings-defs";
import { isSettingsInitialized, Settings, settings } from "./settings";
import { orderedSettings } from "./all-settings";
import { type AnySetting, lookup } from "./registry";

import { getLanguage, localizeUiText, onLanguageChanged } from "../i18n";
import { cfgPlanAutosave, cfgPlanEnabled } from "../plan-mode/settings";
import {
	cfgRetryUsageAwareFallback,
	cfgDefaultThinkingLevel,
	normalizeProviderMaxInFlightRequests,
	validateProviderMaxInFlightRequests,
} from "../session/settings";
import { cfgAutolearnEnabled } from "../autolearn/settings";
import { cfgMemoryBackend } from "../memory-backend/settings";
import { cfgComposerPredictions, cfgTuiVimMode } from "../modes/settings";
import { cfgAdvisorEnabled } from "../advisor/settings";
import { cfgContextFilesExtra } from "../session/context-settings";
import { cfgTaskPerCallModelAllow } from "../task/settings";
import { cfgToolsRestrictedFolders } from "../tools/settings";

/** Condition over the global settings; hidden (false) until they are initialized. */
function whenSettings(test: (settings: Settings) => boolean): () => boolean {
	return () => isSettingsInitialized() && test(Settings.instance);
}

const CONDITIONS: Record<string, () => boolean> = {
	macOS: () => process.platform === "darwin",
	hasImageProtocol: () => !!TERMINAL.imageProtocol,
	nativeRendering: () => isNativeRendering(),
	advisorEnabled: whenSettings(s => cfgAdvisorEnabled.get(s) === true),
	vimModeEnabled: whenSettings(s => cfgTuiVimMode.get(s) === true),
	composerPredictionsEnabled: whenSettings(s => cfgComposerPredictions.get(s) === true),
	hindsightActive: whenSettings(s => cfgMemoryBackend.get(s) === "hindsight"),
	mnemopiActive: whenSettings(s => cfgMemoryBackend.get(s) === "mnemopi"),
	autolearnActive: whenSettings(s => cfgAutolearnEnabled.get(s) === true),
	autoThinkingActive: whenSettings(s => cfgDefaultThinkingLevel.get(s) === "auto"),
	usageAwareFallbackEnabled: whenSettings(s => cfgRetryUsageAwareFallback.get(s) === true),
	planModeEnabled: whenSettings(s => cfgPlanEnabled.get(s)),
	planAutosaveEnabled: whenSettings(s => cfgPlanEnabled.get(s) && cfgPlanAutosave.get(s)),
	// These editors write the global layer; hide them so a project-supplied list is never promoted to global.
	contextFilesExtraNotProject: whenSettings(s => cfgContextFilesExtra.provenance(s) !== "project"),
	restrictedFoldersNotProject: whenSettings(s => cfgToolsRestrictedFolders.provenance(s) !== "project"),
	perCallModelAllowNotProject: whenSettings(s => cfgTaskPerCallModelAllow.provenance(s) !== "project"),
};

/** Description suffix telling the panel user that an environment variable is in play. */
function envNote(setting: AnySetting): string {
	if (!setting.envName || setting.envValue() === undefined) return "";
	return setting.envFallback
		? ` Unset, it falls back to $${setting.envName}.`
		: ` $${setting.envName} overrides this setting while it is set.`;
}

function localizeUiMetadata(ui: AnyUiMetadata): AnyUiMetadata {
	return {
		...ui,
		label: localizeUiText(ui.label),
		description: localizeUiText(ui.description),
		warning: ui.warning ? localizeUiText(ui.warning) : undefined,
		options: Array.isArray(ui.options)
			? ui.options.map(option => ({
					...option,
					label: localizeUiText(option.label),
					description: option.description ? localizeUiText(option.description) : undefined,
				}))
			: ui.options,
	};
}

const TAB_LABELS_EN: Readonly<Record<string, string>> = Object.fromEntries(
	SETTING_TABS.map(tab => [tab, TAB_METADATA[tab].label]),
);
const TAB_LEADS_EN: Readonly<Record<string, string>> = Object.fromEntries(
	SETTING_TABS.map(tab => [tab, TAB_LEADS[tab]]),
);

/** Translate exact English tab labels/leads supplied by the schema-independent TUI overlay. */
export function localizeSettingsTabs(): void {
	const chinese = getLanguage() === "zh-CN";
	for (const tab of SETTING_TABS) {
		const label = TAB_LABELS_EN[tab] ?? TAB_METADATA[tab].label;
		const lead = TAB_LEADS_EN[tab] ?? TAB_LEADS[tab];
		TAB_METADATA[tab].label = chinese ? localizeUiText(label) : label;
		TAB_LEADS[tab] = chinese ? localizeUiText(lead) : lead;
	}
}
onLanguageChanged(() => localizeSettingsTabs());

/**
 * Adapt the application schema and settings store to the terminal overlay. The panel shows and
 * edits the value of the settings layers, never an environment-supplied one (so an env credential
 * is never pre-filled or written to config); descriptions note an active environment variable.
 */
export function createSettingsHost(): SettingsHost {
	localizeSettingsTabs();
	const entries: SettingsDisplayEntry[] = [];
	for (const tab of SETTING_TABS) {
		for (const setting of orderedSettings()) {
			const ui = setting.ui;
			if (ui?.tab !== tab) continue;
			const note = envNote(setting);
			const localizedUi = localizeUiMetadata(ui);
			entries.push({
				path: setting.id,
				type: setting.type,
				defaultValue: setting.default,
				ui: note
					? { ...localizedUi, description: `${localizedUi.description}${localizeUiText(note)}` }
					: localizedUi,
				enumValues: setting.enumValues,
				credential: setting.isCredential,
				condition: ui.condition ? CONDITIONS[ui.condition] : undefined,
			});
		}
	}
	const resolve = (path: string): AnySetting => {
		const setting = lookup(path);
		if (!setting) throw new Error(`Unknown setting: ${path}`);
		return setting;
	};
	return {
		entries,
		localize: localizeUiText,
		get: path => lookup(path)?.layered(settings),
		set: (path, value) => resolve(path).set(settings, value),
		unset: path => resolve(path).unset(settings),
		normalizeProviderLimits: normalizeProviderMaxInFlightRequests,
		validateProviderLimits: validateProviderMaxInFlightRequests,
	};
}
