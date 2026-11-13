/**
 * Chinese labels and descriptions for settings added after the upstream
 * dictionary snapshot (part 3: context, memory, tools, subagents, services).
 */
export const settingsZhCNLateContext: Readonly<Record<string, string>> = {
	"Extra Context Files": "附加上下文文件",
	'Extra instruction filenames loaded beside AGENTS.md. Use a JSON list of names, not paths, e.g. ["AGENTS.local.md"]; [] disables extras. Start a new session to load them.':
		'在 AGENTS.md 旁边额外加载的指令文件名。使用 JSON 名称列表而不是路径，例如 ["AGENTS.local.md"]；[] 表示禁用额外文件。需要开始新会话才会加载。',
	"Promote to the model's contextPromotionTarget on context overflow instead of compacting. Retry fallback switches are controlled by Retry Model Fallback":
		"上下文溢出时提升到模型的 contextPromotionTarget，而不是压缩。重试回退切换由“重试时模型回退”控制",
	"Use larger context windows where supported; may incur premium pricing. Off keeps default or standard-pricing windows":
		"在支持时使用更大的上下文窗口；可能产生溢价。关闭则保持默认或标准计费窗口",
	"Notes-backed context windows (experimental)": "基于笔记的上下文窗口（实验性）",
	"Keep persistent notes and searchable raw history across context windows.":
		"跨上下文窗口保留持久笔记和可搜索的原始历史。",
	"Check thresholds at safe mid-turn tool-loop boundaries before the next provider request; subagents always check, since their whole assignment is one turn":
		"在轮次中途安全的工具循环边界、下次供应商请求之前检查阈值；子代理始终检查，因为它们的整个任务就是一个轮次",
	"Server compaction": "服务器压缩",
	"Use provider-native server compaction (OpenAI Responses compact, Anthropic compaction beta, including on Bedrock) when the active route supports it":
		"当前路由支持时使用供应商原生服务器压缩（OpenAI Responses compact、Anthropic 压缩 beta，包括 Bedrock）",
	"1/8 of a 200K window": "200K 窗口的 1/8",
	"1/4 of a 200K window": "200K 窗口的 1/4",
	"1/2 of a 200K window": "200K 窗口的 1/2",
	"3/4 of a 200K window": "200K 窗口的 3/4",
	"Seconds to wait while idle before compacting; with a 1-hour prompt cache, compaction instead runs just before the cache expires":
		"空闲多少秒后开始压缩；使用 1 小时提示词缓存时，压缩改在缓存过期前进行",
	"AGENTS.md": "AGENTS.md",
	"Experimental: render large tool results, the newest one included, as dense PNG image(s) instead of text (vision models only). Saves tokens on accumulated search and command output; read results stay text unless the model is known to edit exactly from images.":
		"实验性：将大型工具结果（包括最新的一个）渲染为高密度 PNG 图像而不是文本（仅视觉模型）。可节省累积搜索和命令输出的令牌；读取结果保持文本，除非已知模型能精确地基于图像编辑。",
	"Controls how tools are exposed to the model. Auto uses provider-native tool calls unless the selected model is marked as not supporting them, then falls back to the GLM owned dialect. Native forces provider-native tools; the other values force the named owned dialect.":
		"控制向模型暴露工具的方式。自动使用供应商原生工具调用，除非所选模型被标记为不支持，此时回退到 GLM 自有方言。原生强制使用供应商原生工具；其他值强制使用指定自有方言。",
	GLM: "GLM",
	Hermes: "Hermes",
	Kimi: "Kimi",
	XML: "XML",
	DeepSeek: "DeepSeek",
	Harmony: "Harmony",
	Qwen3: "Qwen3",
	Gemini: "Gemini",
	Gemma: "Gemma",
	MiniMax: "MiniMax",
	"Off, local summary pipeline, Mnemopi SQLite, Hindsight remote memory, or Sharpshooter":
		"关闭、本地摘要流水线、Mnemopi SQLite、Hindsight 远程记忆，或 Sharpshooter",
	Sharpshooter: "Sharpshooter",
	"Friction-gated project decision files (architecture/product/style), consolidated in the background":
		"按摩擦阈值触发的项目决策文件（架构/产品/风格），在后台整合",
	"Sharpshooter Model": "Sharpshooter 模型",
	"Model selector for extraction/consolidation, empty = smol role": "用于提取/整合的模型选择器，留空 = smol 角色",
	"Optional SQLite DB path; a leading ~ is the home directory. Defaults to the agent memories directory.":
		"可选的 SQLite 数据库路径；开头的 ~ 表示主目录。默认使用代理记忆目录。",
	"Fuse recall with graph, fact, vector and temporal voices so linked memories surface without a keyword match":
		"将图、事实、向量和时间多种召回方式融合，使关联记忆无需关键词匹配即可浮现",
	"Cache recall results for repeated and similar queries with identical options; any memory write clears it":
		"对相同选项下重复和相似的查询缓存召回结果；任何记忆写入都会清除缓存",
	"Hindsight Global Scope": "Hindsight 全局作用域",
	"Let retain and learn take scope: global, which stores a memory without the project tag so every project recalls it. Needs global or per-project-tagged scoping":
		"允许 retain 和 learn 使用 scope: global，不记录项目标签，使所有项目都能召回。需要 global 或 per-project-tagged 作用域",
	"Judged Rules": "judge 规则",
	"Ask the judge model role each `question` rule about completed replies, reasoning, and tool calls; a yes injects the rule as a warning":
		"由 judge 模型角色对已完成的回复、推理和工具调用逐条判断 `question` 规则；判断为是时以警告形式注入规则",
	"Judge only when the judge role resolves to a native TypeSafe jev model":
		"仅当 judge 角色解析为原生 TypeSafe jev 模型时进行判断",
	"Always judge, whichever model the judge role resolves to": "无论 judge 角色解析为哪个模型都进行判断",
	"Never judge; question rules stay inactive": "从不判断；question 规则保持不生效",
	"Select the edit tool variant (replace, patch, hashline, or apply_patch); none removes the edit tool and keeps bash enabled":
		"选择 edit 工具变体（replace、patch、hashline 或 apply_patch）；none 会移除 edit 工具并保留 bash",
	"Recover Inline Edit Payloads": "恢复内联编辑内容",
	"Execute edit payloads the model emits as plain text by converting them into edit tool calls":
		"将模型以纯文本发出的编辑内容转换为 edit 工具调用执行",
	"Record Parse Regressions": "记录解析回归",
	"Append full before/after source when an edit introduces an AST parse failure":
		"编辑导致 AST 解析失败时附加完整的修改前后源码",
	"Auto-Repair Parse Regressions": "自动修复解析回归",
	"When an edit breaks a file's AST parse, ask the smol model to fix the broken region (validated by re-parse; falls back to a warning)":
		"编辑破坏文件 AST 解析时，让 smol 模型修复损坏区域（通过重新解析验证；失败则回退为警告）",
	"2.5 KB": "2.5 KB",
	"Artifact File Cap (MB)": "产物文件上限（MB）",
	"Maximum size of the artifact file saved for streaming tool output (bash, python, js eval). Larger output keeps its beginning (up to 3 MB) and its most recent remainder, with a truncation notice between them. 0 = unlimited.":
		"流式工具输出（bash、python、js eval）保存的产物文件最大大小。更大的输出保留开头（最多 3 MB）和最近的剩余部分，中间有截断提示。0 = 不限制。",
	"Save the complete output": "保存完整输出",
	"Default approval behavior for tool calls. 'Always ask' auto-approves read-only tools only. 'Ask and remember' also asks before file reads, and can remember a file or folder. 'Write' auto-approves read and workspace-write tools. 'Yolo' auto-approves all tiers; user policy may still prompt or block.":
		"工具调用的默认审批行为。“总是询问”仅自动批准只读工具。“询问并记住”在读取文件前也会询问，并可记住文件或文件夹。“写入”自动批准只读和写入工具。“Yolo”自动批准所有层级；用户策略仍可能要求确认或阻止。",
	"Ask and remember": "询问并记住",
	"Ask before reading or writing a file, with answers that remember the file or its folder for this session or every session; require confirmation for exec tools.":
		"在读取或写入文件前询问，答复可记住该文件或其文件夹（仅本次会话或所有会话）；执行工具需要确认。",
	"Restricted Folders": "受限文件夹",
	'Folders where every read, write, edit, search, or command needs an explicit approval, whatever the approval mode or a remembered grant. The folder and everything under it is restricted; commands are matched by the directory they run in. A JSON list of paths, e.g. ["~/secrets"].':
		'在这些文件夹中，无论审批模式或已记住的授权如何，每次读取、写入、编辑、搜索或命令都需要显式批准。文件夹及其下所有内容都受限制；命令按其运行目录匹配。路径的 JSON 列表，例如 ["~/secrets"]。',
	"Find Verification Model": "Find 验证模型",
	"Model selector (e.g. openrouter/liquid/d1-ultra) tried first for find's passage verification, before the judge role; filename and sketch ranking stay on the judge role. Unset: the judge role verifies too":
		"find 段落验证优先尝试的模型选择器（例如 openrouter/liquid/d1-ultra），先于 judge 角色；文件名和草图排序仍由 judge 角色负责。未设置：也由 judge 角色验证",
	"Find (semantic grep)": "Find（语义搜索）",
	"Enable the find tool: natural-language search for files and line ranges, judged by the judge model role. Auto enables it only when the judge role resolves to a native TypeSafe jev model":
		"启用 find 工具：按自然语言搜索文件和行范围，由 judge 模型角色判定。自动仅在 judge 角色解析为原生 TypeSafe jev 模型时启用",
	"Enable when the judge role resolves to a native TypeSafe jev model":
		"当 judge 角色解析为原生 TypeSafe jev 模型时启用",
	"Always enable, whichever model the judge role resolves to": "始终启用，无论 judge 角色解析为哪个模型",
	"Disable the find tool": "禁用 find 工具",
	"Enable named bash services and proc:// supervision for shared long-running project processes":
		"为共享的长期项目进程启用命名 bash 服务和 proc:// 监管",
	"Enable the scriptable host-desktop eval prelude (screenshots, input, accessibility)":
		"启用可脚本化的宿主机桌面 eval 预置内容（截图、输入、辅助功能）",
	"Enable the ratchet eval/hillclimb prelude; /ratchet turns it on for the current session":
		"启用 ratchet eval/爬山优化预置内容；/ratchet 可为当前会话开启",
	Archive: "归档",
	"Enable the read-only archive eval prelude: prompt history, recent projects, past sessions and recaps":
		"启用只读归档 eval 预置内容：提示词历史、最近项目、过去会话和回顾",
	"Active window's display (active), all displays (all), or a native display id":
		"活动窗口所在显示器（active）、所有显示器（all），或原生显示器 id",
	"Maximum screenshot width in pixels": "截图最大宽度（像素）",
	"Maximum screenshot height in pixels": "截图最大高度（像素）",
	"Computer Background Fallback": "电脑操作后台回退",
	"What window input does when its background route is unavailable: rerun it in takeover and return focus to your app (macOS; elsewhere plain takeover), or refuse, which also keeps the agent from taking the foreground or opening macOS menus itself":
		"窗口输入的后台路径不可用时如何处理：在接管模式下重做该次调用后把焦点还给你的应用（macOS；其他平台为普通接管），或拒绝，同时禁止代理自行抢占前台或打开 macOS 菜单",
	Takeover: "接管",
	"Briefly bring the target forward for that one call, then return focus to your app (on macOS even if you kept typing)":
		"仅这一次调用短暂将目标窗口置前，然后把焦点还给你的应用（macOS 上即使你仍在打字）",
	Refuse: "拒绝",
	"Fail the call; nothing takes over, and the agent's own takeover, raise, activating open, desktop input and macOS menus (context menus, popup and menu buttons; they take your keyboard while open) are refused too":
		"让该次调用失败；不会接管任何窗口，代理自身的接管、置前、激活式打开、桌面输入和 macOS 菜单（上下文菜单、弹出菜单和菜单按钮；打开时占用键盘）也会被拒绝",
	"Image Question Timeout": "图像提问超时",
	"Per-request timeout for the vision-model call behind read's ?q= image questions, in milliseconds. A stalled provider fails fast with a timeout error instead of blocking until manual abort. Set to 0 to disable the timeout.":
		"read 的 ?q= 图像提问所调用视觉模型的单次请求超时（毫秒）。卡住的供应商会以超时错误快速失败，而不是阻塞到手动中止。设为 0 禁用超时。",
	Out: "即时回复",
	"Let the agent reply mid-task by writing to out://, shown like a response without ending its turn. Unset: on in the interactive TUI, off in print, RPC, and ACP":
		"允许代理在任务中途写入 out:// 进行回复，显示为回复但不结束当前轮次。未设置：交互式 TUI 中开启，print、RPC 和 ACP 中关闭",
	"Experimental Speculative Execution": "实验性推测执行",
	"Enable the discard-safe first slice: validated local reads through direct read calls and nested eval. Network requests, provider completions, and live filesystem writes are not part of this baseline.":
		"启用可安全丢弃的第一批：通过直接 read 调用和嵌套 eval 执行的已校验本地读取。网络请求、供应商补全和实时文件系统写入不在该范围内。",
	"Speculative Execution Concurrency": "推测执行并发",
	"Maximum number of validated local reads allowed to run before normal dispatch.":
		"正常分发前允许运行的已校验本地读取最大数量。",
	"Wake Print Mode on Job Results": "后台任务结果唤醒打印模式",
	"In print mode (-p, --mode json), keep running after the last prompt while this run's background jobs are active, and start another turn in the same session with each job's result; exits once no job or result is pending. Off: print mode exits after its prompts and cancels running jobs":
		"在打印模式（-p、--mode json）下，最后一条提示之后只要本次运行的后台任务仍在进行就继续运行，并以每个任务结果在同一会话中开始新一轮；没有任务或结果待处理时退出。关闭：打印模式在提示完成后退出并取消运行中的任务",
	"Live Job Widgets": "后台任务实时组件",
	"Draw a live widget for each running background job (charts, bars, status grids derived from its output) in the wait card, the jobs pill and the jobs sheet, and caption long shell commands with one line on what they do. The `widget` model role (default: `smol`) writes one spec and at most one caption per job; updates need no further model calls":
		"为每个运行中的后台任务在等待卡片、任务胶囊和任务面板中绘制实时组件（从输出衍生的图表、条形图、状态网格），并为长 shell 命令添加一行说明。`widget` 模型角色（默认 `smol`）为每个任务写一份规格和最多一条说明；更新无需再次调用模型",
	"Mount rarely-used (discoverable) tools under xd:// device URLs driven via read/write instead of shipping their schemas on every request. Sessions whose explicit tool list grants read but omits write mount devices through a device-only write transport (only local:// scratch stays writable besides devices). Disable to expose every enabled tool top-level.":
		"将少用的（可发现）工具挂载到 xd:// 设备 URL 下，通过 read/write 驱动，而不是在每次请求中发送其 schema。显式工具列表授予 read 但未授予 write 的会话，通过仅限设备的写入通道挂载设备（除设备外只有 local:// 暂存区可写）。禁用则将所有已启用工具暴露在顶层。",
	"xd:// Mount Notices": "xd:// 挂载提示",
	"Show an `xd://: mounted …` notice when MCP or extension tools are mounted or unmounted. The model still learns of the change with its next prompt.":
		"MCP 或扩展工具挂载或卸载时显示 `xd://: mounted …` 提示。模型仍会在下一条提示时得知该变化。",
	"Language-server integration: the lsp tool, diagnostics on write/edit, and format on write (--no-lsp disables for the run)":
		"语言服务器集成：lsp 工具、写入/编辑时诊断，以及写入时格式化（--no-lsp 会在本次运行中禁用）",
	"Shared Language Servers": "共享语言服务器",
	"Start language servers through the per-project daemon broker. Each connection gets its own server. While another omp instance in the project is running, a released server stays warm and the next connection reuses it instead of cold-starting (falls back to private servers when unavailable)":
		"通过按项目的守护进程代理启动语言服务器。每个连接有自己的服务器。项目中还有其他 omp 实例运行时，释放的服务器保持热状态，下次连接复用它而不是冷启动（不可用时回退到私有服务器）",
	"Request Timeout": "请求超时",
	"Seconds to wait for a language server's diagnostics, hover and other answers when the agent sets no timeout; late post-edit diagnostics wait at least this long. Raise it for servers that are slow on a cold start. The lsp tool's timeout argument can still raise or lower it per call":
		"代理未设置超时时，等待语言服务器诊断、悬停等响应的秒数；延迟的编辑后诊断至少等待这么久。冷启动较慢的服务器可调高。lsp 工具的 timeout 参数仍可按调用提高或降低",
	"Allow Compound Commands": "允许复合命令",
	"Evaluate literal && chains per command; unmatched commands use normal bash approval policy and mode":
		"逐条命令评估字面量 && 链；未匹配的命令使用普通 bash 审批策略和模式",
	"Git Guard": "Git 保护",
	"Refuse git commands that discard or move shared work in a repository's main checkout: stash, reset --hard or to another commit, and checkout/switch/restore outside a merge or rebase conflict. In a linked worktree they run, saving uncommitted changes they discard first":
		"拒绝会在仓库主检出中丢弃或移动共享工作的 git 命令：stash、reset --hard 或重置到其他提交，以及在合并或变基冲突之外执行 checkout/switch/restore。在关联工作树中这些命令会运行，但会先保存它们要丢弃的未提交更改",
	"Eval Environment Provisioning": "Eval 环境准备",
	"Automatically create the managed JavaScript eval package environment on first install":
		"首次安装时自动创建托管的 JavaScript eval 包环境",
	"Eval-Defined Tools": "Eval 定义的工具",
	"Let eval cells define tools (@tool in Python, tool(fn) in JS) that task, agent(), and workpool() subagents can call":
		"允许 eval 单元定义工具（Python 中的 @tool，JS 中的 tool(fn)），供 task、agent() 和 workpool() 子代理调用",
	"Fresh Workpool Agents": "全新 Workpool 代理",
	"Spawn a new subagent for every workpool item instead of reusing workers or batching queued items":
		"为每个 workpool 项派生新子代理，而不是复用工作线程或批量处理排队项",
	"Allow Isolated Subagents": "允许隔离子代理",
	"Allow per-task isolation with `isolated: true`; tasks without it run in the shared checkout":
		"允许通过 `isolated: true` 按任务隔离；未设置的任务在共享检出中运行",
	"Isolation Backend": "隔离后端",
	"Backend used for subagent isolation and worktree cloning": "用于子代理隔离和工作树克隆的后端",
	"Isolated subagents use ovnfs checkouts when ovnfs is found; otherwise (and for worktrees) the PAL picks the best available backend":
		"找到 ovnfs 时，隔离子代理使用 ovnfs 检出；否则（以及工作树）由 PAL 选择最佳可用后端",
	"Clone Checkout into Worktrees": "将检出克隆到工作树",
	"New worktrees from `github pr_checkout` and `git worktree add` in bash start as a copy-on-write clone of the current checkout so ignored build artifacts (node_modules, target) carry over; falls back to a plain checkout when the filesystem cannot clone":
		"来自 `github pr_checkout` 和 bash 中 `git worktree add` 的新工作树以当前检出的写时复制克隆开始，从而带上被忽略的构建产物（node_modules、target）；文件系统无法克隆时回退为普通检出",
	"Clean Source Checkout on /wt": "/wt 时清理源检出",
	"When creating a worktree with `/wt`, reset tracked changes and remove untracked files from the original checkout after carrying them over":
		"使用 `/wt` 创建工作树时，在迁移后重置原检出中已跟踪的更改并删除未跟踪文件",
	"Worktree on Start": "启动时创建工作树",
	"Whether fresh interactive sessions start in a new linked worktree": "新的交互式会话是否从新的关联工作树开始",
	"Start in the current checkout": "在当前检出中开始",
	"Ask at session start": "会话开始时询问",
	Create: "创建",
	"Always start in a new worktree on a `wt/*` branch": "始终在 `wt/*` 分支上的新工作树中开始",
	"Worktree on Exit": "退出时处理工作树",
	"What to do on exit with worktrees created since omp started (on start or with `/wt`)":
		"退出时如何处理自 omp 启动以来创建的工作树（启动时或通过 `/wt` 创建）",
	Keep: "保留",
	"Leave worktrees in place": "保留工作树",
	"Ask on exit": "退出时询问",
	Remove: "移除",
	"Remove clean worktrees; ask when they have uncommitted changes or new commits. Gitignored files (e.g. `.env`) are deleted too":
		"移除干净的工作树；存在未提交更改或新提交时询问。被 Git 忽略的文件（如 `.env`）也会被删除",
	"ovnfs Binary": "ovnfs 可执行文件",
	"ovnfs executable; unset looks for `ovnfs` on PATH. When it is found, ovnfs checkouts (copy-on-write views of a folder, ready in about a second at any size) serve every separate copy: the system prompt tells agents to open checkouts instead of git worktrees or copies, and isolated subagents (when allowed, with `isolation.backend` on auto) run in checkouts instead of native clones":
		"ovnfs 可执行文件；未设置时在 PATH 中查找 `ovnfs`。找到后，ovnfs 检出（文件夹的写时复制视图，任何大小约一秒就绪）用于每份独立副本：系统提示词会让代理打开检出而不是 git 工作树或副本，隔离子代理（允许时，且 `isolation.backend` 为 auto）在检出中运行而不是原生克隆",
	"How strongly to push the main agent to delegate work; subagents keep the model's own policy":
		"推动主代理委派工作的力度；子代理保持模型自身的策略",
	"Uses the selected model's policy; some models require an explicit delegation request":
		"使用所选模型的策略；部分模型需要显式委派请求",
	"Auto Parallel": "自动并行",
	"Ask the native judge resolved through the 'judge' role which parts of each new top-level prompt can run concurrently. Needs a native judge and the task tool; without them nothing is judged.":
		"让通过 'judge' 角色解析的原生 judge 判断每个新的顶层提示词中哪些部分可以并行执行。需要原生 judge 和 task 工具；缺少时不做判断。",
	"Never split prompts": "从不拆分提示词",
	"Judge each prompt and report the split without acting on it": "判断每个提示词并报告拆分结果，但不据此行动",
	"When a prompt splits into independent subtasks, tell the agent to delegate them in parallel":
		"提示词拆分为独立子任务时，告诉代理并行委派",
	"Sequential Task Steps": "顺序任务步骤",
	"Spawns take ordered `steps` instead of one `task`: the subagent gets the first step, then each next one once it finishes the previous; past 4 steps, earlier messages carry two or more. The last step's result is the task's result.":
		"派生使用有序的 `steps` 而不是单个 `task`：子代理先拿到第一步，完成上一步后再拿到下一步；超过 4 步时，较早的消息携带两个或更多步骤。最后一步的结果就是任务结果。",
	"Structured Task Results": "结构化任务结果",
	"Expose outputSchema/schemaMode on the task tool and return subagent results through the yield tool, validated against caller or agent output schemas. Off: task subagents have no yield tool and return their final message as plain text, except agents whose definition sets structured: true. Eval agent()/workpool spawns always keep structured results.":
		"在 task 工具上暴露 outputSchema/schemaMode，并通过 yield 工具返回子代理结果，按调用方或代理输出 schema 校验。关闭：task 子代理没有 yield 工具，以纯文本返回最终消息，但定义为 structured: true 的代理除外。Eval agent()/workpool 派生始终保留结构化结果。",
	"Speculative Task Launch": "推测性 Task 启动",
	"Start each batch subagent as soon as its tasks[] item finishes streaming instead of waiting for the whole task call. Launched agents are aborted if the finished call fails validation, is blocked, or its arguments change. Requires auto-allowed task approval and no extension tool lifecycle handlers.":
		"每个批量子代理的 tasks[] 项完成流式输出后立即启动，而不是等待整个 task 调用结束。若完成的调用校验失败、被阻止或参数变化，已启动的代理会被中止。需要自动允许的 task 审批且没有扩展工具生命周期处理器。",
	"Per-Call Model": "按调用模型",
	"Whether a subagent call may pick its model with one exact provider/model-id[@upstream][:level] selector. An @upstream pin is part of the model identity and is supported only by aggregators. Only models the configuration already routes to are accepted. Project settings can turn it off but not on, and never approve a model.":
		"子代理调用是否可以用精确的 provider/model-id[@upstream][:level] 选择器选定模型。@upstream 固定属于模型标识的一部分，仅聚合器支持。只接受配置已路由到的模型。项目设置可以关闭但不能开启，且永远不能批准模型。",
	"Reject `model` on task items and eval agent()/workpool()": "拒绝 task 项以及 eval agent()/workpool() 中的 `model`",
	"Eval only": "仅 Eval",
	"Accept `model` in eval agent() and workpool() only": "仅在 eval agent() 和 workpool() 中接受 `model`",
	"Accept `model` on task items and in eval agent()/workpool()":
		"在 task 项以及 eval agent()/workpool() 中接受 `model`",
	"Per-Call Model Allowlist": "按调用模型允许列表",
	"Exact selectors: `provider/model-id`, including `@upstream` only for a pinned OpenRouter/Vercel route (e.g. `openrouter/x@y`). When set, a per-call model must also be listed here. Empty: every model the configuration grants. A project list can only narrow this one.":
		"精确选择器：`provider/model-id`，仅固定的 OpenRouter/Vercel 路由才包含 `@upstream`（例如 `openrouter/x@y`）。设置后，按调用模型必须同时在此列出。空：配置授予的所有模型。项目列表只能收窄此列表。",
	"Subagent Worker Threads": "子代理工作线程",
	"Maximum worker threads for subagents. Up to 8 concurrent subagents run on the main thread; at 9 one worker joins, and one more each time the count doubles (18, 36, 72). Workers stop a minute after no subagent is live in them; 0 keeps every subagent on the main thread":
		"子代理的最大工作线程数。最多 8 个并发子代理在主线程运行；达到 9 个时加入一个工作线程，此后数量每翻倍（18、36、72）再加一个。工作线程中无存活子代理一分钟后停止；0 表示所有子代理都在主线程运行",
	"Main thread only": "仅主线程",
	"Up to 1 worker": "最多 1 个工作线程",
	"Up to 2 workers": "最多 2 个工作线程",
	"Up to 4 workers": "最多 4 个工作线程",
	"Up to 8 workers": "最多 8 个工作线程",
	"Subagent Completion Probe": "子代理完成度探测",
	"Ask a working subagent, through a cached side request like /btw, to estimate how complete its task is: after 2, 5, 10 and 30 more minutes, then hourly. The estimate shows next to the subagent in wait and task views. Only subagents spawned by the main agent of an interactive session are asked; print, RPC, ACP and SDK runs never probe.":
		"通过类似 /btw 的缓存旁路请求，让运行中的子代理估计任务完成度：在再经过 2、5、10、30 分钟时，之后每小时一次。估计值显示在等待视图和任务视图中子代理旁边。只有交互式会话中主代理派生的子代理会被询问；print、RPC、ACP 和 SDK 运行从不探测。",
	"Soft per-subagent request budget (assistant requests per run). Crossing it injects a wrap-up steering notice (see task.softRequestBudgetNotice); at 1.5x the budget the run is force-stopped and the agent must hand back its partial findings. 0 disables the guard. Bundled scout/sonic agents cap out at a lower built-in budget, so a value below that cap still applies to them. A task.agentSoftRequestBudget entry replaces this budget for the agent it names.":
		"每个子代理的软请求预算（每次运行的助手请求数）。超过后注入收尾引导提示（见 task.softRequestBudgetNotice）；达到预算的 1.5 倍时强制停止运行，代理必须交回部分发现。0 禁用该保护。内置 scout/sonic 代理有更低的内置预算上限，低于该上限的值仍对它们生效。task.agentSoftRequestBudget 条目会为其指定的代理替换此预算。",
	"Maximum reasoning effort allowed for the task tool's per-spawn effort hint or a per-call model. An explicit `:level` is clamped to the highest supported effort at or below this ceiling, and an omitted `:level` inherits the agent's thinking level capped at this value; cold revival re-applies the cap. Unset, `:inherit` and `:off` keep their existing meaning. A per-call model must support an effort at or below this ceiling; the default preserves the model's full range.":
		"task 工具每次派生 effort 提示或按调用模型允许的最大推理强度。显式 `:level` 会被限制到该上限及以下支持的最高强度；省略 `:level` 时继承代理的思考等级并以该值封顶；冷唤醒时会重新应用上限。未设置、`:inherit` 和 `:off` 保持原有含义。按调用模型必须支持该上限及以下的强度；默认保留模型的完整范围。",
	"Arm prewalk for the bundled generic `task` subagent: it starts on its resolved model, plans and begins the implementation, then hands off to the 'smol' role at its first edit/write. Per-agent overrides (task.agentPrewalk, configured from the /agents hub) and user agent `prewalk` frontmatter apply regardless of this toggle.":
		"为内置通用 `task` 子代理启用预执行：它从解析到的模型开始规划并开始实现，在第一次编辑/写入时交接给 'smol' 角色。按代理的覆盖设置（task.agentPrewalk，在 /agents 中心配置）和用户代理的 `prewalk` frontmatter 不受此开关影响。",
	"Autosave Plans": "自动保存计划",
	"Automatically save approved plans to disk when plan mode completes": "计划模式完成时自动将已批准的计划保存到磁盘",
	"Autosave Directory": "自动保存目录",
	"Directory for autosaved plans. Supports ~, absolute, and cwd-relative paths. Empty uses <project>/.omp/plans/.":
		"自动保存计划的目录。支持 ~、绝对路径和相对于 cwd 的路径。留空使用 <project>/.omp/plans/。",
	'Run modes where active goals may auto-continue between turns ("interactive", "rpc")':
		'允许活动目标在轮次之间自动续跑的运行模式（"interactive"、"rpc"）',
	"Title Icons": "标题图标",
	"Icon and short code that head new generated or /rename session titles":
		"新生成或 /rename 的会话标题前的图标和短代码",
	"Nerd Font + Emoji": "Nerd Font + Emoji",
	"Nerd Font glyph where the Nerd Font symbol preset renders it, else the emoji (default)":
		"Nerd Font 符号预设可渲染时使用 Nerd Font 字形，否则使用表情（默认）",
	Emoji: "表情",
	"Always the emoji": "始终使用表情",
	Boring: "朴素",
	"Plain title: no icon or code": "普通标题：无图标或代码",
	"Title Generator": "标题生成器",
	"What names an untitled session from the user's messages": "用什么根据用户消息命名无标题会话",
	Fork: "分叉",
	"A side turn of the reply on the session's model: reads its prompt cache, adds the card icon (default)":
		"在会话模型上对回复进行一次旁路轮次：复用其提示词缓存，并添加卡片图标（默认）",
	Tiny: "小模型",
	"The title model role only; plain titles without a card": "仅使用 title 模型角色；普通标题不带卡片",
	"Refresh Title After Prompts": "提示词后刷新标题",
	"Every this many operator prompts, ask the judge model whether a generated session title still fits the conversation, and regenerate it if not":
		"每经过这么多条操作者提示词，询问 judge 模型生成的会话标题是否仍贴合对话，不符则重新生成",
	"Every prompt": "每条提示词",
	"Every 3 prompts": "每 3 条提示词",
	"Every 5 prompts": "每 5 条提示词",
	"Every 10 prompts": "每 10 条提示词",
	"Skill Registry": "技能注册表",
	"Skillshare registry used by `omp skill` to install, search, and publish skills (https://host[:port])":
		"`omp skill` 用于安装、搜索和发布技能的 Skillshare 注册表（https://host[:port]）",
	"Extension Mode Control": "扩展模式控制",
	"Let extensions enter and exit plan, vibe, goal, and loop modes via ctx.sessionModes.set(); reading mode state stays available":
		"允许扩展通过 ctx.sessionModes.set() 进入和退出计划、氛围、目标和循环模式；读取模式状态始终可用",
	"Extension Reply Renderers": "扩展回复渲染器",
	"Let extensions change how assistant replies are drawn, redraw a reply in place, and receive clicks on their own links; the session, exports and model context keep the reply as written":
		"允许扩展改变助手回复的绘制方式、原地重绘回复并接收其自有链接的点击；会话、导出和模型上下文中的回复保持原样",
	"Extension Transcript Presenters": "扩展会话记录呈现器",
	"Let extensions draw transcript blocks such as tool calls in full, as one compact row, or hidden; the session, exports and model context are unchanged":
		"允许扩展将工具调用等会话记录块完整绘制、绘制为一行紧凑内容或隐藏；会话、导出和模型上下文不变",
	"Enable the Exa web search provider": "启用 Exa 网页搜索供应商",
	"Enable the browser eval prelude for scripted browser automation":
		"启用浏览器 eval 预置内容以进行脚本化浏览器自动化",
	"Default HTTP CDP discovery endpoint (for example http://127.0.0.1:9222) to attach to instead of launching a browser. An explicit app on the tool call takes precedence.":
		"默认附加的 HTTP CDP 发现端点（例如 http://127.0.0.1:9222），而不是启动新浏览器。工具调用中显式指定的 app 优先。",
	"Browser Relay": "浏览器中继",
	"Drive your own Chrome tabs through the omp browser relay. Install the extension once (`omp browser-relay install`); the relay server auto-starts when the browser prelude needs it. Takes precedence over Browser CDP URL; set PI_BROWSER_RELAY=0 or PI_BROWSER_RELAY=1 to override.":
		"通过 omp 浏览器中继驱动你自己的 Chrome 标签页。安装一次扩展（`omp browser-relay install`）；浏览器预置内容需要时中继服务器会自动启动。优先于“浏览器 CDP URL”；可设置 PI_BROWSER_RELAY=0 或 PI_BROWSER_RELAY=1 覆盖。",
	"Browser Relay URL": "浏览器中继 URL",
	"omp browser relay endpoint (default http://127.0.0.1:9224).": "omp 浏览器中继端点（默认 http://127.0.0.1:9224）。",
	"Run the browser without a window (disable to show it). omp's WebKit tabs gain or lose their windows at once where the engine ships its viewer (macOS); elsewhere a visible browser is Chromium, launched in the new mode by the next open.":
		"不显示窗口运行浏览器（禁用则显示）。在引擎自带查看器的平台上（macOS），omp 的 WebKit 标签页会立即获得或失去窗口；其他平台可见浏览器为 Chromium，并在下次打开时以新模式启动。",
	"Tern Browser": "Tern 浏览器",
	"Inside a Tern pane, open browser tabs as picture-in-pictures over omp's pane (native web view) instead of omp's own headless browser; falls back to that browser when no Tern window can host them. An explicit app, the relay and Browser CDP URL take precedence; app \"own\" opts one open out. Set PI_BROWSER_TERN=0 or PI_BROWSER_TERN=1 to override.":
		'在 Tern 窗格中，将浏览器标签页以画中画形式（原生网页视图）显示在 omp 窗格上，而不是使用 omp 自己的无头浏览器；没有 Tern 窗口可承载时回退到该浏览器。显式 app、中继和“浏览器 CDP URL”优先；app "own" 可让单次打开不使用。可设置 PI_BROWSER_TERN=0 或 PI_BROWSER_TERN=1 覆盖。',
	"WebKit Browser": "WebKit 浏览器",
	'Open browser tabs in omp\'s own headless WebKit engine instead of managed Chromium when the engine is installed (omp downloads it to ~/.o2/lib/abkit before Chrome for Testing when no browser is installed; see Browser WebKit Path). Chromium still opens a visible browser where the engine ships no viewer, and tabs the engine fails to start; an explicit app, the relay, Browser CDP URL, Tern and cmux take precedence; app "chromium" opts one open out. Set PI_BROWSER_WEBKIT=0 or PI_BROWSER_WEBKIT=1 to override.':
		'安装引擎后，在 omp 自己的无头 WebKit 引擎中打开浏览器标签页，而不是托管的 Chromium（未安装浏览器时，omp 会在 Chrome for Testing 之前将其下载到 ~/.o2/lib/abkit；见“浏览器 WebKit 路径”）。在引擎不自带查看器的平台上仍会打开可见的 Chromium，引擎启动失败的标签页也会如此；显式 app、中继、“浏览器 CDP URL”、Tern 和 cmux 优先；app "chromium" 可让单次打开不使用。可设置 PI_BROWSER_WEBKIT=0 或 PI_BROWSER_WEBKIT=1 覆盖。',
	"Browser WebKit Path": "浏览器 WebKit 路径",
	"omp's WebKit engine: its host executable, or an ABKit engine directory (which holds it as ABHost; ABHost.exe on Windows). If unset, omp runs the installed engine, ~/.o2/lib/abkit/ABHost (ABHost.exe on Windows). Supports ~. PI_BROWSER_WEBKIT_PATH overrides it.":
		"omp 的 WebKit 引擎：主机可执行文件，或 ABKit 引擎目录（其中以 ABHost 形式存在；Windows 为 ABHost.exe）。未设置时 omp 运行已安装的引擎 ~/.o2/lib/abkit/ABHost（Windows 为 ABHost.exe）。支持 ~。PI_BROWSER_WEBKIT_PATH 可覆盖。",
	"Freeze Browser Tabs On Turn End": "轮次结束时冻结浏览器标签页",
	"Freeze OMP-owned headless Chromium tabs when a turn settles so animated pages stop burning CPU/GPU while idle (WebKit tabs draw nothing unless asked). Tabs unfreeze automatically on next use; pass persist:true on open to opt a tab out.":
		"轮次结束时冻结 OMP 拥有的无头 Chromium 标签页，避免动画页面在空闲时持续消耗 CPU/GPU（WebKit 标签页除非被请求否则不绘制）。标签页在下次使用时自动解冻；打开时传 persist:true 可让某个标签页不冻结。",
	"Browser Idle Close Timeout": "浏览器空闲关闭超时",
	"Close OMP-owned headless browser tabs and Tern browser picture-in-pictures idle longer than this many seconds (0 = never; session dispose still reaps). Never touches relay/CDP/spawned browsers or other sessions' tabs.":
		"关闭空闲超过这么多秒的 OMP 无头浏览器标签页和 Tern 浏览器画中画（0 = 从不；会话释放时仍会清理）。不会影响中继/CDP/外部启动的浏览器或其他会话的标签页。",
	"IDA Pro": "IDA Pro",
	"Open executables read with `read` in IDA Pro (idalib) and enable the `ida` tool; inert when no IDA install is found":
		"用 IDA Pro（idalib）打开通过 `read` 读取的可执行文件，并启用 `ida` 工具；未找到 IDA 安装时不生效",
	"IDA Python": "IDA Python",
	"Python interpreter that can import ida_domain and idapro; empty auto-detects":
		"能够导入 ida_domain 和 idapro 的 Python 解释器；留空自动检测",
	"IDA Install Dir": "IDA 安装目录",
	"Directory containing libidalib, exported as IDADIR; empty auto-detects ($IDADIR, ida-config.json, standard install paths)":
		"包含 libidalib 的目录，导出为 IDADIR；留空自动检测（$IDADIR、ida-config.json、标准安装路径）",
	"IDA Max Open Databases": "IDA 最多同时打开的数据库",
	"Most IDA databases (omp.ida.* daemons in omp ps) open at once per project; opening another saves and closes the least recently used idle one":
		"每个项目同时打开的 IDA 数据库（omp ps 中的 omp.ida.* 守护进程）上限；再打开一个时会保存并关闭最久未用的空闲数据库",
	"IDA Idle Close Timeout": "IDA 空闲关闭超时",
	"Save and close IDA databases idle longer than this many seconds (0 = never); the exec namespace resets on reopen":
		"保存并关闭空闲超过这么多秒的 IDA 数据库（0 = 从不）；重新打开时 exec 命名空间会重置",
	"MCP Startup Window": "MCP 启动窗口",
	"Wait this many milliseconds for initial MCP tool discovery; 0 waits until connections settle":
		"等待初始 MCP 工具发现这么多毫秒；0 表示等到连接稳定",
	"Serve Images as URLs": "以 URL 形式提供图像",
	"Publish outgoing images through the configured backend chain and send URL-fetching providers short URLs instead of inline base64. Falls back to inline automatically when every backend or a provider fetch fails":
		"通过配置的后端链发布发出的图像，并向可抓取 URL 的供应商发送短链接而不是内联 base64。所有后端或供应商抓取失败时自动回退为内联",
	"Image URL Backends": "图像 URL 后端",
	"Ordered destinations tried when publishing images for provider access": "为供应商访问发布图像时依次尝试的目标",
	Imgur: "Imgur",
	"Uploads require either an Imgur access token or client ID.": "上传需要 Imgur 访问令牌或客户端 ID。",
	ImageShack: "ImageShack",
	"The API requires a paid subscription.": "该 API 需要付费订阅。",
	Flickr: "Flickr",
	"image-host": "图床",
	Chevereto: "Chevereto",
	"self-hosted": "自托管",
	"vgy.me": "vgy.me",
	Dropbox: "Dropbox",
	"cloud-files": "云文件",
	"FTP / FTPS / SFTP": "FTP / FTPS / SFTP",
	"file-transfer": "文件传输",
	OneDrive: "OneDrive",
	"Google Drive": "Google 云端硬盘",
	"puush-compatible endpoint": "puush 兼容端点",
	"The public service is defunct; a replacement endpoint is required.": "该公共服务已停用；需要配置替代端点。",
	Box: "Box",
	"Amazon S3": "Amazon S3",
	s3: "S3",
	"Google Cloud Storage": "Google Cloud Storage",
	"object-storage": "对象存储",
	"Azure Blob Storage": "Azure Blob 存储",
	"Backblaze B2": "Backblaze B2",
	"Configure either native B2 application keys or S3-compatible access keys.":
		"配置原生 B2 应用密钥或 S3 兼容的访问密钥。",
	"ownCloud / Nextcloud": "ownCloud / Nextcloud",
	webdav: "WebDAV",
	"MediaFire-compatible endpoint": "MediaFire 兼容端点",
	"The public API is deprecated; a replacement endpoint is required.": "该公共 API 已弃用；需要配置替代端点。",
	"SendSpace-compatible endpoint": "SendSpace 兼容端点",
	"The public discovery API is deprecated; a replacement endpoint is required.":
		"该公共发现 API 已弃用；需要配置替代端点。",
	"Hostr-compatible endpoint": "Hostr 兼容端点",
	"The public service is offline; a replacement endpoint is required.": "该公共服务已离线；需要配置替代端点。",
	"Lambda-compatible endpoint": "Lambda 兼容端点",
	Pomf: "Pomf",
	pomf: "Pomf",
	Uguu: "Uguu",
	"Public uploads expire after approximately three hours.": "公开上传约三小时后过期。",
	Seafile: "Seafile",
	"s-ul": "s-ul",
	"file-host": "文件托管",
	"LobFile-compatible endpoint": "LobFile 兼容端点",
	"transfer.sh-compatible endpoint": "transfer.sh 兼容端点",
	"The defunct public endpoint is blocked; a self-hosted replacement is required.":
		"已停用的公共端点被阻止；需要自托管替代端点。",
	Plik: "Plik",
	"Shared folder": "共享文件夹",
	filesystem: "文件系统",
	Catbox: "Catbox",
	"anonymous-host": "匿名托管",
	Litterbox: "Litterbox",
	"Uploads are temporary.": "上传是临时的。",
	"0x0.st": "0x0.st",
	"Public uploads expire after a retention window determined by file size.":
		"公开上传会在由文件大小决定的保留期后过期。",
	"tmpfiles.org": "tmpfiles.org",
	"Public uploads are temporary.": "公开上传是临时的。",
	Discord: "Discord",
	messaging: "消息平台",
	"Model provider files": "模型供应商文件",
	"Provider file references are API-local rather than public image URLs.":
		"供应商文件引用是 API 本地的，而不是公开的图像 URL。",
	"Direct public URL": "直接公开 URL",
	"local-serving": "本地服务",
	"Cloudflare quick tunnel": "Cloudflare 快速隧道",
	tunnel: "隧道",
	ngrok: "ngrok",
	"Tailscale Funnel": "Tailscale Funnel",
	"SSH reverse tunnel": "SSH 反向隧道",
	"Uploader command": "上传命令",
	"external-command": "外部命令",
	"localhost.run": "localhost.run",
	Pinggy: "Pinggy",
	"Microsoft dev tunnel": "Microsoft 开发隧道",
	"The devtunnel CLI must be logged in locally.": "devtunnel CLI 需要在本地已登录。",
	zrok: "zrok",
	"The local zrok environment must be enabled.": "需要启用本地 zrok 环境。",
	bore: "bore",
	"Named Cloudflare Tunnel": "命名 Cloudflare 隧道",
	"Cloudflare R2": "Cloudflare R2",
	Tigris: "Tigris",
	MinIO: "MinIO",
	Garage: "Garage",
	"Image Upload Command": "图像上传命令",
	"Argv template for the command backend; {file} is the image path, {mime}/{ext} optional. The last URL printed on stdout is used (e.g. pasta -b -f {file})":
		"命令后端的 argv 模板；{file} 是图像路径，{mime}/{ext} 可选。使用标准输出中最后打印的 URL（例如 pasta -b -f {file}）",
	"Image URL Public Base": "图像 URL 公开基础地址",
	"Externally reachable base URL fronting the blob server (required for ssh, optional for direct)":
		"位于 blob 服务器前端的对外可达基础 URL（ssh 必需，direct 可选）",
	"Image URL Lifetime (hours)": "图像 URL 有效期（小时）",
	"Serving window for locally hosted image URLs, measured from the last time a conversation sent them; resuming a conversation re-arms the window at the same link. 0 keeps links alive while the broker runs":
		"本地托管图像 URL 的服务窗口，从对话最后一次发送它们时开始计算；恢复对话会在同一链接上重新计时。0 表示只要代理运行链接就保持有效",
	"Image URL Bind Host": "图像 URL 绑定主机",
	"Host the blob server binds to; loopback for tunnels, 0.0.0.0 for direct serving":
		"blob 服务器绑定的主机；隧道使用回环地址，直接服务使用 0.0.0.0",
	"Image URL SSH Target": "图像 URL SSH 目标",
	"user@host destination for the ssh reverse forward": "ssh 反向转发的 user@host 目标",
	"Image URL SSH Remote Port": "图像 URL SSH 远端端口",
	"Remote listen port of the ssh reverse forward that your web server proxies to":
		"ssh 反向转发的远端监听端口，供你的 Web 服务器代理到",
	"Auto Start": "自动开始",
	"Host every interactive session via collab.relayUrl as it starts and publish it to the local registry (omp collab list); rooms rotate on session switch":
		"每个交互式会话启动时通过 collab.relayUrl 托管并发布到本地注册表（omp collab list）；切换会话时轮换房间",
	"Share only when /collab is run": "仅在运行 /collab 时分享",
	View: "观看",
	"Auto-host; the registry hands out view-only links (omp collab link --view)":
		"自动托管；注册表提供只读链接（omp collab link --view）",
	Control: "控制",
	"Auto-host; the registry hands out control links that can prompt the session":
		"自动托管；注册表提供可向会话发送提示词的控制链接",
	"Stream Server": "流服务器",
	"Live stream server used by `omp stream` (https://host[:port]); viewers watch at <base>/<your Stencil username>":
		"`omp stream` 使用的直播服务器（https://host[:port]）；观众在 <base>/<你的 Stencil 用户名> 观看",
	"Extra Redaction Patterns": "额外脱敏模式",
	"Additional regular expressions redacted from every streamed row, on top of env/secrets.yml values and built-in credential shapes":
		"除环境变量/secrets.yml 中的值和内置凭据模式外，从每一行流式内容中额外脱敏的正则表达式",
	"Spotlight Experiment": "Spotlight 实验",
	"Shape tool output and rank find results with Stencil Spotlight, and log each shaped result to the session":
		"使用 Stencil Spotlight 整理工具输出并排序 find 结果，并将每个整理后的结果记录到会话",
};
