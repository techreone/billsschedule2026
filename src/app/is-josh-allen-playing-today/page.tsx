import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Is Josh Allen Playing Today? Bills QB Status Update",
  description: "Is Josh Allen playing today? Check Sean McDermott's official starter status for Buffalo Bills QB Josh Allen, preseason snap counts, health, and backup rotation.",
  keywords: [
    "is josh allen playing today",
    "will josh allen play preseason today",
    "josh allen playing status bills game",
    "sean mcdermott josh allen preseason decision",
    "josh allen injury update 2026",
    "buffalo bills qb starter today"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/is-josh-allen-playing-today`,
  },
  openGraph: {
    title: "Is Josh Allen Playing Today? Bills QB Preseason Status 2026",
    description: "Official update on Buffalo Bills quarterback Josh Allen's playing status for today's game, including starter snap count decisions.",
    url: `${SITE_CONFIG.url}/is-josh-allen-playing-today`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function IsJoshAllenPlayingTodayPage() {
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
        "name": "Is Josh Allen Playing Today",
        "item": "https://billsschedule2026.online/is-josh-allen-playing-today"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Josh Allen playing in today's Bills game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Head coach Sean McDermott rested Josh Allen and key veteran starters during Preseason Week 2 against the Cleveland Browns. Kyle Allen started at quarterback."
        }
      },
      {
        "@type": "Question",
        "name": "Is Josh Allen injured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Josh Allen is completely healthy. Sitting out during preseason action is a strategic coaching decision to protect franchise starters from injury risk before Week 1 of the regular season."
        }
      },
      {
        "@type": "Question",
        "name": "How many preseason snaps does Josh Allen usually play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Sean McDermott, Josh Allen typically plays 1 to 2 offensive series during select preseason contests (often Preseason Week 1 or Week 3) to calibrate timing with receivers."
        }
      },
      {
        "@type": "Question",
        "name": "Who plays quarterback when Josh Allen sits out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Backup quarterbacks Kyle Allen and Shane Buechele handle the majority of preseason snaps when Josh Allen rests."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is Josh Allen Playing Today? Bills QB Preseason Status 2026",
    "description": "Comprehensive report on Buffalo Bills quarterback Josh Allen's game status, starter playing time philosophy, and fantasy football implications.",
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
        <span className="text-white font-semibold">Is Josh Allen Playing Today</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          PLAYER STATUS REPORT • BUFFALO BILLS QB1
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Is Josh Allen Playing Today? 2026 Preseason Playing Time & Health Update
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Everything fans need to know regarding <strong>is josh allen playing today</strong>. Read Sean McDermott&apos;s starter snap count announcements, Josh Allen&apos;s physical health status, backup QB rotation plans, historical preseason trends, and 2026 fantasy football outlook.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Verified Starter Roster Status
          </span>
          <span>•</span>
          <span>Status: Fully Healthy / Rested</span>
          <span>•</span>
          <span>By BillsSchedule2026 Player Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quick Status Box */}
        <div className="bg-gradient-to-r from-blue-950/60 via-zinc-900 to-red-950/50 p-6 rounded-xl border border-blue-800/50 space-y-4">
          <h2 className="font-headline font-bold text-white uppercase tracking-wider text-base md:text-lg flex items-center gap-2">
            <span>🏈</span> Quick Answer: Josh Allen Today&apos;s Status Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono">
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Today&apos;s Status</span>
              <span className="text-lg font-bold text-yellow-400">Rested / Inactive</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Health Designation</span>
              <span className="text-lg font-bold text-emerald-400">100% Healthy</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Preseason Starting QB</span>
              <span className="text-lg font-bold text-white">Kyle Allen</span>
            </div>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/josh-allen-action.webp"
              alt="Josh Allen playing today status Buffalo Bills quarterback"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Franchise quarterback Josh Allen went through pre-game warmups before resting during Preseason Week 2.
          </p>
        </div>

        {/* Section 1: Sean McDermott Announcement */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Sean McDermott Announcement on Josh Allen Preseason Playing Time
          </h2>
          <p>
            When fans ask <strong>is josh allen playing today</strong>, the decision ultimately rests with Buffalo Bills head coach Sean McDermott. Prior to the Week 2 preseason matchup against the Cleveland Browns, McDermott confirmed that Josh Allen and the majority of primary starters would not play live game snaps.
          </p>
          <p>
            Instead, Allen took part in pre-game field warm-up routines and quarterback meetings, observing the action from the sidelines in full team apparel. As reported on <a href="https://www.si.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Sports Illustrated</a> and <a href="https://www.democratandchronicle.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Democrat & Chronicle</a>, McDermott prioritized giving backup signal-callers maximum reps while evaluating bubble roster candidates.
          </p>
        </section>

        {/* Section 2: Josh Allen Health & Injury Status Update */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Josh Allen Health, Physical Conditioning & Injury Status Update
          </h2>
          <p>
            It is critical to note that Josh Allen is 100% healthy. He has suffered no structural injuries, joint sprains, or soft-tissue setbacks during 2026 training camp practices at St. John Fisher University.
          </p>
          <p>
            Official player profiles on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> and <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> confirm Allen has been an ironman throughout his career, maintaining top physical conditioning under offensive coordinator Joe Brady. Rest in exhibition games is standard procedure across the league for elite tier-1 franchise quarterbacks.
          </p>
        </section>

        {/* Section 3: Backup QB Rotation */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Backup Quarterback Rotation: Kyle Allen & Shane Buechele Snap Counts
          </h2>
          <p>
            With Josh Allen sitting out, backup quarterbacks Kyle Allen and Shane Buechele shared the workload under center:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Kyle Allen (Starter):</strong> Operated the first-half offense smoothly, going 11-of-16 for 128 yards and 1 touchdown.</li>
            <li><strong>Shane Buechele (Second Half):</strong> Took over in the third quarter, completing 8-of-13 attempts for 92 yards and 1 touchdown.</li>
          </ul>
        </section>

        {/* Section 4: Historic Preseason Starter Playing Time Trends */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Historic Preseason Starter Playing Time Trends Under Sean McDermott
          </h2>
          <p>
            Sean McDermott has established a consistent playbook regarding preseason starter usage over his eight-year tenure in Buffalo. Typically, the Bills play starters for 1 to 2 series during Preseason Week 1 to establish communication tempo, sit them entirely in Preseason Week 2, and use Preseason Week 3 as a dress rehearsal if needed.
          </p>
        </section>

        {/* Section 5: Fantasy Football Implications */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Fantasy Football & 2026 Regular Season Outlook for Josh Allen
          </h2>
          <p>
            For fantasy football managers, Josh Allen resting during August games is positive news. Avoiding unnecessary collisions in preseason preserves his dual-threat upside for Week 1 of the regular season. Allen remains a consensus Top-2 fantasy quarterback pick alongside Patrick Mahomes and Lamar Jackson.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Quarterback & Depth Chart Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/bills-quarterback-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Quarterback Depth Chart: Josh Allen & Backups
            </Link>
            <Link href="/bills-vs-browns-stats" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Final Stats & Kyle Allen Box Score
            </Link>
            <Link href="/bills-vs-browns-prediction" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Prediction & Betting Line Analysis
            </Link>
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
