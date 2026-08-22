'use client';

import { useState, useEffect } from 'react';
import { Game } from '@/data/scheduleData';

interface CountdownProps {
  nextGame: Game;
}

export default function Countdown({ nextGame }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const gameTime = new Date(nextGame.isoDate).getTime();
      const now = new Date().getTime();
      const difference = gameTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isLive: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [nextGame.isoDate]);

  return (
    <div className="w-full bg-zinc-900/90 rounded-2xl p-6 md:p-8 text-white border border-zinc-800 shadow-xl mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Next Game Information */}
        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/80 border border-red-800/60 rounded text-[11px] font-headline font-bold text-red-400 uppercase tracking-widest">
            UPCOMING MATCHUP • {nextGame.week}
          </div>
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-white uppercase tracking-tight flex items-center justify-center md:justify-start gap-3">
            <img src="/images/bills/bills.webp" alt="Bills" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span>vs</span>
            <img src={nextGame.opponentLogoUrl} alt={nextGame.opponent} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span>{nextGame.opponent}</span>
          </h2>
          <p className="text-zinc-400 font-mono text-xs md:text-sm">
            📅 {nextGame.date} @ {nextGame.time} | 📍 {nextGame.location}
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-zinc-300 font-mono">
            <span className="bg-black/60 px-3 py-1 rounded border border-zinc-800">
              TV: <strong className="text-yellow-400">{nextGame.tvChannel}</strong>
            </span>
            <span className="bg-black/60 px-3 py-1 rounded border border-zinc-800">
              Stream: <strong className="text-zinc-200">{nextGame.streaming}</strong>
            </span>
          </div>
        </div>

        {/* Right: Clean Static Countdown Clock */}
        <div className="w-full md:w-auto flex justify-center">
          {timeLeft.isLive ? (
            <div className="bg-red-600 text-white font-headline font-extrabold px-6 py-3 rounded text-base uppercase tracking-wider">
              GAME IN PROGRESS
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 md:gap-3 text-center">
              <div className="bg-black/80 p-3 rounded-lg border border-zinc-800 min-w-[65px] md:min-w-[75px]">
                <span className="block text-2xl md:text-3xl font-headline font-extrabold text-yellow-400">{timeLeft.days}</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Days</span>
              </div>
              <div className="bg-black/80 p-3 rounded-lg border border-zinc-800 min-w-[65px] md:min-w-[75px]">
                <span className="block text-2xl md:text-3xl font-headline font-extrabold text-white">{timeLeft.hours}</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Hours</span>
              </div>
              <div className="bg-black/80 p-3 rounded-lg border border-zinc-800 min-w-[65px] md:min-w-[75px]">
                <span className="block text-2xl md:text-3xl font-headline font-extrabold text-white">{timeLeft.minutes}</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Mins</span>
              </div>
              <div className="bg-black/80 p-3 rounded-lg border border-zinc-800 min-w-[65px] md:min-w-[75px]">
                <span className="block text-2xl md:text-3xl font-headline font-extrabold text-zinc-300">{timeLeft.seconds}</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Secs</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
