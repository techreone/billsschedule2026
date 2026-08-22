import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: "Page Not Found — Buffalo Bills Schedule 2026" },
  description:
    "The page you were looking for could not be found on billsschedule2026.online. Jump back to the Buffalo Bills 2026 schedule, where-to-watch guide, preseason slate, or printable PDF.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
        <div className="bg-[#00338D] text-white font-headline font-black text-sm px-2 py-0.5 rounded border border-blue-400/30">
          BS<span className="text-yellow-300">26</span>
        </div>
        ERROR 404
      </div>

      <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-white uppercase tracking-tight">
        Page Not Found
      </h1>

      <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
        The page you were looking for has moved or never existed. Don&apos;t miss a single
        Buffalo Bills 2026 snap — every kickoff time, TV channel, and streaming option lives on
        the pages below. All times are Eastern (ET), and broadcast rights follow the current NFL
        media deal running through 2033. You can also download the free printable PDF schedule or
        sync the full slate to Google Calendar and Apple Calendar from the Printable Schedule page.
        Bookmark the hub so you never miss a kickoff, and check the Where to Watch guide for the
        latest CBS, FOX, NBC, ESPN and Prime Video broadcast maps before every game.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl pt-2">
        <Link
          href="/"
          className="p-4 bg-zinc-900/80 hover:bg-zinc-900 rounded-xl border border-zinc-800 text-left transition-colors"
        >
          <span className="block text-xs font-headline font-bold text-zinc-400 uppercase tracking-widest">
            HUB PAGE
          </span>
          <span className="block text-sm font-bold text-white">Buffalo Bills Schedule 2026</span>
        </Link>
        <Link
          href="/where-to-watch"
          className="p-4 bg-zinc-900/80 hover:bg-zinc-900 rounded-xl border border-zinc-800 text-left transition-colors"
        >
          <span className="block text-xs font-headline font-bold text-zinc-400 uppercase tracking-widest">
            TV &amp; STREAMING
          </span>
          <span className="block text-sm font-bold text-white">Where to Watch Bills Games</span>
        </Link>
        <Link
          href="/preseason-schedule"
          className="p-4 bg-zinc-900/80 hover:bg-zinc-900 rounded-xl border border-zinc-800 text-left transition-colors"
        >
          <span className="block text-xs font-headline font-bold text-zinc-400 uppercase tracking-widest">
            AUGUST GAMES
          </span>
          <span className="block text-sm font-bold text-white">2026 Preseason Schedule</span>
        </Link>
        <Link
          href="/printable-schedule"
          className="p-4 bg-zinc-900/80 hover:bg-zinc-900 rounded-xl border border-zinc-800 text-left transition-colors"
        >
          <span className="block text-xs font-headline font-bold text-zinc-400 uppercase tracking-widest">
            FREE DOWNLOAD
          </span>
          <span className="block text-sm font-bold text-white">Printable Schedule PDF</span>
        </Link>
      </div>

      <p className="text-[11px] text-zinc-600 pt-4">
        © 2026 billsschedule2026.online • Unofficial fan broadcast schedule &amp; streaming guide.
        Not affiliated with the NFL or the Buffalo Bills.
      </p>
    </div>
  );
}
