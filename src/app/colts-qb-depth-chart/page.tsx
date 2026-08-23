import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Colts Quarterback Depth Chart 2026: QB Ranks",
  description: "Complete Indianapolis Colts quarterback depth chart breakdown: Anthony Richardson, Joe Flacco & Shane Steichen's RPO offense.",
  keywords: [
    "colts qb depth chart",
    "indianapolis colts quarterbacks 2026",
    "anthony richardson colts qb1",
    "joe flacco backup qb colts",
    "riley leonard colts qb",
    "shane steichen rpo offense colts",
    "colts quarterback stats 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/colts-qb-depth-chart`,
  },
};

export default function ColtsQBDepthChartPage() {
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
        "name": "Colts QB Depth Chart",
        "item": "https://billsschedule2026.online/colts-qb-depth-chart"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Colts Quarterback Depth Chart 2026: Roster & Metrics",
    "description": "Full positional analysis of the 2026 Indianapolis Colts quarterback room including Anthony Richardson, Joe Flacco, and Shane Steichen's RPO scheme.",
    "image": "https://billsschedule2026.online/images/bills/colts.webp",
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
        "name": "Who is the starting quarterback for the Indianapolis Colts in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dual-threat quarterback Anthony Richardson anchors the starting QB role for the Indianapolis Colts under head coach Shane Steichen."
        }
      },
      {
        "@type": "Question",
        "name": "What role does Joe Flacco play on the Colts QB depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Super Bowl MVP veteran Joe Flacco provides high-level backup experience and pocket passing stability."
        }
      },
      {
        "@type": "Question",
        "name": "How does Shane Steichen's RPO offense fit Anthony Richardson?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shane Steichen's offense combines power QB option runs with deep play-action shots, unlocking Richardson's elite physical size, arm strength, and rushing ability."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans inspect official Colts depth chart updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official depth chart updates are published weekly on Colts.com and ESPN."
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
        <span className="text-zinc-200">Colts QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-blue-900/60 text-blue-300 border border-blue-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Position Group Breakdown
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Colts Quarterback Depth Chart 2026: Roster & Metrics
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Comprehensive positional evaluation of the 2026 Indianapolis Colts quarterback room. Detailed breakdown of Anthony Richardson&apos;s dual-threat ceiling, Joe Flacco&apos;s veteran presence, and Shane Steichen&apos;s RPO offense.
        </p>
      </header>

      {/* Snapshot Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/colts.webp"
            alt="Indianapolis Colts Quarterback Depth Chart Logo"
            width={180}
            height={180}
            className="object-contain drop-shadow-md"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="colts-qb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-blue-400">Colts QB Room Snapshot</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Dual-Threat QB1:</strong> Anthony Richardson</li>
            <li><strong className="text-white">Veteran QB2:</strong> Joe Flacco</li>
            <li><strong className="text-white">Developmental QB3:</strong> Riley Leonard</li>
            <li><strong className="text-white">Head Coach / Play-caller:</strong> Shane Steichen</li>
            <li><strong className="text-white">Official Roster Link:</strong> <a href="https://www.colts.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Colts.com QB Roster</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Dual-Threat QB1 Starter: Anthony Richardson */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          1. Dual-Threat QB1 Starter: Anthony Richardson & Physical Profile
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Former No. 4 overall pick Anthony Richardson stands as one of the most physically gifted quarterback prospects in modern NFL history. Standing 6-foot-4 and 244 pounds with 4.44 speed, Richardson presents a unique dual-threat nightmare for opposing defensive coordinators. His ability to break arm tackles in the backfield and launch 60-yard passes downfield elevates Indianapolis&apos; offensive ceiling.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Surrounded by wide receivers Michael Pittman Jr., Josh Downs, and Adonai Mitchell alongside star running back Jonathan Taylor, Richardson leads an explosive skill unit in the AFC South.
        </p>

        {/* QB Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-blue-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position Rank</th>
                <th className="p-3 border-b border-zinc-700">Player</th>
                <th className="p-3 border-b border-zinc-700">Role</th>
                <th className="p-3 border-b border-zinc-700">Primary Skillset</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">QB1</td>
                <td className="p-3 text-blue-300 font-bold">Anthony Richardson</td>
                <td className="p-3 text-white font-semibold">Starter / Franchise QB</td>
                <td className="p-3">Dual-Threat Rushing / Arm Strength / Power Option</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB2</td>
                <td className="p-3 text-blue-300 font-bold">Joe Flacco</td>
                <td className="p-3 font-semibold text-blue-300">Super Bowl MVP Veteran</td>
                <td className="p-3">Pocket Passing / Pre-Snap Disguise Reads</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB3</td>
                <td className="p-3 text-zinc-300">Riley Leonard</td>
                <td className="p-3">Developmental QB</td>
                <td className="p-3">Athletic Scrambling / Preseason Snaps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Super Bowl Winning Veteran Backup: Joe Flacco */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          2. Super Bowl Winning Veteran Backup: Joe Flacco
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Super Bowl XLVII MVP Joe Flacco provides elite veteran backup insurance behind Richardson. Flacco&apos;s classic pocket-passing style offers a contrasting look, delivering high-percentage intermediate passes when called upon.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Flacco&apos;s calm presence under pressure and extensive playoff experience help mentor Richardson during film room review and game preparation.
        </p>
      </section>

      {/* H2-3: Shane Steichen RPO Offense System Fit */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          3. Shane Steichen RPO Offense System Fit
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Head coach Shane Steichen tailors his offensive playbook to Richardson&apos;s unique strengths, deploying heavy RPO (run-pass option) meshes, quarterback draw plays, and deep vertical play-action passes.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Pairing Jonathan Taylor&apos;s elite inside running with Richardson&apos;s keeper threat forces opposing edge defenders into impossible split-second decisions.
        </p>
      </section>

      {/* H2-4: Preseason Snap Distribution */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          4. Preseason Snap Distribution & Health Status
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          During August exhibition games, the Colts balance starter repetitions for Richardson to refine timing while managing snap volume to protect long-term health. Backup quarterbacks Joe Flacco and rookie Riley Leonard handle second-half series.
        </p>
      </section>

      {/* H2-5: Backup Quarterback Contingency Plan */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          5. Backup Quarterback Contingency Plan & Roster Strategy
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Indianapolis&apos; quarterback depth strategy gives the franchise both immediate game-winning capability and elite long-term potential.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When comparing the Colts offensive firepower against AFC foes like the Buffalo Bills, quarterback performance and ball security will define division and playoff races. Fans tracking NFL schedules and game broadcasts can review complete details on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> homepage and analysis guides on <a href="https://www.nfl.com/teams/indianapolis-colts" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com Colts Portal</a> and <a href="https://www.espn.com/nfl/team/depth/_/name/ind" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN Colts Depth Chart</a>.
        </p>
      </section>

      {/* Expanded Analysis Sections */}
      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          Daniel Jones at QB1: How Indianapolis Got Here
        </h2>
        <p>
          The Colts&apos; decision to name Daniel Jones their starting quarterback stunned a fanbase that watched the franchise invest the fourth overall pick in Anthony Richardson only a few years earlier. The move, reported widely across Colts media and national outlets, signals that head coach Shane Steichen and general manager Chris Ballard prioritized operational stability — pre-snap command, ball security, and scheme adherence — over raw physical upside entering a season with playoff expectations in a wide-open AFC South.
        </p>
        <p>
          Jones&apos; path to Indianapolis followed a full evaluation cycle elsewhere, and the Colts&apos; staff bet on his experience running a professional offense from day one of camp. The depth chart confirmation matters for fantasy managers and bettors alike: the offense will be scripted around Jones&apos; strengths — quick-game throws, designed quarterback movement on third downs, and a heavy dose of Jonathan Taylor behind one of the conference&apos;s better interior lines.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-red-500 pl-3">
          The Anthony Richardson Situation: Trade Request and an Uncertain Future
        </h2>
        <p>
          Richardson&apos;s offseason request for a trade crystallized the tension between draft-investment patience and on-field development reality. Injuries and inconsistency marked his starts, even as flashes of rare athleticism — deep-ball velocity and genuine rushing ceiling — kept national analysts invested in the upside case. ESPN&apos;s coverage has detailed why his future in Indianapolis became the franchise&apos;s most complicated quarterback question, spanning trade market interest, contract mechanics, and the possibility that a change of scenery benefits both sides.
        </p>
        <p>
          Until a transaction materializes, Richardson functions as the highest-upside backup quarterback in the conference and a weekly headline risk. For Colts watchers, every practice report and preseason snap carries double meaning: game performance either rebuilds his trade value or forces the front office to reconsider whether the original investment still anchors the plan.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          What the QB Decision Means for the 2026 Colts Offense
        </h2>
        <p>
          With Jones under center, Indianapolis&apos; offensive identity shifts toward efficiency football: fewer scramble-drill heroics, more scheduled throws, and an emphasis on winning the division through defense and ball control. The receiver room&apos;s development timeline also changes — young pass-catchers get a quarterback who distributes on schedule rather than extending plays off-platform, which typically raises the floor of the entire passing game while lowering its explosive ceiling.
        </p>
        <p>
          Fans comparing AFC quarterback situations can see how Indianapolis&apos; reset contrasts with stable superstar situations like the one documented on our <Link href="/bills-quarterback-depth-chart" className="text-blue-400 underline hover:text-blue-300">Bills quarterback depth chart guide</Link>, and track every AFC matchup date on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          The Backup Picture and How the Room Was Built
        </h2>
        <p>
          Quarterback rooms are constructed in layers, and Indianapolis&apos; current arrangement is unusual twice over. First, the backup is not a career journeyman but a former top-five pick whose trade request remains unresolved — a player whose practice-week reps carry scouting value for 31 other teams. Second, the third-quarterboard spot typically rounds out with a development arm on the practice squad rather than a 53-man roster seat, reflecting how the modern NFL allocates those final roster slots to special-teamers and defensive linemen instead.
        </p>
        <p>
          Compare that construction with the rest of the AFC South and the contrast sharpens. Houston built around a young franchise cornerstone with an established veteran steward behind him; Jacksonville similarly anchored its ceiling to a former first-overall selection. Indianapolis, by betting on a reclamation project in Jones while holding a volatile asset in Richardson, has effectively chosen the highest-variance path in the division — one where a strong eight-game stretch from the starter could deliver a playoff berth, and a shaky one could reignite the quarterback controversy the front office hoped to retire.
        </p>
        <p>
          For neutral observers tracking how quarterback stability shapes conference races, our <Link href="/bills-quarterback-depth-chart" className="text-blue-400 underline hover:text-blue-300">Bills QB depth chart analysis</Link> offers the stable-franchise counterpart, and the <Link href="/colts-wr-depth-chart" className="text-blue-400 underline hover:text-blue-300">Colts receiver depth chart</Link> shows the pass-catching talent this decision must serve.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-3">
          The Contract Mechanics That Shape Every Decision
        </h2>
        <p>
          Indianapolis&apos; quarterback situation cannot be separated from its contract architecture: a rookie-scale deal approaching decision points on one side, a veteran bridge contract with limited remaining guarantees on the other. That asymmetry explains the organization&apos;s otherwise-puzzling tolerance for trade-request drama — the financial structures make patience cheap and resolution expensive, at least through this season&apos;s cap calendar.
        </p>
        <p>
          League-wide, these situations resolve in three predictable patterns: the incumbent earns the job permanently and the draft investment gets traded at recouped value; the veteran falters early and the young player reclaims the room by November; or both play well enough that the front office banks picks in a seller&apos;s market next offseason. Indianapolis&apos; roster construction — genuinely competitive everywhere else — is designed to survive any of the three outcomes.
        </p>
        <p>
          Fans of rival AFC teams should pay attention regardless: whichever quarterback emerges from this situation inherits a playoff-caliber supporting cast, meaning this depth chart battle has conference-seeding consequences far beyond Indiana.
        </p>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Colts QB Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-blue-400">Who is the starting QB for the Indianapolis Colts?</h4>
            <p>Daniel Jones enters the 2026 season as the Colts&apos; named starting quarterback, a decision that ranked among the offseason&apos;s biggest surprises after the club selected Anthony Richardson fourth overall just a few years ago.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">What is Anthony Richardson&apos;s current situation?</h4>
            <p>Richardson requested a trade earlier this offseason and remains in a contested battle for his own future in Indianapolis; league reporters have detailed how complicated his Colts tenure has become.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">Who calls plays for the Colts offense?</h4>
            <p>Head coach Shane Steichen designs and calls plays for the Indianapolis offense.</p>
          </div>
        </div>
      </section>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/colts/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/ind/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
