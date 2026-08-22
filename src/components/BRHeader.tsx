import Link from 'next/link';

export default function BRHeader() {
  return (
    <header className="w-full bg-black border-b border-zinc-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        
        {/* Left: Custom Brand Logo for billsschedule2026.xyz */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Custom BS26 Brand Block */}
            <div className="bg-[#00338D] text-white font-headline font-extrabold text-xl px-2.5 py-1 rounded border border-blue-400/30 tracking-tighter leading-none group-hover:bg-red-600 transition-colors shadow-md">
              BS<span className="text-yellow-300">26</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-extrabold text-base text-white tracking-wider leading-none">
                BILLS SCHEDULE <span className="text-red-500 font-normal">2026</span>
              </span>
              <span className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase mt-0.5">
                billsschedule2026.xyz
              </span>
            </div>
          </Link>

          {/* Sub-Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-zinc-300">
            <Link href="/" className="text-white hover:text-red-500 font-bold transition-colors">Home</Link>
            <Link href="/" className="hover:text-white transition-colors">2026 Regular Season</Link>
            <Link href="/where-to-watch" className="hover:text-white transition-colors">Where to Watch</Link>
            <Link href="/preseason-schedule" className="hover:text-white transition-colors">Preseason</Link>
            <Link href="/printable-schedule" className="hover:text-white transition-colors">Printable PDF</Link>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-[11px] font-headline text-zinc-400 uppercase tracking-widest">
            NFL Game Guide
          </span>
          <Link
            href="/where-to-watch"
            className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-headline text-xs font-bold rounded uppercase tracking-wider transition-colors shadow-md"
          >
            Live Broadcast Guide
          </Link>
        </div>

      </div>
    </header>
  );
}
