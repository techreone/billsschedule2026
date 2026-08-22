# billsschedule2026.xyz — 趋势新词全局规则与工作流 (AGENTS.md)

> 本文件是 `billsschedule2026.xyz` 项目的最高指导规范。**所有 Agent 与协作流程必须无条件严格遵循本文件**。

---

## ⚠️ 趋势新词策略核心定位 (Trending Strategy)

本项目属于 **趋势爆发新词策略**（与老游戏常青词不同）：
1. **完全放弃 Semrush 依赖**：由于新词处于爆发窗口期，Semrush 尚无历史积淀数据（常显示为 0 或未收录），**绝不使用 Semrush 作为选题依据**！
2. **全盘依赖 Google Trends + Google Suggest 下拉框**：数据源严格来自于 Google Trends (Top/Rising 飙升词 Breakout) 以及用户提供的 6 张真实 Google Suggest 下拉框截屏！
3. **精爆路由与权重收回**：不追求海量水页，收敛为 4 个极具爆发力的精品 SSG 路由（`/`, `/where-to-watch`, `/preseason-schedule`, `/printable-schedule`），将全站权重全盘收回首页！

---

## ⚠️ 最高纪律与红线

1. **绝对禁止急躁写代码/建水页**：
   - 任何页面动笔前，必须完成 **Sitemap 词根拓扑建模、Trends 词库收集、意图先行深拆 (一词 10 意图)**。
   - **无主打关键词，绝对不新建页面**（坚决捍卫“一页一词”铁律，防止 Thin Content 薄弱内容与爬虫预算浪费）。

2. **强制使用多通道实时搜索引擎 (`scripts/multi-engine-search.py`)**：
   - 动笔撰写任何章节前，**必须运行多通道搜索 CLI (`agentsearch` / `searxng` / `anysearch` / `ddgs`)** 查实 2026 赛季最新数据，关键数值需 ≥2 源一致才落笔。严禁依赖模型非实时记忆。

3. **图片获取与本地化去重规范 (`scripts/fetch-image.mjs` & `dedupe-images.py`)**：
   - 图片必须由 Agent 自动获取：通过 `node scripts/fetch-image.mjs <url> --alt "..." --game bills` 下载并走代理本地化保存至 `public/images/`，统一转为 WebP 格式。
   - 运行 `python3 scripts/dedupe-images.py` 感知哈希去重，确保展示图同站唯一。

4. **上线与构建 Lint 门禁 (`scripts/lint-guides.py`)**：
   - 在执行 `npm run build` 前，**必须通过 `python3 scripts/lint-guides.py` 门禁自检 0 错误**（覆盖：frontmatter 完整性、展示图唯一、图片去重、正文内链 ≥5、权威外链 ≥3、callout/配图、死链）。

5. **技术栈红线**：
   - **纯静态 SSG 导出**（`output: 'export'`）：所有页面必须为预渲染静态 HTML，确保 Cloudflare Pages / Vercel 零成本部署与秒级加载。
   - **视觉美学标准**：遵守 Bleacher Report (B/R) 级别的暗黑体育媒体 UI 规范。使用静态高质感 Tag、绝不使用浮夸/廉价的 `animate-ping` 或 `animate-pulse` 动效。
   - **品牌独立性**：任何页面和组件必须使用独立站品牌 `BS26`（对应 `billsschedule2026.xyz`）。

---

## 趋势新词 v3 工业级流水线 (10 大节点)

```
① 趋势选词 (Trends) Google Trends 抓取 Rising 飙升词 (Breakout) + Google Suggest 6 张下拉框截屏
                    → 筛选出 5-15 个真正具备暴发搜索量的黄金新词（放弃 Semrush）
② 意图识别 (先行)★ 对【每一个】选定的趋势词独立深拆 7-10 条意图，写进 INTENT-DECOMPOSITION.md ——
                    揣测球迷在窗口期内最迫切想知道的答案（如 开球时间/电视台/直播/PDF打印）
③ 页面路由收敛     不搞膨胀式的多页面堆砌，按照“一页一词”收敛为 4 个精品 SSG 路由
                    （/ 首页主打, /where-to-watch 频道, /preseason-schedule 季前赛, /printable-schedule PDF）
④ 按意图聚类       高热度主词独占首页，特定搜索意图（播放台/PDF/季前赛）各自独立成子页
⑤ 背景理解 ★       动笔前通过多通道搜索 CLI (`scripts/multi-engine-search.py`) 搜该主词 3-5 次，
                    吃透 2026 赛季最新赛事安排、电视台版权与广播频道，消除 AI 幻觉
⑥ 逐意图写作 ★     GUIDE-WRITING.md 深度版：每个意图 = 一个 H2/H3 实质章节，讲透背景与细节；
                    搜索量不省，关键数值 ≥2 源一致才落笔；
                    ★ 正文自然引用 ≥3 处权威外链（NFL.com / CBS / ESPN / Wikipedia）——提升 AI 检索引用权重；
                    ★ 严禁引用竞争新站
⑦ sources 追溯      在 reference/guides/{slug}-sources.md 记录参考 URL 与数据结论（可追溯）
⑧ 注册 + 配图      图片本地化：`node scripts/fetch-image.mjs <url> --alt "..." --game bills` 转 WebP
                    → 运行 `python3 scripts/dedupe-images.py` 感知哈希去重（相似 >0.90 视为重复）
                    → IMAGE-ASSETS 索引更新
⑨ 对标审查        对标 checklist 自审 + 用户终审（不合格退回重修）
⑩ lint 门禁上线 ★   `python3 scripts/lint-guides.py` 必须 0 错误（覆盖：frontmatter 完整性、
                    展示图唯一、图片引用/去重、正文内链 ≥5、权威外链 ≥3、callout/配图、死链）
                    → `npm run build` 静态构建绿 → `out/` 验证 → 部署与 IndexNow 快速提交
```
