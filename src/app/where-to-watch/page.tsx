import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "What Channel & What Time is the Buffalo Bills Game Today (2026 TV & Stream Guide)",
  description: "Find out what channel the Buffalo Bills game is on today, what time the game starts (EST), and what to watch on via CBS, FOX, NBC, ESPN, and Prime Video.",
  keywords: [
    "what channel is the buffalo bills game on",
    "what time is the buffalo bills game today",
    "buffalo bills what to watch on",
    "buffalo bills game live stream free",
    "buffalo bills radio listen live wgr 550",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/where-to-watch`,
  },
};

export default function WhereToWatchPage() {
  return (
    <div className="space-y-6">
      
      {/* Breadcrumb Navigation - Links back to homepage for SEO link equity */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2">
        <Link href="/" className="hover:text-white underline">
          Home
        </Link>
        <span>/</span>
        <span className="text-white">Where to Watch & TV Channels</span>
      </nav>

      {/* Header */}
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/80 border border-red-800/60 rounded text-red-400 text-[11px] font-headline font-bold uppercase tracking-wider">
          BROADCAST & STREAMING GUIDE • 2026
        </div>
        <h1 className="text-2xl sm:text-4xl font-headline font-extrabold text-white uppercase tracking-tight">
          What Channel & What Time is the Buffalo Bills Game Today?
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Complete network broadcast guide, kickoff times (EST), radio stream, and cord-cutting streaming options.
        </p>
      </header>

      <AdSlot label="Advertisement" type="banner" />

      {/* Guide Content */}
      <article className="bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-zinc-800 space-y-6 text-sm text-zinc-300">
        
        <h2 className="text-lg font-headline font-bold text-white uppercase tracking-wider">
          What Channel is the Buffalo Bills Game On Today?
        </h2>
        <p className="leading-relaxed">
          Determining <strong>what channel the Buffalo Bills game is on today</strong> depends on whether it is a Sunday afternoon matchup, a primetime game, or a local broadcast. Networks carrying Bills games in 2026 include:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-1">
            <h3 className="font-headline font-bold text-yellow-400 text-sm">CBS Sports</h3>
            <p className="text-xs text-zinc-400">Primary broadcaster for Sunday afternoon AFC games. Stream live on Paramount+.</p>
          </div>
          <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-1">
            <h3 className="font-headline font-bold text-white text-sm">FOX Sports</h3>
            <p className="text-xs text-zinc-400">Carries Sunday afternoon matchups against NFC opponents.</p>
          </div>
          <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-1">
            <h3 className="font-headline font-bold text-blue-400 text-sm">NBC (Sunday Night Football)</h3>
            <p className="text-xs text-zinc-400">Broadcasts national Sunday 8:20 PM ET primetime games. Stream on Peacock.</p>
          </div>
          <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-1">
            <h3 className="font-headline font-bold text-red-500 text-sm">ESPN (Monday Night Football)</h3>
            <p className="text-xs text-zinc-400">Broadcasts Monday 8:15 PM ET primetime games. Stream on ESPN+.</p>
          </div>
        </div>

        <h2 className="text-lg font-headline font-bold text-white uppercase tracking-wider">
          What Time is the Game Today?
        </h2>
        <p className="leading-relaxed">
          Standard Sunday kickoff times for the <strong>Buffalo Bills</strong> are scheduled for <strong>1:00 PM ET</strong> (early afternoon window) or <strong>4:25 PM ET</strong> (late afternoon Game of the Week). Primetime games on Thursday, Sunday, or Monday nights kick off between <strong>8:15 PM ET</strong> and <strong>8:20 PM ET</strong>.
        </p>

        <h2 className="text-lg font-headline font-bold text-white uppercase tracking-wider">
          How to Listen to Buffalo Bills Radio Broadcast Live
        </h2>
        <p className="leading-relaxed">
          If you are driving or prefer radio commentary, you can <strong>listen to Buffalo Bills games live</strong> on <strong>WGR 550 AM</strong> (the flagship radio station in Buffalo) or nationwide via <em>SiriusXM NFL Radio</em>.
        </p>

        {/* Link back to Main Schedule for SEO weight convergence */}
        <div className="p-4 bg-blue-950/40 border border-blue-800/40 rounded-xl mt-6">
          <p className="text-xs text-blue-200 font-mono">
            👉 Need exact kickoff times for every week? Check out the complete{' '}
            <Link href="/" className="text-white font-bold underline hover:text-red-400">
              Buffalo Bills Schedule 2026
            </Link>{' '}
            timetable and live countdown.
          </p>
        </div>
      </article>

    </div>
  );
}
