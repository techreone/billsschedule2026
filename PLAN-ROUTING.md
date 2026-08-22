# billsschedule2026.xyz — 全局路由与页面拓扑规划 (PLAN-ROUTING.md)

> 本文档基于 Sitemap 词根建模报告与 Google Auto-complete 截屏数据建立，**严禁脱离本规划盲目新建无词页面**。

---

## 1. 站点全局路由架构 (Global Route Skeleton)

结合对标大站 Sitemap 分析与截屏真词，`billsschedule2026.xyz` 的整站架构收敛为以下 **4 个精雕细琢的极简静态 SSG 路由**：

```
billsschedule2026.xyz
│
├── /                           [首页 - 聚合全站权重]
│   ├── 主打词: buffalo bills schedule 2026
│   └── 核心意图: 17 场常规赛完整时间表、比赛倒计时、轮空周 (Bye Week)
│
├── /where-to-watch             [子页 1 - 广播与频道指南]
│   ├── 主打词: where to watch buffalo bills game today / what channel is the bills game on
│   └── 核心意图: 电视网 (CBS/NBC/FOX/ESPN/Prime) 播放版权与 WGR 550 AM 广播
│
├── /preseason-schedule         [子页 2 - 季前赛专项]
│   ├── 主打词: buffalo bills preseason schedule 2026
│   └── 核心意图: 8 月 3 场季前赛具体开球时间、主客场与本地转播台
│
└── /printable-schedule         [子页 3 - PDF 下载与日历同步]
    ├── 主打词: printable buffalo bills schedule 2026 pdf free download
    └── 核心意图: 1 页纸可打印 PDF 格式下载、Google/Apple Calendar 一键同步
```

---

## 2. 路由隔离与内链汇聚规则

- **不设多余动态路由**：小而精准的站群站点不搞复杂的无限子路由，保持恒定 4 个路由页面。
- **权重汇聚**：子页面 `/where-to-watch`、`/preseason-schedule`、`/printable-schedule` 顶部全部设置指向 `/` 首页的精确锚文本面包屑导航，将权重收回主词 `buffalo bills schedule 2026`。
