import { BILLS_2026_GAMES, FAQS } from '@/data/scheduleData';
import Countdown from '@/components/Countdown';
import BRTopHeadlines from '@/components/BRTopHeadlines';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export default function BRHomePage() {
  const nextGame = BILLS_2026_GAMES.find(g => g.type === 'regular') || BILLS_2026_GAMES[0];
  const regularGames = BILLS_2026_GAMES.filter(g => g.type === 'regular');

  return (
    <div className="space-y-8">

      {/* Main Grid Layout (2/3 Left Main Stream + 1/3 Right Headlines Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: 2/3 Main Stream */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Featured Hero Banner Card */}
          <section className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
            {/* Background Image / Gradient Atmosphere */}
            <div className="h-64 sm:h-80 w-full bg-gradient-to-r from-[#00338D] via-[#001D54] to-[#C60C30] relative flex items-end p-6 md:p-8">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
              
              <div className="relative z-10 space-y-3">
                {/* Static Premium Tag - No Ping Animation */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-[11px] font-headline font-bold uppercase tracking-wider">
                  SCHEDULE & BROADCAST GUIDE • 🦬 NFL 2026
                </div>

                {/* Main Heavy Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white tracking-tight leading-tight uppercase">
                  Official Buffalo Bills Schedule 2026: Game Times, Channels & Stream Guide
                </h1>

                <div className="flex items-center gap-3 text-xs text-zinc-300 font-mono pt-1">
                  <span>BillsSchedule2026.xyz Staff</span>
                  <span>•</span>
                  <span>Aug 22, 2026, updated 1 min ago</span>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Countdown Component */}
          <Countdown nextGame={nextGame} />

          {/* Top Banner AdSlot */}
          <AdSlot label="Advertisement • Top Banner" type="banner" />

          {/* Game Schedule Grid Stream */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h2 className="text-xl font-headline font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <span>🦬</span> 2026 Regular Season Matchup Stream
              </h2>
              <span className="text-xs text-zinc-400 font-mono">
                17 REGULAR GAMES
              </span>
            </div>

            {/* Game Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regularGames.map((game) => (
                <div
                  key={game.id}
                  className={`bg-zinc-900/90 rounded-xl p-4 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 ${
                    game.isPrimetime ? 'border-red-900/60 bg-zinc-900' : ''
                  }`}
                >
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono border-b border-zinc-800/80 pb-2">
                    <span className="font-headline font-bold text-red-500 uppercase">{game.week}</span>
                    <span className="text-zinc-400 font-semibold">{game.date}</span>
                  </div>

                  {/* Matchup Banner */}
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{game.opponentLogo}</span>
                      <div>
                        <div className="font-headline font-bold text-base text-white tracking-wide">
                          {game.isHome ? 'VS' : '@'} {game.opponent}
                        </div>
                        <div className="text-[11px] text-zinc-400 truncate max-w-[160px]">
                          {game.location}
                        </div>
                      </div>
                    </div>
                    {game.isPrimetime && (
                      <span className="px-2 py-0.5 bg-red-950 text-red-400 border border-red-800/60 rounded text-[10px] font-headline font-bold uppercase">
                        PRIMETIME
                      </span>
                    )}
                  </div>

                  {/* Broadcast & Ticket Info */}
                  <div className="flex items-center justify-between bg-black/60 rounded-lg p-2.5 text-xs">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block">TV & STREAM</span>
                      <span className="font-bold text-yellow-400">{game.tvChannel}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block">TIME (EST)</span>
                      <span className="font-bold text-white font-mono">{game.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* In-Feed AdSlot */}
          <AdSlot label="Advertisement • In-Feed Ad" type="banner" />

          {/* SEO Content Box */}
          <article className="bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-zinc-800 space-y-4 text-sm text-zinc-300">
            <h2 className="text-xl font-headline font-extrabold text-white uppercase tracking-wider">
              2026 Buffalo Bills Season Breakdown & Broadcast Rights
            </h2>
            <p className="leading-relaxed">
              The <strong>Buffalo Bills schedule 2026</strong> marks another high-stakes campaign for Josh Allen and the AFC East contenders. Searching for the <strong>Buffalo Bills game today time</strong> or wondering <strong>what channel is the Bills game on</strong>? Our daily updated guide provides complete kickoff times in Eastern Time (ET), stadium locations, and official TV networks.
            </p>
            <p className="leading-relaxed">
              Major primetime broadcasts for Buffalo in 2026 include <em>Thursday Night Football</em> on Amazon Prime Video, <em>Sunday Night Football</em> on NBC & Peacock, and <em>Monday Night Football</em> on ESPN.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-zinc-800 space-y-6">
            <h2 className="text-xl font-headline font-extrabold text-white uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS (FAQ)
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-black/80 p-4 rounded-xl border border-zinc-800">
                  <h3 className="font-headline font-bold text-white text-sm md:text-base">{faq.q}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm mt-2 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: 1/3 Headlines Sidebar */}
        <div className="space-y-6">
          <BRTopHeadlines />

          {/* Quick Sub-page Navigation Cards */}
          <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 space-y-3">
            <h3 className="text-xs font-headline font-bold text-zinc-400 uppercase tracking-widest">
              RESOURCE GUIDES
            </h3>
            <div className="space-y-2">
              <Link href="/where-to-watch" className="block p-2.5 bg-black rounded-lg text-xs font-bold text-white hover:text-red-500 transition-colors">
                📺 Where to Watch Bills Games (TV & Streaming)
              </Link>
              <Link href="/preseason-schedule" className="block p-2.5 bg-black rounded-lg text-xs font-bold text-white hover:text-red-500 transition-colors">
                🏈 2026 Preseason Schedule
              </Link>
              <Link href="/printable-schedule" className="block p-2.5 bg-black rounded-lg text-xs font-bold text-white hover:text-red-500 transition-colors">
                🖨️ Printable Schedule PDF
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
