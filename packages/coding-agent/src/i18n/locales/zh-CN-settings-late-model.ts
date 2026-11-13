/**
 * Chinese labels and descriptions for settings added after the upstream
 * dictionary snapshot (part 2: model service tiers, retries, providers).
 */
export const settingsZhCNLateModel: Readonly<Record<string, string>> = {
	"Prefer concise responses (default)": "偏好简洁回复（默认）",
	"Balance brevity and detail": "兼顾简洁与细节",
	Ultrafast: "超快",
	"Lowest-latency serving; OpenAI API preview access, or Codex and relay models that advertise it":
		"最低延迟服务；需要 OpenAI API 预览权限，或声明支持该能力的 Codex/中继模型",
	'Processing tier for Claude requests. `priority` realizes fast mode (`speed: "fast"`) on supported direct Anthropic models; ignored on Bedrock/Vertex Claude and via OpenRouter.':
		'Claude 请求的处理层级。`priority` 在支持的 Anthropic 直连模型上启用快速模式（`speed: "fast"`）；在 Bedrock/Vertex 上的 Claude 及经 OpenRouter 时忽略。',
	'Fast mode (`speed: "fast"`) on supported direct Claude models; ignored on Bedrock/Vertex':
		'在支持的 Claude 直连模型上使用快速模式（`speed: "fast"`）；在 Bedrock/Vertex 上忽略',
	"Ultrafast serving (OpenAI family, where available)": "超快服务（OpenAI 系列，在可用时）",
	"Maximum wait between retries, in ms. When the provider asks us to wait longer than this and no credential or model fallback succeeds, the request fails fast instead of sleeping (e.g. 3-hour Anthropic rate-limit windows). 0 disables the ceiling — to let the session auto-resume through provider-stated quota resets.":
		"两次重试之间的最大等待时间（毫秒）。当供应商要求等待超过该值且没有可用的凭据或模型回退时，请求会快速失败而不是休眠（例如 Anthropic 的 3 小时速率限制窗口）。0 取消上限——让会话在供应商声明的配额重置后自动恢复。",
	"Wait For Usage Reset": "等待用量重置",
	"When a provider reports usage-limit exhaustion with a reset time (5-hour or weekly quota windows on any provider), sleep until the reset instead of failing fast past retry.maxDelayMs. Waits are abortable (Esc) but also hold subagents, so leave off for unattended runs.":
		"当供应商报告用量耗尽并给出重置时间（任何供应商的 5 小时或每周配额窗口）时，休眠到重置，而不是在超过 retry.maxDelayMs 时快速失败。等待可中止（Esc），但也会阻塞子代理，因此无人值守运行时建议关闭。",
	"Allow retry recovery to switch to models in retry.fallbackChains after provider errors. Independent of Auto-Promote Context":
		"允许重试恢复在供应商错误后切换到 retry.fallbackChains 中的模型。与“自动提升上下文”相互独立",
	"Fallback Trigger": "回退触发条件",
	"Which failed requests may switch to a configured fallback model": "哪些失败的请求可以切换到配置的回退模型",
	"Any error": "任何错误",
	"Every provider error may switch models": "任何供应商错误都可能切换模型",
	"Usage limits only": "仅用量限制",
	"Switch only on a usage limit; retry other errors on the same model, then surface them":
		"仅在用量限制时切换；其他错误在同一模型上重试后再报告",
	"All but usage limits": "除用量限制外的所有错误",
	"Wait out or surface a usage limit; switch on other errors": "用量限制时等待或直接报告；其他错误时切换",
	"Rate Limit Walks Chain": "速率限制时沿链回退",
	"On a rate limit, do not hold the retry.fallbackChains walk for a turn whose thinking is signed by the failing model. Off (the default), such a turn keeps retrying the rate-limited model until retry.maxRetries is spent before the chain is reached.":
		"遇到速率限制时，对于思考内容由失败模型签名的轮次，不阻止 retry.fallbackChains 链式回退。关闭（默认）时，此类轮次会持续重试被限流的模型，直到 retry.maxRetries 用完才进入回退链。",
	'JSON object mapping model roles, model selectors ("provider/model-id"), or provider wildcards ("provider/*") to ordered fallback selectors, e.g. {"default":["openai/gpt-4o-mini"],"google-antigravity/*":["google/*","google-vertex/*"]}. Model-oriented keys apply whenever that model/provider is active, regardless of role; a "provider/*" entry keeps the failing model\'s id and swaps the provider. An id-prefixed wildcard ("openrouter/google/*") re-prefixes the failing model\'s bare id (google-antigravity/gemini-x -> openrouter/google/gemini-x) and, used as a key, matches only that provider\'s ids under the prefix. A fallback entry may carry an explicit thinking suffix ("provider/model:low", ":high", ":max", ":off"); a bare entry inherits the failing turn\'s effort, and "provider/*" entries always inherit.':
		'JSON 对象，将模型角色、模型选择器（"provider/model-id"）或供应商通配符（"provider/*"）映射到有序的回退选择器，例如 {"default":["openai/gpt-4o-mini"],"google-antigravity/*":["google/*","google-vertex/*"]}。以模型为键的条目在该模型/供应商处于活动状态时生效，与角色无关；"provider/*" 条目保留失败模型的 id 并替换供应商。带 id 前缀的通配符（"openrouter/google/*"）会为失败模型的裸 id 重新加前缀（google-antigravity/gemini-x -> openrouter/google/gemini-x），作为键时只匹配该供应商下该前缀的 id。回退条目可以带显式的思考后缀（"provider/model:low"、":high"、":max"、":off"）；裸条目继承失败轮次的强度，"provider/*" 条目始终继承。',
	"When a Claude Fable 5 / Mythos 5 request is blocked by Anthropic's safety classifier, retry it on Claude Opus 5 server-side (Anthropic `server-side-fallback-2026-06-01` beta). Opt-in — leaving this off preserves the pre-fallback behavior for every request.":
		"当 Claude Fable 5 / Mythos 5 请求被 Anthropic 安全分类器拦截时，在服务端改用 Claude Opus 5 重试（Anthropic `server-side-fallback-2026-06-01` beta）。需主动开启——保持关闭则所有请求维持回退前的行为。",
	"Web Search Timeout": "网页搜索超时",
	"Hard timeout for each provider's search transport before web_search advances to the next fallback, in seconds (maximum 300)":
		"每个供应商搜索传输的硬超时（秒），超时后 web_search 进入下一个回退（最大 300）",
	'Serving path for Fireworks requests. Priority sends `service_tier: "priority"` for higher reliability during peak traffic at a higher price; Standard omits it. Fast (`-fast`) models ignore this — Fast is its own serving path.':
		'Fireworks 请求的服务路径。“优先”会发送 `service_tier: "priority"`，在高峰时段以更高价格为代价获得更高可靠性；“标准”不发送。Fast（`-fast`）模型忽略此项——Fast 有独立的服务路径。',
	"Inference backend for local tiny models (titles + memory): an ONNX execution provider, or `mlx` to download MLX weights and run them through mlx-lm on Apple silicon. Default uses CPU-only ONNX. The PI_TINY_DEVICE env var overrides this.":
		"本地小模型（标题 + 记忆）的推理后端：ONNX 执行提供程序，或 `mlx`（在 Apple 芯片上下载 MLX 权重并通过 mlx-lm 运行）。默认使用仅 CPU 的 ONNX。环境变量 PI_TINY_DEVICE 可覆盖。",
	MLX: "MLX",
	"Apple silicon GPU via mlx-lm (Python subprocess; macOS arm64)":
		"通过 mlx-lm 使用 Apple 芯片 GPU（Python 子进程；macOS arm64）",
	"Alias for MLX": "MLX 的别名",
	"ONNX quantization/precision for local tiny models. Default uses each model's shipped dtype (q4); lower precision is faster, higher is more faithful. Ignored by the MLX backend (its repos are pre-quantized 4-bit). The PI_TINY_DTYPE env var overrides this.":
		"本地小模型的 ONNX 量化/精度。默认使用各模型随附的 dtype（q4）；精度越低越快，越高越忠实。MLX 后端忽略此项（其仓库已预量化到 4 位）。环境变量 PI_TINY_DTYPE 可覆盖。",
	q4: "q4",
	q4f16: "q4f16",
	q8: "q8",
	fp16: "fp16",
	fp32: "fp32",
	int8: "int8",
	uint8: "uint8",
	bnb4: "bnb4",
	q2: "q2",
	q2f16: "q2f16",
	q1: "q1",
	q1f16: "q1f16",
	"Unexpected Stops": "意外停止",
	"Automatically recover when the assistant stops without a visible message. Smart also classifies text-only stops with a small model.":
		"当助手没有可见消息就停止时自动恢复。智能模式还会用小模型对纯文本停止进行分类。",
	Mechanical: "机械",
	"Retry stops with no visible assistant message; tool calls are excluded (default)":
		"对没有可见助手消息的停止进行重试；工具调用除外（默认）",
	"Mechanical + small-model classification of text-only stops": "机械重试 + 小模型对纯文本停止进行分类",
	OpenAI: "OpenAI",
	Anthropic: "Anthropic",
	"OpenAI Codex WebSockets": "OpenAI Codex WebSocket",
	"WebSocket policy for OpenAI Codex models only": "仅适用于 OpenAI Codex 模型的 WebSocket 策略",
	"Use Codex model defaults": "使用 Codex 模型默认值",
	"Disable WebSockets for OpenAI Codex models": "为 OpenAI Codex 模型禁用 WebSocket",
	"OpenAI Responses WebSockets": "OpenAI Responses WebSocket",
	"Opt in for catalog-supported standard Responses models; model or request false disables it":
		"对目录支持的标准 Responses 模型主动启用；模型或请求上的 false 会禁用它",
	"OpenAI Live Steering": "OpenAI 实时引导",
	"Deliver messages typed while a GPT-6 response streams into that response over the Codex WebSocket, instead of waiting for the next tool boundary":
		"在 GPT-6 回复流式输出时输入的消息，通过 Codex WebSocket 立刻注入该回复，而不是等到下一个工具边界",
	"Muse Code Stored Responses": "Muse Code 存储响应",
	"Store Muse Code results on Meta's servers so a turn whose connection drops is recovered instead of re-run. Stored runs keep prompts and outputs on Meta's side.":
		"将 Muse Code 结果存储在 Meta 的服务器上，连接中断的轮次可恢复而不必重跑。存储的运行会把提示词和输出保留在 Meta 一侧。",
	"Codex Daybreak Blue": "Codex Daybreak Blue",
	"Automatically request the Daybreak Blue cyber access program on ChatGPT accounts eligible for it. OpenAI may use content from Daybreak Blue sessions to improve its models. Does not cover dedicated Daybreak Blue models (gpt-daybreak-blue-*), which may still run as Daybreak sessions.":
		"在符合条件的 ChatGPT 账号上自动申请 Daybreak Blue 网络安全访问计划。OpenAI 可能使用 Daybreak Blue 会话内容改进其模型。不覆盖专用 Daybreak Blue 模型（gpt-daybreak-blue-*），它们仍可能以 Daybreak 会话运行。",
	"Provider default — Anthropic OAuth subscriber sessions default to 1h, API keys use 5m; PI_CACHE_RETENTION still applies":
		"供应商默认 — Anthropic OAuth 订阅会话默认 1 小时，API Key 为 5 分钟；PI_CACHE_RETENTION 仍然生效",
	"Cheapest cache writes; pair with cache warming to keep short entries alive while idle":
		"缓存写入最便宜；配合缓存预热可在空闲时保持短缓存存活",
	"Long (1h+)": "长（1 小时以上）",
	"Longer TTL where supported (Anthropic/Bedrock 1h, OpenAI GPT-5.6+ Responses 12h); pricier writes, only warmed during active runs":
		"在支持的平台上使用更长 TTL（Anthropic/Bedrock 1 小时，OpenAI GPT-5.6+ Responses 12 小时）；写入更贵，仅在活跃运行时预热",
	"Cache Warming": "缓存预热",
	"Re-send the last request with a one-token output budget shortly before its prompt-cache entry expires":
		"在提示词缓存条目过期前不久，以单令牌输出预算重新发送上一次请求",
	"Disable cache warming": "禁用缓存预热",
	Streaming: "流式",
	"Protect expensive prefixes during long tool executions; stops when the agent settles":
		"长时间工具执行期间保护昂贵的缓存前缀；代理稳定后停止",
	Idle: "空闲",
	"Also refresh 5-minute entries between runs while the expected savings stay above the cost floor":
		"在两次运行之间额外刷新 5 分钟缓存条目，只要预期节省高于成本下限",
	"Local TTS Speed": "本地 TTS 语速",
	"Speaking rate of the local TTS backend (tts tool, omp say). 1 = normal; clamped to 0.5–2.5":
		"本地 TTS 后端的语速（tts 工具、omp say）。1 = 正常；限制在 0.5–2.5",
	"1× (normal)": "1×（正常）",
	"Speech Vocalization Speed": "语音朗读语速",
	"Speaking rate when reading the assistant's output aloud. 1 = normal; clamped to 0.5–2.5":
		"朗读助手输出时的语速。1 = 正常；限制在 0.5–2.5",
	"Priority: native > trafilatura > lynx > parallel > firecrawl > jina":
		"优先级：native > trafilatura > lynx > parallel > firecrawl > jina",
	Trafilatura: "Trafilatura",
	Lynx: "Lynx",
	Parallel: "Parallel",
	Firecrawl: "Firecrawl",
	"Requires FIRECRAWL_API_KEY": "需要 FIRECRAWL_API_KEY",
	Jina: "Jina",
	"Codex Auto-Redeem Saved Resets (5h)": "Codex 自动使用已存重置（5 小时）",
	"Spend saved Codex resets on 5-hour-only blocks and on expiring credits whose fullest chat window is 5h. unset asks before spending and never spends without a prompt; yes spends without asking; no never spends.":
		"在仅 5 小时受限以及最满聊天窗口为 5 小时且即将过期的额度上，使用已保存的 Codex 重置。未设置 = 使用前询问且未获提示时从不使用；是 = 无需询问直接使用；否 = 从不使用。",
	"Ask before spending; never spend without a prompt.": "使用前询问；未获提示时从不使用。",
	"Spend eligible saved resets without asking.": "无需询问直接使用符合条件已保存的重置。",
	"Never spend saved resets for this window.": "此窗口下从不使用已保存的重置。",
	"Codex Auto-Redeem Saved Resets (Weekly)": "Codex 自动使用已存重置（每周）",
	"Spend saved Codex resets on weekly blocks and on expiring credits whose fullest chat window is weekly. A block known only from a short 429 wait needs both Codex windows. unset asks before spending and never spends without a prompt; yes spends without asking; no never spends.":
		"在每周受限以及最满聊天窗口为每周且即将过期的额度上，使用已保存的 Codex 重置。仅从短暂 429 等待得知的受限需要两个 Codex 窗口都受限。未设置 = 使用前询问且未获提示时从不使用；是 = 无需询问直接使用；否 = 从不使用。",
	"With auto-redeem enabled, spend a saved Codex reset within this many hours of expiry when either chat window has meaningful usage. 0 disables early salvage; credits expiring within 5 minutes are still attempted regardless of usage.":
		"启用自动使用后，在过期前这么多小时内且任一聊天窗口有实质用量时，使用已保存的 Codex 重置。0 禁用提前抢救；5 分钟内过期的额度无论用量仍会尝试使用。",
	"Claude Auto-Redeem Saved Resets (5h)": "Claude 自动使用已存重置（5 小时）",
	"Spend Claude Cedar or Juniper resets on 5-hour-only blocks and on expiring grants whose fullest covered limit is 5h. unset asks before spending and never spends without a prompt; yes spends without asking; no never spends.":
		"在仅 5 小时受限以及最满受限为 5 小时且即将过期的授权上，使用 Claude Cedar 或 Juniper 重置。未设置 = 使用前询问且未获提示时从不使用；是 = 无需询问直接使用；否 = 从不使用。",
	"Claude Auto-Redeem Saved Resets (Weekly)": "Claude 自动使用已存重置（每周）",
	"Spend Claude Cedar resets on weekly or model-scoped blocks and on expiring grants whose fullest covered limit is weekly. unset asks before spending and never spends without a prompt; yes spends without asking; no never spends.":
		"在每周或按模型受限以及最满受限为每周且即将过期的授权上，使用 Claude Cedar 重置。未设置 = 使用前询问且未获提示时从不使用；是 = 无需询问直接使用；否 = 从不使用。",
	"Claude Auto-Redeem Fable Resets": "Claude 自动使用 Fable 重置",
	"Spend Claude Fable launch resets, which restore Fable weekly usage plus the 5h window. Only this setting governs them. unset asks before spending and never spends without a prompt; yes spends without asking; no never spends.":
		"使用 Claude Fable 发布重置，它会恢复 Fable 每周用量以及 5 小时窗口。仅由本设置控制。未设置 = 使用前询问且未获提示时从不使用；是 = 无需询问直接使用；否 = 从不使用。",
	"Claude Auto-Redeem Min Block": "Claude 自动使用最小受限时长",
	"Only auto-redeem when the natural unblock — the latest reset among the exhausted covered windows — is at least this many minutes away. A 5-hour-only reset is never used for a weekly or model-scoped block.":
		"仅当自然解除受限（已耗尽受限窗口中最近的重置）至少还有这么多分钟时才自动使用。仅 5 小时的重置不会用于每周或按模型受限。",
	"Claude Auto-Redeem Reserve": "Claude 自动使用保留量",
	"Keep at least this many Claude resets banked (0 allows the last eligible reset to be spent automatically). The reserve applies to early salvage, but not to eligible resets expiring within 5 minutes.":
		"保留至少这么多个已存 Claude 重置（0 允许最后一个可用重置被自动使用）。保留量适用于提前抢救，但不适用于 5 分钟内过期的可用重置。",
	"Claude Reset Salvage Horizon": "Claude 重置抢救时限",
	"With auto-redeem enabled, use a server-selected Cedar reset within this many hours of expiry when its covered windows have meaningful usage. 0 disables early salvage; eligible Cedar or Juniper resets expiring within 5 minutes are still attempted regardless of usage or reserve. Provider limit requirements still apply.":
		"启用自动使用后，在过期前这么多小时内且其受限窗口有实质用量时，使用服务端选定的 Cedar 重置。0 禁用提前抢救；5 分钟内过期的可用 Cedar 或 Juniper 重置无论用量或保留量仍会尝试使用。供应商限制条件仍然适用。",
	"OTLP Telemetry Export": "OTLP 遥测导出",
	"Allow OMP to export traces, logs, and metrics using OTEL_* endpoints. Changes take effect on the next launch.":
		"允许 OMP 使用 OTEL_* 端点导出跟踪、日志和指标。更改在下次启动时生效。",
	"Pause main agent until advisor backlog falls below threshold. Numeric values cap wait at 30 seconds; strict waits for all scheduled reviews without a wall-clock cap. Off disables catch-up delays. Abort, failure, and disposal release waits.":
		"当顾问积压高于阈值时暂停主代理。数值等待最多 30 秒；strict 会等待所有已安排的审查且不限时。关闭则不做追赶等待。中止、失败和释放都会解除等待。",
	"After an advisor concern or blocker interrupts, route further concerns as non-interrupting asides for this many primary turns. Blockers are exempt from the cooldown.":
		"顾问的关注或阻塞项中断后，在接下来这么多主轮次内，后续关注项以不中断的旁注形式发送。阻塞项不受冷却限制。",
	"No cooldown.": "无冷却。",
	"Advisor Continue Severity": "顾问继续严重度",
	"Minimum severity of an advisor note that wakes the agent after it finished with a final answer. Lower-severity notes stay as a card at the end of the transcript and reach the agent with your next message.":
		"代理已给出最终回答后，能将其唤醒的顾问备注最低严重度。低严重度的备注会作为卡片留在会话记录末尾，并随你的下一条消息送达代理。",
	Nit: "小问题",
	"Every note continues the run.": "所有备注都会继续运行。",
	Concern: "关注",
	"Concerns and blockers continue the run. Default.": "关注项和阻塞项会继续运行。默认。",
	Blocker: "阻塞",
	"Only blockers continue the run.": "仅阻塞项会继续运行。",
	"Advisor Review Mode": "顾问审查模式",
	"Default advisor cadence when no WATCHDOG.yml roster is present. turn reviews every primary turn; agent-end reviews only final yields.":
		"没有 WATCHDOG.yml 名单时的默认顾问节奏。turn 审查每个主轮次；agent-end 仅审查最终让出。",
	"Every turn": "每轮",
	"Review every primary update (tool-call round).": "审查每次主更新（工具调用回合）。",
	"Agent end": "代理结束",
	"Review only at final yields (once per run).": "仅在最终让出时审查（每次运行一次）。",
	"Advisor Review Interval": "顾问审查间隔",
	"Default advisor cadence when no WATCHDOG.yml roster is present: review every Nth eligible primary update. 1 = every update. Skipped updates are sent with the next scheduled review.":
		"没有 WATCHDOG.yml 名单时的默认顾问节奏：每第 N 次符合条件的主更新审查一次。1 = 每次更新。被跳过的更新会随下次计划审查一起发送。",
	"Every eligible update": "每次符合条件的更新",
	"Every 2nd": "每第 2 次",
	"Every 3rd": "每第 3 次",
	"Every 5th": "每第 5 次",
	"Every 10th": "每第 10 次",
	"Advisor Max Notes Per Update": "顾问每次更新最大备注数",
	"Maximum non-blocker advice notes accepted per advisor prompt update (1–32; UI offers 1–5 quick picks). Blockers are exempt.":
		"每次顾问提示更新接受的非阻塞建议备注最大数（1–32；界面提供 1–5 快速选择）。阻塞项不受限。",
	"Anti-flood (strict).": "防刷屏（严格）。",
	"Frontier reasoning models. Default.": "前沿推理模型。默认。",
	"Advisor Evict Stale Results": "顾问清理过期结果",
	"Before each review, replace the advisor's read/grep/glob output from older reviews with a short placeholder. The latest review is kept.":
		"每次审查前，将顾问在较早审查中的 read/grep/glob 输出替换为简短占位符。最近一次审查会保留。",
};
