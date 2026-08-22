'use client';

import { useRef } from 'react';
import { BILLS_2026_GAMES } from '@/data/scheduleData';

export default function BRScoreboardCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-black border-b border-zinc-800/80 py-2.5 px-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Category Label - Static Premium Style */}
        <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-headline font-bold text-zinc-400 tracking-wider">
          NFL 2026
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 py-0.5"
        >
          {/* Static Live Game Demo with Official Local WebP Logos */}
          <div className="flex-none bg-zinc-900/90 border border-zinc-800 rounded-lg p-2 w-36 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1">
              <span className="px-1.5 py-0.5 bg-red-950 text-red-400 border border-red-800/60 rounded font-bold text-[9px] uppercase">LIVE</span>
              <span>4th | 02:15</span>
            </div>
            <div className="space-y-1 font-mono text-xs">
              <div className="flex justify-between items-center text-white font-bold">
                <span className="flex items-center gap-1.5">
                  <img src="/images/bills/bills.webp" alt="BUF" className="w-4 h-4 object-contain" />
                  BUF
                </span>
                <span className="text-yellow-400">24</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <img src="/images/bills/dolphins.webp" alt="MIA" className="w-4 h-4 object-contain" />
                  MIA
                </span>
                <span className="text-zinc-500">17</span>
              </div>
            </div>
          </div>

          {/* Map Schedule Games with Official Local WebP Logos */}
          {BILLS_2026_GAMES.slice(0, 7).map((game) => (
            <div
              key={game.id}
              className="flex-none bg-zinc-900/90 border border-zinc-800 rounded-lg p-2 w-36 hover:border-zinc-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1">
                <span className="text-zinc-400 font-bold uppercase">{game.week}</span>
                <span className="truncate max-w-[55px]">{game.time.replace(':00', '')}</span>
              </div>
              <div className="space-y-1 font-mono text-xs">
                <div className="flex justify-between items-center text-white font-semibold">
                  <span className="flex items-center gap-1.5">
                    <img src="/images/bills/bills.webp" alt="BUF" className="w-4 h-4 object-contain" />
                    BUF
                  </span>
                  <span className="text-zinc-600">-</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span className="flex items-center gap-1.5 truncate">
                    <img src={game.opponentLogoUrl} alt={game.opponent} className="w-4 h-4 object-contain" />
                    {game.opponentSlug.toUpperCase()}
                  </span>
                  <span className="text-zinc-600">-</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-full p-1.5 shadow transition-colors flex items-center justify-center"
          aria-label="Scroll right"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
