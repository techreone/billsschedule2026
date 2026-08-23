import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Bills RB Depth Chart 2026: James Cook & Backups",
  description: "Official Buffalo Bills RB depth chart 2026: breakdown of starter James Cook III, power back Ray Davis, Ty Johnson, Frank Gore Jr. & final 53-man roster projections.",
  keywords: [
    "buffalo bills rb depth chart",
    "bills running back depth chart 2026",
    "james cook rb1 buffalo bills",
    "ray davis bills running back",
    "frank gore jr bills depth chart",
    "ty johnson bills rb3",
    "bills 53 man roster running backs"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-rb-depth-chart`,
  },
  openGraph: {
    title: "Buffalo Bills RB Depth Chart 2026: James Cook, Ray Davis ...",
    description: "In-depth analysis of the 2026 Buffalo Bills running back depth chart, featuring starter James Cook III and reserve RB roles.",
    url: `${SITE_CONFIG.url}/bills-rb-depth-chart`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function BillsRbDepthChartPage() {
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
        "name": "Bills RB Depth Chart",
        "item": "https://billsschedule2026.online/bills-rb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting running back for the Buffalo Bills in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "James Cook III is the undisputed RB1 starting running back for the Buffalo Bills, coming off back-to-back 1,000-yard rushing campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the backup RB behind James Cook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Power back Ray Davis is listed as RB2, handling short-yardage and goal-line duties, while veteran Ty Johnson serves as the primary third-down passing back."
        }
      },
      {
        "@type": "Question",
        "name": "Is Frank Gore Jr. on the Buffalo Bills depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Frank Gore Jr. is competing on the depth chart, fighting for a spot on the 53-man roster or practice squad following strong preseason performances."
        }
      },
      {
        "@type": "Question",
        "name": "How many running backs will the Bills keep on their final 53-man roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bills are projected to carry 3 or 4 running backs on their active 53-man roster, plus fullback Reggie Gilliam for special teams."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Buffalo Bills RB Depth Chart 2026: James Cook, Ray Davis & Backups",
    "description": "Complete breakdown of the Buffalo Bills running back depth chart, player traits, contract values, and 53-man roster outlook.",
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
        <span className="text-white font-semibold">Bills RB Depth Chart</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          OFFENSIVE DEPTH CHART • RUNNING BACK ROOM
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Buffalo Bills RB Depth Chart 2026: Starters & Backup Hierarchy
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Complete breakdown of the official <strong>buffalo bills rb depth chart</strong>. Explore starter James Cook III, power back Ray Davis, pass-catching specialist Ty Johnson, preseason standout Frank Gore Jr., and rookie speedster Ian Wheeler.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Official Training Camp Roster
          </span>
          <span>•</span>
          <span>Position Group: 5 Backs</span>
          <span>•</span>
          <span>By BillsSchedule2026 Scouting Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Depth Chart Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Depth Chart Table */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            2026 Buffalo Bills Running Back Depth Chart Table
          </h2>
          <p className="text-xs text-zinc-400">
            Cross-referenced with official depth chart tracking on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Rank</th>
                  <th className="p-3 border border-zinc-700">Player</th>
                  <th className="p-3 border border-zinc-700">Height / Weight</th>
                  <th className="p-3 border border-zinc-700">Experience</th>
                  <th className="p-3 border border-zinc-700">Primary Specialty</th>
                  <th className="p-3 border border-zinc-700">Roster Status</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">RB1</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">James Cook III</td>
                  <td className="p-3 border border-zinc-800">5-11 / 190 lbs</td>
                  <td className="p-3 border border-zinc-800">5th Year</td>
                  <td className="p-3 border border-zinc-800 text-blue-400">Featured Three-Down Back</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Lock Starter</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-blue-400">RB2</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Ray Davis</td>
                  <td className="p-3 border border-zinc-800">5-8 / 211 lbs</td>
                  <td className="p-3 border border-zinc-800">2nd Year</td>
                  <td className="p-3 border border-zinc-800 text-red-400">Short-Yardage & Goal-Line</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Active 53 Lock</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-zinc-400">RB3</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Ty Johnson</td>
                  <td className="p-3 border border-zinc-800">5-10 / 210 lbs</td>
                  <td className="p-3 border border-zinc-800">7th Year</td>
                  <td className="p-3 border border-zinc-800 text-amber-400">Third-Down Pass Protection</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Active 53 Lock</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-zinc-500">RB4</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Frank Gore Jr.</td>
                  <td className="p-3 border border-zinc-800">5-8 / 200 lbs</td>
                  <td className="p-3 border border-zinc-800">2nd Year</td>
                  <td className="p-3 border border-zinc-800">Inside Zone & Between-Tackles</td>
                  <td className="p-3 border border-zinc-800 text-amber-400 font-bold">Roster Bubble / PS</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-zinc-500">RB5</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Ian Wheeler</td>
                  <td className="p-3 border border-zinc-800">5-11 / 205 lbs</td>
                  <td className="p-3 border border-zinc-800">Rookie</td>
                  <td className="p-3 border border-zinc-800">Perimeter Speed & Kick Return</td>
                  <td className="p-3 border border-zinc-800 text-zinc-400">Practice Squad Candidate</td>
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
              alt="Buffalo Bills RB depth chart James Cook Ray Davis Frank Gore Jr"
              fill
              className="object-cover"
            />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="bills-rb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Buffalo Bills running backs practicing handoff drills during 2026 training camp sessions.
          </p>
        </div>

        {/* Section 1: RB1 Starter Status: James Cook */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. RB1 Franchise Starter Status: James Cook III
          </h2>
          <p>
            An inspection of the <strong>buffalo bills rb depth chart</strong> begins with premier starter James Cook III. Drafted out of the University of Georgia, Cook has evolved into one of the league&apos;s most dynamic dual-threat weapons, recording consecutive 1,000-yard rushing campaigns.
          </p>
          <p>
            Cook&apos;s lateral agility, receiver-caliber hands out of the backfield, and breakaway speed make him the centerpiece of offensive coordinator Joe Brady&apos;s high-powered attack.
          </p>
        </section>

        {/* Section 2: Power Back: Ray Davis */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Power Back & Goal-Line Duties: Ray Davis
          </h2>
          <p>
            Selected in the fourth round of the 2024 draft out of Kentucky, Ray Davis provides the physical hammer to Cook&apos;s lightning. At 211 pounds, Davis excels in short-yardage conversions and goal-line touchdown situations.
          </p>
          <p>
            During Preseason Week 2 against the Cleveland Browns, Davis demonstrated his power by scoring on a 1-yard goal-line plunge, proving his value in red zone packages.
          </p>
        </section>

        {/* Section 3: Frank Gore Jr. */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Preseason Standout & Roster Bubble Candidate: Frank Gore Jr.
          </h2>
          <p>
            The son of NFL legendary hall-of-fame finalist Frank Gore, Frank Gore Jr. has captured fan attention throughout Western New York. Showing great patience and contact balance, Gore Jr. led Buffalo with 52 rushing yards on 10 carries against Cleveland.
          </p>
          <p>
            He continues to push veteran Ty Johnson for rotational touches during second-half offensive series.
          </p>
        </section>

        {/* Section 4: Third-Down & Special Teams */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Third-Down Pass Protection & Special Teams: Ty Johnson & Ian Wheeler
          </h2>
          <p>
            Veteran Ty Johnson serves a vital security blanket role on third down. Johnson&apos;s mastery of blitz pickup and pass protection keeps Josh Allen clean when opposing defenses show exotic blitzes.
          </p>
          <p>
            Rookie Ian Wheeler brings explosive track speed, making him a prime candidate for kick coverage and return units on special teams coordinator Matthew Smiley&apos;s squad.
          </p>
        </section>

        {/* Section 5: Final 53-Man Roster Projections */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Final 53-Man Roster Projections for Bills Running Backs
          </h2>
          <p>
            As general manager Brandon Beane prepares for final roster cuts, Buffalo is projected to carry four primary running backs (James Cook, Ray Davis, Ty Johnson, and Frank Gore Jr.) alongside fullback Reggie Gilliam.
          </p>
          <p>
            This deep backfield depth provides Buffalo with versatile personnel combinations capable of grinding out games in cold Orchard Park weather.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Bills Depth Chart Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/bills-quarterback-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Quarterback Depth Chart: Josh Allen & Backups
            </Link>
            <Link href="/bills-kicker-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Kicker Depth Chart: Tyler Bass & Special Teams
            </Link>
            <Link href="/damar-hamlin-bills-status" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Damar Hamlin Safety Status & Roster Role
            </Link>
            <Link href="/bills-vs-browns-stats" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Preseason Stats & Box Score
            </Link>
          </div>
        </div>

      </article>
    
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The 2026 Hierarchy at a Glance
        </h2>
        <p>
          Buffalo&apos;s running back room enters the regular season with unusual clarity at the top and genuine suspense everywhere else. Projected charts published through camp — including the <a href="https://sports.yahoo.com/articles/grok-projects-buffalo-bills-depth-163000080.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Yahoo Sports compilation</a> and the national trackers at <a href="https://www.ourlads.com/nfldepthcharts/depthchart/BUF" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Ourlads</a> — line up <strong>James Cook III</strong> as the uncontested starter, with Ty Johnson, Ray Davis, and Frank Gore Jr. stacked behind him and undrafted rookie Ian Wheeler fighting for the final seat at the table.
        </p>
        <p>
          That four-man competition for roughly two active roster roles is why this page updates weekly through cutdowns: the Bills have kept three halfbacks plus a fullback in most recent seasons, which means one of these names will survive on special-teams merit alone.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          James Cook: The Engine of the Offense
        </h2>
        <p>
          Cook&apos;s value is defined by versatility rather than volume. He is the rare back who threatens defenses on scripted early downs, in the two-minute drill, and as a detached receiver in empty formations — a profile that fits Buffalo&apos;s play-action-heavy offense perfectly because linebacker coverage rules break down when a starting-caliber back splits out wide. His ball-handling security in Buffalo&apos;s lake-effect November games has also become an underrated asset; coaches trust him in conditions where exchange discipline decides games.
        </p>
        <p>
          The front office&apos;s decision to keep him rather than trade him during his contract standoff now looks like the stabilizing choice it promised to be: this offensive scheme still runs through Allen, but Cook is the pressure valve that keeps third-and-manageable on the menu.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Committee: Johnson, Davis, and Their Distinct Lanes
        </h2>
        <p>
          Ty Johnson has quietly become one of the more trusted third-down backs in the conference — a pass-protection specialist who rarely leaves the field on two-minute drives and whose screen-pass chemistry with Josh Allen shows up in the tape long before it shows in box scores. Ray Davis occupies the complementary lane: a between-the-tackles power runner whose rookie-season flashes earned him genuine short-yardage and goal-line work, and whose preseason performances have consistently outpaced his rep count.
        </p>
        <p>
          Their coexistence is not redundancy. Defensive substitution patterns force Buffalo to carry both profiles — a scatback who wins mismatches against linebackers and a hammer who converts fourth-and-one in December wind. The question is never whether both make the roster; it is how the workload splits when games count.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Bottom-of-Roster Battle: Gore Jr. and Wheeler
        </h2>
        <p>
          Frank Gore Jr. carries the most famous surname in this fight and has built a legitimate case on his own tape — vision between the tackles and a compact run style that translates to preseason football. Ian Wheeler, the undrafted rookie, counters with special-teams range that coordinators covet in the 53rd-man debate. Preseason snaps like the ones logged against Cleveland are precisely where this verdict gets written, and the loser becomes a priority practice-squad candidate rather than an unemployment statistic.
        </p>
        <p>
          Follow every roster decision point on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and see how the passing-game pecking order shapes up in the <Link href="/bills-quarterback-depth-chart" className="text-blue-400 underline hover:text-blue-300">quarterback depth guide</Link>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Final Seat: Gore Jr. Versus Wheeler
        </h2>
        <p>
          The backfield&apos;s last roster battle deserves its own analysis because it represents two competing development philosophies. Gore Jr. carries pedigree plus polished vision — the kind of profile that succeeds on refined fundamentals. Wheeler counters with raw special-teams range that coaches covet because coverage units decide close games in ways offensive statistics never capture. One makes the roster by earning offensive trust; the other makes it by covering kicks immediately.
        </p>
        <p>
          The loser still has a path: Buffalo&apos;s practice squad historically protects its priority backs, meaning this competition determines Week 1 active status more than long-term employment. Watch the fourth-quarter snap distributions in the final exhibition — coaches reveal their true rankings through who plays when outcomes stop mattering.
        </p>
      </section>

        {/* Sources & Authority References */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Contract Dimension: Why This Room&apos;s Economics Matter
        </h2>
        <p>
          Buffalo&apos;s backfield decisions cannot be separated from running back economics. The franchise&apos;s refusal to pay premium second-contract money at the position — a league-wide trend Buffalo helped normalize — means every season brings fresh legs competing at rookie wages against incumbents playing prove-it years. Cook&apos;s extension resolution stabilized this specific room, but the structural pressure remains: Davis and Johnson both enter contract-relevant seasons where their market value depends entirely on split-duty production they may never get volume to show.
        </p>
        <p>
          This is why the coaching staff&apos;s rotation philosophy matters more here than at any other position group. Generational offenses can suppress running back salaries because the passing game carries the payroll — but only if the committee delivers playoff-quality ground football on rookie contracts. That is the quiet bargain every name on this chart has accepted, and it is why preseason auditions carry financial consequences far beyond September depth chart listings.
        </p>
        <p>
          The front office&apos;s ideal outcome is boring: balanced production, no contract drama, and a December offense that runs when lake-effect wind makes everything else theoretical.
        </p>
      </section>

        {/* Sources & Authority References */}
        {/* Sources & Authority References */}
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/buffalo-bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/buf/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
</div>
  );
}
