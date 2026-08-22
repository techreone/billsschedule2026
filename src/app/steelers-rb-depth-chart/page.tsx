import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Steelers Running Back Depth Chart 2026: RB Ranks",
  description: "Complete Pittsburgh Steelers running back depth chart: Najee Harris, Jaylen Warren & Cordarrelle Patterson in Arthur Smith's offense.",
  keywords: [
    "steelers rb depth chart",
    "pittsburgh steelers running backs 2026",
    "najee harris depth chart",
    "jaylen warren steelers rb1",
    "cordarrelle patterson steelers role",
    "arthur smith run scheme steelers",
    "steelers running back fantasy outlook"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/steelers-rb-depth-chart`,
  },
};

export default function SteelersRBDepthChartPage() {
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
        "name": "Steelers RB Depth Chart",
        "item": "https://billsschedule2026.online/steelers-rb-depth-chart"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Steelers Running Back Depth Chart 2026: Roster & Touch Breakdown",
    "description": "Comprehensive positional analysis of the 2026 Pittsburgh Steelers running back room including Najee Harris, Jaylen Warren, and Cordarrelle Patterson.",
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
        "name": "Is Najee Harris or Jaylen Warren the RB1 for the Steelers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Steelers operate a co-starter 1A/1B backfield tandem. Najee Harris handles early downs and goal-line work, while Jaylen Warren leads 3rd-down passing situations and outside stretch plays."
        }
      },
      {
        "@type": "Question",
        "name": "What role does Cordarrelle Patterson play on the Steelers RB depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cordarrelle Patterson serves as the RB3 and kick return specialist, lining up in jet sweep packages and providing veteran depth."
        }
      },
      {
        "@type": "Question",
        "name": "How many rushing attempts do Steelers running backs average under Arthur Smith?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arthur Smith's heavy run-first offense projects the Steelers backfield to combine for 28-32 rushing carries per game in 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans verify weekly Steelers running back snap counts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weekly snap counts and rushing metrics are tracked live on Steelers.com and ESPN NFL statistics."
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
        <span className="text-zinc-200">Steelers RB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-amber-900/60 text-amber-300 border border-amber-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Position Group Breakdown
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Steelers Running Back Depth Chart 2026: Roster & Touch Breakdown
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Detailed analysis of the 2026 Pittsburgh Steelers running back depth chart. Breakdown of touch distribution between Najee Harris and Jaylen Warren in Arthur Smith&apos;s physical power-rushing offense.
        </p>
      </header>

      {/* RB Group Feature Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/steelers.webp"
            alt="Pittsburgh Steelers Running Back Depth Chart 2026"
            width={180}
            height={180}
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-amber-400">Steelers RB Room Metrics</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Co-RB1 Tandem:</strong> Najee Harris & Jaylen Warren</li>
            <li><strong className="text-white">RB3 & Returns:</strong> Cordarrelle Patterson</li>
            <li><strong className="text-white">Rushing Scheme:</strong> Outside Zone / Duo Power Counter</li>
            <li><strong className="text-white">Projected Team Carries:</strong> 30+ attempts/game</li>
            <li><strong className="text-white">Official Tracker:</strong> <a href="https://www.steelers.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Steelers.com RB Roster</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Power Starter: Najee Harris */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          1. Power Starter: Najee Harris & Interior Rushing Volume
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Former first-round pick Najee Harris anchors the heavy lifting for the Pittsburgh Steelers ground game entering 2026. Known for his upright, punishing running style, Harris excels inside the tackles on 1st-and-10 power runs and goal-line situations. His ability to absorb contact and drag defenders for extra yards after contact keeps the Steelers offense ahead of the chains.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          In Arthur Smith&apos;s offensive architecture, Harris functions as the hammer that softens up opposing defensive fronts during the first three quarters. By repeatedly pounding A and B gaps against light box looks, Harris sets up play-action passing concepts downfield.
        </p>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Dynamic Change-of-Pace Back: Jaylen Warren */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          2. Dynamic Change-of-Pace Back: Jaylen Warren
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Jaylen Warren provides the explosive counterpart to Harris&apos;s power style. Boasting elite lateral acceleration, low center of gravity, and sudden burst, Warren converts outside zone stretch plays into long perimeter gains. In 3rd-down pass situations, Warren&apos;s pass-blocking toughness and route-running ability make him an indispensable option out of the backfield.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Statistical models indicate that Warren generates high explosive run percentages (10+ yard carries) per rush attempt, offering high efficiency whenever inserted into the game.
        </p>

        {/* RB Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-amber-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Metric / Attribute</th>
                <th className="p-3 border-b border-zinc-700">Najee Harris (RB1A)</th>
                <th className="p-3 border-b border-zinc-700">Jaylen Warren (RB1B)</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">Primary Down Usage</td>
                <td className="p-3">1st & 2nd Down / Short Yardage</td>
                <td className="p-3">3rd Down / Two-Minute / Outside Zone</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Carries Per Game Target</td>
                <td className="p-3 text-amber-300 font-bold">14 - 18 Carries</td>
                <td className="p-3 text-amber-300 font-bold">10 - 14 Carries</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Target Share / Receptions</td>
                <td className="p-3">2 - 3 targets/game</td>
                <td className="p-3 font-bold text-amber-300">4 - 6 targets/game</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Red Zone Goal-Line Share</td>
                <td className="p-3 font-bold text-amber-300">65% Touches</td>
                <td className="p-3">35% Touches</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2-3: Preseason RB3 Battle & Cordarrelle Patterson Role */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          3. Preseason RB3 Battle & Cordarrelle Patterson Role
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Behind Harris and Warren, veteran playmaker Cordarrelle Patterson occupies the RB3 role while serving as Pittsburgh&apos;s primary kick return specialist under the NFL&apos;s modified kickoff rules. Patterson&apos;s vision and vision out of backfield formations add versatile options for offensive co-coordinators on gadget plays and jet sweeps.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Competitors for the final running back roster spots and practice squad spots include Kaleb Johnson and Rico Dowdle, fighting for special teams coverage roles during August cutdowns.
        </p>
      </section>

      {/* H2-4: Arthur Smith Heavy Run Scheme Breakdown */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          4. Arthur Smith Heavy Run Scheme Breakdown
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Arthur Smith&apos;s offensive scheme deploys 12-personnel (two tight ends) and 13-personnel (three tight ends) packages more frequently than almost any other unit in the NFL. Tight ends Pat Freiermuth, Darnell Washington, and Connor Heyward act as extension tackles on perimeter crack-tosses and duo inside zone runs.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          This heavy personnel approach creates defensive mismatch problems, forcing opposing secondary players to make physical open-field tackles against 220+ pound ball carriers throughout four quarters.
        </p>
      </section>

      {/* H2-5: Fantasy Football Touch Share Expectations */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-amber-500 pl-3">
          5. Fantasy Football Touch Share Expectations & Goal-Line Duties
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          For fantasy football managers, the Steelers running back room represents a high-volume committee where both Harris and Warren hold standalone RB2/Flex value. Najee Harris offers high goal-line touchdown upside, while Jaylen Warren provides a stable PPR (points per reception) floor due to check-down targets and pass-catching volume.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When analyzing Pittsburgh&apos;s ground game against tough AFC run defenses like the Buffalo Bills, touch distribution remains consistent. Fans and analysts monitoring game updates can review full match statistics and broadcast channels on the <Link href="/" className="text-amber-400 underline hover:text-amber-300">Buffalo Bills Schedule 2026</Link> homepage, verified by <a href="https://www.nfl.com/stats/player-stats/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">NFL.com Official Stats</a> and <a href="https://www.espn.com/nfl/team/stats/_/name/pit" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">ESPN Team Stats</a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Steelers RB Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-amber-400">Who gets goal-line carries for the Steelers?</h4>
            <p>Najee Harris receives approximately 65% of red zone and goal-line rush attempts.</p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-400">Is Jaylen Warren valuable in PPR fantasy leagues?</h4>
            <p>Yes, Jaylen Warren targets 4-6 receptions per game, making him a high-floor PPR option.</p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-400">Who is the Steelers RB3 in 2026?</h4>
            <p>Cordarrelle Patterson holds the RB3 spot while handling primary kick return duties.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
