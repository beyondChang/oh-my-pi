/**
 * Chinese translations for status, error and notice text emitted by the TUI.
 *
 * These strings reach `showStatus` / `showError` / `showWarning`, which already
 * run every message through {@link localizeUiText}; only the dictionary entries
 * were missing. Keys stay the exact English source text so an upstream rewording
 * falls back to English instead of showing a stale translation.
 *
 * Command names, flags, setting ids and paths inside these sentences stay in
 * English: they are typed by the user.
 */
export const zhCNStatus: Readonly<Record<string, string>> = {
	// Collaboration and host-only guards.
	"Already in a collab session (/leave first)": "已处于协作会话中（请先 /leave）",
	"Already in a collab session as a guest (/leave first)": "已作为访客处于协作会话中（请先 /leave）",
	"Collab host discovery unavailable (omp collab list will not show this session)":
		"协作主机发现不可用（omp collab list 不会显示此会话）",
	"Collab stopped": "协作已停止",
	"Extension-initiated turns are host-only during a collab session": "协作会话中，扩展发起的对话轮次仅限主机",
	"Local execution is host-only during a collab session": "协作会话中，本地执行仅限主机",
	"Not in a collab session": "当前不在协作会话中",
	"Stop hosting first (/collab stop)": "请先停止主持（/collab stop）",
	"This collab link is read-only": "此协作链接为只读",
	"This collab link is read-only — prompting is disabled": "此协作链接为只读——已禁用提示输入",
	"/local is host-only during a collab session": "协作会话中，/local 仅限主机",
	"/queue is host-only during a collab session": "协作会话中，/queue 仅限主机",
	"/retry is host-only during a collab session": "协作会话中，/retry 仅限主机",
	"No active Collab hosts": "没有活跃的协作主机",

	// Side conversations (/btw).
	"A /btw action is in progress. Please wait.": "/btw 操作进行中，请稍候。",
	"A /btw question is still running in another session view. Wait for it or cancel it first.":
		"另一个会话视图中仍有 /btw 问题在运行。请等待或先取消它。",
	"A /btw question is still running. Open /btw to view it or cancel it first.":
		"仍有 /btw 问题在运行。请打开 /btw 查看，或先取消它。",
	"/btw answer ready · /btw to read it": "/btw 回答已就绪 · 输入 /btw 查看",
	"/btw branch cancelled": "/btw 分支已取消",
	"/btw branch is in progress": "/btw 分支进行中",
	"/btw is still answering in the background · /btw to reopen it": "/btw 仍在后台回答 · 输入 /btw 重新打开",
	"Copied /btw answer to clipboard": "已复制 /btw 回答到剪贴板",
	"No active model available for /btw.": "没有可用于 /btw 的模型。",
	"This side conversation is unavailable or still running.": "此旁路会话不可用或仍在运行。",
	"Wait for the current /btw answer to finish or cancel it before moving.":
		"请等待当前 /btw 回答完成或取消它，然后再切换。",

	// Advisor.
	"Advisor disabled.": "顾问已禁用。",
	"Advisor enabled.": "顾问已启用。",
	"Advisor has no history yet.": "顾问还没有历史记录。",
	"Advisor history copied to clipboard": "顾问历史已复制到剪贴板",
	"Advisor is not active for this session.": "顾问未在当前会话中启用。",
	"Advisor setting enabled, but no model is assigned to the 'advisor' role.":
		"顾问设置已启用，但没有为 'advisor' 角色分配模型。",
	"/advisor configure opens an interactive editor and is only available in the interactive TUI.":
		"/advisor configure 会打开交互式编辑器，仅在交互式 TUI 中可用。",

	// Goals.
	"Exit goal mode first.": "请先退出目标模式。",
	"Goal budget must be a positive integer or `off`.": "目标预算必须是正整数或 `off`。",
	"Goal dropped.": "目标已放弃。",
	"Goal is already complete.": "目标已完成。",
	"Goal mode completed.": "目标模式已完成。",
	"Goal mode disabled.": "目标模式已禁用。",
	"Goal mode is already active. Use /goal to manage it, or /goal drop to start over.":
		"目标模式已启用。用 /goal 管理，或 /goal drop 重新开始。",
	"Goal mode is disabled. Enable it in settings (goal.enabled).": "目标模式已禁用。请在设置中启用（goal.enabled）。",
	"Goal mode paused.": "目标模式已暂停。",
	"Goal mode resumed.": "目标模式已恢复。",
	"No active goal.": "没有进行中的目标。",
	"No active goal to pause.": "没有可暂停的目标。",
	"No goal set.": "尚未设置目标。",
	"No goal to drop.": "没有可放弃的目标。",
	"No paused goal to resume.": "没有可恢复的已暂停目标。",
	"Resume the current goal first, or drop it before setting a new objective.":
		"请先恢复当前目标，或先放弃它再设置新目标。",

	// Plan mode.
	"Exit plan mode first.": "请先退出计划模式。",
	"Plan approved, but compaction was cancelled — execution not dispatched. Submit a turn to continue.":
		"计划已批准，但压缩被取消——未派发执行。请提交一轮对话以继续。",
	"Plan mode disabled.": "计划模式已禁用。",
	"Plan mode is disabled. Enable it in settings (plan.enabled).": "计划模式已禁用。请在设置中启用（plan.enabled）。",
	"Plan mode is not active.": "计划模式未启用。",
	"Plan mode: the `write` tool is provided by an extension and cannot submit plans. Disable it to use plan mode.":
		"计划模式：`write` 工具由扩展提供，无法提交计划。禁用它才能使用计划模式。",
	"Plan updated in external editor.": "计划已在外部编辑器中更新。",
	"Refine plan: enter a follow-up prompt.": "完善计划：请输入后续提示。",
	"Cannot pin an account while the session is streaming.": "会话输出中，无法固定账号。",
	"Select a model before pinning a provider account.": "请先选择模型，再固定供应商账号。",
	"No provider accounts found. Use /login to add one.": "未找到供应商账号。使用 /login 添加。",
	"No stored provider credentials to log out. Remove env or config auth at its source.":
		"没有可登出的已存供应商凭据。请从来源处移除环境变量或配置中的认证。",
	"Checking saved rate-limit resets…": "正在检查已保存的速率限制重置…",
	"Loading provider accounts…": "正在加载供应商账号…",
	"Wait for the current response to finish or abort it before refreshing provider state.":
		"请等待当前响应完成或中止它，然后再刷新供应商状态。",

	// Other modes.
	"Exit vibe mode first.": "请先退出 vibe 模式。",
	"End live mode before using push-to-talk speech input.": "使用按住说话语音输入前，请先结束实时模式。",
	"Speech-to-text is disabled. Enable it in settings: stt.enabled": "语音转文字已禁用。请在设置中启用：stt.enabled",
	"Thinking is off — enable thinking to show blocks": "思考已关闭——启用思考才能显示思考块",
	"Current model does not support thinking": "当前模型不支持思考",
	"Vibe mode enabled. You direct fast/good worker sessions; toolset is read + optional parent Todo + vibe tools.":
		"vibe 模式已启用。你负责指挥快/好两种工作会话；工具集为 read + 可选的父级 Todo + vibe 工具。",
	"Background jobs are disabled; enable async jobs to use /tan.": "后台任务已禁用；启用异步任务后才能使用 /tan。",
	"No active model available for /tan.": "没有可用于 /tan 的模型。",
	"/tan requires a persisted session.": "/tan 需要已持久化的会话。",
	"No active model available for /omfg.": "没有可用于 /omfg 的模型。",
	"Async background jobs are unavailable in this session.": "此会话中异步后台任务不可用。",
	"Remembered approvals forgotten; the next read or write asks again.":
		"已忘记记住的审批；下次读取或写入时会重新询问。",

	// Mode switches reported by /plan, /goal, /vibe and the loop guards.
	"Goal mode enabled.": "目标模式已启用。",
	"Vibe mode disabled.": "vibe 模式已禁用。",
	"Loop mode disabled.": "循环模式已禁用。",
	"Loop limit reached. Loop mode disabled.": "已达循环次数上限，循环模式已禁用。",
	"Loop time limit reached. Loop mode disabled.": "已达循环时间上限，循环模式已禁用。",
	"Exit vibe mode before using reset loops. Loop mode disabled.": "使用重置循环前请先退出 vibe 模式。循环模式已禁用。",
	"Plan mode paused.": "计划模式已暂停。",
	"Plan mode is paused — run /plan again to fully exit.": "计划模式已暂停——再次运行 /plan 可完全退出。",
	"Goal mode is disabled in settings (goal.enabled).": "目标模式在设置中已禁用（goal.enabled）。",
	"Plan mode is disabled in settings (plan.enabled).": "计划模式在设置中已禁用（plan.enabled）。",
	"Computer use disabled for this session.": "此会话已禁用电脑操作。",
	"Computer use is unavailable in this session.": "此会话中电脑操作不可用。",

	// Autoresearch.
	"Autoresearch enabled—describe what to optimize in your next message.":
		"自动研究已启用——请在下一条消息中说明要优化的目标。",
	"Autoresearch mode disabled": "自动研究模式已禁用",
	"Autoresearch session cleared.": "自动研究会话已清除。",
	"No autoresearch results yet": "暂无自动研究结果",
	"No baseline commit recorded — skipped worktree reset.": "未记录基线提交——已跳过工作树重置。",

	// Memory.
	"Hindsight backend is not active for this session.": "此会话未启用 Hindsight 后端。",
	"Mental models are disabled (hindsight.mentalModelsEnabled = false).":
		"心智模型已禁用（hindsight.mentalModelsEnabled = false）。",
	"Mental-model cache reloaded.": "心智模型缓存已重新加载。",
	"Reload failed (Hindsight backend not active or mental models disabled).":
		"重新加载失败（Hindsight 后端未启用或心智模型已禁用）。",
	"Memory cleared.": "记忆已清除。",
	"Memory consolidation enqueued.": "记忆整合已入队。",
	"Memory consolidation ran.": "记忆整合已运行。",
	"Memory data cleared and system prompt refreshed.": "记忆数据已清除，系统提示词已刷新。",
	"Memory payload is empty (memory backend off, disabled, or no memory available).":
		"记忆内容为空（记忆后端已关闭、已禁用或没有可用记忆）。",

	// Marketplace and plugins.
	"All marketplace plugins are up to date": "所有市场插件均为最新",
	"No marketplace plugins installed": "未安装任何市场插件",
	"No marketplaces configured.": "未配置任何市场。",
	"No marketplaces configured. Try:\n  /marketplace add anthropics/claude-plugins-official":
		"未配置任何市场。可尝试：\n  /marketplace add anthropics/claude-plugins-official",
	"No marketplaces configured.\n\nGet started:\n  /marketplace add anthropics/claude-plugins-official\n\nThen browse plugins with /marketplace or /marketplace discover":
		"未配置任何市场。\n\n开始使用：\n  /marketplace add anthropics/claude-plugins-official\n\n然后用 /marketplace 或 /marketplace discover 浏览插件",
	"No marketplaces configured.\n\nGet started:\n  /marketplace add anthropics/claude-plugins-official\n\nThen browse with /marketplace discover":
		"未配置任何市场。\n\n开始使用：\n  /marketplace add anthropics/claude-plugins-official\n\n然后用 /marketplace discover 浏览",
	"No plugins available in configured marketplaces": "已配置的市场中没有可用插件",
	"Plugins reloaded.": "插件已重新加载。",
	"Checking the registry for updates…": "正在检查注册表更新…",
	"Registry skills are already up to date.": "注册表中的技能已是最新。",

	// MCP.
	"MCP manager not available.": "MCP 管理器不可用。",
	"MCP runtime reload requested.": "已请求重新加载 MCP 运行时。",
	"No MCP manager available.": "没有可用的 MCP 管理器。",
	"No MCP servers configured.": "未配置任何 MCP 服务器。",
	"Server name required. Usage: /mcp reauth <name>": "需要服务器名称。用法：/mcp reauth <name>",
	"Server name required. Usage: /mcp reconnect <name>": "需要服务器名称。用法：/mcp reconnect <name>",
	"Server name required. Usage: /mcp remove <name> [--scope project|user]":
		"需要服务器名称。用法：/mcp remove <name> [--scope project|user]",
	"Server name required. Usage: /mcp test <name>": "需要服务器名称。用法：/mcp test <name>",
	"Server name required. Usage: /mcp unauth <name>": "需要服务器名称。用法：/mcp unauth <name>",
	"Invalid --port value. Must be an integer between 1 and 65535.": "--port 值无效。必须是 1 到 65535 之间的整数。",
	"Missing value for --desc.": "缺少 --desc 的值。",
	"Missing value for --host.": "缺少 --host 的值。",
	"Missing value for --key.": "缺少 --key 的值。",
	"Missing value for --port.": "缺少 --port 的值。",
	"Missing value for --user.": "缺少 --user 的值。",

	// SSH hosts.
	"--host is required. Usage: /ssh add <name> --host <host> ...":
		"需要 --host。用法：/ssh add <name> --host <host> ...",
	"Host name required. Usage: /ssh add <name> --host <host> ...":
		"需要主机名称。用法：/ssh add <name> --host <host> ...",
	"Host name required. Usage: /ssh remove <name> [--scope project|user]":
		"需要主机名称。用法：/ssh remove <name> [--scope project|user]",
	"No SSH hosts configured.": "未配置任何 SSH 主机。",

	// Todos.
	"Cleared all todos.": "已清空所有待办。",
	"Copied todos as Markdown to clipboard.": "已将待办以 Markdown 复制到剪贴板。",
	"No todos to copy.": "没有可复制的待办。",
	"No todos to export.": "没有可导出的待办。",
	"No todos. Use /todo append <task> to start one.": "没有待办。用 /todo append <task> 添加一项。",
	"Editor exited without saving; todos unchanged.": "编辑器未保存即退出；待办未变化。",

	// Sessions.
	"Branch summarization cancelled": "分支摘要已取消",
	"Branched to new session": "已分支到新会话",
	"Closing session…": "正在关闭会话…",
	"Could not generate a session title. Use /rename <title> to set one.":
		"无法生成会话标题。用 /rename <title> 手动设置。",
	"Delete cancelled": "删除已取消",
	"No entries in session": "会话中没有条目",
	"No session file to delete (in-memory session)": "没有可删除的会话文件（内存会话）",
	"No session file yet — send a message first.": "尚无会话文件——请先发送一条消息。",
	"No active session file.": "没有活跃的会话文件。",
	"Nothing to delete (in-memory session)": "没有可删除的内容（内存会话）",
	"Reloaded session": "会话已重新加载",
	"Session close cancelled": "会话关闭已取消",
	"Session deleted": "会话已删除",
	"Session has not been saved yet": "会话尚未保存",
	"Session name cannot be empty.": "会话名称不能为空。",
	"Session name not changed (a user-set name takes precedence).": "会话名称未更改（用户设置的名称为准）。",
	"Session shared": "会话已共享",
	"Share cancelled": "共享已取消",
	"Syncing session files...": "正在同步会话文件...",
	"Still closing… (flushing memory backend / network)": "仍在关闭…（正在刷写记忆后端 / 网络）",
	"Cannot open a fork in another terminal: failed to save the current session.":
		"无法在另一终端打开分支：保存当前会话失败。",
	"Cannot open a fork in another terminal: the current session has not been persisted yet.":
		"无法在另一终端打开分支：当前会话尚未持久化。",
	"Cannot open a fork in another terminal: the current session is no longer persisted.":
		"无法在另一终端打开分支：当前会话已不再持久化。",
	"Cannot open a fork in another terminal: the persisted session transcript is unavailable.":
		"无法在另一终端打开分支：已持久化的会话记录不可用。",
	"Fork cancelled: POSIX shell compatibility was not confirmed for the destination.":
		"分支已取消：未确认目标环境的 POSIX shell 兼容性。",
	"Fork failed (session not persisted or cancelled)": "分支失败（会话未持久化或已取消）",
	"Use /dump to copy the session to clipboard.": "使用 /dump 将会话复制到剪贴板。",
	"No messages to dump yet.": "尚无可导出的消息。",
	"Wait for the current response to finish or abort it before forking.":
		"请等待当前响应完成或中止它，然后再创建分支。",
	"Wait for context compaction to finish or cancel it before handing off.":
		"请等待上下文压缩完成或取消它，然后再交接。",
	"Wait for the current response to finish or abort it before handing off.":
		"请等待当前响应完成或中止它，然后再交接。",
	"Handoff cancelled": "交接已取消",
	"Handoff cancelled.": "交接已取消。",
	"Nothing to hand off (no messages yet)": "没有可交接的内容（尚无消息）",
	"Auto-handoff completed": "自动交接已完成",
	"Context handed off and compacted in place.": "上下文已交接并原地压缩。",
	"Compaction cancelled": "压缩已取消",
	"Compaction complete.": "压缩完成。",
	"Nothing to compact (no messages yet)": "没有可压缩的内容（尚无消息）",
	"Queued compaction for when the agent yields": "已将压缩排入队列，待智能体让出后执行",
	"Skipped queued compaction: context is already compacting": "已跳过排队压缩：上下文正在压缩",
	"Auto context-full maintenance failed; continuing without maintenance":
		"上下文占满后的自动维护失败；将在无维护的情况下继续",
	"Auto server compaction failed; continuing without maintenance": "服务端自动压缩失败；将在无压缩的情况下继续",
	"Auto-snapcompact maintenance failed; continuing without maintenance":
		"自动 snapcompact 维护失败；将在无维护的情况下继续",
	"Auto-shake completed": "自动 shake 已完成",
	"Conversation changed before /compact ran; returned it to the editor":
		"/compact 执行前会话已变更；已将内容送回编辑器",
	"Wait for the current response to finish or abort it before resetting the context.":
		"请等待当前响应完成或中止它，然后再重置上下文。",
	"Context usage is unavailable: no model is selected for this session.": "上下文用量不可用：此会话未选择模型。",
	"Context usage is unavailable: the model's context window is unknown or invalid.":
		"上下文用量不可用：模型的上下文窗口未知或无效。",
	"Usage reporting is not configured for this session.": "此会话未配置用量上报。",
	"Prompt history could not be saved; this prompt may be unavailable after restart.":
		"提示历史保存失败；重启后此提示可能不可用。",
	"Retrying the last failed turn.": "正在重试上一次失败的对话轮次。",
	"Retrying the turn": "正在重试该轮次",

	// Slash-command autocomplete status descriptions (`/plan`, `/collab`, …).
	"Fast mode disabled.": "快速模式已禁用。",
	"Extended context enabled.": "扩展上下文已启用。",
	"Extended context disabled.": "扩展上下文已禁用。",
	"Plan: off": "计划：关",
	"Plan: on": "计划：开",
	"Plan: disabled in settings": "计划：已在设置中禁用",
	"Plan: blocked by goal mode": "计划：被目标模式阻止",
	"Vibe: on": "vibe：开",
	"Vibe: off": "vibe：关",
	"Vibe: blocked by plan mode": "vibe：被计划模式阻止",
	"Vibe: blocked by goal mode": "vibe：被目标模式阻止",
	"Goal: off": "目标：关",
	"Goal: disabled in settings": "目标：已在设置中禁用",
	"Goal: blocked by plan mode": "目标：被计划模式阻止",
	"Loop: off": "循环：关",
	"Loop: paused": "循环：已暂停",
	"Loop: on (repeating prompt)": "循环：开（重复同一条提示）",
	"Loop: on (waiting for next prompt)": "循环：开（等待下一条提示）",
	"Collab: off": "协作：关",
	"Collab: guest": "协作：访客",
	"Collab: read-only guest": "协作：只读访客",
	"Leave collab: hosting": "退出协作：正在主持",
	"Leave collab: guest": "退出协作：访客",
	"Leave collab: not in collab": "退出协作：当前不在协作中",
	"Todos: none": "待办：无",
	"Advisor: configured, no model": "顾问：已配置，未指定模型",
	"Slow mode is on (flex tier).": "慢速模式已开启（flex 层级）。",
	"Slow mode is on (low priority at the Claude session limit).":
		"慢速模式已开启（触及 Claude 会话上限时使用低优先级）。",
	"none selected": "未选择",
	"Nothing to retry": "没有可重试的内容",
	"No prompt to resend before this answer": "此回答之前没有可重发的提示",
	"Re-answer cancelled": "重新回答已取消",
	"No OAuth login is waiting for a manual callback.": "没有等待手动回调的 OAuth 登录。",
	"OAuth callback received; completing login…": "已收到 OAuth 回调；正在完成登录…",

	// Rewind and navigation.
	"Already at this point": "已在该位置",
	"Navigated to selected point": "已跳转到所选位置",
	"Navigation cancelled": "导航已取消",
	"No messages to branch from": "没有可作为分支起点的消息",
	"Rewind undone": "回退已撤销",
	"That message is no longer on this branch": "该消息已不在当前分支上",

	// Clipboard.
	"Clipboard is empty": "剪贴板为空",
	"Clipboard paste has no supported text or image data": "剪贴板粘贴内容不含支持的文本或图像数据",
	"Clipboard paste was empty": "剪贴板粘贴内容为空",
	"Copied code block to clipboard": "已复制代码块到剪贴板",
	"Copied link to clipboard": "已复制链接到剪贴板",
	"Copied plan to clipboard": "已复制计划到剪贴板",
	"Copied to clipboard": "已复制到剪贴板",
	"Failed to copy to clipboard": "复制到剪贴板失败",
	"Failed to paste raw text from clipboard": "从剪贴板粘贴原始文本失败",
	"Failed to read clipboard": "读取剪贴板失败",
	"Failed to read pasted image path": "读取粘贴的图像路径失败",
	"Failed to save paste to a file — attached as a text chip instead": "粘贴内容保存为文件失败——已改为文本片段附加",
	"Image paste is not supported in this prompt": "此输入框不支持粘贴图像",
	"No code block to copy.": "没有可复制的代码块。",
	"No command to copy.": "没有可复制的命令。",
	"No link to copy.": "没有可复制的链接。",
	"No link to open.": "没有可打开的链接。",
	"No text in clipboard to paste raw": "剪贴板中没有可粘贴的原始文本",
	"No queued messages to restore": "没有可恢复的排队消息",
	"Nothing to copy": "没有可复制的内容",
	"Nothing to copy in that item": "该项中没有可复制的内容",
	"Nothing to copy yet.": "尚无可复制的内容。",
	"Pasted path is not a supported image": "粘贴的路径不是受支持的图像",
	"Restored last queued message to editor": "已将最后一条排队消息恢复到编辑器",
	"Send or clear the draft to retry this turn": "请发送或清空草稿以重试该轮次",
	"Video paste is not supported in this prompt": "此输入框不支持粘贴视频",

	// Annotations.
	"Enter text to annotate.": "请输入要注释的文本。",
	"No messages to annotate yet.": "尚无可注释的消息。",
	"No saved annotation drafts in this session.": "此会话中没有已保存的注释草稿。",
	"Restored the saved annotation draft.": "已恢复保存的注释草稿。",
	"Source summary failed; including the full source verbatim beyond the normal 999-character context limit.":
		"源摘要失败；已原样包含完整源码，超出常规 999 字符的上下文上限。",
	"Source summary unavailable; including the full source verbatim beyond the normal 999-character context limit.":
		"源摘要不可用；已原样包含完整源码，超出常规 999 字符的上下文上限。",
	"Text annotation requires the interactive UI. Re-run /annotate from an interactive session; no message was sent.":
		"文本注释需要交互式界面。请在交互式会话中重新运行 /annotate；未发送任何消息。",

	// Session content and usage.
	"No non-empty assistant reply is available on the active session branch.": "当前会话分支上没有非空的助手回复。",
	"No tools are available.": "没有可用的工具。",
	"No usage data available.": "没有可用的用量数据。",

	// Editor, diff, worktree and diagnostics.
	"No editor configured. Set $VISUAL or $EDITOR environment variable.":
		"未配置编辑器。请设置 $VISUAL 或 $EDITOR 环境变量。",
	"No commits found": "未找到提交",
	"No git branches found": "未找到 git 分支",
	"No changelog entries found.": "未找到变更日志条目。",
	"No log entries found for today.": "今天没有日志条目。",
	"No extension links in the transcript": "会话记录中没有扩展链接",
	"No local:// files in this session yet.": "此会话中尚无 local:// 文件。",
	"Artifact cache is empty.": "产物缓存为空。",
	"Artifact folder does not exist yet.": "产物目录尚不存在。",
	"Too many extension links on one row to tag; widen the terminal": "该行扩展链接过多无法标注；请加宽终端",
	"That subagent is gone — open the hub for live agents": "该子代理已结束——打开 hub 查看活跃代理",
	"Only one role model available": "只有一个角色模型可用",
	"Ask tool UI is not ready": "Ask 工具界面尚未就绪",
	"The task tool is not available for /seance.": "task 工具不可用于 /seance。",
	"Transcription in progress...": "正在转录...",
	"Deploy successful!": "部署成功！",
	"Browser capability is disabled (enable in settings)": "浏览器能力已禁用（请在设置中启用）",
	"Cache clear cancelled.": "缓存清理已取消。",
	"Wait for the current response to finish or abort it before changing directories.":
		"请等待当前响应完成或中止它，然后再切换目录。",
	"Wait for the current response to finish or abort it before creating a worktree.":
		"请等待当前响应完成或中止它，然后再创建工作树。",
	"Wait for the current response to finish or abort it before moving.": "请等待当前响应完成或中止它，然后再移动。",

	// Slash-command usage lines.
	"Usage: /advisor [on|off|status|dump [raw]|configure]": "用法：/advisor [on|off|status|dump [raw]|configure]",
	"Usage: /browser [headless|visible]": "用法：/browser [headless|visible]",
	"Usage: /computer [on|off|status]": "用法：/computer [on|off|status]",
	"Usage: /copy [code|cmd|link]": "用法：/copy [code|cmd|link]",
	"Usage: /dump [all|anon]": "用法：/dump [all|anon]",
	"Usage: /force:<tool-name> [prompt]": "用法：/force:<工具名> [提示]",
	"Usage: /fork [pane|window|tab]": "用法：/fork [pane|window|tab]",
	"Usage: /jobs [full|kill <id>|kill all]": "用法：/jobs [full|kill <id>|kill all]",
	"Usage: /jobs kill <id>|all": "用法：/jobs kill <id>|all",
	"Usage: /join <link>": "用法：/join <链接>",
	"Usage: /marketplace add <source>": "用法：/marketplace add <来源>",
	"Usage: /marketplace remove <name>": "用法：/marketplace remove <名称>",
	"Usage: /memory <view|stats|diagnose|clear|reset|enqueue|rebuild|queue|sync|mm ...>":
		"用法：/memory <view|stats|diagnose|clear|reset|enqueue|rebuild|queue|sync|mm ...>",
	"Usage: /memory mm <list|show|refresh|history|seed|reload|delete>":
		"用法：/memory mm <list|show|refresh|history|seed|reload|delete>",
	"Usage: /memory mm delete <id>": "用法：/memory mm delete <id>",
	"Usage: /memory mm history <id>": "用法：/memory mm history <id>",
	"Usage: /memory mm show <id>": "用法：/memory mm show <id>",
	"Usage: /move <path>": "用法：/move <路径>",
	"Usage: /omfg <complaint>": "用法：/omfg <问题描述>",
	"Usage: /queue <message> (or start a prompt with -> / =>)": "用法：/queue <消息>（或以 -> / => 开头输入提示）",
	"Usage: /session [info|delete|pin [account]]": "用法：/session [info|delete|pin [account]]",
	"Usage: /skillful [on|off|status]": "用法：/skillful [on|off|status]",
	"Usage: /skills install <@scope/name[@range]>… [--global]":
		"用法：/skills install <@scope/name[@range]>… [--global]",
	"Usage: /skills search <query>": "用法：/skills search <关键词>",
	"Usage: /ssh add <name> --host <host> [--user <user>] [--port <port>] [--key <keyPath>] [--desc <description>] [--compat] [--scope project|user]":
		"用法：/ssh add <name> --host <host> [--user <user>] [--port <port>] [--key <keyPath>] [--desc <description>] [--compat] [--scope project|user]",
	"Usage: /tan <work>": "用法：/tan <任务>",
	"Usage: /todo append [<phase>] <task...>": "用法：/todo append [<阶段>] <任务...>",
	"Usage: /todo start <task>": "用法：/todo start <任务>",
	"Usage: /usage [show|reset [provider/credential-id|provider/active]]":
		"用法：/usage [show|reset [provider/credential-id|provider/active]]",
	"Transcribing...": "正在转录…",
};

export default zhCNStatus;
