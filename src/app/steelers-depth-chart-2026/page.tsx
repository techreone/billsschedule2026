import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Pittsburgh Steelers Depth Chart 2026: Roster Ranks",
  description: "Complete Pittsburgh Steelers 2026 depth chart breakdown: starters across QB, RB, WR, defense & special teams under Mike Tomlin.",
  keywords: [
    "steelers depth chart 2026",
    "pittsburgh steelers starters 2026",
    "steelers qb depth chart 2026",
    "jaylen warren steelers depth chart",
    "tj watt steelers defense 2026",
    "mike tomlin steelers roster",
    "steelers vs bills 2026 matchup"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/steelers-depth-chart-2026`,
  },
};

export default function SteelersDepthChart2026Page() {
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
        "name": "Steelers Depth Chart 2026",
        "item": "https://billsschedule2026.online/steelers-depth-chart-2026"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pittsburgh Steelers Depth Chart 2026: Starters & Roster",
    "description": "Full positional analysis of the 2026 Pittsburgh Steelers depth chart featuring starters on offense, defense, and special teams.",
    "image": "https://billsschedule2026.online/images/bills/steelers.webp",
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
        "name": "Who is the starting quarterback for the Pittsburgh Steelers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Steelers quarterback room in 2026 features competitive veteran presence led by Aaron Rodgers and Jaylen Warren in Arthur Smith's physical ground-and-pound system."
        }
      },
      {
        "@type": "Question",
        "name": "Who starts at running back for the Steelers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jaylen Warren and Najee Harris command the backfield tandem, supported by veteran depth additions in Arthur Smith's power-rushing offense."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Pittsburgh Steelers defense in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Pro edge rusher T.J. Watt leads Pittsburgh's 3-4 defense alongside defensive tackle Cam Heyward, linebacker Patrick Queen, and safety Minkah Fitzpatrick."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans find official Pittsburgh Steelers depth chart updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official Steelers depth charts are published weekly on Steelers.com, ESPN, and CBS Sports throughout the 2026 season."
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
        <span className="text-zinc-200">Steelers Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-amber-900/60 text-amber-300 border border-amber-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            2026 NFL Roster Analysis
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Pittsburgh Steelers 2026 Depth Chart & Roster Analysis
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Comprehensive positional evaluation of the 2026 Pittsburgh Steelers depth chart under head coach Mike Tomlin and offensive coordinator Arthur Smith. Breakdown of starting offense, T.J. Watt&apos;s defense, and special teams unit.
        </p>
      </header>

      {/* Roster Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/steelers.webp"
            alt="Pittsburgh Steelers 2026 Depth Chart Logo and Team Overview"
            width={200}
            height={200}
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-amber-400">2026 Pittsburgh Steelers Roster Snapshot</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Head Coach:</strong> Mike Tomlin (20th Season)</li>
            <li><strong className="text-white">Offensive Coordinator:</strong> Arthur Smith</li>
            <li><strong className="text-white">Defensive Anchor:</strong> T.J. Watt & Cam Heyward</li>
            <li><strong className="text-white">Offensive Identity:</strong> Power Run / Heavy Personnel Groups</li>
            <li><strong className="text-white">Official Roster Link:</strong> <a href="https://www.steelers.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Steelers.com Depth Chart</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Offense Starters */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          1. Offense Starters: Quarterbacks, Wide Receivers & Tight Ends
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          The Pittsburgh Steelers offensive depth chart in 2026 reflects offensive coordinator Arthur Smith&apos;s commitment to ball control, physical ground attachment, and high-percentage play-action passing. With veteran leadership in the quarterback room, Pittsburgh prioritizes high-efficiency decision-making and protecting the football inside the red zone.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          At wide receiver, star wideout George Pickens commands the primary target share on perimeter contested catches, while DK Metcalf and Roman Wilson operate in 11-personnel multi-receiver formations. Tight end Pat Freiermuth serves as a critical security valve on 3rd-and-medium conversions, working seam routes and short crossing patterns over the middle.
        </p>

        {/* Offensive Depth Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-amber-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position</th>
                <th className="p-3 border-b border-zinc-700">Starter (1st)</th>
                <th className="p-3 border-b border-zinc-700">Backup (2nd)</th>
                <th className="p-3 border-b border-zinc-700">Depth (3rd)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Quarterback (QB)</td>
                <td className="p-3 text-amber-300 font-bold">Aaron Rodgers</td>
                <td className="p-3">Mason Rudolph</td>
                <td className="p-3 text-zinc-400">Will Howard</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Wide Receiver (WR1)</td>
                <td className="p-3 text-amber-300 font-bold">George Pickens</td>
                <td className="p-3">Roman Wilson</td>
                <td className="p-3 text-zinc-400">Van Jefferson</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Wide Receiver (WR2)</td>
                <td className="p-3 text-amber-300 font-bold">DK Metcalf</td>
                <td className="p-3">Calvin Austin III</td>
                <td className="p-3 text-zinc-400">Scotty Miller</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Tight End (TE)</td>
                <td className="p-3 text-amber-300 font-bold">Pat Freiermuth</td>
                <td className="p-3">Darnell Washington</td>
                <td className="p-3 text-zinc-400">Connor Heyward</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-zinc-300 leading-relaxed text-sm">
          Track official player profiles and game depth charts on <a href="https://www.espn.com/nfl/team/depth/_/name/pit" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">ESPN Pittsburgh Steelers Depth Chart</a>.
        </p>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Running Back Tandem */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          2. Running Back Tandem: Najee Harris & Jaylen Warren
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Pittsburgh&apos;s offensive heartbeat relies on a thunder-and-lightning backfield dynamic featuring Najee Harris and Jaylen Warren. Harris provides physical interior power rushing inside the tackles, wearing down defensive lines late in games. Jaylen Warren brings explosive burst, vision out of the backfield, and elite third-down pass protection skills.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Together, Harris and Warren average over 30 touches per game, allowing Arthur Smith to set up play-action shot plays while keeping opposing pass rushers on their heels. Depth running back Cordarrelle Patterson adds kickoff return versatility and gadget-play value.
        </p>

        {/* RB Depth Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-amber-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Role</th>
                <th className="p-3 border-b border-zinc-700">Player</th>
                <th className="p-3 border-b border-zinc-700">Strength</th>
                <th className="p-3 border-b border-zinc-700">System Fit</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Power Back (RB1A)</td>
                <td className="p-3 text-amber-300 font-bold">Najee Harris</td>
                <td className="p-3">Yards After Contact & Short Yardage</td>
                <td className="p-3">Inside Zone & Power Counter</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Scatback / Pass Catching (RB1B)</td>
                <td className="p-3 text-amber-300 font-bold">Jaylen Warren</td>
                <td className="p-3">Explosive Burst & Pass Block</td>
                <td className="p-3">Outside Zone & Screen Pass</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">RB3 / Utility</td>
                <td className="p-3 text-zinc-300">Cordarrelle Patterson</td>
                <td className="p-3">Kick Returns & Open Field Speed</td>
                <td className="p-3">Special Teams & Jet Sweeps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2-3: T.J. Watt Led Defense */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          3. T.J. Watt Led Defense & Pass Rush Front
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          The Pittsburgh defense remains one of the premier front-seven units in football, spearheaded by Defensive Player of the Year candidate T.J. Watt. Watt&apos;s relentless off-the-edge pass rush demands chip blocks from tight ends and running backs on every dropback. On the opposite side, Alex Highsmith provides consistent edge pressure, turning double-teams on Watt into sack opportunities.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Inside the trench, veteran captain Cam Heyward anchors the 3-4 defensive line alongside nose tackle Yahya Black and defensive end Derrick Harmon. Their ability to plug A and B gaps enables linebackers to flow freely to the ball carrier.
        </p>

        {/* Defense Depth Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-amber-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position</th>
                <th className="p-3 border-b border-zinc-700">Starter (1st)</th>
                <th className="p-3 border-b border-zinc-700">Backup (2nd)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Outside Linebacker (OLB)</td>
                <td className="p-3 text-amber-300 font-bold">T.J. Watt</td>
                <td className="p-3">Nick Herbig</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Outside Linebacker (OLB)</td>
                <td className="p-3 text-amber-300 font-bold">Alex Highsmith</td>
                <td className="p-3">Jeremiah Moon</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Defensive End (DE)</td>
                <td className="p-3 text-amber-300 font-bold">Cam Heyward</td>
                <td className="p-3">DeMarvin Leal</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Nose Tackle (NT)</td>
                <td className="p-3 text-amber-300 font-bold">Yahya Black</td>
                <td className="p-3">Keeanu Benton</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Inside Linebacker (ILB)</td>
                <td className="p-3 text-amber-300 font-bold">Patrick Queen</td>
                <td className="p-3">Elandon Roberts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2-4: Secondary & Linebacker Rotation */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          4. Secondary & Linebacker Rotation Analysis
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Linebacker Patrick Queen anchors the second level, bringing sideline-to-sideline tackling speed and pass coverage skills against opposing tight ends. In the secondary, All-Pro safety Minkah Fitzpatrick roams the deep third, baiting opposing quarterbacks into turnover-worthy throws.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Cornerback Joey Porter Jr. locks down boundary receivers with physical press-man coverage, complemented by Donte Jackson on the opposite side and Beanie Bishop Jr. in nickel slot packages.
        </p>
      </section>

      {/* H2-5: Mike Tomlin Roster Philosophy & Preseason Cuts */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          5. Mike Tomlin Roster Philosophy & Preseason Cutdown Battle
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Head coach Mike Tomlin instills a standard of physical resilience and special teams contribution for players competing on the 53-man roster bubble. During August preseason cuts, positions across offensive line depth and defensive back rotation are earned through live contact practice and kick coverage drills.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When comparing the Steelers depth chart against AFC powerhouses like the Buffalo Bills, Pittsburgh&apos;s path to victory rests on winning the turnover battle and controlling time of possession. Fans tracking AFC conference matchups can review complete game schedules, broadcast channels, and ticket details on the <Link href="/" className="text-amber-400 underline hover:text-amber-300">Buffalo Bills Schedule 2026</Link> homepage and analysis guides on <a href="https://www.nfl.com/teams/pittsburgh-steelers" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">NFL.com Official Steelers Portal</a> and <a href="https://www.cbssports.com/nfl/teams/PIT/pittsburgh-steelers" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">CBS Sports NFL Hub</a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Steelers 2026 Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-amber-400">Who is the starting running back for Pittsburgh?</h4>
            <p>Najee Harris and Jaylen Warren share starter duties in Arthur Smith&apos;s dual-back offensive scheme.</p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-400">Who leads the Steelers pass rush?</h4>
            <p>T.J. Watt leads the defense alongside Alex Highsmith, Cam Heyward, and Keeanu Benton.</p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-400">How do the Steelers match up against the Bills?</h4>
            <p>Pittsburgh tests Buffalo with heavy power rushing and T.J. Watt&apos;s edge rush against Josh Allen.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
