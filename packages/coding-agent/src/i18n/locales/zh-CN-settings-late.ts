/**
 * Chinese labels and descriptions for settings added after the upstream
 * dictionary snapshot (18.x additions across every tab).
 */
export const settingsZhCNLate: Readonly<Record<string, string>> = {
	"Requires a Nerd Font, or a Glyph Protocol terminal (icons ship in-band)":
		"需要 Nerd Font，或支持 Glyph Protocol 的终端（图标随内容下发）",
	"Generation Rate": "生成速率",
	"Show a live generation tok/s readout: on the working row next to the session title, or in the native composer bar right after the thinking level, where the last reading stays between turns. Estimated from streamed deltas and corrected by the provider's billed output count as each message completes.":
		"实时显示生成速率（令牌/秒）：显示在会话标题旁的工作行上，或在原生输入栏中思考等级之后；最后一轮读数会保留到下一轮。数值根据流式增量估算，并在每条消息完成后用供应商计费的输出数校正。",
	"Show the thinking level as a single icon on the model name instead of a separate ` · <level>` suffix; in Tern's composer, as the model chip's icon instead of a separate chip (click the icon to cycle it).":
		"将思考等级显示为模型名上的单个图标，而不是单独的 ` · <level>` 后缀；在 Tern 输入框中显示为模型标签的图标而不是单独标签（点击图标可切换）。",
	"Resize Scrollback": "调整回滚缓冲区",
	"How a settled terminal resize refreshes transcript rows retained in terminal scrollback":
		"终端尺寸调整完成后如何刷新保留在回滚缓冲区中的会话记录行",
	Append: "追加",
	"Replay the transcript at the new width below retained history": "在保留的历史记录下方以新宽度重放会话记录",
	Rebuild: "重建",
	"Erase all terminal scrollback, then replay one current-width transcript":
		"清除所有终端回滚缓冲区，然后重放一份当前宽度的会话记录",
	Preserve: "保留",
	"Repaint only the viewport and keep history wrapped at its old width": "仅重绘视口，历史记录保持旧宽度换行",
	"Complete Scrollback": "完整回滚缓冲区",
	"Send transcript rows pushed off screen by a growing HUD or dialog straight to scrollback; when it shrinks, blank rows sit between the transcript and the input until new output fills them":
		"将因 HUD 或对话框变大而被挤出屏幕的会话记录行直接送入回滚缓冲区；当它们缩小时，会话记录与输入框之间会出现空行，直到新输出填满。",
	"Emit OSC 9;4 indeterminate progress while the agent or context maintenance is running (always on in Tern)":
		"代理或上下文维护运行时发出 OSC 9;4 不确定进度（Tern 中始终开启）",
	"Program Status (OSC 7501)": "程序状态（OSC 7501）",
	"Report whether the agent is working, waiting on you, done, or failed over OSC 7501, for terminal tab indicators and agent inboxes":
		"通过 OSC 7501 报告代理正在工作、等待你、已完成或失败，用于终端标签页指示和代理消息收件箱",
	"Colorful Markdown": "彩色 Markdown",
	"Color headings by level, bold and italic text, inline code, and table headers from the theme's ANSI palette. Off uses one heading color and plain bold/italic.":
		"使用主题 ANSI 调色板为不同级别标题、粗斜体文本、行内代码和表头着色。关闭时使用单一标题颜色和普通粗体/斜体。",
	"Render SVG Figures": "渲染 SVG 图形",
	"Invite the agent to draw diagrams and charts as SVG, rendered inline as images on terminals that show graphics":
		"邀请代理用 SVG 绘制图表和曲线，在支持图形的终端中内联显示为图像",
	"Auto-Graph Tables": "自动绘制表格图表",
	"Draw a chart under numeric tables in the agent's answers, in your theme's colors, on terminals that show graphics":
		"在支持图形的终端中，用主题颜色在代理回答的数值表格下方绘制图表",
	"Smart when the judge role resolves to a native TypeSafe jev model, else Always":
		"当 judge 角色解析为原生 TypeSafe jev 模型时使用智能模式，否则使用“总是”",
	"The judge model refines each chart: kind, columns, row names and grouping, scales, which way is better, and its title":
		"由 judge 模型细化每个图表：类型、列、行名称和分组、刻度、优劣方向及标题",
	"Chart every table that reads as numeric, using the built-in best guess":
		"对所有看起来是数值的表格使用内置最佳猜测绘制图表",
	"Leave tables as tables": "表格保持为表格",
	"Agent Reactions": "代理表情反应",
	"Invite the agent to react to your message with an emoji badge on its bubble":
		"邀请代理用表情徽章在自己的气泡上回应你的消息",
	"Celebrate unscheduled Codex weekly usage resets and newly banked saved resets with a top-third fireworks overlay that remains until Esc":
		"在 Codex 每周用量非计划重置或新存入重置次数时，用屏幕上方三分之一的烟花动画庆祝，按 Esc 关闭",
	"Show the agent run state in the terminal title's separator — an animated spinner while working (a static ':' under WSL), '>' when it's your turn, '!' when the agent is waiting on you":
		"在终端标题分隔符中显示代理运行状态——工作时为动画加载符（WSL 下为静态 ':'），轮到你时为 '>'，代理等待你时为 '!'",
	"Terminal Title Spinner": "终端标题加载动画",
	"Glyph set for the working-state spinner in the terminal title — braille sweep, filling moon, single-dot cycle, or ASCII-safe line":
		"终端标题中工作状态加载动画使用的字符集——盲文扫描、月相填充、单点循环或 ASCII 安全线条",
	Braille: "盲文",
	"Classic ⠋⠙⠹ sweep (default)": "经典 ⠋⠙⠹ 扫描（默认）",
	Pulse: "脉冲",
	"Moon filling ○◑● then emptying": "月相填充 ○◑● 再变空",
	Dots: "点",
	"Single braille dots cycling": "单个盲文点循环",
	Line: "线条",
	"ASCII - \\ | / for fonts without braille coverage": "ASCII - \\ | /，适用于没有盲文字形的字体",
	"Spinner Interval (ms)": "加载动画间隔（毫秒）",
	"Milliseconds between frames of every spinner, the terminal title included; 0 shows static glyphs. Unset follows Motion":
		"每个加载动画（包括终端标题）相邻帧之间的毫秒数；0 显示静态图形。未设置时跟随“动效”设置",
	Static: "静态",
	"No animation": "无动画",
	"12.5 frames/s": "12.5 帧/秒",
	"4 frames/s": "4 帧/秒",
	"1 frame/s": "1 帧/秒",
	"Max Frames Per Second": "最大帧率",
	"Ceiling on how often the TUI repaints, streaming text included. Keystroke echo keeps 30 fps, so the pane you type in stays responsive":
		"TUI 重绘频率上限（包括流式文本）。按键回显保持 30 fps，因此你输入的窗格始终响应灵敏",
	"Quiet, for many panes": "安静模式，适合多个窗格",
	Minimum: "最低",
	"Mouse Click-to-Focus": "鼠标点击聚焦",
	"Capture mouse clicks in the main session so live subagent cards and HUD rows focus on click, with a hover highlight on the target, and clicks on extension-owned links reach their extension (the link-hint key picks them without the mouse). Native text selection becomes Shift+drag while on, and mouse capture stops wheel scrolling — the terminal reports wheel ticks to omp instead — so scroll with the terminal's keyboard scrollback keys, or turn this off":
		"在主会话中捕获鼠标点击，使实时的子代理卡片和 HUD 行可以点击聚焦，并在悬停时高亮目标，扩展拥有的链接点击会传递给扩展（也可用链接提示键无需鼠标选择）。开启时原生文本选择变为 Shift+拖拽，且鼠标捕获会阻止滚轮滚动——终端改为将滚轮事件报告给 omp——因此请用终端的键盘回滚键滚动，或关闭此选项",
	"Animation style for working/loading messages; off under reduced or no Motion":
		"工作/加载消息的动画样式；在“减弱”或“无动效”时关闭",
	Motion: "动效",
	"One switch over spinners, shimmer, and decorative blink/fade. Streaming text is unaffected (see Max Frames Per Second). A spinner interval you set still wins":
		"统一控制加载动画、微光和装饰性闪烁/淡出。流式文本不受影响（见“最大帧率”）。你手动设置的加载动画间隔仍然优先",
	"Every animation at its own setting (default)": "每种动画使用各自的设置（默认）",
	Reduced: "减弱",
	"Spinners at 250 ms, no shimmer, no blink/fade": "加载动画 250 毫秒，无微光，无闪烁/淡出",
	"Static spinners and title, no shimmer, no blink/fade": "静态加载动画和标题，无微光，无闪烁/淡出",
	"Pinned Agents": "固定代理",
	"Pinned live-agent jump list above the editor (off hides it; collapsed shows a few rows with an expander; full lists all)":
		"编辑器上方的固定实时代理跳转列表（关闭则隐藏；折叠时显示几行并提供展开；完整显示全部）",
	"Hide the pinned jump list": "隐藏固定跳转列表",
	Collapsed: "折叠",
	"Show a few rows with an expander": "显示几行并提供展开按钮",
	"Always list every live agent": "始终列出所有实时代理",
	"Subagent Live Preview": "子代理实时预览",
	"Show each pinned subagent's current (or most recent) tool call beneath its row":
		"在每个固定子代理的行下方显示其当前（或最近）的工具调用",
	"Reveal assistant text and streamed tool input smoothly while chunks arrive (Tern types assistant text out itself)":
		"在内容块到达时平滑显示助手文本和流式工具输入（Tern 会自行逐字输出助手文本）",
	"Hide Tool Activity": "隐藏工具活动",
	"Hide model-initiated tool calls and results from the transcript": "在会话记录中隐藏模型发起的工具调用和结果",
	"Show Turn Time": "显示轮次耗时",
	"Show the total prompt-to-yield time (including tool calls) on assistant message usage rows":
		"在助手消息用量行上显示从提示到让出的总耗时（包括工具调用）",
	"Show a divider after an assistant turn whose request lost (missed) the prompt cache":
		"在请求未命中提示词缓存的助手轮次之后显示分隔线",
	"Shell Visualization": "Shell 可视化",
	"Show bash commands as an interactive execution visualization instead of plain shell commands":
		"将 bash 命令显示为交互式执行可视化，而不是普通 shell 命令",
	"Advisor Collapsed Lines": "顾问折叠行数",
	"Maximum note lines a collapsed advisor card shows below its header (0 keeps the full preview; expand with the tool-output toggle)":
		"折叠的顾问卡片在标题下方最多显示的备注行数（0 保留完整预览；用工具输出开关展开）",
	"/btw Steering Inject": "/btw 引导注入",
	"When you ask /btw for a steering prompt, it drafts one in <inject> tags, highlighted in the answer; Alt+I (app.btw.inject) sends it to the main session":
		"当你用 /btw 请求引导提示词时，它会在 <inject> 标签中起草一份并在回答中高亮；按 Alt+I（app.btw.inject）将其发送到主会话",
	"Vim Editing Mode": "Vim 编辑模式",
	"Modal prompt editing. Esc leaves Insert mode; Normal mode has hjkl, 0, $, ^, w, b, e, gg, G, counts, x/D/C, dd/yy, p and u; operators take motions or text objects (diw, ca(, dap); v/V start a Visual selection that y copies and d deletes":
		"模态提示词编辑。Esc 退出插入模式；普通模式支持 hjkl、0、$、^、w、b、e、gg、G、计数、x/D/C、dd/yy、p 和 u；操作符可接动作或文本对象（diw、ca(、dap）；v/V 开始可视选择，y 复制、d 删除",
	"Vim Mode Indicator": "Vim 模式指示器",
	"How the current Vim mode appears in the status line": "当前 Vim 模式在状态栏中的显示方式",
	Text: "文本",
	"Full mode name — NORMAL, INSERT, VISUAL, V-LINE, REPLACE": "完整模式名——NORMAL、INSERT、VISUAL、V-LINE、REPLACE",
	Icon: "图标",
	"Single compact glyph per mode": "每种模式使用单个紧凑字形",
	"Do not show the mode in the status line": "不在状态栏中显示模式",
	"Loop Condition Timeout (ms)": "循环条件超时（毫秒）",
	"Max wait for a `/loop --while` / `--until` condition command before treating it as broken and stopping the loop. Set to 0 to wait indefinitely":
		"等待 `/loop --while` / `--until` 条件命令的最长时间，超时则视为失效并停止循环。设为 0 表示无限等待",
	Unlimited: "无限制",
	"Recall Cleared Drafts": "恢复已清除草稿",
	"Keep drafts cleared with Ctrl+C in local Up/Down history until exit; disabling affects future clears":
		"将用 Ctrl+C 清除的草稿保留在本地上/下方向键历史中直到退出；禁用只影响之后的清除",
	"What pressing Esc twice with an empty editor does: open the transcript rewind selector, open the session tree, or nothing":
		"编辑器为空时连按两次 Esc 的行为：打开会话记录回退选择器、打开会话树，或什么都不做",
	"Bare Exit on Empty Session": "空会话直接退出",
	"Submitting exactly `exit`, `quit`, or `q` (any case) before the first message quits instead of prompting the model":
		"在第一条消息之前精确提交 `exit`、`quit` 或 `q`（不区分大小写）时直接退出，而不是向模型提问",
	"Bare Slash Commands": "裸斜杠命令",
	"Submitting exactly a command name without the leading `/` (e.g. `model`, `compact`) runs that slash command; once the session has messages, press Enter twice to confirm":
		"精确提交不带 `/` 的命令名（如 `model`、`compact`）会执行该斜杠命令；会话已有消息时需按两次 Enter 确认",
	"Typo Detection (macOS)": "拼写错误检测（macOS）",
	"Mark misspelled prompt words with the active macOS dictionaries": "使用当前 macOS 词典标记提示词中拼错的单词",
	"Word Autocomplete": "单词自动补全",
	"Show predicted word completions as inline hints: Tab accepts with a space, Right without":
		"以内联提示显示预测的单词补全：Tab 接受并加空格，右方向键接受不加空格",
	"No word completion": "不做单词补全",
	"N-gram (nothing to download)": "N-gram（无需下载）",
	"N-gram": "N-gram",
	"Learns your vocabulary from prompt history": "从提示词历史中学习你的词汇",
	SmolLM: "SmolLM",
	"Small on-device language model blended with N-gram (downloads weights on first use)":
		"与 N-gram 混合的小型本地语言模型（首次使用时下载权重）",
	"Composer Predictions": "输入框预测",
	"After a completed turn, ask the active model to predict your next message and show it as ghost text in the empty composer; Tab or Right inserts it without sending. Extra usage: every completed turn sends one more billed request over the whole conversation (counted in /stats)":
		"一轮完成后，让当前模型预测你的下一条消息，并作为幽灵文本显示在空输入框中；Tab 或右方向键插入但不发送。额外用量：每个完成的轮次都会针对整段对话多发一次计费请求（计入 /stats）",
	"Prediction Alternatives": "预测候选",
	"Ask for up to four distinct predictions instead of one, most likely first. The ghost text shows the first one your draft matches; after inserting one, press Tab again to pick another. The same single request returns a few more output tokens":
		"请求最多四个不同预测而不是一个，最可能的在前。幽灵文本显示与你的草稿匹配的第一个；插入一个后再次按 Tab 可选择其他。同一次请求会多返回少量输出令牌",
	"Autocorrect (macOS)": "自动纠正（macOS）",
	"Apply confident macOS spelling corrections after completed words": "单词完成后应用 macOS 有把握的拼写纠正",
	"Update Channel": "更新通道",
	"Update channel used by omp update and the startup update check": "omp update 和启动时更新检查使用的更新通道",
	Stable: "稳定版",
	Canary: "金丝雀版",
	"Install omp updates in the background on startup; the next launch runs the new version":
		"启动时在后台安装 omp 更新；下次启动运行新版本",
	"Enable hidden notices for standalone ultrathink, chillax, orchestrate, workflowz, jevify keywords":
		"为单独出现的 ultrathink、chillax、orchestrate、workflowz、jevify 关键词启用隐藏提示",
	"Chillax Keyword": "Chillax 关键词",
	"Let standalone chillax drop thinking to the model's lowest effort (models with per-message effort, even mid-turn) and append its hidden notice":
		"让单独出现的 chillax 将思考降到模型最低强度（支持逐条消息强度的模型，即使轮次中途）并附加隐藏提示",
	"Jevify Keyword": "Jevify 关键词",
	"Let standalone jevify append its hidden bulk-judge classification notice":
		"让单独出现的 jevify 附加其隐藏的批量 judge 分类提示",
	"Submit an ask form's current values (your preselected answers) after this many seconds (0 disables). Also bounds cfg:// approval prompts; an unanswered approval denies the write instead of auto-submitting":
		"经过这么多秒后提交 ask 表单的当前值（你预选的答案）（0 禁用）。同时也限制 cfg:// 审批提示的等待时间；未回答的审批会拒绝写入而不是自动提交",
	"Resume Worktree Scope": "恢复工作树范围",
	"Choose whether the resume picker's current folder includes sessions from other repository worktrees":
		"选择恢复选择器的当前文件夹是否包含其他仓库工作树中的会话",
	"This Directory": "此目录",
	"Only sessions saved for this directory": "仅此目录保存的会话",
	"Repository Worktrees": "仓库工作树",
	"Also include sessions from sibling worktrees": "同时包含同级工作树中的会话",
	"Prevent the system sleeping while the agent is running a turn; an idle session, including one waiting on background jobs, does not hold it. Each level is cumulative — it adds the flags of all lower levels.":
		"代理运行一轮时阻止系统休眠；空闲会话（包括等待后台任务的会话）不会保持阻止。每个级别都是累积的——会叠加所有较低级别的标志。",
	"Keep the system awake while the agent is running a turn (macOS `caffeinate -i`)":
		"代理运行一轮时保持系统唤醒（macOS `caffeinate -i`）",
	"Also keep the display from idle-sleeping (macOS `caffeinate -i -d`)":
		"同时防止显示器空闲休眠（macOS `caffeinate -i -d`）",
	"Also block all system sleep on AC and declare the user active (macOS `caffeinate -i -d -s -u`)":
		"同时在外接电源时阻止所有系统休眠并声明用户活跃（macOS `caffeinate -i -d -s -u`）",
	"Prewalk planning model": "预执行规划模型",
	"Model or role (default '@default') that /prewalk restart returns to for planning.":
		"/prewalk restart 返回用于规划的模型或角色（默认 '@default'）。",
	"Prewalk target": "预执行目标",
	"Model or role (default '@smol') that prewalk hands off to at the first edit/write: /prewalk, /prewalk restart, Enable Prewalk, and --prewalk. Auto-prewalk uses its own target.":
		"预执行在第一次编辑/写入时交接到的模型或角色（默认 '@smol'）：适用于 /prewalk、/prewalk restart、“启用预执行”和 --prewalk。自动预执行使用自己的目标。",
	"Auto Prewalk": "自动预执行",
	"Ask the native judge resolved through the 'judge' role whether each new top-level user task front-loads its hard reasoning. Needs a native judge; without one nothing is classified. Independent of Enable Prewalk.":
		"让通过 'judge' 角色解析的原生 judge 判断每个新的顶层用户任务是否会把困难推理前置。需要原生 judge；没有则不做分类。与“启用预执行”相互独立。",
	"Never classify prompts for prewalk": "从不为预执行分类提示词",
	Suggest: "建议",
	"Classify each task and report the decision without arming prewalk": "对每个任务分类并报告结果，但不启用预执行",
	"For confidently front-loaded tasks, arm a handoff from the active model to the auto target; the next task starts back on the planning model":
		"对于有把握的前置型任务，准备从当前模型交接给自动目标；下一个任务回到规划模型开始",
	"Auto-prewalk target": "自动预执行目标",
	"Model or role (default '@smol') auto-prewalk hands off to at the first edit/write.":
		"自动预执行在第一次编辑/写入时交接到的模型或角色（默认 '@smol'）。",
	'Maximum concurrent LLM requests per provider id (for example "openai" or "anthropic"), shared across local OMP processes with this config root. Omitted providers are unlimited.':
		'每个供应商 id 的最大并发 LLM 请求数（例如 "openai" 或 "anthropic"），在使用此配置根目录的本地 OMP 进程间共享。未列出的供应商不限制。',
	"Expand Thinking Blocks": "展开思考块",
	"Keep finished thinking blocks expanded instead of collapsing them when the turn ends":
		"轮次结束时保持已完成的思考块展开，而不是折叠",
	"Tool names, or xd:// device names of write dispatches (for example mcp__peers_wait), that may repeat consecutively without triggering the cross-turn loop guard":
		"允许连续重复而不触发跨轮循环保护的工具名，或写入调度的 xd:// 设备名（例如 mcp__peers_wait）",
	"Encourage Edits": "鼓励编辑",
	"Require the edit tool for file edits and forbid sed/perl/python edits":
		"文件编辑必须使用 edit 工具，禁止 sed/perl/python 编辑",
	"List Skills in Prompt": "在提示词中列出技能",
	"List available skills in the system prompt; disable to save context and toggle per-session with /skillful":
		"在系统提示词中列出可用技能；禁用可节省上下文，并用 /skillful 按会话切换",
	Find: "语义搜索",
	"Find (semantic grep)": "语义搜索（find）",
	Ratchet: "自动迭代优化",
	"0 steps": "0 步",
	"1 step": "1 步",
	"2 steps": "2 步",
	"3 steps": "3 步",
	"4 steps": "4 步",
	"5 steps": "5 步",
	"1 note": "1 条备注",
	"2 notes": "2 条备注",
	"3 notes": "3 条备注",
	"4 notes": "4 条备注",
	"5 notes": "5 条备注",
	"1 operation": "1 个操作",
	"2 operations": "2 个操作",
	"3 operations": "3 个操作",
	"4 operations": "4 个操作",
	"80 ms": "80 毫秒",
	"250 ms": "250 毫秒",
	"1 s": "1 秒",
	"1 KB": "1 KB",
	"2.5 KB": "2.5 KB",
	"5 KB": "5 KB",
	"10 KB": "10 KB",
	"20 KB": "20 KB",
	"30 KB": "30 KB",
	"50 KB": "50 KB",
	"75 KB": "75 KB",
	"100 KB": "100 KB",
	"200 KB": "200 KB",
	"500 KB": "500 KB",
	"1 MB": "1 MB",
	"0 KB": "0 KB",
	"4 MB": "4 MB",
	"16 MB": "16 MB",
	"64 MB": "64 MB",
	"256 MB": "256 MB",
	"1 GB": "1 GB",
};
