/**
 * CLI help text in Chinese.
 *
 * `--help` runs before the settings store opens, so these strings are looked up
 * by the same exact-match dictionary the TUI uses (`localizeUiText`). Only prose
 * renders translated: flag names, usage lines, option values and examples keep
 * their exact bytes because users copy them into a shell.
 */
export const zhCNCliText: Readonly<Record<string, string>> = {
	// Section headings.
	USAGE: "用法",
	COMMANDS: "命令",
	ARGUMENTS: "参数",
	FLAGS: "选项",
	EXAMPLES: "示例",
	"[COMMAND]": "[命令]",

	// Subcommand descriptions (cli/command-help.ts, one per `omp <command>`).
	"Run omp as an ACP (Agent Client Protocol) server over stdio":
		"以 ACP（Agent Client Protocol）服务器身份通过 stdio 运行 omp",
	"Manage bundled task agents": "管理内置的任务智能体",
	"Write a shareable copy of a session and its subagents: turn contents redacted, metadata kept, paths and literals replaced by consistent mock tokens":
		"写出会话及其子代理的可分享副本：对话内容已脱敏，元数据保留，路径与字面量替换为一致的模拟令牌",
	"Export or import stored provider credentials (API keys and OAuth logins) as JSON":
		"以 JSON 导出或导入已保存的供应商凭据（API 密钥与 OAuth 登录）",
	"Manage the omp auth-broker (credential vault)": "管理 omp auth-broker（凭据保管库）",
	"Run an auth-gateway: an HTTP forward proxy backed by the configured broker, or JSON lines on stdio with your own credentials":
		"运行 auth-gateway：由已配置的 broker 支撑的 HTTP 正向代理，或以自有凭据在 stdio 上输出 JSON 行",
	"Benchmark models: TTFT/prefill vs decode throughput with p50/p95, across chat, prefill, generation, and prompt-cache workloads, or single-user vs parallel load (--detailed)":
		"对模型做基准测试：以 p50/p95 衡量 TTFT/预填充与解码吞吐，覆盖对话、预填充、生成、提示缓存等负载，或单用户与并行负载对比（--detailed）",
	"Run the local CDP relay that lets the browser prelude drive your own Chrome tabs":
		"运行本地 CDP 中继，让浏览器预置脚本驱动你自己的 Chrome 标签页",
	"Detect and fix project diagnostics with weighted parallel subagents": "用带权重的并行子代理检测并修复项目诊断问题",
	"List active local Collab host metadata without URLs; use collab link <instanceId|pid> to retrieve a control link (--view for view-only)":
		"列出本地活跃 Collab 主机的元数据（不含 URL）；用 collab link <instanceId|pid> 获取控制链接（--view 为只读）",
	"Upload a /record recording to live.omp.sh as a public clip and print its URL":
		"将 /record 录制上传到 live.omp.sh 作为公开片段并打印其 URL",
	"Generate a commit message and update changelogs": "生成提交信息并更新变更日志",
	"Print a shell completion script (bash, zsh, or fish)": "输出 shell 补全脚本（bash、zsh 或 fish）",
	"Rewrite a text file into the dense prompt register, reporting what it drops":
		"将文本文件改写为密集的提示语体，并报告丢弃的内容",
	"Manage configuration settings": "管理配置项",
	"Dry-run OAuth account balancing across random session ids": "在随机会话 id 下演练 OAuth 账号轮换",
	"Preview tool, composer, and status-line renderers in a deterministic visual gallery":
		"在确定性的可视化画廊中预览工具、输入框和状态栏的渲染效果",
	"Run storage garbage collection": "运行存储垃圾回收",
	"Benchmark instruction following and working memory: one cached thread of glyph array actions with a moving cat-sound directive":
		"基准测试指令遵循与工作记忆：单条缓存线程内的字形数组操作，并带有移动的猫叫声指令",
	"Interactive fullscreen git UI: split diff viewer, staging sidebar, and commit composer":
		"交互式全屏 git 界面：分栏差异视图、暂存侧边栏和提交编辑器",
	"Semantic search: describe a behavior, get the files and line ranges that implement it":
		"语义搜索：描述一个行为，得到实现它的文件与行范围",
	"Test grep tool": "测试 grep 工具",
	"View, clean, or push reported tool issues (auto-QA grievances)": "查看、清理或上报已报告的工具问题（自动 QA 抱怨）",
	"Log in to a model provider (terminal counterpart of /login)": "登录模型供应商（/login 的终端对应命令）",
	"Inspect, diagnose, probe, and purge image publication backends": "检查、诊断、探测并清理图像发布后端",
	"Install or link an extension package (alias of `plugin install`/`plugin link`)":
		"安装或链接扩展包（`plugin install`/`plugin link` 的别名）",
	"Join a shared collab session (same as /join)": "加入共享协作会话（等同 /join）",
	"List, search, and refresh available models": "列出、搜索并刷新可用模型",
	"Manage plugins (install, uninstall, list, etc.)": "管理插件（安装、卸载、列表等）",
	"Replay a /record session recording in the terminal (space pauses, q quits)":
		"在终端回放 /record 会话录制（空格暂停，q 退出）",
	"Type a prompt and compare every word-completion engine's ghost text live":
		"输入提示并实时对比各个单词补全引擎的幽灵文本",
	"List and control daemon-supervised background processes (logs, stop, kill, restart)":
		"列出并控制由守护进程监管的后台进程（日志、停止、终止、重启）",
	"Show what the read tool will return for a path, URL, or internal URI":
		"显示 read 工具对某个路径、URL 或内部 URI 将返回的内容",
	"Draw a session's entire thread through the production transcript pipeline (with repaint timing)":
		"通过生产会话记录管线绘制整个会话线程（含重绘耗时）",
	"Synthesize text with the local TTS engine and play it through the speakers":
		"用本地 TTS 引擎合成语音并通过扬声器播放",
	"Test web search providers": "测试网页搜索供应商",
	"Hand a session to another machine (pack, unpack, moved) or check which sessions a running omp owns (lease)":
		"将会话交给另一台机器（pack、unpack、moved），或查询运行中的 omp 持有哪个会话（lease）",
	"Share a saved session via an encrypted link (same as /share)": "通过加密链接分享已保存的会话（等同 /share）",
	"Run onboarding setup or install dependencies for optional features": "运行引导式设置，或为可选功能安装依赖",
	"Interactive shell console": "交互式 shell 控制台",
	"Install, search, publish, and manage skills on the Skillshare registry (skills.omp.sh)":
		"在 Skillshare 注册表（skills.omp.sh）上安装、搜索、发布和管理技能",
	"Manage SSH host configurations": "管理 SSH 主机配置",
	"View usage statistics": "查看用量统计",
	"Broadcast local omp session screens and chat to your public live channel":
		"将本地 omp 会话画面与对话推送到你的公开直播频道",
	"Download tiny local models (session titles, memory, word completion)":
		"下载小型本地模型（会话标题、记忆、单词补全）",
	"Get the API key or OAuth token for a provider": "获取某个供应商的 API 密钥或 OAuth 令牌",
	"Count a file or text with every embedded offline tokenizer (OpenAI, Claude, Qwen, …)":
		"用所有内置离线分词器统计文件或文本的令牌数（OpenAI、Claude、Qwen 等）",
	"Inspect and test Time-Traveling Stream Rules (TTSR)": "检查并测试时间回溯流规则（TTSR）",
	"Check for and install updates": "检查并安装更新",
	"Show provider usage limits for every authenticated account": "显示每个已认证账号的供应商用量限制",
	"Add, list, or clear git worktrees (clone-first when enabled)": "添加、列出或清理 git 工作树（启用时优先克隆）",
	"Run zsh 5.9 on the built-in pi-shell engine (all arguments go to zsh)":
		"在内置 pi-shell 引擎上运行 zsh 5.9（所有参数原样交给 zsh）",
	"Run bash 5.3 on the built-in pi-shell engine (all arguments go to bash)":
		"在内置 pi-shell 引擎上运行 bash 5.3（所有参数原样交给 bash）",
	"Run a POSIX sh on the built-in pi-shell engine (all arguments go to sh)":
		"在内置 pi-shell 引擎上运行 POSIX sh（所有参数原样交给 sh）",

	// `omp --help` appendix (`cli/help-extra.ts`): headings, prose and env-var notes.
	"Environment Variables:": "环境变量：",
	"# Core Providers": "# 核心供应商",
	"# Additional LLM Providers": "# 其他 LLM 供应商",
	"# Cloud Providers": "# 云供应商",
	"# Search & Tools": "# 搜索与工具",
	"# Configuration": "# 配置",
	"Available Tools (default-enabled unless noted):": "可用工具（除非特别说明，默认启用）：",
	"Plugin Options:": "插件选项：",
	"Useful Commands:": "常用命令：",
	"Anthropic Claude models": "Anthropic Claude 模型",
	"Anthropic OAuth (takes precedence over API key)": "Anthropic OAuth（优先于 API 密钥）",
	"Enable Anthropic Foundry mode (uses Foundry endpoint + mTLS)":
		"启用 Anthropic Foundry 模式（使用 Foundry 端点 + mTLS）",
	"Anthropic Foundry base URL (e.g., https://<foundry-host>)":
		"Anthropic Foundry 基础 URL（如 https://<foundry-host>）",
	"Anthropic token used as Authorization: Bearer <token> in Foundry mode":
		"Foundry 模式下作为 Authorization: Bearer <token> 使用的 Anthropic 令牌",
	'Extra headers for Foundry or any custom ANTHROPIC_BASE_URL gateway (e.g., "user-id: USERNAME")':
		'为 Foundry 或任意自定义 ANTHROPIC_BASE_URL 网关附加的请求头（如 "user-id: USERNAME"）',
	"Omit pre-release Anthropic fields (context_management, beta tool fields, task budgets, thinking.block_binding) for gateways that reject them":
		"对拒绝预发布字段的网关省略这些 Anthropic 字段（context_management、beta tool fields、task budgets、thinking.block_binding）",
	"Client certificate (PEM path or inline PEM) for mTLS": "mTLS 用的客户端证书（PEM 路径或内联 PEM）",
	"Client private key (PEM path or inline PEM) for mTLS": "mTLS 用的客户端私钥（PEM 路径或内联 PEM）",
	"CA bundle path (or inline PEM) for server certificate validation": "服务器证书校验用的 CA 包路径（或内联 PEM）",
	"OpenAI GPT models": "OpenAI GPT 模型",
	"Google Gemini models": "Google Gemini 模型",
	"GitHub Copilot": "GitHub Copilot",
	"Azure OpenAI models": "Azure OpenAI 模型",
	"Groq models": "Groq 模型",
	"Cerebras models": "Cerebras 模型",
	"xAI Grok models": "xAI Grok 模型",
	"OpenRouter aggregated models": "OpenRouter 聚合模型",
	"Kilo Gateway models": "Kilo Gateway 模型",
	"Mistral models": "Mistral 模型",
	"z.ai models (ZhipuAI/GLM)": "z.ai 模型（智谱 AI/GLM）",
	"Umans AI Coding Plan models": "Umans AI Coding Plan 模型",
	"Abliteration uncensored GLM models": "Abliteration 无审查 GLM 模型",
	"Umans gateway web search backend (native or exa)": "Umans 网关网页搜索后端（native 或 exa）",
	"MiniMax models": "MiniMax 模型",
	"OpenCode Zen/OpenCode Go models": "OpenCode Zen/OpenCode Go 模型",
	"Cursor AI models": "Cursor AI 模型",
	"ClinePass subscription models": "ClinePass 订阅模型",
	"Command Code Provider API models": "Command Code Provider API 模型",
	"Charm Hyper inference gateway models": "Charm Hyper 推理网关模型",
	"Vercel AI Gateway": "Vercel AI Gateway",
	"StepFun Step models": "StepFun Step 模型",
	"Helmcode private EU inference": "Helmcode 欧盟私有推理",
	"Wafer Serverless (pay-as-you-go)": "Wafer Serverless（按量计费）",
	"Yolo-Auto flat-rate Qwen models": "Yolo-Auto 包月 Qwen 模型",
	"SingularityAPI universal gateway (300+ models)": "SingularityAPI 通用网关（300+ 模型）",
	"SingularityAPI reserved DeepSeek lanes": "SingularityAPI 专用 DeepSeek 通道",
	"Scaleway Generative APIs models": "Scaleway 生成式 API 模型",
	"Otari AI gateway (workspace models)": "Otari AI 网关（工作区模型）",
	"Otari self-hosted API root (e.g. https://host/api/v1)": "Otari 自托管 API 根地址（如 https://host/api/v1）",
	"AWS Bedrock (or AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY)":
		"AWS Bedrock（或 AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY）",
	"Google Vertex AI (requires GOOGLE_CLOUD_LOCATION)": "Google Vertex AI（需要 GOOGLE_CLOUD_LOCATION）",
	"Service account for Vertex AI": "Vertex AI 的服务账号",
	"Exa web search": "Exa 网页搜索",
	"Brave web search": "Brave 网页搜索",
	"Perplexity web search API key (optional; anonymous fallback)": "Perplexity 网页搜索 API 密钥（可选；有匿名回退）",
	"Perplexity web search (session cookie)": "Perplexity 网页搜索（会话 cookie）",
	"Tavily web search": "Tavily 网页搜索",
	"TinyFish web search": "TinyFish 网页搜索",
	"Keenable web search (optional; keyless public fallback)": "Keenable 网页搜索（可选；有免密公开回退）",
	"Sofya web search": "Sofya 网页搜索",
	"Firecrawl web search + fetch reader backend": "Firecrawl 网页搜索 + 抓取阅读后端",
	"Anthropic web search (override; isolates search from main ANTHROPIC_API_KEY)":
		"Anthropic 网页搜索（覆盖；使搜索与主 ANTHROPIC_API_KEY 隔离）",
	"Anthropic web search base URL (override; pairs with ANTHROPIC_SEARCH_API_KEY)":
		"Anthropic 网页搜索基础 URL（覆盖；与 ANTHROPIC_SEARCH_API_KEY 配对）",
	"TypeSafe System One judgments (auto thinking, unexpected-stop, AI staging, eval judge())":
		"TypeSafe System One 判定（自动思考、意外停止、AI 暂存、eval judge()）",
	"Named profile for isolated agent state (same as --profile)": "用于隔离 agent 状态的具名 profile（等同 --profile）",
	"Use `omp --profile <name> --alias <command>` to create a shell shortcut for a profile":
		"用 `omp --profile <name> --alias <command>` 为某个 profile 创建 shell 快捷方式",
	"Session storage directory (default:": "会话存储目录（默认：",
	"Override package directory (for Nix/Guix store paths)": "覆盖包目录（用于 Nix/Guix store 路径）",
	"Override smol/fast model (see --smol)": "覆盖快速小模型（见 --smol）",
	"Override slow/reasoning model (see --slow)": "覆盖慢速/推理模型（见 --slow）",
	"Override planning model (see --plan)": "覆盖规划模型（见 --plan）",
	"For complete environment variable reference, see:": "完整环境变量参考见：",
	"Read file contents": "读取文件内容",
	"Execute bash commands": "执行 bash 命令",
	"Edit files with find/replace": "以查找/替换编辑文件",
	"Write files (creates/overwrites)": "写入文件（创建或覆盖）",
	"Search file contents": "搜索文件内容",
	"Find files by glob pattern": "按 glob 模式查找文件",
	"Language server protocol (code intelligence)": "语言服务器协议（代码智能）",
	"Execute Python code (requires:": "执行 Python 代码（需要：",
	"Edit Jupyter notebooks": "编辑 Jupyter notebook",
	"Browser automation (Puppeteer)": "浏览器自动化（Puppeteer）",
	"Native host desktop capture and input (disabled by default)": "原生宿主桌面截图与输入（默认禁用）",
	"Launch sub-agents for parallel tasks": "启动子代理处理并行任务",
	"Manage todo/task lists": "管理待办/任务列表",
	"Search the web": "搜索网页",
	"Ask user questions (interactive mode only)": "向用户提问（仅交互模式）",
	"Load plugin from directory (repeatable)": "从目录加载插件（可重复）",
	"Export bundled subagents to ~/.omp/agent/agents (default)": "将内置子代理导出到 ~/.omp/agent/agents（默认）",
	"Export bundled subagents to ./.omp/agents": "将内置子代理导出到 ./.omp/agents",

	// Flag and argument descriptions, `commands/*.ts`.
	"Agents action": "Agents 操作",
	"Overwrite existing agent files": "覆盖已有的智能体文件",
	"Output JSON": "以 JSON 输出",
	"Output directory (overrides --user/--project)": "输出目录（覆盖 --user/--project）",
	"Write to ~/.omp/agent/agents (default)": "写入 ~/.omp/agent/agents（默认）",
	"Write to ./.omp/agents": "写入 ./.omp/agents",
	"Session file path or id prefix (default: most recent for cwd)":
		"会话文件路径或 id 前缀（默认：当前目录最近的会话）",
	"Output directory (default: ./<session-file>.anon)": "输出目录（默认：./<会话文件>.anon）",
	"Sub-command": "子命令",
	"OAuth provider id (login/logout) or path (import)": "OAuth 供应商 id（login/logout）或路径（import）",
	"Bind address for `serve` (host:port)": "`serve` 的绑定地址（host:port）",
	"Regenerate the bearer token": "重新生成 bearer 令牌",
	"SSH user@host for remote login (login --via=user@host)": "远程登录用的 SSH user@host（login --via=user@host）",
	"Override provider id for `import` (e.g. when JSON `type` is unrecognized)":
		"覆盖 `import` 的供应商 id（例如 JSON 中的 `type` 无法识别时）",
	"Import credentials whose JSON has `disabled: true` (import)":
		"导入 JSON 中标记为 `disabled: true` 的凭据（import）",
	"migrate source: local SQLite + env vars (required for `migrate`)":
		"迁移来源：本地 SQLite + 环境变量（`migrate` 必需）",
	"Capture env-var API keys for providers not yet on broker (migrate)":
		"为尚未加入 broker 的供应商采集环境变量中的 API 密钥（migrate）",
	"Also upload OAuth from local SQLite during migrate (default skips them)":
		"迁移时同时上传本地 SQLite 中的 OAuth（默认跳过）",
	"Print actions without executing (import / login --via / migrate)":
		"只打印将要执行的操作（import / login --via / migrate）",
	"Trust forwarded peer IP headers from a reverse proxy (serve); off by default.":
		"信任反向代理转发来的对端 IP 头（serve）；默认关闭。",
	"Output JSON (token/status/check)": "以 JSON 输出（token/status/check）",
	"Regenerate the gateway bearer token (token)": "重新生成网关 bearer 令牌（token）",
	"Disable inbound bearer-token auth (serve). Useful when bound to loopback — any caller is allowed.":
		"关闭入站 bearer 令牌认证（serve）。绑定回环地址时有用——任何调用方都会被允许。",
	"JSON file of scoped client tokens (serve), each limited to its own models and broker accounts; re-read while serving":
		"作用域客户端令牌的 JSON 文件（serve），每个令牌仅限其自身的模型与 broker 账号；服务期间会重新读取",
	"For `check`: additionally probe each credential against its provider's chat-completion endpoint. Slower; consumes a tiny amount of quota per credential.":
		"对 `check`：额外用每个凭据探测其供应商的对话补全端点。较慢，且每个凭据会消耗少量配额。",
	"export or import": "export 或 import",
	"File written by `omp auth export`, or - for stdin (import)":
		"由 `omp auth export` 写出的文件，或用 - 表示标准输入（import）",
	"Model selectors (provider/model or fuzzy id, e.g. opus)": "模型选择器（provider/model 或模糊 id，如 opus）",
	"Requests per model (default: 10 chat, 5 prefill/generation, 9 mix); with --detailed, per phase (default: 4)":
		"每个模型的请求数（默认：对话 10、预填充/生成 5、混合 9）；配合 --detailed 时按阶段计算（默认 4）",
	"Max output tokens per request (default: chat 512, prefill 64, generation 2048, cache 64)":
		"每个请求的最大输出令牌数（默认：对话 512、预填充 64、生成 2048、缓存 64）",
	"Custom prompt text (chat and generation profiles only)": "自定义提示文本（仅对话与生成配置）",
	"Benchmark workload (default chat): chat (balanced, measures TTFT and tok/s), prefill (large cache-busted input, measures input processing), generation (long forced output, measures sustained decode), mix (rotates all three)":
		"基准负载（默认 chat）：chat（均衡，测量 TTFT 与 tok/s）、prefill（大量破除缓存的长输入，测量输入处理）、generation（强制长输出，测量持续解码）、mix（三者轮换）",
	"Synthetic input size for prefill challenges (default: 32768, capped by the context window)":
		"预填充压测的合成输入大小（默认 32768，受上下文窗口限制）",
	"Run single-user (1 concurrent), parallel (--par concurrent, with aggregate tok/s and scaling), and prefill phases per model":
		"为每个模型运行单用户（并发 1）、并行（--par 指定的并发数，含汇总 tok/s 与扩展性）以及预填充阶段",
	"Service tier applied per model family (default: configured `tier.*` settings; `none` omits it)":
		"按模型家族应用的服务等级（默认使用已配置的 `tier.*` 设置；`none` 表示不带该字段）",
	"Select the Nth OAuth account (1-based, as listed by omp token PROVIDER --list)":
		"选择第 N 个 OAuth 账号（从 1 起，与 omp token PROVIDER --list 的列表一致）",
	"Execute runs with N parallel queries/requests (default: 4); --detailed's parallel phase width":
		"以 N 个并行查询/请求执行（默认 4）；即 --detailed 并行阶段的宽度",
	"Run independent cold/warm prompt-cache pairs (not supported for openai-codex-responses)":
		"运行独立的冷/热提示缓存配对（openai-codex-responses 不支持）",
	"Stable prompt prefix file for --cache": "--cache 使用的稳定提示前缀文件",
	"Stable prefix byte budget for --cache (default: 8192)": "--cache 的稳定前缀字节预算（默认 8192）",
	"Cold/warm pairs per model for --cache (default: 1)": "--cache 下每个模型的冷/热配对数量（默认 1）",
	"Concurrent cache pairs for --cache; each pair remains sequential (default: 1)":
		"--cache 的并发缓存配对数；每对内部仍按顺序执行（默认 1）",
	"Port to listen on": "监听端口",
	"Require the extension to present this token": "要求扩展出示此令牌",
	"Extension install directory (install; default ~/.omp/browser-relay/extension)":
		"扩展安装目录（install；默认 ~/.omp/browser-relay/extension）",
	"Don't gather controllable tabs into an 'omp' tab group": "不要将可控标签页归入 'omp' 标签组",
	"Log relay traffic summaries to stderr": "将中继流量摘要输出到 stderr",
	'What to detect and fix (e.g. "ts errors"); a discovery agent works out the command':
		'要检测并修复什么（如 "ts errors"）；由发现代理推导出具体命令',
	"Maximum number of file-disjoint subagents": "文件互不重叠的子代理数量上限",
	"Subagent model selector": "子代理模型选择器",
	"Also run configured project test suites": "同时运行已配置的项目测试套件",
	"Run every discovered checker without the interactive picker": "运行所有已发现的检查器，不弹出交互选择",
	"Recording to upload (default: the newest /record capture)": "要上传的录制（默认：最新的 /record 录制）",
	"Clip title (defaults to the recording's title)": "片段标题（默认为录像标题）",
	"Clip description shown under the player": "播放器下方显示的片段描述",
	"Stream server base URL (overrides stream.serverUrl)": "直播服务器基础 URL（覆盖 stream.serverUrl）",
	"list (default) or link": "list（默认）或 link",
	"Host instance ID or PID (link only)": "主机实例 ID 或 PID（仅 link）",
	"Request a view-only link instead of control access (link only)": "请求只读链接而非控制权限（仅 link）",
	"Emit deterministic machine-readable JSON": "输出确定性的机器可读 JSON",
	"Push after committing": "提交后推送",
	"Preview without committing": "仅预览，不提交",
	"Skip changelog updates": "跳过变更日志更新",
	"Use legacy deterministic pipeline": "使用旧版确定性流程",
	"Additional context for the model": "提供给模型的额外上下文",
	"Override model selection": "覆盖模型选择",
	"Target shell": "目标 shell",
	"Files or glob patterns to compress": "要压缩的文件或 glob 模式",
	"Write the approved text here instead of stdout (single file)": "将确认后的文本写入此文件而非标准输出（单文件）",
	"Overwrite each source file with its approved text": "用确认后的文本覆盖每个源文件",
	"Maximum drafts per file before giving up": "每个文件放弃前的最大草稿次数",
	"Files compressed concurrently": "并发压缩的文件数",
	"Model selector": "模型选择器",
	"Config action": "配置操作",
	"Setting key": "设置键",
	"Value (for set/reset)": "值（用于 set/reset）",
	'With list: only the keys the "global" (config.yml in the agent dir) or "project" (<cwd>/.omp) layer sets, as written':
		'配合 list：仅显示 "global"（agent 目录下的 config.yml）或 "project"（<cwd>/.omp）层设置过的键，保持原样',
	"Model selector (provider/model or fuzzy id). Defaults to the configured default model.":
		"模型选择器（provider/model 或模糊 id）。默认为已配置的默认模型。",
	"Model selector (same syntax as --model on omp)": "模型选择器（语法同 omp 的 --model）",
	"Number of random session ids to try": "尝试的随机会话 id 数量",
	"Maximum concurrent credential resolutions": "并发解析凭据的数量上限",
	"Send one live benchmark request per OAuth account": "为每个 OAuth 账号发送一次实时基准请求",
	"Load an extra config.yml-style overlay for this run (repeatable)":
		"为本次运行额外加载一个 config.yml 风格的覆盖层（可重复）",
	"What to find, in plain language": "要找什么，用自然语言描述",
	"Directory or omp:// docs scope to search": "要搜索的目录或 omp:// 文档范围",
	"Extra lexical keyword (repeatable, or comma-separated)": "额外的关键词（可重复或逗号分隔）",
	"Include dot-files and dot-folders": "包含点文件与点目录",
	"Emit the full result as JSON": "以 JSON 输出完整结果",
	"Suppress progress on stderr": "不在 stderr 显示进度",
	"Render only tool, composer, or segment surfaces (repeatable; default: all)":
		"仅渲染工具、输入框或状态栏片段（可重复；默认全部）",
	"Render a single tool by name": "按名称渲染单个工具",
	"Render a single composer shape by name": "按名称渲染单个输入框样式",
	"Render a single status-line segment by name": "按名称渲染单个状态栏片段",
	"Render only the given lifecycle state(s)": "仅渲染指定的生命周期状态",
	"Render width in columns": "渲染宽度（列）",
	"Render the expanded variant of each renderer": "渲染各渲染器的展开形态",
	"Strip ANSI styling from the output": "从输出中去除 ANSI 样式",
	"Capture the rendered output as PNG screenshot(s) via VHS instead of printing ANSI (requires vhs)":
		"改用 VHS 将渲染结果截图保存为 PNG，而不打印 ANSI（需要 vhs）",
	"Screenshot output path (with --screenshot); suffixed per image when split across multiple":
		"截图输出路径（配合 --screenshot）；拆分为多张时按图追加后缀",
	"Screenshot font family (default: JetBrainsMono Nerd Font)": "截图字体（默认 JetBrainsMono Nerd Font）",
	"Screenshot font size in points (default: 18)": "截图字号（磅，默认 18）",
	"Apply changes (default is dry-run)": "实际应用更改（默认仅演练）",
	"Agent directory to maintain": "要维护的 agent 目录",
	"Sweep unreferenced blobs": "清理未被引用的 blob",
	"Archive cold sessions": "归档冷会话",
	"Checkpoint history/model database WAL files": "检查点化历史/模型数据库的 WAL 文件",
	"Prune dangling session markers/breadcrumbs and old debug reports and collab replicas":
		"清理悬空的会话标记/面包屑，以及旧的调试报告与协作副本",
	"Store idle sessions with filesystem compression in place (APFS, NTFS)":
		"对空闲会话就地使用文件系统压缩存储（APFS、NTFS）",
	"Strip provider replay data (signatures, encrypted reasoning, cached responses) from idle sessions":
		"从空闲会话中移除供应商重放数据（签名、加密推理、缓存响应）",
	"Minimum session age before archiving": "归档前的最小会话存在时长",
	"Always keep this many newest sessions active": "始终保留最近这么多会话为活跃状态",
	"Always keep this many newest sessions per cwd active": "每个工作目录始终保留最近这么多会话为活跃状态",
	"Always keep this many newest debug reports and collab replicas": "始终保留最近这么多调试报告与协作副本",
	"Minimum debug report/collab replica age before pruning":
		"清理调试报告/协作副本前的最大保留时长上限（最小存在时长）",
	"Minimum idle days before compressing a session": "压缩会话前的最小空闲天数",
	"Minimum idle days before stripping a session": "清理会话数据前的最小空闲天数",
	"Pin the view to one commit (any revision, e.g. HEAD~2 or a sha)":
		"将视图固定到某个提交（任意修订，如 HEAD~2 或 sha）",
	"Run in another directory instead of the current one": "在另一个目录而非当前目录运行",
	"Regex pattern to search for": "要搜索的正则模式",
	"Directory or file to search": "要搜索的目录或文件",
	"Filter files by glob pattern": "按 glob 模式过滤文件",
	"Max matches": "最大匹配数",
	"Context lines": "上下文行数",
	"Output file names only": "仅输出文件名",
	"Output match counts per file": "输出每个文件的匹配计数",
	"Include files excluded by .gitignore": "包含被 .gitignore 排除的文件",
	"list (default), clean, or push": "list（默认）、clean 或 push",
	"Number of recent issues to show (list)": "显示的最近问题数量（list）",
	"Filter by tool name (list, clean)": "按工具名过滤（list、clean）",
	"Output as JSON": "以 JSON 输出",
	"Delete a single grievance by id (clean)": "按 id 删除单条抱怨记录（clean）",
	"Delete every grievance (clean)": "删除所有抱怨记录（clean）",
	"Maximum turns per model; turn N issues N actions (default: 24)":
		"每个模型的最大轮次；第 N 轮发出 N 个动作（默认 24）",
	"Character-array length, even, 8-26 (default: 24)": "字符数组长度，偶数，8-26（默认 24）",
	"Max output tokens per turn (default: 32768)": "每轮最大输出令牌数（默认 32768）",
	"Longest accepted cat sound in nya{1,N} (default: 8)": "最多接受的猫叫声长度 nya{1,N}（默认 8）",
	"Models benchmarked concurrently (default: 4)": "并发基准测试的模型数（默认 4）",
	"status (default), doctor, probe, or purge": "status（默认）、doctor、probe 或 purge",
	"Output one JSON document": "输出单个 JSON 文档",
	"Apply purge deletions (default is dry-run)": "实际执行清除删除（默认仅演练）",
	"Purge all entries instead of expired entries only": "清除所有条目，而非仅清除过期条目",
	"Project directory (default: current directory)": "项目目录（默认当前目录）",
	"External health probe timeout in seconds": "外部健康探测超时（秒）",
	"Local path, npm spec, or marketplace ref (e.g. ./my-ext, my-pkg@1.2.3, name@marketplace)":
		"本地路径、npm 规格或市场引用（如 ./my-ext、my-pkg@1.2.3、name@marketplace）",
	"Force install": "强制安装",
	"Show actions without applying changes": "只显示将要执行的操作，不实际应用",
	'Install scope: "user" (default) or "project" (marketplace installs only)':
		'安装范围："user"（默认）或 "project"（仅限市场安装）',
	"Collab link shared by the host (/collab)": "主机分享的协作链接（/collab）",
	"AI coding assistant": "AI 编程助手",
	"Messages to send (prefix files with @)": "要发送的消息（文件用 @ 前缀）",
	'Model to use (fuzzy match: "opus", "gpt-5.2"; exact with a provider: "openai/gpt-5.2")':
		'要使用的模型（模糊匹配："opus"、"gpt-5.2"；带供应商为精确匹配："openai/gpt-5.2"）',
	"Smol/fast model for lightweight tasks (or PI_SMOL_MODEL env)":
		"轻量任务用的快速小模型（或 PI_SMOL_MODEL 环境变量）",
	"Slow/reasoning model for thorough analysis (or PI_SLOW_MODEL env)":
		"深入分析用的慢速/推理模型（或 PI_SLOW_MODEL 环境变量）",
	"Plan model for architectural planning (or PI_PLAN_MODEL env)": "架构规划用的计划模型（或 PI_PLAN_MODEL 环境变量）",
	"Start fresh in goal mode (interactive only; bypasses autoResume; no positional prompt, startup plan mode, or explicit resume)":
		"直接以目标模式启动（仅交互式；跳过 autoResume；不接受位置提示、启动计划模式或显式恢复）",
	"Switch from the active model to a fast/cheap model at the first edit/write after the plan's todo list exists (default off; see prewalk.enabled)":
		"计划待办列表生成后，在第一次编辑/写入时从当前模型切换到快速廉价模型（默认关闭；见 prewalk.enabled）",
	"Disable prewalk, including prewalk.auto, even if prewalk.enabled is set":
		"禁用 prewalk（含 prewalk.auto），即使已设置 prewalk.enabled",
	'Target model for prewalk (default the "smol" role)': 'prewalk 的目标模型（默认为 "smol" 角色）',
	"Force read-only plan mode at start, auto-approve the plan on the model's first resolve call, then switch to --plan-yolo-into to implement it":
		"启动时强制进入只读计划模式，在模型首次 resolve 调用时自动批准计划，然后切换到 --plan-yolo-into 实施",
	'Target model for plan-yolo execution (default the "smol" role)': 'plan-yolo 执行的目标模型（默认为 "smol" 角色）',
	"Provider to use (legacy; prefer --model)": "要使用的供应商（旧参数；建议用 --model）",
	"API key (defaults to env vars)": "API 密钥（默认取自环境变量）",
	"System prompt (default: coding assistant prompt)": "系统提示词（默认：编程助手提示词）",
	"Handlebars system prompt template (mutually exclusive with --system-prompt)":
		"Handlebars 系统提示词模板（与 --system-prompt 互斥）",
	"Append text or file contents to the system prompt": "向系统提示词追加文本或文件内容",
	"Allow starting in ~ without auto-switching to a temp dir": "允许在 ~ 目录启动，而不自动切换到临时目录",
	"Use an isolated profile for auth, sessions, settings, and caches": "为认证、会话、设置与缓存使用独立的 profile",
	"Create a shell shortcut for the selected profile and exit": "为所选 profile 创建 shell 快捷方式后退出",
	"Directory to start in (overrides the launch cwd)": "启动目录（覆盖启动时的工作目录）",
	"Output mode: text (default), json, rpc, or rpc-ui": "输出模式：text（默认）、json、rpc 或 rpc-ui",
	"Add a workspace directory beyond the working directory (repeatable)":
		"在工作目录之外额外添加一个工作区目录（可重复）",
	"Non-interactive mode: process prompt and exit": "非交互模式：处理提示后退出",
	"Continue previous session": "继续上一个会话",
	"Resume a session (by ID prefix, path, or picker if omitted)": "恢复会话（按 ID 前缀、路径，省略时弹出选择器）",
	"Resume a session as --resume does, then go on with what its last process left unfinished (the interrupted turn and the subagents it was running)":
		"按 --resume 恢复会话，然后继续其上一个进程未完成的部分（被中断的对话轮次及其运行中的子代理）",
	"Import a Claude Code session into OMP": "将 Claude Code 会话导入 OMP",
	"Import a Codex session into OMP": "将 Codex 会话导入 OMP",
	"Directory for session storage and lookup": "会话存储与查找目录",
	"Don't save session (ephemeral)": "不保存会话（临时）",
	"Disable all built-in tools": "禁用所有内置工具",
	"Disable LSP tools, formatting, and diagnostics": "禁用 LSP 工具、格式化与诊断",
	"Disable PTY-based interactive bash execution": "禁用基于 PTY 的交互式 bash 执行",
	"Comma-separated list of tools to enable (default: all)": "要启用的工具，逗号分隔（默认全部）",
	"OpenAI service tier for this session (none omits service_tier)":
		"本会话的 OpenAI 服务等级（none 表示不带 service_tier）",
	"Hide thinking blocks in TUI output (display only, does not disable model thinking)":
		"在 TUI 输出中隐藏思考块（仅显示层，不关闭模型思考）",
	"Enable the advisor runtime (passively reviews each turn and injects notes)":
		"启用顾问运行时（被动审查每一轮并注入笔记）",
	"Print mode: before exiting, wait for this run's background jobs and wake the session with each result (async.printWake); no time limit unless --max-time is set":
		"打印模式：退出前等待本次运行的后台任务，并以每个结果唤醒会话（async.printWake）；除非设置 --max-time，否则不限时",
	"Use a private scratchpad while disabling supported GPT, Claude, and Gemini reasoning (at your own risk: providers have flagged this request shape as abuse)":
		"使用私有暂存区并关闭受支持的 GPT、Claude 与 Gemini 推理（风险自负：供应商已将这种请求形态标记为滥用）",
	"Load a hook/extension file (can be used multiple times)": "加载 hook/扩展文件（可多次使用）",
	"Load an extension file (can be used multiple times)": "加载扩展文件（可多次使用）",
	"Disable extension discovery (explicit -e paths still work)": "禁用扩展发现（显式 -e 路径仍然有效）",
	"Disable skills discovery and loading": "禁用技能发现与加载",
	"Comma-separated glob patterns to filter skills (e.g., git-*,docker)":
		"用于过滤技能的 glob 模式，逗号分隔（如 git-*、docker）",
	"Disable rules discovery and loading": "禁用规则发现与加载",
	"Disable context files (AGENTS.md, CLAUDE.md, ...)": "禁用上下文文件（AGENTS.md、CLAUDE.md 等）",
	"Export session file to HTML and exit": "将会话文件导出为 HTML 后退出",
	"Disable title auto-generation": "禁用标题自动生成",
	"Milliseconds between spinner frames (default 80; 0 = static). Overrides tui.spinnerInterval and PI_SPINNER_INTERVAL for this run":
		"加载动画帧间隔（毫秒，默认 80；0 表示静态）。本次运行覆盖 tui.spinnerInterval 与 PI_SPINNER_INTERVAL",
	"Repaint ceiling in frames per second (default 30; 1-120); keystroke echo keeps 30 fps. Overrides tui.maxFps and PI_MAX_FPS for this run":
		"重绘帧率上限（默认 30；1-120）；按键回显保持 30 帧。本次运行覆盖 tui.maxFps 与 PI_MAX_FPS",
	"Animation preset: full (default), reduced (250 ms spinners, no shimmer or blink), or none (static). Overrides tui.motion and PI_MOTION for this run":
		"动画预设：full（默认）、reduced（250 毫秒加载动画，无流光与闪烁）或 none（静态）。本次运行覆盖 tui.motion 与 PI_MOTION",
	"With --mode rpc or rpc-ui: run extensions headless (rpc-ui tool UI remains enabled)":
		"配合 --mode rpc 或 rpc-ui：无头运行扩展（rpc-ui 的工具界面仍启用）",
	"Include thinking blocks in print mode text output": "在打印模式的文本输出中包含思考块",
	"Stop the session after this duration (e.g., 600, 10m, 1h)": "达到此时长后停止会话（如 600、10m、1h）",
	"Warn once when the session's spend, subagents included, reaches this many USD":
		"当会话花费（含子代理）达到该美元数时警告一次",
	"Stop sending model requests once the session's spend reaches this many USD; requests already in flight can finish past it (print mode exits 3)":
		"当会话花费达到该美元数后停止发送模型请求；已在途的请求可以完成（打印模式退出码 3）",
	"Auto-approve all tool calls (skip approval prompts)": "自动批准所有工具调用（跳过审批提示）",
	"Override tools.approvalMode for this session (always-ask|always-ask-cached|write|yolo)":
		"覆盖本会话的 tools.approvalMode（always-ask|always-ask-cached|write|yolo）",
	"OAuth provider id (e.g. anthropic, openai-codex); omit to pick interactively":
		"OAuth 供应商 id（如 anthropic、openai-codex）；省略则交互选择",
	"ls (default) | find | refresh | <provider>": "ls（默认）| find | refresh | <供应商>",
	"Filter/search substring, or provider name (required for find)": "过滤/搜索子串，或供应商名称（find 时必需）",
	"Catalog kind to list": "要列出的目录类型",
	"Load an extension file before listing (repeatable)": "列出前先加载一个扩展文件（可重复）",
	"Recording to play (default: the newest /record capture)": "要播放的录制（默认：最新的 /record 录制）",
	"Playback speed multiplier (default: 1)": "播放速度倍率（默认 1）",
	"Cap pauses between frames to this many seconds": "帧间停顿最长截断到该秒数",
	"Plugin action": "插件操作",
	"Packages, paths, or plugin names": "包、路径或插件名",
	"Attempt to fix issues (doctor)": "尝试修复问题（doctor）",
	"Show actions without applying changes (install, uninstall, link, upgrade of marketplace plugins)":
		"只显示将要执行的操作，不实际应用（install、uninstall、link、市场插件升级）",
	"Operate on local plugin directory": "操作本地插件目录",
	"Enable a feature": "启用某项功能",
	"Disable a feature": "禁用某项功能",
	"Set plugin config (key=value)": "设置插件配置（key=value）",
	'Install scope: "user" (default) or "project"': '安装范围："user"（默认）或 "project"',
	"list (default), info, logs, stop, kill, or restart": "list（默认）、info、logs、stop、kill 或 restart",
	"Process name (required for every action except list)": "进程名（除 list 外的操作均必需）",
	"Also list other projects and exited global services (list)": "同时列出其他项目与已退出的全局服务（list）",
	"Emit machine-readable JSON": "输出机器可读 JSON",
	"Static listing instead of the interactive monitor (list)": "使用静态列表而非交互式监视器（list）",
	"Target another project directory instead of the current one": "操作另一个项目目录而非当前目录",
	"Target a machine-global service scope (e.g. browser-relay)": "操作机器级全局服务范围（如 browser-relay）",
	"Keep streaming new output (logs)": "持续输出新内容（logs）",
	"Read from the beginning instead of the tail (logs)": "从头读取而非从尾部读取（logs）",
	"Number of log lines, max 1000 (logs)": "日志行数，最多 1000（logs）",
	"Regex filter applied to log lines (logs)": "应用于日志行的正则过滤（logs）",
	"Grace period in seconds before hard kill (stop)": "强制终止前的宽限期（秒，stop）",
	"Path, URL, or internal URI to read (append :sel for line ranges or raw mode, e.g. src/foo.ts:50-100)":
		"要读取的路径、URL 或内部 URI（追加 :sel 指定行范围或原始模式，如 src/foo.ts:50-100）",
	"Render width in columns (default: terminal width)": "渲染宽度（列，默认终端宽度）",
	"Viewport height in rows (default: terminal height)": "视口高度（行，默认终端高度）",
	"Print phase timings and emitted byte counts to stderr": "将各阶段耗时与输出字节数打印到 stderr",
	"Benchmark N extra full clear-scrollback repaints (the /tree navigation frame)":
		"额外基准测试 N 次全量清除回滚区的重绘（/tree 导航帧）",
	"Suppress transcript output (benchmark runs)": "抑制会话记录输出（基准运行）",
	"Text to speak (or use --file)": "要朗读的文本（或使用 --file）",
	"Voice id": "音色 id",
	"Speaking rate, 0.5–2.5 (1 = normal; default: tts.localSpeed)": "语速，0.5–2.5（1 为正常；默认 tts.localSpeed）",
	"Local TTS model key": "本地 TTS 模型键",
	"Read the text to speak from this file": "从该文件读取要朗读的文本",
	"Write WAV to this path instead of playing": "将 WAV 写入此路径而不播放",
	"pack, unpack, moved, or lease": "pack、unpack、moved 或 lease",
	"Session .jsonl path or id (pack, moved); archive path (unpack); session ids (lease)":
		"会话 .jsonl 路径或 id（pack、moved）；归档路径（unpack）；会话 id（lease）",
	"Archive file to write (pack)": "要写出的归档文件（pack）",
	"Directory the session continues in on this machine (unpack)": "会话在本机继续的目录（unpack）",
	"Where the session went, e.g. a machine name (moved)": "会话去向，如机器名（moved）",
	"Print {held, unknown} session id lists as JSON (lease)": "以 JSON 打印 {held, unknown} 会话 id 列表（lease）",
	"Share viewer/upload base used by /share (encrypted blob upload + viewer; links are <base>/<id>#<key>)":
		"/share 使用的查看/上传基础地址（加密 blob 上传 + 查看器；链接形如 <base>/<id>#<key>）",
	"Where /share uploads the encrypted session blob": "/share 上传加密会话 blob 的位置",
	"Upload to the share server (no GitHub account needed; avoids gist API rate limits)":
		"上传到分享服务器（无需 GitHub 账号；避开 gist API 速率限制）",
	"Push to a secret gist (needs authenticated gh), falling back to the share server":
		"推送到私密 gist（需要已认证的 gh），失败时回退到分享服务器",
	"Run the secret obfuscator over /share snapshots before upload (uses the secrets.* config)":
		"上传前对 /share 快照运行密钥混淆（使用 secrets.* 配置）",
	"Optional component to install": "要安装的可选组件",
	"Check if dependencies are installed": "检查依赖是否已安装",
	"Output status as JSON": "以 JSON 输出状态",
	"Session id (prefix) or path to a session .jsonl": "会话 id（前缀）或会话 .jsonl 路径",
	"Upload to a secret GitHub gist instead of the share server": "上传到私密 GitHub gist 而非分享服务器",
	"Set working directory for commands": "为命令设置工作目录",
	"Timeout per command in milliseconds": "每条命令的超时（毫秒）",
	"Skip sourcing snapshot from user shell": "不来源化用户 shell 的快照",
	"Skill action": "技能操作",
	"Specs, names, directories, or action arguments": "规格、名称、目录或操作参数",
	"Use the user-global skills.json (install/update/uninstall)": "使用用户级 skills.json（install/update/uninstall）",
	"Install or update skills that ship scripts without asking": "安装或更新带有脚本的技能时不再询问",
	"Output JSON (search, info, token, list)": "以 JSON 输出（search、info、token、list）",
	"Search order": "搜索顺序",
	"Publishing scope (default: your Stencil username)": "发布范围（默认：你的 Stencil 用户名）",
	"Dist-tag for the published version": "已发布版本的 dist-tag",
	"Pack and validate without publishing": "打包并校验，不发布",
	"Publish even when credential-shaped strings are found": "即使发现形似凭据的字符串也发布",
	"Registry base URL (overrides skills.registryUrl)": "注册表基础 URL（覆盖 skills.registryUrl）",
	"Reverse a yank or deprecation": "撤回一次 yank 或弃用",
	"Restrict a new token to a package (repeatable)": "将新令牌限制到某个包（可重复）",
	"Token lifetime in days": "令牌有效期（天）",
	"SSH action": "SSH 操作",
	"Host name or arguments": "主机名或参数",
	"Host address": "主机地址",
	Username: "用户名",
	"Port number": "端口号",
	"Identity key path": "身份密钥路径",
	"Host description": "主机描述",
	"Enable compatibility mode": "启用兼容模式",
	"Config scope (project|user)": "配置范围（project|user）",
	"Port for the dashboard server": "面板服务器端口",
	"Host to bind": "绑定的主机",
	"Output stats as JSON": "以 JSON 输出统计",
	"Print summary to console": "在控制台打印摘要",
	"Stream title (defaults to the current directory name)": "直播标题（默认当前目录名）",
	"Use the line-oriented console instead of the interactive TUI": "使用行式控制台而非交互式 TUI",
	"Action to perform": "要执行的操作",
	"Model key (`smollm` = word completion), or all": "模型键（`smollm` 表示单词补全），或 all",
	"Provider ID (e.g. anthropic, openai)": "供应商 ID（如 anthropic、openai）",
	"Output the raw credential value without parsing nested JSON structures": "输出原始凭据值，不解析嵌套的 JSON 结构",
	"Force refresh the OAuth token even if it has not expired": "即使 OAuth 令牌未过期也强制刷新",
	"Select the Nth OAuth account (1-based) in stored order instead of the round-robin default":
		"按存储顺序选择第 N 个 OAuth 账号（从 1 起），而非默认轮询",
	"List the provider's OAuth accounts (index + identity) and exit": "列出供应商的 OAuth 账号（序号 + 身份）后退出",
	"File path, or literal text when it does not name a file": "文件路径；若不是文件名则按字面文本处理",
	"TTSR action": "TTSR 操作",
	"Inline snippet text to test (ttsr test) or directory to scan (ttsr scan)":
		"要测试的内联片段文本（ttsr test）或要扫描的目录（ttsr scan）",
	"Snippet file path, or - for stdin (ttsr test)": "片段文件路径，或用 - 表示标准输入（ttsr test）",
	"Rule markdown file to test in isolation (skips project rule loading)":
		"单独测试的规则 markdown 文件（跳过项目规则加载）",
	"Match source: text, thinking, or tool (inferred from --file when omitted)":
		"匹配来源：text、thinking 或 tool（省略时从 --file 推断）",
	"Tool name when source is tool (e.g. edit, write); defaults to edit":
		"当来源为 tool 时的工具名（如 edit、write）；默认 edit",
	"Candidate file path for scope/glob matching and AST language inference":
		"用于 scope/glob 匹配与 AST 语言推断的候选文件路径",
	"Agent name to evaluate rule `agents` scoping as (ttsr test); defaults to main":
		"用于评估规则 `agents` 作用域的代理名（ttsr test）；默认 main",
	"Show every evaluated rule, not just triggered ones": "显示每一条被评估的规则，而非仅触发的规则",
	"Include files excluded by .gitignore (ttsr scan)": "包含被 .gitignore 排除的文件（ttsr scan）",
	"Maximum file size to scan in bytes; 0 disables the limit (ttsr scan)":
		"扫描的最大文件大小（字节）；0 表示不限制（ttsr scan）",
	"Force update": "强制更新",
	"Check for updates without installing": "检查更新但不安装",
	"Update installed plugins": "更新已安装的插件",
	"Switch to the canary channel and update": "切换到 canary 通道并更新",
	"Switch back to the stable channel": "切回 stable 通道",
	"Optional subcommand to execute": "要执行的子命令（可选）",
	"Saved reset to spend with `reset`: <provider>/<credential id> as `omp usage reset` lists it":
		"配合 `reset` 使用的已保存重置：<provider>/<credential id>，格式与 `omp usage reset` 列出的一致",
	"Output usage reports as JSON": "以 JSON 输出用量报告",
	"Only show usage for this provider id (e.g. anthropic)": "仅显示该供应商 id 的用量（如 anthropic）",
	"Redact account emails/ids (shortest unique prefix) for sharing screenshots":
		"脱敏账号邮箱/id（最短唯一前缀）以便分享截图",
	"Show recorded usage-limit history (hourly snapshots) instead of a live snapshot":
		"显示已记录的用量上限历史（每小时快照）而非实时快照",
	"History window in days (with --history or clients)": "历史窗口天数（配合 --history 或 clients）",
	"Load an extension file before fetching usage (repeatable)": "获取用量前先加载扩展文件（可重复）",
	"Search query text": "搜索查询文本",
	"Catalog model selector": "目录模型选择器",
	"Recency filter": "时间新鲜度过滤",
	"Max results to return": "返回结果数上限",
	"Render condensed output": "渲染精简输出",
	"list (default), clear, or add": "list（默认）、clear 或 add",
	"Worktree path (add)": "工作树路径（add）",
	"Commit-ish to check out (add)": "要检出的提交（add）",
	"Repository/base directory (add)": "仓库/基础目录（add）",
	"Create a new branch (add)": "创建新分支（add）",
	"Create or reset a branch (add)": "创建或重置分支（add）",
	"Detach HEAD (add)": "分离 HEAD（add）",
	"Suppress add output": "抑制 add 的输出",
	"Clear every entry, including live PR-checkout worktrees (clear)": "清除所有条目，包括活跃的 PR 检出工作树（clear）",
	"Print what would be removed without touching the filesystem (clear)":
		"只打印将要移除的内容，不改动文件系统（clear）",
};

export default zhCNCliText;
