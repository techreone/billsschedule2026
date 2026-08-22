import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Dallas Cowboys Depth Chart 2026: Starters & Roster",
  description: "Complete Dallas Cowboys 2026 depth chart breakdown: starters across QB, RB, WR, defense & special teams with roster updates.",
  keywords: [
    "cowboys depth chart 2026",
    "dallas cowboys starters 2026",
    "dak prescott depth chart",
    "ceedee lamb cowboys wr",
    "micah parsons cowboys defense 2026",
    "cowboys offensive line starters",
    "brandon aubrey kicker cowboys"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cowboys-depth-chart-2026`,
  },
};

export default function CowboysDepthChart2026Page() {
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
        "name": "Cowboys Depth Chart 2026",
        "item": "https://billsschedule2026.online/cowboys-depth-chart-2026"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dallas Cowboys Depth Chart 2026: Starters & Roster Ranks",
    "description": "Full positional breakdown of the 2026 Dallas Cowboys depth chart featuring offense, defense, special teams, and roster projections.",
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
        "name": "Who is the starting quarterback for the Dallas Cowboys in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dak Prescott leads the Dallas Cowboys as the starting quarterback, supported by backup Cooper Rush and depth quarterbacks on the 53-man roster."
        }
      },
      {
        "@type": "Question",
        "name": "Who starts at running back for Dallas in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Javonte Williams leads the Cowboys backfield tandem alongside Rico Dowdle, providing physical interior yards and receiving options out of the backfield."
        }
      },
      {
        "@type": "Question",
        "name": "Who commands the Dallas Cowboys defense in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Pro edge rusher Micah Parsons anchors the defensive front alongside cornerbacks Trevon Diggs and DaRon Bland in Dallas' secondary."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans view official Dallas Cowboys depth chart updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official updates are available weekly on DallasCowboys.com, ESPN, and CBS Sports throughout the 2026 NFL campaign."
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
        <span className="text-zinc-200">Cowboys Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-blue-900/60 text-blue-300 border border-blue-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            2026 NFL Roster Analysis
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Dallas Cowboys 2026 Depth Chart & Complete Roster Breakdown
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          An in-depth positional guide to the 2026 Dallas Cowboys depth chart. Comprehensive analysis of Dak Prescott&apos;s offensive unit, Micah Parsons&apos; disruptive edge rush, revamped offensive line starters, and special teams highlights.
        </p>
      </header>

      {/* Snapshot Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/roster-cut-practice.webp"
            alt="Dallas Cowboys 2026 Depth Chart Roster Overview"
            width={240}
            height={160}
            className="object-cover rounded-lg border border-zinc-700 drop-shadow-md"
            priority
          />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-blue-400">2026 Dallas Cowboys Roster Snapshot</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Franchise QB:</strong> Dak Prescott</li>
            <li><strong className="text-white">Primary WR Target:</strong> CeeDee Lamb</li>
            <li><strong className="text-white">Defensive Superstar:</strong> Micah Parsons (EDGE/LB)</li>
            <li><strong className="text-white">Kicking Weapon:</strong> Brandon Aubrey</li>
            <li><strong className="text-white">Official Roster Link:</strong> <a href="https://www.dallascowboys.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">DallasCowboys.com Depth Chart</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Offense Starters */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          1. Offense Starters: Dak Prescott, CeeDee Lamb & Running Back Committee
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          The Dallas Cowboys 2026 offensive scheme operates around veteran quarterback Dak Prescott, whose pocket command and quick-strike intermediate passing capability dictate tempo. Prescott&apos;s go-to target is All-Pro wide receiver CeeDee Lamb, who aligns across slot and boundary positions to exploit defensive leverage.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Complementing Lamb in the receiving corps, Brandin Cooks and Jalen Tolbert provide deep vertical speed, forcing safeties to cushion deep zones. In the backfield, Javonte Williams anchors the power rushing duties alongside Rico Dowdle, giving head coach Mike McCarthy a balanced run-pass option system.
        </p>

        {/* Offense Depth Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-blue-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position</th>
                <th className="p-3 border-b border-zinc-700">Starter (1st)</th>
                <th className="p-3 border-b border-zinc-700">Backup (2nd)</th>
                <th className="p-3 border-b border-zinc-700">Depth (3rd)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Quarterback (QB)</td>
                <td className="p-3 text-blue-300 font-bold">Dak Prescott</td>
                <td className="p-3">Cooper Rush</td>
                <td className="p-3 text-zinc-400">Trey Lance</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Running Back (RB)</td>
                <td className="p-3 text-blue-300 font-bold">Javonte Williams</td>
                <td className="p-3">Rico Dowdle</td>
                <td className="p-3 text-zinc-400">Deuce Vaughn</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Wide Receiver (WR1)</td>
                <td className="p-3 text-blue-300 font-bold">CeeDee Lamb</td>
                <td className="p-3">Jalen Brooks</td>
                <td className="p-3 text-zinc-400">Ryan Flournoy</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Wide Receiver (WR2)</td>
                <td className="p-3 text-blue-300 font-bold">Brandin Cooks</td>
                <td className="p-3">Jalen Tolbert</td>
                <td className="p-3 text-zinc-400">KaVontae Turpin</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Tight End (TE)</td>
                <td className="p-3 text-blue-300 font-bold">Jake Ferguson</td>
                <td className="p-3">Luke Schoonmaker</td>
                <td className="p-3 text-zinc-400">John Stephens Jr.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-zinc-300 leading-relaxed text-sm">
          Track official player updates on <a href="https://www.espn.com/nfl/team/depth/_/name/dal" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN Dallas Cowboys Depth Chart</a>.
        </p>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Micah Parsons Defense */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          2. Micah Parsons Defense & Edge Rushers
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Defensively, Dallas operates a high-intensity pass rush anchored by All-Pro defender Micah Parsons. Parsons moves fluidly between defensive end and off-ball linebacker, keeping offensive coordinators guessing before every snap. His elite bend around the edge generates fast pressures, quarterback hits, and forced fumbles.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Opposite Parsons, veteran edge rusher DeMarcus Lawrence and young pass rusher Marshawn Kneeland set firm edges against opposing run schemes, funneling ball carriers inward toward linebackers Eric Kendricks and Damone Clark.
        </p>
      </section>

      {/* H2-3: Secondary & Trevon Diggs */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          3. Secondary & Trevon Diggs / DaRon Bland Defensive Backs
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          The Cowboys secondary features one of the premier ball-hawking cornerback duos in the NFL with Trevon Diggs and DaRon Bland. Bland&apos;s historic pick-six instinct combines with Diggs&apos; receiver-like ball skills to penalize quarterbacks who test boundary tight windows.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          At safety, Malik Hooker and Donovan Wilson control the deep middle, delivering heavy tackles on slot receivers and filling run support gaps. Jourdan Lewis provides veteran experience inside the slot.
        </p>
      </section>

      {/* H2-4: Offensive Line Rebuild */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          4. Offensive Line Rebuild & Trench Starters
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Dallas&apos; offensive line has undergone a targeted youthful transformation. All-Pro guard Tyler Smith anchors the interior line alongside rookie center Cooper Beebe and left tackle Tyler Guyton. Right guard Zack Martin&apos;s veteran presence ensures pass protection communication remains sharp against complex blitz disguises.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          This renovated trench group allows Prescott clean pockets on long-developing play-action passes while opening vertical running lanes for Javonte Williams and Rico Dowdle.
        </p>

        {/* OL Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-blue-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Trench Position</th>
                <th className="p-3 border-b border-zinc-700">Starter</th>
                <th className="p-3 border-b border-zinc-700">Backup</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Left Tackle (LT)</td>
                <td className="p-3 text-blue-300 font-bold">Tyler Guyton</td>
                <td className="p-3">Chuma Edoga</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Left Guard (LG)</td>
                <td className="p-3 text-blue-300 font-bold">Tyler Smith</td>
                <td className="p-3">T.J. Bass</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Center (C)</td>
                <td className="p-3 text-blue-300 font-bold">Cooper Beebe</td>
                <td className="p-3">Brock Hoffman</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Right Guard (RG)</td>
                <td className="p-3 text-blue-300 font-bold">Zack Martin</td>
                <td className="p-3">Asim Richards</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Right Tackle (RT)</td>
                <td className="p-3 text-blue-300 font-bold">Terence Steele</td>
                <td className="p-3">Matt Waletzko</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2-5: Preseason Cuts & Special Teams */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-3">
          5. Preseason Roster Cuts & Special Teams Starters
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Special teams remain a key weapon for Dallas, highlighted by All-Pro kicker Brandon Aubrey. Aubrey&apos;s historic accuracy on field goal attempts beyond 50 yards gives the Cowboys scoring range as soon as they cross the opponent&apos;s 40-yard line. Punter Bryan Anger maintains top-tier net punting averages, pinning opponents inside their 10-yard line.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          As the Cowboys evaluate non-conference matchups against elite AFC foes like the Buffalo Bills, roster depth across defensive line and secondary units will decide high-stakes inter-conference games. Fans can track updated schedules, TV broadcast networks, and kickoff times on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> homepage, verified by <a href="https://www.nfl.com/teams/dallas-cowboys" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com Cowboys Page</a> and <a href="https://www.cbssports.com/nfl/teams/DAL/dallas-cowboys" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports NFL Portal</a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Cowboys 2026 Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-blue-400">Who is the starting QB for the Cowboys?</h4>
            <p>Dak Prescott leads the team as QB1, backed up by Cooper Rush and Trey Lance.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">Who are Dallas&apos; top defensive starters?</h4>
            <p>Micah Parsons leads the front seven alongside corners Trevon Diggs and DaRon Bland.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">How accurate is Cowboys kicker Brandon Aubrey?</h4>
            <p>Brandon Aubrey ranks among the NFL&apos;s most reliable kickers, boasting a 90%+ career FG rate.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
