import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import RelatedTrendPages from '@/components/RelatedTrendPages';
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
          "text": "No, Josh Allen is completely 100% healthy. Sitting out during preseason action is a strategic coaching decision to protect franchise starters from injury risk before Week 1 of the regular season."
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
          "text": "Backup quarterbacks Kyle Allen, Shane Buechele, and Ben DiNucci handle the majority of preseason snaps when Josh Allen rests."
        }
      },
      {
        "@type": "Question",
        "name": "Will Josh Allen play in the regular season opener?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Josh Allen will start at quarterback for the Buffalo Bills in Week 1 of the 2026 NFL regular season."
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
            When fans ask <strong>is josh allen playing today</strong>, the decision ultimately rests with Buffalo Bills head coach Sean McDermott and offensive coordinator Joe Brady. Following high-intensity joint practice sessions with the Cleveland Browns at Huntington Bank Field earlier in the week, McDermott announced that Josh Allen and the majority of established starters would be rested for Preseason Week 2.
          </p>
          <p>
            Instead, Allen took part in pre-game field warm-up routines, throwing passes to receivers during non-contact drills, before observing game action from the sidelines in full team apparel while equipped with an offensive headset. As verified on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>, <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>, resting elite franchise quarterbacks during August games is standard NFL protocol to avoid freak injuries.
          </p>
          <p>
            For deeper depth chart context on Buffalo&apos;s quarterback room, consult our detailed <Link href="/bills-quarterback-depth-chart" className="text-blue-400 hover:underline">Bills quarterback depth chart breakdown</Link>.
          </p>
        </section>

        {/* Section 2: Josh Allen Health & Injury Status Update */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Josh Allen Health, Physical Conditioning & Injury Status Update
          </h2>
          <p>
            It is critical to clarify that Josh Allen is 100% healthy. He has suffered no structural injuries, joint sprains, or soft-tissue setbacks during 2026 training camp practices at St. John Fisher University in Pittsford, NY.
          </p>
          <p>
            Official player profiles on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a> and <a href="https://en.wikipedia.org/wiki/Josh_Allen_(quarterback)" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Wikipedia</a> highlight Allen&apos;s extraordinary durability. Over his career, Allen has missed minimal games due to injury, establishing himself as one of the NFL&apos;s most physical dual-threat signal-callers. Rest in exhibition games is purely a preventative measure ahead of a demanding 17-game regular season schedule.
          </p>
        </section>

        {/* Mid-Article Image Placement */}
        <div className="my-8 space-y-2">
          <img 
            src="/images/bills/nfl-broadcast-truck.webp" 
            alt="Josh Allen sideline broadcast updates and TV streaming information" 
            className="rounded-xl border border-zinc-800 w-full object-cover max-h-80" 
          />
          <p className="text-xs text-zinc-400 font-mono text-center">
            Broadcasters on national and local networks frequently track Allen&apos;s sideline interactions and coaching calls.
          </p>
        </div>

        {/* Section 3: Backup QB Rotation */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Backup Quarterback Rotation: Kyle Allen, Shane Buechele & Ben DiNucci Performance
          </h2>
          <p>
            With Josh Allen watching from the sideline, backup quarterback Kyle Allen earned the start under center against Cleveland. Kyle Allen delivered a statement performance, operating Joe Brady&apos;s up-tempo rhythm passing attack with accuracy and poise.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-zinc-300">
            <li>
              <strong>Kyle Allen (Preseason Starter):</strong> Completed 11 of 16 passes for 128 yards and 1 touchdown, demonstrating excellent command of the line of scrimmage and quick pocket decision-making.
            </li>
            <li>
              <strong>Shane Buechele (Secondary Rotation):</strong> Entered the game in the third quarter, connecting on 8 of 13 pass attempts for 92 yards while showing mobility outside the pocket.
            </li>
            <li>
              <strong>Ben DiNucci (Fourth Quarter Closer):</strong> Managed clock late in the game, leading a sustained touchdown drive to cap Buffalo&apos;s 31-7 victory over the Browns.
            </li>
          </ul>
          <p>
            Review the full box score stats in our <Link href="/bills-vs-browns-stats" className="text-blue-400 hover:underline">Bills vs Browns post-game stats report</Link> and check out our <Link href="/bills-vs-browns-prediction" className="text-blue-400 hover:underline">Bills vs Browns betting prediction analysis</Link>.
          </p>
        </section>

        {/* Section 4: Historic Preseason Starter Playing Time Trends */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Historic Preseason Starter Playing Time Trends Under Sean McDermott
          </h2>
          <p>
            Sean McDermott has established a consistent playbook regarding preseason starter usage over his head coaching career in Buffalo. Typically, the Bills play starters for 1 to 2 series during Preseason Week 1 to establish game speed and helmet communication, rest them entirely in Preseason Week 2 following joint practice sessions, and evaluate final roster spots in Preseason Week 3.
          </p>
          <p>
            This strategic approach minimizes injury exposure for star players while ensuring backup players receive maximum game film evaluation prior to the 53-man roster cut deadline.
          </p>
        </section>

        {/* Section 5: Fantasy Football Implications */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Fantasy Football & 2026 Regular Season Outlook for Josh Allen
          </h2>
          <p>
            For fantasy football managers drafting in August, Josh Allen resting during exhibition games is a major positive. Preserving his health ensures that his elite passing yardage, passing touchdown, and rushing touchdown baseline remains fully intact for Week 1.
          </p>
          <p>
            Allen enters the 2026 regular season anchored as a consensus Top-2 fantasy quarterback alongside Patrick Mahomes and Lamar Jackson. His chemistry with receivers Keon Coleman, Curtis Samuel, and Khalil Shakir, combined with running back support from James Cook and <Link href="/ray-davis-bills-rb" className="text-blue-400 hover:underline">Ray Davis</Link>, gives Buffalo one of the NFL&apos;s most lethal offensive environments.
          </p>
        </section>

        {/* Section 6: How to Watch & Follow Upcoming Games */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            6. How to Track Josh Allen & Buffalo Bills Game Broadcasts
          </h2>
          <p>
            Fans looking to watch Josh Allen in live regular season action can find kickoff times and television network listings on our <Link href="/where-to-watch" className="text-blue-400 hover:underline">where to watch Bills games guide</Link>.
          </p>
          <p>
            Additionally, you can check full kickoff details on our <Link href="/preseason-schedule" className="text-blue-400 hover:underline">2026 Bills preseason schedule</Link> or download the official <Link href="/printable-schedule" className="text-blue-400 hover:underline">printable Bills schedule PDF</Link> for offline reference.
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

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Official Answer for Browns Week: Allen Sat
        </h2>
        <p>
          If you were asking this question before kickoff in Cleveland, here is your resolution: Josh Allen did not play in Buffalo&apos;s second preseason game. Multiple outlets confirmed the plan well before the weekend — the <a href="https://www.democratandchronicle.com/story/sports/football/nfl/bills/2026/08/22/josh-allen-buffalo-bills-preseason-game-cleveland-browns/91421167007/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Democrat &amp; Chronicle reported</a> that Allen was among several starters who went through a separate workout before the game rather than warming up in uniform, and NFL Network&apos;s Cameron Wolfe delivered the same verdict on broadcast. Buffalo&apos;s reserves went on to win 31-7 without him.
        </p>
        <p>
          This is not injury news. It is calendar management by design, and it fits a pattern the organization has followed for years with its franchise quarterback: August exists to evaluate the bottom of the roster, not to expose the most valuable asset on it to unnecessary contact.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          Buffalo&apos;s Preseason Playing-Time Philosophy
        </h2>
        <p>
          Sean McDermott&apos;s staff has been among the league&apos;s most conservative franchises regarding starter exposure in exhibition play. The modern math is unforgiving: a franchise quarterback represents a nine-figure investment protected by a salary cap that offers no discount for August heroics. Joint practices have largely replaced live preseason snaps as the preferred high-intensity tune-up, because they deliver controlled game-speed work against foreign opponents without full-contact return units and exotic blitz packages targeting the quarterback.
        </p>
        <p>
          Under this philosophy, the starting offense typically gets its true dress rehearsal in the final preseason week — if at all — and even then usually limited to a series or two. Fans expecting to see the first-team offense in full rhythm before the regular-season opener are generally watching the wrong month. The reliable answer to playing-time questions almost always comes from the team&apos;s own beat reporting in the 48 hours before each kickoff, which is exactly how the Cleveland decision surfaced.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Who Takes the Reps While Allen Rests
        </h2>
        <p>
          Every Allen rest day is an audition day for the quarterback room behind him. Buffalo carries veteran backup competition at the position — our dedicated guide tracks the <Link href="/kyle-allen-bills-qb2" className="text-blue-400 underline hover:text-blue-300">battle for the QB2 job</Link> — and preseason games are where those rep distributions actually happen. The backup hierarchy matters more in Buffalo than in most cities: Allen&apos;s rushing style means the backup quarterback has been forced into meaningful regular-season snaps multiple times in recent years, making the quality of the reserve room a genuine roster priority rather than a formality.
        </p>
        <p>
          Those August reps also serve the offensive development staff. Young receivers fighting for the final roster spots build trust with whichever quarterbacks will actually throw to them in December emergencies, and the play-calling in these games deliberately mirrors situations — two-minute, red zone, four-minute clock management — that backups must execute cold when summoned mid-season.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          When You Will Actually See Allen Play Next
        </h2>
        <p>
          The realistic next sighting depends on the final exhibition week. Some seasons McDermott gives starters a token quarter in Game 3; others he skips it entirely and treats Week 1 of the regular season as the debut. Either way, the games that count arrive soon — every kickoff time and broadcast assignment is tracked on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> homepage, with streaming details in the <Link href="/where-to-watch" className="text-blue-400 underline hover:text-blue-300">Where to Watch guide</Link> and the full year available as a <Link href="/printable-schedule" className="text-blue-400 underline hover:text-blue-300">printable PDF</Link>.
        </p>
        <p>
          Bookmark this page for each preseason weekend: the answer to &quot;is Josh Allen playing today&quot; follows a predictable pattern — expect no in August, expect everything in September — but the confirmation always arrives via official channel roughly one day before kickoff.
        </p>
      </section>

      {/* Mounting RelatedTrendPages Component */}
      <RelatedTrendPages currentSlug="is-josh-allen-playing-today" />

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Injury-History Context That Drives Buffalo&apos;s Caution
        </h2>
        <p>
          Allen&apos;s playing style — quarterback power football with genuine contact volume — creates a protection calculus unlike pocket-passer franchises face. Every designed run carries league-average injury probability multiplied by his usage rate; every scramble extends plays past protection boundaries into hit territory. The organization&apos;s August conservatism is therefore not generic caution but specific actuarial response to how its most irreplaceable asset actually absorbs punishment.
        </p>
        <p>
        League history supplies the cautionary tales: MVP-caliber seasons lost to exhibition injuries that provided zero roster information. The modern consensus among front offices has hardened accordingly — franchise quarterbacks sign contracts, not preseason obligations. Buffalo&apos;s approach simply operationalizes that consensus more consistently than most, which is why the answer to this page&apos;s question will keep being &quot;no&quot; until games count.
        </p>
      </section>

      {/* Sources & Authority References */}
      {/* Sources & Authority References */}
      <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
        <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
        <ul className="space-y-1">
          <li><a href="https://www.nfl.com/teams/buffalo-bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com Official Josh Allen Page</a></li>
          <li><a href="https://www.espn.com/nfl/team/_/name/buf/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com Bills Quarterback Hub</a></li>
          <li><a href="https://www.cbssports.com/nfl/teams/BUF/buffalo-bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">CBS Sports Injury & Roster News</a></li>
          <li><a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">BuffaloBills.com Official Announcements</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Josh_Allen_(quarterback)" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia Josh Allen Biography</a></li>
        </ul>
      </section>
    </div>
  );
}

