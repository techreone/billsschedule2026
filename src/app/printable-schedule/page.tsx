import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Printable Buffalo Bills Schedule 2026 (PDF & Calendar Sync)",
  description: "Download the printable 2026 Buffalo Bills schedule PDF or sync game kickoff times to your phone calendar.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/printable-schedule`,
  },
};

export default function PrintableSchedulePage() {
  return (
    <div className="space-y-6">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-gray-400 font-medium flex items-center gap-2">
        <Link href="/" className="hover:text-blue-400 underline">
          Home
        </Link>
        <span>/</span>
        <span className="text-white">Printable Schedule</span>
      </nav>

      <header className="space-y-2">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white">
          Printable Buffalo Bills Schedule 2026
        </h1>
        <p className="text-gray-400 text-sm">
          Downloadable 1-page PDF schedule & calendar sync guide.
        </p>
      </header>

      <AdSlot label="Advertisement" type="banner" />

      <div className="bg-gray-900/60 p-6 md:p-8 rounded-2xl border border-gray-800 space-y-6 text-sm text-gray-300">
        <h2 className="text-lg font-bold text-white">Download 2026 Schedule PDF</h2>
        <p>
          Print a 1-page summary of all 17 regular season games and 3 preseason matchups for your home, office, or refrigerator.
        </p>
        
        <div className="p-6 bg-gray-950 rounded-xl border border-gray-800 text-center space-y-3 max-w-md mx-auto">
          <div className="text-4xl">📄</div>
          <h3 className="font-bold text-white text-base">Buffalo_Bills_2026_Schedule.pdf</h3>
          <p className="text-xs text-gray-400">Includes game dates, EST kickoff times, opponents, and TV channels.</p>
          <button className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all">
            Download PDF Schedule (Placeholder)
          </button>
        </div>

        <h2 className="text-lg font-bold text-white">Sync Schedule to Google / Apple Calendar</h2>
        <p>
          Never miss a kickoff. You can sync the official Bills calendar to your smartphone or Outlook calendar for automatic game time notifications.
        </p>

        <div className="p-4 bg-blue-950/40 border border-blue-800/40 rounded-xl">
          <p className="text-xs text-blue-200">
            👉 Return to the full interactive{' '}
            <Link href="/" className="text-white font-bold underline hover:text-blue-400">
              Buffalo Bills Schedule 2026
            </Link>{' '}
            for live countdowns and streaming updates.
          </p>
        </div>
      </div>

    </div>
  );
}
