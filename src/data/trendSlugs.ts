// 全站 50 个趋势新词 SSG 路由 slug（与提交 IndexNow / sitemap 对齐）
export const TREND_SLUGS: string[] = [
  'are-there-any-preseason-nfl-games-on-today',
  'arizona-cardinals-depth-chart-2026',
  'bills-kicker-depth-chart',
  'bills-quarterback-depth-chart',
  'bills-rb-depth-chart',
  'bills-vs-browns-delay-weather',
  'bills-vs-browns-live-stream',
  'bills-vs-browns-prediction',
  'bills-vs-browns-stats',
  'broncos-qb-depth-chart',
  'browns-qb-depth-chart',
  'chargers-depth-chart-2026',
  'cleveland-browns-depth-chart-2026',
  'colts-qb-depth-chart',
  'colts-wr-depth-chart',
  'commanders-depth-chart-2026',
  'commanders-qb-depth-chart',
  'cowboys-depth-chart-2026',
  'damar-hamlin-bills-status',
  'denver-broncos-depth-chart-2026',
  'does-nfl-sunday-ticket-include-preseason-games',
  'dolphins-depth-chart-2026',
  'eagles-depth-chart-2026',
  'ed-oliver-son-family-news',
  'falcons-qb-depth-chart',
  'frank-gore-jr-bills-roster',
  'giants-qb-depth-chart',
  'giants-rb-depth-chart',
  'is-josh-allen-playing-today',
  'jets-qb-depth-chart',
  'kansas-city-chiefs-depth-chart-2026',
  'kyle-allen-bills-qb2',
  'lions-qb-depth-chart',
  'matt-milano-injury-status',
  'minnesota-vikings-depth-chart-2026',
  'new-york-giants-depth-chart-2026',
  'new-york-jets-depth-chart-2026',
  'nfl-plus-preseason-live-stream-guide',
  'panthers-depth-chart-2026',
  'panthers-rb-depth-chart',
  'ray-davis-bills-rb',
  'saints-depth-chart-2026',
  'steelers-depth-chart-2026',
  'steelers-rb-depth-chart',
  'stefon-diggs-bills-wr-aftermath',
  'tampa-bay-buccaneers-depth-chart-2026',
  'tennessee-titans-depth-chart-2026',
  'texans-depth-chart-2026',
  'vikings-qb-depth-chart',
  'where-can-i-watch-nfl-preseason-games',
];

export function slugToLabel(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export interface TrendCategory {
  key: string;
  title: string;
  desc: string;
  accent: string;
  slugs: string[];
}

// 首页 Trending Hub 的分类卡片结构（语义分组，替代裸链接列表）
export const TREND_CATEGORIES: TrendCategory[] = [
  {
    key: 'game',
    title: 'Game Coverage & Predictions',
    desc: 'Bills vs Browns 全系列：预测、比分、直播与天气延误',
    accent: 'border-l-red-600',
    slugs: [
      'bills-vs-browns-prediction', 'bills-vs-browns-stats', 'bills-vs-browns-live-stream',
      'bills-vs-browns-delay-weather', 'are-there-any-preseason-nfl-games-on-today',
      'is-josh-allen-playing-today',
    ],
  },
  {
    key: 'player',
    title: 'Player Spotlight',
    desc: 'Allen / Hamlin / Milano / Diggs 等球员状态与深度追踪',
    accent: 'border-l-blue-600',
    slugs: [
      'damar-hamlin-bills-status', 'ed-oliver-son-family-news', 'kyle-allen-bills-qb2',
      'matt-milano-injury-status', 'stefon-diggs-bills-wr-aftermath', 'ray-davis-bills-rb',
      'frank-gore-jr-bills-roster',
    ],
  },
  {
    key: 'position',
    title: 'Bills Position Battles',
    desc: '四分卫 / 跑卫 / 踢球手三大位置群深度竞争解析',
    accent: 'border-l-emerald-500',
    slugs: ['bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-kicker-depth-chart'],
  },
  {
    key: 'watch',
    title: 'Watching & Streaming Guides',
    desc: '季前赛观看渠道全解：NFL+ / Sunday Ticket / 直播平台',
    accent: 'border-l-yellow-400',
    slugs: [
      'where-can-i-watch-nfl-preseason-games', 'does-nfl-sunday-ticket-include-preseason-games',
      'nfl-plus-preseason-live-stream-guide',
    ],
  },
  {
    key: 'teams',
    title: 'NFL 32 Team Depth Charts',
    desc: '全网 32 队 2026 深度表：首发阵容 / QB 专线 / 位置竞争',
    accent: 'border-l-purple-500',
    slugs: [
      'cleveland-browns-depth-chart-2026', 'kansas-city-chiefs-depth-chart-2026',
      'dolphins-depth-chart-2026',
      'cowboys-depth-chart-2026', 'eagles-depth-chart-2026',
      'denver-broncos-depth-chart-2026', 'chargers-depth-chart-2026', 'texans-depth-chart-2026',
      'minnesota-vikings-depth-chart-2026', 'new-york-jets-depth-chart-2026',
      'new-york-giants-depth-chart-2026', 'commanders-depth-chart-2026', 'commanders-qb-depth-chart',
      'broncos-qb-depth-chart', 'browns-qb-depth-chart', 'colts-qb-depth-chart', 'colts-wr-depth-chart',
      'falcons-qb-depth-chart', 'giants-qb-depth-chart', 'giants-rb-depth-chart', 'jets-qb-depth-chart',
      'lions-qb-depth-chart', 'panthers-depth-chart-2026', 'panthers-rb-depth-chart',
      'saints-depth-chart-2026', 'steelers-depth-chart-2026', 'steelers-rb-depth-chart',
      'tampa-bay-buccaneers-depth-chart-2026', 'tennessee-titans-depth-chart-2026',
      'arizona-cardinals-depth-chart-2026', 'vikings-qb-depth-chart',
    ].filter(Boolean),
  },
];
