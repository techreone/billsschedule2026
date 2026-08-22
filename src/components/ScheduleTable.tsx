'use client';

import { useState } from 'react';
import { Game } from '@/data/scheduleData';

interface ScheduleTableProps {
  games: Game[];
}

export default function ScheduleTable({ games }: ScheduleTableProps) {
  const [filter, setFilter] = useState<'all' | 'regular' | 'preseason' | 'primetime'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter((game) => {
    // Type Filter
    if (filter === 'regular' && game.type !== 'regular') return false;
    if (filter === 'preseason' && game.type !== 'preseason') return false;
    if (filter === 'primetime' && !game.isPrimetime) return false;

    // Search Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        game.opponent.toLowerCase().includes(q) ||
        game.tvChannel.toLowerCase().includes(q) ||
        game.week.toLowerCase().includes(q) ||
        game.location.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <div className="w-full bg-gray-900/90 rounded-2xl p-4 md:p-6 border border-gray-800 shadow-xl">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#00338D] text-white shadow-lg border border-blue-400/40'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            All Games ({games.length})
          </button>
          <button
            onClick={() => setFilter('regular')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              filter === 'regular'
                ? 'bg-[#00338D] text-white shadow-lg border border-blue-400/40'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Regular Season
          </button>
          <button
            onClick={() => setFilter('preseason')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              filter === 'preseason'
                ? 'bg-[#00338D] text-white shadow-lg border border-blue-400/40'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Preseason
          </button>
          <button
            onClick={() => setFilter('primetime')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              filter === 'primetime'
                ? 'bg-[#C60C30] text-white shadow-lg border border-red-400/40'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            🔥 Primetime Games
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search opponent or channel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white text-xs md:text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-left text-xs md:text-sm text-gray-300">
          <thead className="bg-gray-950 text-gray-400 uppercase font-semibold text-[11px] tracking-wider border-b border-gray-800">
            <tr>
              <th className="py-3.5 px-4">Week</th>
              <th className="py-3.5 px-4">Date & Time (ET)</th>
              <th className="py-3.5 px-4">Opponent</th>
              <th className="py-3.5 px-4">Location</th>
              <th className="py-3.5 px-4">TV / Streaming</th>
              <th className="py-3.5 px-4 text-right">Tickets</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60 bg-gray-900/50">
            {filteredGames.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500 font-mono">
                  No games matched your filter.
                </td>
              </tr>
            ) : (
              filteredGames.map((game) => (
                <tr
                  key={game.id}
                  className={`hover:bg-blue-950/30 transition-colors ${
                    game.isPrimetime ? 'bg-red-950/10' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-semibold text-blue-400 whitespace-nowrap">
                    {game.week}
                    {game.isPrimetime && (
                      <span className="ml-2 inline-block px-1.5 py-0.5 text-[9px] bg-red-600/80 text-white rounded font-extrabold uppercase">
                        PRIMETIME
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-medium text-white">{game.date}</div>
                    <div className="text-xs text-gray-400 font-mono">{game.time}</div>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <img src={game.opponentLogoUrl} alt={game.opponent} className="w-5 h-5 object-contain inline-block" />
                      <span>{game.isHome ? 'vs' : '@'} {game.opponent}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400 max-w-[200px] truncate">
                    {game.location}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-semibold text-yellow-400">{game.tvChannel}</div>
                    <div className="text-xs text-gray-400">{game.streaming}</div>
                  </td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    {game.opponent === 'BYE WEEK' ? (
                      <span className="text-xs text-gray-600 italic">N/A</span>
                    ) : (
                      <a
                        href={game.ticketsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow transition-all"
                      >
                        Tickets
                      </a>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
