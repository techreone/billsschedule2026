import Link from 'next/link';
import { Banner } from '@/components/ads/Adsterra';

// 体育主题线性图标（内联 SVG，替代 emoji 占位）
const IconHelmet = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500">
    <path d="M4 13a8 8 0 0 1 16 0v3a2 2 0 0 1-2 2h-2l-1.5 2h-7L6 18H6a2 2 0 0 1-2-2v-3Z" />
    <path d="M12 5v6m0 0H4" />
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-blue-400">
    <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);
const IconTV = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-emerald-400">
    <rect x="3" y="6" width="18" height="12" rx="2" /><path d="M8 21h8m-4-3v3" />
  </svg>
);
const IconStadium = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-yellow-400">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6M3 14c3 2 15 2 18 0M3 11c3 2 15 2 18 0M12 3v3" />
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-purple-400">
    <path d="M4 20V10m6 10V4m6 16v-7m5 7H3" />
  </svg>
);

// 每条头条均指向站内真实路由（语义对应），杜绝可点击无目标
const headlines = [
  {
    title: 'Bills Quarterback Depth Chart: Full Breakdown',
    source: 'Depth Chart Analysis',
    time: 'Updated today',
    href: '/bills-quarterback-depth-chart',
    Icon: IconHelmet,
  },
  {
    title: 'Is Josh Allen Playing? Status & MVP Watch',
    source: 'Player Status',
    time: 'Updated today',
    href: '/is-josh-allen-playing-today',
    Icon: IconTarget,
  },
  {
    title: 'Where to Stream Every Bills Game Live',
    source: 'Broadcast Guide',
    time: 'Updated weekly',
    href: '/where-to-watch',
    Icon: IconTV,
  },
  {
    title: 'Bills Kicker Battle: Special Teams Depth Chart',
    source: 'Special Teams',
    time: 'Updated this week',
    href: '/bills-kicker-depth-chart',
    Icon: IconStadium,
  },
  {
    title: 'Bills vs Browns Prediction & Recap Analysis',
    source: 'Game Coverage',
    time: 'Updated after kickoff',
    href: '/bills-vs-browns-prediction',
    Icon: IconChart,
  },
];

export default function BRTopHeadlines() {
  return (
    <aside className="w-full space-y-6">
      {/* 真实 Adsterra 广告位（300×250 Banner） */}
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* TOP HEADLINES List Box — 全部为真实内链 */}
      <div className="bg-black border border-zinc-800 rounded-xl p-4 space-y-4">
        <h3 className="text-base font-headline font-extrabold text-white uppercase tracking-wider flex items-center justify-between border-b border-zinc-800 pb-2">
          <span>TOP HEADLINES</span>
          <span className="text-[10px] text-red-500 font-normal">LIVE</span>
        </h3>

        <div className="space-y-3.5">
          {headlines.map(({ title, source, time, href, Icon }) => (
            <Link key={href} href={href} className="group flex items-start gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-none group-hover:border-red-600 transition-colors">
                <Icon />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-zinc-200 group-hover:text-red-500 transition-colors leading-snug">
                  {title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                  <span>{source}</span>
                  <span>•</span>
                  <span>{time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-2 border-t border-zinc-900">
          <Link
            href="/where-to-watch"
            className="block text-center text-xs font-headline font-bold text-zinc-400 hover:text-white transition-colors"
          >
            VIEW FULL BROADCAST GUIDE →
          </Link>
        </div>
      </div>
    </aside>
  );
}
