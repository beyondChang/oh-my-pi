/**
 * Chinese labels for settings registered outside the main appearance/model
 * registries: capability metadata, inline-image limits, symbol presets and the
 * per-segment status-line selectors.
 *
 * Keys are the exact English labels declared by the owning domain, so a new
 * upstream setting without an entry keeps its English fallback.
 */
export const settingsZhCNExtra: Readonly<Record<string, string>> = {
	// Capability metadata.
	"Configuration settings from various sources": "来自多种来源的配置设置",

	// Status line.
	"status line segment": "状态栏片段",

	// Inline images.
	"Maximum width in terminal columns for inline images (default 100). Set to 0 for unlimited (bounded only by terminal width).":
		"终端内联图像的最大列宽（默认 100）。设为 0 表示不限制（仅受终端宽度约束）。",
	"Maximum height in terminal rows for inline images (default 20). Set to 0 to use only the viewport-based limit (60% of terminal height).":
		"终端内联图像的最大行高（默认 20）。设为 0 表示仅使用基于视口的限制（终端高度的 60%）。",
	"Maximum number of inline images kept as live terminal graphics (default 8). Older images fall back to a text placeholder via a full redraw once the limit is exceeded. Set to 0 to keep every image (no limit).":
		"保留为实时终端图形的内联图像数量上限（默认 8）。超出上限后，较早的图像会在整屏重绘时回退为文本占位符。设为 0 表示保留所有图像（不限制）。",

	// Composer completion source.
	"macOS dictionary completions": "macOS 词典补全",

	// Shared option labels.
	Disabled: "已禁用",
	"1 fps": "1 帧/秒",
	"4 fps": "4 帧/秒",
	"15 fps": "15 帧/秒",
	"30 fps": "30 帧/秒",
};

export default settingsZhCNExtra;
