/**
 * Runtime Chinese UI pass for the stats dashboard.
 *
 * The dashboard's strings are hard-coded English across ~80 client modules.
 * Instead of rewriting every component, this translates rendered text nodes and
 * the attributes browsers surface (placeholder, title, aria-label, alt) after
 * React paints, and keeps translating as the DOM changes. English remains the
 * dictionary key, so `?lang=en` or localStorage `omp-stats-lang=en` restores
 * the original UI without a rebuild.
 */

import { PARTIALS, PHRASES } from "./zh-CN";

const ATTR_NAMES = ["placeholder", "title", "aria-label", "alt"] as const;
const LANG_STORAGE_KEY = "omp-stats-lang";

function translate(text: string): string {
	const trimmed = text.trim();
	if (!trimmed || !/[A-Za-z]/.test(trimmed)) return text;

	const exact = PHRASES[trimmed];
	if (exact !== undefined) return text.replace(trimmed, exact);

	let rewritten = trimmed;
	for (const [from, to] of PARTIALS) {
		if (rewritten.includes(from)) rewritten = rewritten.split(from).join(to);
	}
	return rewritten === trimmed ? text : text.replace(trimmed, rewritten);
}

function translateTextNode(node: Node): void {
	const value = node.nodeValue;
	if (value === null) return;
	const next = translate(value);
	if (next !== value) node.nodeValue = next;
}

function translateAttributes(element: Element): void {
	for (const name of ATTR_NAMES) {
		const value = element.getAttribute(name);
		if (value === null) continue;
		const next = translate(value);
		if (next !== value) element.setAttribute(name, next);
	}
}

function translateSubtree(node: Node): void {
	if (node.nodeType === Node.TEXT_NODE) {
		translateTextNode(node);
		return;
	}
	if (node.nodeType !== Node.ELEMENT_NODE) return;
	const element = node as Element;
	translateAttributes(element);
	for (const child of element.childNodes) translateSubtree(child);
}

/** Make the dashboard Chinese. No-op when English was explicitly requested. */
export function initChineseUi(): void {
	if (typeof document === "undefined") return;
	if (new URLSearchParams(window.location.search).get("lang") === "en") return;
	try {
		if (window.localStorage.getItem(LANG_STORAGE_KEY) === "en") return;
	} catch {
		// Private browsing can block storage; Chinese is the default.
	}

	document.documentElement.lang = "zh-CN";
	const title = PHRASES["omp stats"];
	if (title !== undefined) document.title = title;

	const observer = new MutationObserver(records => {
		for (const record of records) {
			if (record.type === "childList") {
				for (const added of record.addedNodes) translateSubtree(added);
			} else if (record.type === "attributes") {
				translateAttributes(record.target as Element);
			} else {
				translateTextNode(record.target);
			}
		}
	});

	observer.observe(document.body, {
		attributes: true,
		attributeFilter: [...ATTR_NAMES],
		characterData: true,
		childList: true,
		subtree: true,
	});
	translateSubtree(document.body);
}
