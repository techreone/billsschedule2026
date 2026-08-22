import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Falcons Quarterback Depth Chart 2026: QB Ranks",
  description: "Complete Atlanta Falcons quarterback depth chart breakdown: Kirk Cousins, Michael Penix Jr. & Zac Robinson's offensive scheme.",
  keywords: [
    "falcons qb depth chart",
    "atlanta falcons quarterbacks 2026",
    "kirk cousins falcons qb1",
    "michael penix jr depth chart",
    "cooper rush falcons qb",
    "zac robinson falcons offense",
    "falcons quarterback battle 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/falcons-qb-depth-chart`,
  },
};

export default function FalconsQBDepthChartPage() {
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
        "name": "Falcons QB Depth Chart",
        "item": "https://billsschedule2026.online/falcons-qb-depth-chart"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Falcons Quarterback Depth Chart 2026: Roster & QB Battle",
    "description": "Comprehensive positional analysis of the 2026 Atlanta Falcons quarterback room including Kirk Cousins and Michael Penix Jr.",
    "image": "https://billsschedule2026.online/images/bills/espn-studio-desk.webp",
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
        "name": "Who is the starting quarterback for the Atlanta Falcons in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kirk Cousins and Michael Penix Jr. form Atlanta's quarterback tandem in Zac Robinson's offensive scheme."
        }
      },
      {
        "@type": "Question",
        "name": "What is Michael Penix Jr.'s status on the Falcons depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First-round pick Michael Penix Jr. commands high-volume snap reps during preseason and serves as the franchise quarterback in waiting."
        }
      },
      {
        "@type": "Question",
        "name": "Who serves as depth backup in the Falcons QB room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran Cooper Rush and Easton Stick provide depth in the Falcons quarterback room."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans inspect official Falcons depth chart updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official updates are published weekly on AtlantaFalcons.com and ESPN."
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
        <span className="text-zinc-200">Falcons QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-red-900/60 text-red-300 border border-red-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Position Group Breakdown
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Falcons Quarterback Depth Chart 2026: Roster & QB Battle
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Comprehensive analysis of the 2026 Atlanta Falcons quarterback room. Breakdown of Kirk Cousins, first-round pick Michael Penix Jr., and Zac Robinson&apos;s offensive playbook.
        </p>
      </header>

      {/* Snapshot Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/espn-studio-desk.webp"
            alt="Atlanta Falcons Quarterback Depth Chart Overview"
            width={240}
            height={160}
            className="object-cover rounded-lg border border-zinc-700 drop-shadow-md"
            priority
          />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-red-400">Falcons QB Room Metrics</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Veteran QB:</strong> Kirk Cousins</li>
            <li><strong className="text-white">First-Round QB:</strong> Michael Penix Jr.</li>
            <li><strong className="text-white">Depth Veteran:</strong> Cooper Rush</li>
            <li><strong className="text-white">Offensive Coordinator:</strong> Zac Robinson</li>
            <li><strong className="text-white">Official Tracker:</strong> <a href="https://www.atlantafalcons.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">AtlantaFalcons.com QB Roster</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Starting Veteran QB1: Kirk Cousins */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          1. Starting Veteran QB1: Kirk Cousins
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Veteran quarterback Kirk Cousins commands the Atlanta Falcons starting offense, bringing extensive Pro Bowl experience and pocket precision to offensive coordinator Zac Robinson&apos;s McVay-style system. Cousins&apos; mastery of play-action timing feeds star tight end Kyle Pitts and wide receiver Drake London on intermediate in-breaking routes.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Cousins&apos; ability to read pre-snap coverages ensures Atlanta&apos;s high-powered skill talent operates at maximum efficiency.
        </p>

        {/* QB Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-red-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position Rank</th>
                <th className="p-3 border-b border-zinc-700">Player</th>
                <th className="p-3 border-b border-zinc-700">Status / Role</th>
                <th className="p-3 border-b border-zinc-700">Key Feature</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">QB1</td>
                <td className="p-3 text-red-300 font-bold">Kirk Cousins</td>
                <td className="p-3 text-white font-semibold">Veteran Starter</td>
                <td className="p-3">Play-Action Accuracy / Pocket Command</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB2</td>
                <td className="p-3 text-red-300 font-bold">Michael Penix Jr.</td>
                <td className="p-3 font-semibold text-red-300">1st Round Franchise QB</td>
                <td className="p-3">Arm Strength / Deep Boundary Velocity</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB3</td>
                <td className="p-3 text-zinc-300">Cooper Rush</td>
                <td className="p-3">Veteran Backup Depth</td>
                <td className="p-3">System Insurance / Preseason Reps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: First-Round Rookie QB2: Michael Penix Jr. */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          2. First-Round Rookie QB2: Michael Penix Jr.
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Top-10 pick Michael Penix Jr. represents the future of the Falcons franchise. Featuring elite left-handed arm strength and smooth pocket movement, Penix pushes vertical passing throws down field with high velocity.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Penix&apos;s development under Cousins&apos; guidance allows Atlanta to transition seamlessly into the future while maintaining immediate competitive fire.
        </p>
      </section>

      {/* H2-3: Preseason Playing Time */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          3. Preseason Playing Time & Penix Jr. Performance Breakdown
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          During August preseason games, Michael Penix Jr. takes extensive starter snaps alongside second-team wide receivers and offensive linemen. His completion percentages and touchdown-to-interception ratios in exhibition games showcase his readiness for live NFL action.
        </p>
      </section>

      {/* H2-4: Zac Robinson Offense */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          4. Zac Robinson Offense Playbook Requirements
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Offensive coordinator Zac Robinson brings a West Coast offense variant emphasizing heavy zone-run concepts with Bijan Robinson and Tyler Allgeier, setting up bootlegs and deep play-action shots.
        </p>
      </section>

      {/* H2-5: Quarterback Transition Plan */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          5. Quarterback Transition Plan & Roster Outlook
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Atlanta&apos;s two-pronged quarterback strategy positions the franchise to compete for the NFC South division title while developing a blue-chip passer for years to come.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When comparing Atlanta&apos;s offensive ceiling against non-conference opponents like the Buffalo Bills, quarterback efficiency will be the key metric. Fans tracking game schedules and broadcasts can check full details on the <Link href="/" className="text-red-400 underline hover:text-red-300">Buffalo Bills Schedule 2026</Link> homepage and analysis hubs on <a href="https://www.nfl.com/teams/atlanta-falcons" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">NFL.com Official Falcons Portal</a> and <a href="https://www.espn.com/nfl/team/depth/_/name/atl" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ESPN Falcons Depth Chart</a>.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Falcons QB Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-red-400">Who is the starting QB for Atlanta?</h4>
            <p>Kirk Cousins leads the starting offense for the Falcons.</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">What is Michael Penix Jr.&apos;s role in 2026?</h4>
            <p>Michael Penix Jr. is the QB2 backup and future franchise starter.</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">Who is the offensive coordinator for the Falcons?</h4>
            <p>Zac Robinson coordinates Atlanta&apos;s offensive scheme.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
