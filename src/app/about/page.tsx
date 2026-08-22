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

      <section className="space-y-4 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">What You&apos;ll Find on This Site</h2>
        <p>
          The portal is organized around four focused, advertising-supported resources so fans can jump straight to what they need:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-300">
          <li><strong>Full Season Schedule</strong> — every 2026 regular-season game with kickoff time (ET), opponent, venue, and TV/stream assignment.</li>
          <li><strong>Where to Watch Guide</strong> — network maps, streaming platforms (CBS, FOX, NBC, ESPN, Prime Video, Peacock), and blackout explanations.</li>
          <li><strong>Preseason Slate</strong> — August exhibition dates, roster cutdowns, and how to stream the preseason.</li>
          <li><strong>Printable PDF &amp; Calendar</strong> — a one-page schedule sheet and .ICS feed for Google and Apple Calendar.</li>
        </ul>
      </section>

      <section className="space-y-4 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">How We Keep Data Current</h2>
        <p>
          The NFL Flexible Scheduling policy can shift select games into primetime during Weeks 12–18. Our editorial team monitors official releases weekly and updates kickoff times, broadcast networks, and streaming links as soon as changes are confirmed by the league office. Where a late-season game is marked TBD, we surface the most likely network based on the existing media deal.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">Get in Touch</h2>
        <p>
          Found a discrepancy or want to suggest a resource? Reach our editorial staff at{' '}
          <a href="mailto:support@billsschedule2026.online" className="text-blue-400 underline font-bold">
            support@billsschedule2026.online
          </a>{' '}
          and we will review the listing promptly.
        </p>
      </section>

    </div>
  );
}
