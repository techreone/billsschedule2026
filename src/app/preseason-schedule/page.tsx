import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { SITE_CONFIG, BILLS_2026_GAMES } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Buffalo Bills Preseason Schedule 2026: Dates, Times & Results",
  description: "View the 2026 Buffalo Bills preseason schedule, game dates, times, local TV channels, and roster battles.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/preseason-schedule`,
  },
};

export default function PreseasonPage() {
  const preseasonGames = BILLS_2026_GAMES.filter(g => g.type === 'preseason');

  return (
    <div className="space-y-6">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-400 font-medium flex items-center gap-2">
        <Link href="/" className="hover:text-blue-400 underline">
          Home
        </Link>
        <span>/</span>
        <span className="text-white">Preseason Schedule</span>
      </nav>

      <header className="space-y-2">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white">
          Buffalo Bills Preseason Schedule 2026
        </h1>
        <p className="text-gray-400 text-sm">
          Check dates, times, and TV broadcasts for all August preseason games.
        </p>
      </header>

      <AdSlot label="Advertisement" type="banner" />

      {/* Preseason Games List */}
      <div className="space-y-4">
        {preseasonGames.map((game) => (
          <div key={game.id} className="p-5 bg-gray-900/80 rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase">{game.week}</span>
              <h2 className="text-lg font-bold text-white mt-1">
                {game.isHome ? 'vs' : '@'} {game.opponent} {game.opponentLogo}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                📅 {game.date} • {game.time} | 📍 {game.location}
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-gray-400 block">Broadcast</span>
              <span className="text-sm font-bold text-yellow-400">{game.tvChannel}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl text-xs text-gray-400">
        👉 Once preseason concludes, head over to the main{' '}
        <Link href="/" className="text-blue-400 font-bold underline">
          Buffalo Bills Schedule 2026
        </Link>{' '}
        for regular season kickoff times.
      </div>

    </div>
  );
}
