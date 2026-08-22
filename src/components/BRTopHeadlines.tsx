import Link from 'next/link';

export default function BRTopHeadlines() {
  const headlines = [
    {
      id: 1,
      title: "Buffalo Bills Week 1 Starter Depth Chart Breakdown 🚨",
      source: "Bills Schedule 2026",
      time: "1h ago",
      icon: "🦬",
    },
    {
      id: 2,
      title: "Josh Allen MVP Odds Soar Ahead of 2026 Season Kickoff 🔥",
      source: "Game Day Betting",
      time: "3h ago",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Where to Stream Bills vs Dolphins Thursday Night Matchup 📺",
      source: "Broadcast Guide",
      time: "5h ago",
      icon: "🐬",
    },
    {
      id: 4,
      title: "Highmark Stadium Construction Update & Ticket Pricing 🎟️",
      source: "Bills Fan Insider",
      time: "1d ago",
      icon: "🏟️",
    },
    {
      id: 5,
      title: "AFC East Predictions: Can Anyone Topple Buffalo in 2026? ⚖️",
      source: "NFL Analysis",
      time: "2d ago",
      icon: "📊",
    },
  ];

  return (
    <aside className="w-full space-y-6">
      
      {/* Video Ad Card Placeholder */}
      <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 p-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
          <span className="bg-yellow-400 text-black px-1.5 py-0.5 font-bold rounded">Ad</span>
          <span>1 of 1 • 0:15</span>
        </div>
        <div className="relative aspect-video bg-zinc-800 rounded-lg flex flex-col items-center justify-center text-center p-4 border border-zinc-700">
          <span className="text-2xl mb-1">🏈</span>
          <span className="text-xs font-bold text-white">Sponsored Game Highlights & Ad Partner</span>
          <span className="text-[10px] text-zinc-400 font-mono mt-1">[ AdSense Video / Display Slot ]</span>
        </div>
      </div>

      {/* TOP HEADLINES List Box */}
      <div className="bg-black border border-zinc-800 rounded-xl p-4 space-y-4">
        <h3 className="text-base font-headline font-extrabold text-white uppercase tracking-wider flex items-center justify-between border-b border-zinc-800 pb-2">
          <span>TOP HEADLINES</span>
          <span className="text-[10px] text-red-500 font-normal">LIVE</span>
        </h3>

        <div className="space-y-3.5">
          {headlines.map((item) => (
            <div key={item.id} className="group flex items-start gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm flex-none group-hover:border-red-600 transition-colors">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-zinc-200 group-hover:text-red-500 transition-colors leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
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
