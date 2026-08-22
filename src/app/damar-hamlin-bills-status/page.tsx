import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Damar Hamlin Bills Status: Safety Depth & News",
  description: "Latest Damar Hamlin Bills status 2026: safety depth chart position behind Cole Bishop & Taylor Rapp, special teams role, health update, and Chasing M's Foundation.",
  keywords: [
    "damar hamlin bills status",
    "damar hamlin depth chart buffalo bills 2026",
    "damar hamlin contract extension bills",
    "damar hamlin safety starting role",
    "damar hamlin health recovery update",
    "chasing ms foundation damar hamlin"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/damar-hamlin-bills-status`,
  },
  openGraph: {
    title: "Damar Hamlin Bills Status 2026: Safety Depth Chart Role &...",
    description: "Full update on Buffalo Bills safety Damar Hamlin, depth chart position, special teams contributions, and health progress.",
    url: `${SITE_CONFIG.url}/damar-hamlin-bills-status`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function DamarHamlinBillsStatusPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://billsschedule2026.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Damar Hamlin Bills Status",
        "item": "https://billsschedule2026.online/damar-hamlin-bills-status"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Damar Hamlin's current depth chart status with the Buffalo Bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Damar Hamlin is listed as a primary backup safety and core special teams player on the 2026 Buffalo Bills depth chart behind starters Cole Bishop and Taylor Rapp."
        }
      },
      {
        "@type": "Question",
        "name": "Did Damar Hamlin re-sign with the Buffalo Bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Damar Hamlin re-signed with the Buffalo Bills on a contract extension, solidifying his role in Bobby Babich's defensive secondary."
        }
      },
      {
        "@type": "Question",
        "name": "Is Damar Hamlin fully cleared to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Damar Hamlin is 100% fully cleared with zero medical restrictions, participating in all practices, scrimmages, and preseason games."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Chasing M's Foundation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Chasing M's Foundation is Damar Hamlin's charitable foundation focused on supporting youth sports, toy drives, CPR education, and AED distribution nationwide."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Damar Hamlin Bills Status 2026: Safety Depth Chart Role & News",
    "description": "Comprehensive report on Buffalo Bills safety Damar Hamlin, depth chart status, defensive snap counts, and philanthropic work.",
    "datePublished": "2026-08-23T00:00:00Z",
    "dateModified": "2026-08-23T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "BillsSchedule2026 Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BillsSchedule2026",
      "logo": {
        "@type": "ImageObject",
        "url": "https://billsschedule2026.online/favicon.ico"
      }
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* On-Page Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Damar Hamlin Bills Status</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          PLAYER STATUS & DEPTH CHART • BUFFALO BILLS SAFETY
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Damar Hamlin Bills Status 2026: Safety Depth Chart & Updates
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Everything regarding <strong>damar hamlin bills status</strong>. Explore safety depth chart position behind Cole Bishop and Taylor Rapp, contract extension details, preseason tackle production, special teams impact, and The Chasing M&apos;s Foundation.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Fully Cleared & Active
          </span>
          <span>•</span>
          <span>Position: Safety (#3)</span>
          <span>•</span>
          <span>By BillsSchedule2026 Roster Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Status Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Safety Depth Chart Table */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            2026 Buffalo Bills Safety Depth Chart Table
          </h2>
          <p className="text-xs text-zinc-400">
            Source listings verified on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Position Rank</th>
                  <th className="p-3 border border-zinc-700">Player</th>
                  <th className="p-3 border border-zinc-700">Height / Weight</th>
                  <th className="p-3 border border-zinc-700">Experience</th>
                  <th className="p-3 border border-zinc-700">Primary Role</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">FS Starter</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Cole Bishop</td>
                  <td className="p-3 border border-zinc-800">6-2 / 206 lbs</td>
                  <td className="p-3 border border-zinc-800">2nd Year</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Free Safety Starter</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">SS Starter</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Taylor Rapp</td>
                  <td className="p-3 border border-zinc-800">6-0 / 208 lbs</td>
                  <td className="p-3 border border-zinc-800">8th Year</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Strong Safety Starter</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-blue-400">S Reserve / ST</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Damar Hamlin</td>
                  <td className="p-3 border border-zinc-800">6-0 / 200 lbs</td>
                  <td className="p-3 border border-zinc-800">6th Year</td>
                  <td className="p-3 border border-zinc-800 text-blue-400 font-bold">Primary Safety Backup & Special Teams Ace</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-zinc-400">S Reserve</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Mike Edwards</td>
                  <td className="p-3 border border-zinc-800">5-10 / 205 lbs</td>
                  <td className="p-3 border border-zinc-800">7th Year</td>
                  <td className="p-3 border border-zinc-800 text-amber-400 font-bold">Rotational Sub-Package Safety</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/roster-cut-practice.webp"
              alt="Damar Hamlin Bills status safety depth chart position"
              fill
              className="object-cover"
            />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="damar-hamlin-bills-status 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Damar Hamlin participating in secondary coverage drills during Buffalo Bills training sessions.
          </p>
        </div>

        {/* Section 1: Safety Depth Chart Position */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Damar Hamlin Safety Depth Chart Position & Contract Extension Status
          </h2>
          <p>
            An examination of the <strong>damar hamlin bills status</strong> places the veteran safety in a critical rotational role within defensive coordinator Bobby Babich&apos;s secondary scheme.
          </p>
          <p>
            After re-signing with Buffalo on a contract extension, Hamlin serves as the primary backup safety behind starters Cole Bishop and Taylor Rapp, providing trusted veteran insurance and pre-snap communication.
          </p>
        </section>

        {/* Section 2: Health & Recovery Progress Update */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Health & Recovery Progress Update (2026 Season Readiness)
          </h2>
          <p>
            Hamlin&apos;s physical health is outstanding. Having overcome commotio cordis in January 2023, Hamlin has participated fully in two consecutive NFL seasons, taking regular season starter snaps and playoff reps without physical limitations.
          </p>
          <p>
            Official medical reports on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> confirm he experiences zero cardiac restrictions.
          </p>
        </section>

        {/* Section 3: Preseason Defensive Snaps */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Preseason Defensive Performance & Tackle Production
          </h2>
          <p>
            During Preseason Week 2 action against the Cleveland Browns, Hamlin rotated into the game in the second quarter, logging 3 solo tackles and breaking up an open-field pass attempt.
          </p>
          <p>
            His instinctual tackling in the box gives Buffalo flexibility when deploying nickel and dime sub-packages.
          </p>
        </section>

        {/* Section 4: Special Teams Impact */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Special Teams Ace & Defensive Room Leadership
          </h2>
          <p>
            Beyond secondary depth, Hamlin is a core contributor on Matthew Smiley&apos;s special teams units. Operating on kickoff coverage and punt return protection teams, Hamlin&apos;s disciplined lane integrity makes him an indispensable roster asset on game days.
          </p>
        </section>

        {/* Section 5: Community Philanthropy */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Community Philanthropy & The Chasing M&apos;s Foundation Impact
          </h2>
          <p>
            Off the field, Damar Hamlin continues to inspire millions through <strong>The Chasing M&apos;s Foundation</strong>. The foundation has raised millions of dollars, distributing automated external defibrillators (AEDs) to youth sports leagues, offering free CPR certification courses nationwide, and supporting annual toy drives in his hometown of McKees Rocks, Pennsylvania.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Buffalo Bills Roster & News Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/ed-oliver-son-family-news" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Ed Oliver Son News & Team Condolences
            </Link>
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
            <Link href="/bills-quarterback-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Quarterback Depth Chart: Josh Allen & Backups
            </Link>
            <Link href="/bills-kicker-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Kicker Depth Chart: Tyler Bass & Field Goals
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
