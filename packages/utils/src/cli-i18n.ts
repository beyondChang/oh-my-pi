/**
 * Host-injected translator for CLI help text.
 *
 * `renderRootHelp` / `renderCommandHelp` print section headings and the
 * descriptions declared by each command module. Both are English literals in the
 * command modules, so the host injects a translator instead of rewriting every
 * declaration; the default identity keeps `--help` English for hosts that never
 * call {@link setCliTextTranslator}.
 *
 * Only display text is translated: flag names, usage lines, option values and
 * examples keep their exact bytes, because users copy them.
 */
let translator: (text: string) => string = text => text;

/** Replace the translator. Pass the identity function to restore English. */
export function setCliTextTranslator(next: (text: string) => string): void {
	translator = next;
}

/** Translate one help string at render time. Unknown text comes back unchanged. */
export function cliText(text: string): string {
	return translator(text);
}
