import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us & Editorial Standards",
  description: "About billsschedule2026.online - Independent fan resource providing verified 2026 Buffalo Bills game kickoff times, network broadcast guides, printable PDF sheets, and calendar feeds.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 text-zinc-300 leading-relaxed">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-zinc-400 flex items-center gap-2 font-mono">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">About Us</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-white uppercase tracking-tight border-b border-zinc-800 pb-4">
        About BillsSchedule2026.online
      </h1>

      <section className="space-y-4 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">Our Fan-First Mission</h2>
        <p>
          <strong>billsschedule2026.online</strong> is an independent digital fan portal dedicated to providing accurate, verified, and real-time scheduling information for the 2026 Buffalo Bills National Football League season.
        </p>
        <p>
          Founded by dedicated members of Bills Mafia, our goal is to eliminate confusion regarding game kickoff times across all four US time zones, national television broadcast assignments (CBS, FOX, NBC, ESPN, Prime Video), local radio network frequencies (WGR 550 AM), and official streaming platform options.
        </p>
      </section>

      <section className="space-y-4 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">Editorial Integrity & Verification</h2>
        <p>
          Every game kickoff time, venue detail, and broadcast network listed on our platform is independently verified against official schedule releases from the <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold">NFL League Office</a> and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold">BuffaloBills.com</a>.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">NFL Legal Disclaimer</h2>
        <p className="text-xs text-zinc-400">
          Disclaimer: billsschedule2026.online is an unofficial fan resource and is not affiliated with, endorsed by, or sponsored by the Buffalo Bills, the National Football League (NFL), or any television broadcasting partner. All team trademarks, names, and logos belong exclusively to their respective owners.
        </p>
      </section>

    </div>
  );
}
