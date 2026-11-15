/**
 * Host-injected UI translator for the TUI library.
 *
 * The library ships English labels; every rendered string a host wants localized
 * goes through {@link uiText}. The default is the identity function, so a host
 * that injects nothing (tests, standalone TUI apps, the `omp stats` dashboard)
 * renders exactly the labels it wrote.
 *
 * Rendered text is translated, but the values components hand back to callers (a
 * selector's chosen label, an approval grant's label) stay the untranslated
 * source, so callers keep matching on them.
 */
import type { TspPrefsProps } from "@oh-my-pi/pi-wire";

let translator: (text: string) => string = text => text;

/**
 * Bumped on every {@link setUiTranslator} call. Components that cache a
 * described or pre-rendered tree key their memo on it, so a language switch
 * redraws the translated labels instead of serving the previous language.
 */
let version = 0;

/** Replace the translator. Pass the identity function to restore English. */
export function setUiTranslator(next: (text: string) => string): void {
	translator = next;
	version += 1;
}

/** Monotonic id of the translator generation, for render caches. */
export function uiTextVersion(): number {
	return version;
}

/** Translate a label at render time. Unknown text comes back unchanged. */
export function uiText(text: string): string {
	return translator(text);
}

/**
 * Translate a selectable row's chrome: `label` and `description` go through the
 * translator, while the row's `value` — the identity the list reports back to its
 * caller — stays untouched. Content such as a model id or a session title is left
 * alone by the exact-match lookup.
 */
export function uiItems<T extends { label: string; description?: string }>(items: readonly T[]): T[] {
	return items.map(item =>
		item.description === undefined
			? { ...item, label: uiText(item.label) }
			: { ...item, label: uiText(item.label), description: uiText(item.description) },
	);
}

/**
 * Translate a settings page's chrome: the page title, its lead, the page and
 * section heads, and every row's label, hint and default. Control values stay
 * untouched — a switch's state or a text field's content is data.
 */
export function uiPrefs<T extends TspPrefsProps>(props: T): T {
	return {
		...props,
		title: uiText(props.title),
		lead: props.lead === undefined ? undefined : uiText(props.lead),
		pages: props.pages.map(page => ({ ...page, label: uiText(page.label) })),
		sections: props.sections.map(section => ({
			...section,
			title: uiText(section.title),
			rows: section.rows.map(row => ({
				...row,
				label: uiText(row.label),
				hint: row.hint === undefined ? undefined : uiText(row.hint),
				defaultLabel: row.defaultLabel === undefined ? undefined : uiText(row.defaultLabel),
				control:
					row.control.k === "choice"
						? {
								...row.control,
								options: row.control.options.map(option => ({
									...option,
									label: uiText(option.label),
								})),
							}
						: row.control.k === "action"
							? { ...row.control, label: uiText(row.control.label) }
							: row.control,
			})),
		})),
	};
}
