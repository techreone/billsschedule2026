# billsschedule2026.xyz — 工业级上架全流程 (WORKFLOW.md)

> **v3 统一流水线（完整复刻 roguewiki 顶级架构）**：
> 本流程规范了 `billsschedule2026.xyz` 项目从词库收集到最终编译上线的全生命周期。
> **核心顺序**：**词库宽收集 → 意图识别先行 (每词深拆) → 质量分级 (Tier) → 按意图聚类 → 背景理解 → 逐意图写作 → sources 追溯 → 图片本地化去重 → 审查 → lint 门禁上线**。

---

## 0. 统一 v3 工业级流水线 (10 大节点，顺序不可颠倒)

```
① 词库收集 (宽)    Google Trends / Suggest + 黄金后缀组装 + 排列组合 + 疑问式 + 对标大站反查
                    → 形成精准词库候选池
② 意图识别 (先行)★ 对【每一个】候选词独立深拆 3-10 条意图，写进 INTENT-DECOMPOSITION.md ——
                    不是按词面判断，而是揣测"搜这个词的人到底想要什么答案"
③ 质量分级 (通用)  Tier 算法 (volume×KD 矩阵) 分级：
                    Tier 1-2 = 高质主词 → 独立建页 (一个萝卜坑一篇，绝不揉进 combo)；
                    Tier 3-5 = 附属词 (FAQ / H2 章节 / 内链 combo)
④ 按意图聚类        发生在意图拆解【之后】——高热度高质词各占一页，意图相似的低质词归入主词簇
⑤ 背景理解 ★       动笔前通过多通道搜索 CLI (`scripts/multi-engine-search.py`) 搜该赛程主词 3-5 次，
                    吃透 2026 赛季赛程规则、电视台版权、广播频道与球场细节，彻底消除 AI 幻觉
⑥ 逐意图写作 ★     GUIDE-WRITING.md 深度版：每个意图 = 一个 H2/H3 实质章节，讲透背景、开球时间、
                    频道分配与赛事细节；搜索量不省，关键数值 ≥2 源一致才落笔；
                    ★ 正文引用权威外链（NFL.com / CBS / ESPN / Wikipedia）——提升 AI 检索引用权重；
                    ★ 严禁引用竞争新站
⑦ sources 追溯      在 reference/guides/{slug}-sources.md 记录参考 URL 与数据结论（可追溯）
⑧ 注册 + 配图      图片本地化：`node scripts/fetch-image.mjs <url> --alt "..." --game bills` 转 WebP
                    → 运行 `python3 scripts/dedupe-images.py` 感知哈希去重（相似 >0.90 视为重复）
                    → IMAGE-ASSETS 索引更新
⑨ 对标审查        对标 checklist 自审 + 用户终审（不合格退回重修）
⑩ lint 门禁上线 ★   `python3 scripts/lint-guides.py` 必须 0 错误（覆盖：frontmatter 完整性、
                    展示图唯一、图片引用/去重、正文内链 ≥5、权威外链 ≥3、callout/配图、死链）
                    → `npm run build` 静态构建绿 → `out/` 验证 → 提交与 IndexNow 提交
```

---

## 1. 词库收集与意图深拆规范

- **黄金后缀组装**：`[主词] + [schedule 2026 / kickoff time / tv channel / stream free / radio / pdf]`
- **疑问式变体**：`where to watch [bills game] / what channel is [bills game] on / how to listen live`
- **意图先行**：意图分析发生于聚类【之前】。一个词至少深拆出 3 ~ 10 条具体微意图，未拆透意图绝动笔。

---

## 2. 写作与权威外链纪律

- **单篇字数门槛**：单篇 ≥ 2000 ~ 2500 字，按意图展开写透。
- **引用权威源**：正文必须自然包含 ≥3 处权威外链（如 `nfl.com`, `espn.com`, `buffalobills.com`, `wikipedia.org`），提升 Google E-E-A-T 评分与 AI 检索引用权重。

---

## 3. Lint 门禁与构建发布 (Lint Gatekeeper)

在执行 `npm run build` 之前，必须无条件跑通门禁脚本：

```bash
# 1. 运行全站 0 错误门禁自检
python3 scripts/lint-guides.py

# 2. 门禁全绿后执行静态构建
npm run build

# 3. 提交 IndexNow 极速收录
node scripts/submit-indexnow.mjs
```
