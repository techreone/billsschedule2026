import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Washington Commanders Depth Chart 2026: Starters",
  description: "Complete Washington Commanders 2026 depth chart breakdown: starters across QB Jayden Daniels, RB, WR, defense & special teams.",
  keywords: [
    "commanders depth chart 2026",
    "washington commanders starters 2026",
    "jayden daniels commanders qb",
    "terry mclaurin commanders wr",
    "bobby wagner commanders defense",
    "dan quinn commanders roster",
    "commanders vs bills 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commanders-depth-chart-2026`,
  },
};

export default function CommandersDepthChart2026Page() {
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
        "name": "Commanders Depth Chart 2026",
        "item": "https://billsschedule2026.online/commanders-depth-chart-2026"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Washington Commanders Depth Chart 2026: Starters & Roster",
    "description": "Full positional analysis of the 2026 Washington Commanders depth chart featuring Jayden Daniels, Dan Quinn's defense, and special teams.",
    "image": "https://billsschedule2026.online/images/bills/roster-cut-practice.webp",
    "datePublished": "2026-08-23",
    "author": {
      "@type": "Organization",
      "name": "Buffalo Bills Schedule 2026"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Buffalo Bills Schedule 2026",
      "logo": {
        "@type": "ImageObject",
        "url": "https://billsschedule2026.online/favicon.ico"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the Washington Commanders in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jayden Daniels enters 2026 as the franchise starting quarterback for the Washington Commanders, backed up by veteran Marcus Mariota."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Commanders running back depth chart in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brian Robinson Jr. and Austin Ekeler share backfield duties, combining interior power carries with pass-catching options out of the backfield."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Washington Commanders defense under Dan Quinn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran All-Pro linebacker Bobby Wagner anchors the defense alongside Frankie Luvu, Jonathan Allen, and Daron Payne."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans find official Washington Commanders depth chart updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official updates are available weekly on Commanders.com, ESPN, and CBS Sports throughout the 2026 season."
        }
      }
    ]
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12 px-4 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-zinc-200">Commanders Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-red-900/60 text-red-300 border border-red-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            2026 NFL Roster Analysis
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Washington Commanders 2026 Depth Chart & Complete Roster Breakdown
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Comprehensive positional evaluation of the 2026 Washington Commanders depth chart under head coach Dan Quinn and offensive coordinator Kliff Kingsbury. Complete guide to Jayden Daniels&apos; offense, front-seven starters, and special teams.
        </p>
      </header>

      {/* Snapshot Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/roster-cut-practice.webp"
            alt="Washington Commanders 2026 Depth Chart Roster Analysis"
            width={240}
            height={160}
            className="object-cover rounded-lg border border-zinc-700 drop-shadow-md"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="commanders-depth-chart-2026 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-red-400">2026 Washington Commanders Snapshot</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Head Coach:</strong> Dan Quinn</li>
            <li><strong className="text-white">Franchise QB:</strong> Jayden Daniels</li>
            <li><strong className="text-white">Star WR:</strong> Terry McLaurin</li>
            <li><strong className="text-white">Defensive Anchor:</strong> Bobby Wagner & Daron Payne</li>
            <li><strong className="text-white">Official Roster Link:</strong> <a href="https://www.commanders.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">Commanders.com Depth Chart</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Dan Quinn New Era Offense */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          1. Dan Quinn New Era Offense: Jayden Daniels, Terry McLaurin & Austin Ekeler
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          The Washington Commanders offense in 2026 centers around franchise quarterback Jayden Daniels, whose dynamic dual-threat ability transforms offensive coordinator Kliff Kingsbury&apos;s system. Daniels&apos; deep ball accuracy on perimeter passes pairs with his scrambles, putting pressure on second-level defenders.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Star wide receiver Terry McLaurin leads the receiving core, consistently winning isolated 1-on-1 matchups on boundary routes. In the backfield, Brian Robinson Jr. carries interior power loads, while veteran Austin Ekeler operates as a third-down pass catcher out of the backfield.
        </p>

        {/* Offense Depth Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-red-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position</th>
                <th className="p-3 border-b border-zinc-700">Starter (1st)</th>
                <th className="p-3 border-b border-zinc-700">Backup (2nd)</th>
                <th className="p-3 border-b border-zinc-700">Depth (3rd)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Quarterback (QB)</td>
                <td className="p-3 text-red-300 font-bold">Jayden Daniels</td>
                <td className="p-3">Marcus Mariota</td>
                <td className="p-3 text-zinc-400">Sam Hartman</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Running Back (RB)</td>
                <td className="p-3 text-red-300 font-bold">Brian Robinson Jr.</td>
                <td className="p-3">Austin Ekeler</td>
                <td className="p-3 text-zinc-400">Jeremy McNichols</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Wide Receiver (WR1)</td>
                <td className="p-3 text-red-300 font-bold">Terry McLaurin</td>
                <td className="p-3">Olamide Zaccheaus</td>
                <td className="p-3 text-zinc-400">Jamison Crowder</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Wide Receiver (WR2)</td>
                <td className="p-3 text-red-300 font-bold">Noah Brown</td>
                <td className="p-3">Luke McCaffrey</td>
                <td className="p-3 text-zinc-400">Bryce Tremayne</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Tight End (TE)</td>
                <td className="p-3 text-red-300 font-bold">Zach Ertz</td>
                <td className="p-3">Ben Sinnott</td>
                <td className="p-3 text-zinc-400">John Bates</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-zinc-300 leading-relaxed text-sm">
          Track official roster metrics on <a href="https://www.espn.com/nfl/team/depth/_/name/wsh" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ESPN Washington Commanders Depth Chart</a>.
        </p>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Defensive Line & Linebackers */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          2. Defensive Line & Linebacker Starters: Bobby Wagner & Daron Payne
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Under head coach Dan Quinn, the Commanders defensive front emphasizes physical interior play and aggressive linebackers. Future Hall of Fame linebacker Bobby Wagner brings veteran play-calling leadership to the defense, organizing front-seven alignments before every snap.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Beside Wagner, linebacker Frankie Luvu adds pass-rush blitz versatility. On the defensive interior, tackles Daron Payne and Jonathan Allen collapse opponent pockets, forcing quick pass attempts.
        </p>

        {/* Defense Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-red-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Defense Position</th>
                <th className="p-3 border-b border-zinc-700">Starter</th>
                <th className="p-3 border-b border-zinc-700">Backup</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Defensive Tackle (DT)</td>
                <td className="p-3 text-red-300 font-bold">Daron Payne</td>
                <td className="p-3">Phidarian Mathis</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Defensive Tackle (DT)</td>
                <td className="p-3 text-red-300 font-bold">Jonathan Allen</td>
                <td className="p-3">Johnny Newton</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Defensive End (DE)</td>
                <td className="p-3 text-red-300 font-bold">Clelin Ferrell</td>
                <td className="p-3">Dorance Armstrong</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Middle Linebacker (MLB)</td>
                <td className="p-3 text-red-300 font-bold">Bobby Wagner</td>
                <td className="p-3">Mykal Walker</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Outside Linebacker (OLB)</td>
                <td className="p-3 text-red-300 font-bold">Frankie Luvu</td>
                <td className="p-3">Jamin Davis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2-3: Secondary Starters */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          3. Secondary Starters & Pass Coverage
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Washington&apos;s secondary relies on young cornerbacks Emmanuel Forbes and Mike Sainristil to handle man and zone coverage duties. Free safety Jeremy Chinn provides secondary enforcer physicality, stopping run plays near the line of scrimmage.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Strong safety Quan Martin delivers deep bracket coverage, helping prevent big plays against high-velocity passing attacks across the NFC and AFC.
        </p>
      </section>

      {/* H2-4: Special Teams Starters */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          4. Special Teams & Kicking Starters
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Kicker Riley Patterson handles scoring duties inside 50 yards, while punter Tress Way continues to deliver field position punts inside the 20-yard line. Return specialist Jamison Crowder provides veteran kickoff and punt return experience.
        </p>
      </section>

      {/* H2-5: Preseason Competition */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          5. Preseason Competition & 53-Man Cutdown List
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          August preseason games highlight intense position battles among reserve offensive linemen and backup defensive backs vying for the final 53-man roster spots.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When assessing inter-conference games against teams like the Buffalo Bills, Washington&apos;s success depends on Jayden Daniels&apos; playmaking and defensive trench execution. Football fans can review updated schedules, kickoff times, and TV channels on the <Link href="/" className="text-red-400 underline hover:text-red-300">Buffalo Bills Schedule 2026</Link> homepage and analysis guides on <a href="https://www.nfl.com/teams/washington-commanders" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">NFL.com Commanders Page</a> and <a href="https://www.cbssports.com/nfl/teams/WAS/washington-commanders" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">CBS Sports NFL Portal</a>.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          The Offense Runs Through Jayden Daniels — Literally
        </h2>
        <p>
          Washington&apos;s offensive depth chart is an exercise in supporting-cast optimization around one generational talent. The projected alignment confirmed by national trackers — <a href="https://sports.yahoo.com/articles/commanders-depth-chart-updated-stefon-193253221.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Yahoo Sports&apos; camp compilation</a> among them — pairs Terry McLaurin&apos;s boundary reliability with Dyami Brown&apos;s vertical stretch in the receiving corps, while the offensive line continues prioritizing athletic interior protection suited to quarterback movement concepts.
        </p>
        <p>
          What distinguishes this chart from typical builds is how deliberately every skill-position grouping complements designed quarterback runs: receivers are expected to block downfield on keeper plays, and tight ends split time between YAC routes and edge containment duties most teams assign to tackles.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-red-500 pl-3">
          A Genuinely Open Backfield Competition
        </h2>
        <p>
          The running back depth chart carries official competition designations deep into August: <strong>Jacory Croskey-Merritt</strong> and <strong>Rachaad White</strong> both entered camp listed with qualification tags ahead of Kaytron Allen and Jeremy McNichols — per the <a href="https://www.espn.com/nfl/team/depth/_/name/wsh" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN depth projection</a> — meaning the staff genuinely does not know its Week 1 starter at the position. That uncertainty is unusual for a contender and makes Washington&apos;s preseason backfield tape must-watch for fantasy managers.
        </p>
        <p>
          Croskey-Merritt offers one-cut explosion suited to the outside-zone scheme; White brings proven passing-game reliability from his previous stop. The tiebreaker, as always under this staff, will be pass-protection trust on third down.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          Reading the Rest of the Chart
        </h2>
        <p>
          Beyond the headline battles, the depth chart&apos;s shape tells the strategic story: Washington built for track meets in a division where Philadelphia and Dallas both load the box, keeping five and six receivers active most weeks and treating the fourth safety spot as a core special-teams seat. Injuries are the only realistic path onto this chart late — the 91-man camp roster documented by beat writers showed competition at every tier rather than gaps.
        </p>
        <p>
          Compare divisional builds in our <Link href="/cowboys-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Cowboys guide</Link>, or see the quarterback-specific breakdown in the <Link href="/commanders-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Commanders QB depth chart</Link>, with all league dates mapped on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Bills Schedule 2026 hub</Link>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Quinn Culture Dividend
        </h2>
        <p>
          Head coach Dan Quinn&apos;s program has quietly changed what this depth chart means. Rosters take on their coach&apos;s competitive personality within eighteen months, and Quinn&apos;s defensive pedigree shows in the retention pattern: special-teams aces, rotational linemen, and coverage specialists occupy proportionally more seats here than on offense-first rosters. That identity matters in December games when margins compress to execution details rather than star power.
        </p>
        <p>
          The cultural compounding also explains why Washington tolerated more competition designations than rival charts carry: Quinn&apos;s staff evaluates constantly, and public listings reflect meritocracy rather than settled hierarchy. Players respond to that transparency with measurable effort spikes in camp settings — an intangible that shows up in fourth-quarter defensive stamina by mid-season.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Cap-Sheet Reality Behind Every Listing
        </h2>
        <p>
          Depth charts are also financial documents, and Washington&apos;s construction reveals a front office managing a specific tension: paying premium market rates at quarterback while building cheap depth everywhere else. The qualification tags scattered across the running back room are not just competition honesty — they are cost control, because rookie running back contracts make auditioning young backs materially smarter than guaranteeing veteran money for identical production.
        </p>
        <p>
          That philosophy explains several otherwise-puzzling listings across this chart: proven veterans on minimum deals holding seats ahead of higher-drafted developmental players, special-teamers retained for their salary efficiency rather than defensive value, and the deliberate absence of expensive free-agent additions at positions where the draft pipeline already flows.
        </p>
        <p>
          For fans learning to read rosters like executives rather than video-game general managers, this is the lesson this chart teaches: every name is simultaneously a football decision and a spreadsheet decision, and the best organizations never separate the two. The teams that fail in the modern NFL almost always fail in the gap between talent evaluation and cap management — spending premium dollars on premium-position backups while their starters age without succession plans.
        </p>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Second-Year Leap Candidates Worth Monitoring
        </h2>
        <p>
          Depth charts hide their most important names in plain sight: second-year players who logged limited rookie snaps are statistically the roster&apos;s highest-variance group, and Washington&apos;s chart carries several. Historical leap rates for second-year defenders with 200-plus special-teams snaps exceed fifty percent for meaningful rotational contribution, which means the qualification-tagged listings scattered through this defense are future-starter auditions happening in real time.
        </p>
        <p>
          Fans tracking these names weekly gain a genuine analytical edge over national narratives, which focus on established stars while missing the internal promotions that actually swing divisional games. By November, today&apos;s footnotes become the storyline — and the depth chart history documents exactly when each ascension began.
        </p>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Commanders 2026 Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-red-400">Who is the starting QB for the Washington Commanders?</h4>
            <p>Jayden Daniels is the starting QB, backed up by Marcus Mariota and Sam Hartman.</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">Who leads the Commanders receiving group?</h4>
            <p>Terry McLaurin leads the wide receivers alongside Noah Brown, Luke McCaffrey, and Zach Ertz.</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">Who is the leader of the Commanders defense?</h4>
            <p>Veteran middle linebacker Bobby Wagner leads the defense alongside tackles Daron Payne and Jonathan Allen.</p>
          </div>
        </div>
      </section>
            <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
