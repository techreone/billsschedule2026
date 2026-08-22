# billsschedule2026.xyz — 项目全局规则与工作流 (AGENTS.md)

> 本文件是 `billsschedule2026.xyz` 项目的最高指导规范。**所有 Agent 与协作流程必须严格遵循本文件**。

---

## ⚠️ 最高纪律与红线

1. **绝对禁止急躁写代码/建水页**：
   - 任何页面动笔前，必须先完成**数据验证、Sitemap 词根拓扑建模、意图深拆**。
   - **无主打关键词，绝对不新建页面**（坚决捍卫“一页一词”铁律，防止 Thin Content 薄弱内容与爬虫预算浪费）。

2. **强制使用实时网络搜索引擎脚本 (禁用原生不实时推测)**：
   - 动笔撰写任何章节前，**必须执行 `python3 scripts/searx-search.py "<query>"` 实时请求搜索引擎**获取最新真实官方数据。
   - 严禁依赖模型原生的不实时记忆下笔。

3. **图片获取与本地化规范 (`scripts/fetch-image.mjs`)**：
   - 图片必须由 Agent 自动获取：通过 `node scripts/fetch-image.mjs <url> --alt "<alt>" --game bills` 下载并走代理本地化保存至 `public/images/`，统一转为 WebP 格式。

4. **上线与构建 Lint 门禁 (`scripts/lint-guides.py`)**：
   - 在执行 `npm run build` 前，**必须通过 `python3 scripts/lint-guides.py` 门禁自检**，确保 0 死链、0 TDK 越界、字数与外链合规。

5. **技术栈红线**：
   - **纯静态 SSG 导出**（`output: 'export'`）：所有页面必须为预渲染静态 HTML，确保 Cloudflare Pages / Vercel 零成本部署与秒级加载。
   - **视觉美学标准**：遵守 Bleacher Report (B/R) 级别的暗黑体育媒体 UI 规范。使用静态高质感 Tag、绝不使用浮夸/廉价的 `animate-ping` 或 `animate-pulse` 动效。
   - **品牌独立性**：任何页面和组件必须使用独立站品牌 `BS26`（对应 `billsschedule2026.xyz`）。

---

## 核心工作流：从 Sitemap 建模到内容上线（12 步统一流水线）

```
① Sitemap 建模 ★   运行 longtail-seo-modeling 脚本抓取对标站 Sitemap → 提取 Query Root 查询词根
② 数据/联想 ★     通过 Google Suggest / Trends 对核心词（如 Bills Schedule）做横向联想扩展
③ 重组归堆 ★       把联想词按【主题实体】（如 赛程表/频道/季前赛/门票/轮空周）归堆
④ 意图深拆 ★       对每个目标词深拆 3-10 条用户核心疑问（作为页面 H2/H3 章节骨架）
⑤ 独立 Query 搜索 ★ 动笔前运行 `python3 scripts/searx-search.py` 查实最新开球时间、频道、广播
⑥ 网页图片本地化 ★  运行 `node scripts/fetch-image.mjs` 抓取权威配图并自动压缩为 WebP
⑦ 内部链接与面包屑  在路由规划阶段即定义互链关系（所有长尾页必带面包屑与指向首页的锚文本）
⑧ 写作与内容填充   逐意图展开讲透，插入官方/权威数据，保持关键词密度在 3% ~ 5%
⑨ 结构化数据       嵌入 Schema.org (FAQPage / SportsEvent / ItemList) JSON-LD 代码
⑩ Lint 门禁自检 ★   运行 `python3 scripts/lint-guides.py` 全站 0 错误检查
⑪ 静态构建校验     执行 `npm run build` 验证全静态 out 目录生成
⑫ 上线与提交       部署至托管平台，运行 `node scripts/submit-indexnow.mjs` 提交收录
```

---

## 自动化工具脚本清单 (`scripts/`)

| 脚本文件 | 工具用途 | 执行命令 |
| :--- | :--- | :--- |
| `scripts/searx-search.py` | 本地多搜索引擎 (SearXNG/AgentSearch) 实时检索 | `python3 scripts/searx-search.py "<query>"` |
| `scripts/fetch-image.mjs` | 图片抓取、代理下载与自动 WebP 本地化 | `node scripts/fetch-image.mjs <url> --alt "..." --game bills` |
| `scripts/lint-guides.py` | 全站 SEO、死链与 Markdown 质量门禁自检 | `python3 scripts/lint-guides.py` |
| `scripts/check-seo-audit.py` | SEO 结构审计与关键词密度检查 | `python3 scripts/check-seo-audit.py` |
| `scripts/check-external-links.mjs` | 外部权威链接 404 检测 | `node scripts/check-external-links.mjs` |
| `scripts/submit-indexnow.mjs` | IndexNow 引擎快速收录提交 | `node scripts/submit-indexnow.mjs` |
