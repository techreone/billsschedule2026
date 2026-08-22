'use client';

import Link from 'next/link';

export default function BRHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
      
      {/* Top Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo Block (Independent BS26 Identity with Official WebP Logo) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#00338D] rounded-xl flex items-center justify-center border border-red-600/40 shadow-lg group-hover:scale-105 transition-transform p-1.5">
            <img src="/images/bills/bills.webp" alt="Bills Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-xl text-white tracking-wider uppercase flex items-center gap-1.5">
              BILLS<span className="text-red-500">SCHEDULE</span>2026
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
              BILLSSCHEDULE2026.XYZ
            </span>
          </div>
        </Link>

        {/* Center: Main Section Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-headline font-bold uppercase tracking-wider">
          <Link href="/" className="text-white hover:text-red-500 transition-colors">
            Full Schedule
          </Link>
          <Link href="/where-to-watch" className="text-zinc-400 hover:text-white transition-colors">
            Where To Watch
          </Link>
          <Link href="/preseason-schedule" className="text-zinc-400 hover:text-white transition-colors">
            Preseason
          </Link>
          <Link href="/printable-schedule" className="text-zinc-400 hover:text-white transition-colors">
            Printable PDF
          </Link>
        </nav>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/printable-schedule"
            className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-headline font-bold uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
          >
            <span>🖨️</span> Get PDF
          </Link>
        </div>

      </div>

      {/* Sub-bar for Mobile Navigation */}
      <div className="md:hidden flex items-center justify-around border-t border-zinc-900 py-2 px-2 text-[11px] font-headline font-bold uppercase tracking-wider text-zinc-400 bg-zinc-950">
        <Link href="/" className="hover:text-white">Schedule</Link>
        <Link href="/where-to-watch" className="hover:text-white">Watch</Link>
        <Link href="/preseason-schedule" className="hover:text-white">Preseason</Link>
        <Link href="/printable-schedule" className="hover:text-white">PDF</Link>
      </div>

    </header>
  );
}
