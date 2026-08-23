import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Lions Quarterback Depth Chart 2026: QB Ranks",
  description: "Complete Detroit Lions quarterback depth chart breakdown: Jared Goff, Hendon Hooker & Ben Johnson's offensive system.",
  keywords: [
    "lions qb depth chart",
    "detroit lions quarterbacks 2026",
    "jared goff lions qb1",
    "hendon hooker backup qb lions",
    "nate sudfeld lions qb",
    "ben johnson lions offense",
    "lions quarterback stats 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/lions-qb-depth-chart`,
  },
};

export default function LionsQBDepthChartPage() {
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
        "name": "Lions QB Depth Chart",
        "item": "https://billsschedule2026.online/lions-qb-depth-chart"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lions Quarterback Depth Chart 2026: Roster & Metrics",
    "description": "Full positional evaluation of the 2026 Detroit Lions quarterback room featuring Jared Goff, Hendon Hooker, and Ben Johnson's system.",
    "image": "https://billsschedule2026.online/images/bills/lions.webp",
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
        "name": "Who is the starting quarterback for the Detroit Lions in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pro Bowl quarterback Jared Goff commands the starting QB1 role for the Detroit Lions under offensive coordinator Ben Johnson."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the backup quarterback for the Detroit Lions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hendon Hooker serves as the primary developmental backup quarterback behind Jared Goff."
        }
      },
      {
        "@type": "Question",
        "name": "How does Ben Johnson's offense utilize Jared Goff's strengths?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ben Johnson's system maximizes Goff's elite play-action accuracy and quick-release timing, targeting Amon-Ra St. Brown and Sam LaPorta over the middle."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans track official Lions quarterback depth chart updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official updates are available weekly on DetroitLions.com and ESPN."
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
        <span className="text-zinc-200">Lions QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="bg-sky-900/60 text-sky-300 border border-sky-700/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Position Group Breakdown
          </span>
          <span className="text-xs text-zinc-400 font-mono">Updated Aug 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Lions Quarterback Depth Chart 2026: Roster & Metrics
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Comprehensive positional evaluation of the 2026 Detroit Lions quarterback room. Detailed breakdown of Jared Goff&apos;s leadership, Hendon Hooker&apos;s development, and offensive coordinator Ben Johnson&apos;s system requirements.
        </p>
      </header>

      {/* Roster Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/lions.webp"
            alt="Detroit Lions Quarterback Depth Chart Logo"
            width={180}
            height={180}
            className="object-contain drop-shadow-md"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="lions-qb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-sky-400">Lions QB Room Snapshot</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Franchise QB1:</strong> Jared Goff</li>
            <li><strong className="text-white">Backup QB2:</strong> Hendon Hooker</li>
            <li><strong className="text-white">Veteran Depth:</strong> Nate Sudfeld / Joshua Dobbs</li>
            <li><strong className="text-white">Offensive Coordinator:</strong> Ben Johnson</li>
            <li><strong className="text-white">Official Roster Link:</strong> <a href="https://www.detroitlions.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">DetroitLions.com QB Roster</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Franchise QB1 Starter: Jared Goff */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          1. Franchise QB1 Starter: Jared Goff & System Fit
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Jared Goff anchors the Detroit Lions offense as one of the most prolific passing quarterbacks in the NFL. Operating behind Detroit&apos;s elite offensive line, Goff delivers clean-pocket precision on play-action fakes, targeting All-Pro receiver Amon-Ra St. Brown, deep threat Jameson Williams, and tight end Sam LaPorta.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Goff&apos;s command of Ben Johnson&apos;s pre-snap adjustments ensures Detroit ranks among the top scoring offenses in the league.
        </p>

        {/* QB Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-sky-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Position Rank</th>
                <th className="p-3 border-b border-zinc-700">Player</th>
                <th className="p-3 border-b border-zinc-700">Role</th>
                <th className="p-3 border-b border-zinc-700">Primary Strength</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">QB1</td>
                <td className="p-3 text-sky-300 font-bold">Jared Goff</td>
                <td className="p-3 text-white font-semibold">Franchise Starter</td>
                <td className="p-3">Play-Action Accuracy / Clean Pocket Passing</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB2</td>
                <td className="p-3 text-sky-300 font-bold">Hendon Hooker</td>
                <td className="p-3 font-semibold text-sky-300">Developmental Backup</td>
                <td className="p-3">Arm Talent / Deep Ball Velocity</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB3</td>
                <td className="p-3 text-zinc-300">Nate Sudfeld</td>
                <td className="p-3">Veteran Reserve</td>
                <td className="p-3">Preseason Execution / QB Room Communication</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Backup QB Battle */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          2. Backup QB Battle: Hendon Hooker vs Nate Sudfeld
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          The backup quarterback position features third-round draft selection Hendon Hooker alongside veteran Nate Sudfeld. Hooker brings dual-threat capability and big-arm potential from his college tenure at Tennessee, offering a high-upside developmental passer for head coach Dan Campbell.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Sudfeld provides veteran insurance, ensuring pre-snap read execution stays sharp during practice reps.
        </p>
      </section>

      {/* H2-3: Ben Johnson High-Powered Offense */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          3. Ben Johnson High-Powered Offense Scheme Requirements
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Ben Johnson&apos;s playbook relies heavily on deceptive play-action design, combining heavy running backs Jahmyr Gibbs and David Montgomery with explosive downfield route concepts.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Quarterbacks in this system must process quick reads and deliver ball placement on timing routes ahead of coverage defenders.
        </p>
      </section>

      {/* H2-4: Preseason Passing Stats */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          4. Preseason Passing Stats & Drive Efficiency
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          During August preseason action, Hendon Hooker and the reserve quarterbacks handle the majority of snaps, testing play-calling efficiency and scoring execution against opposing second-team defenses.
        </p>
      </section>

      {/* H2-5: Roster Spot Guarantees */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          5. Roster Spot Guarantees & Practice Squad Quarterback Depth
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Detroit&apos;s quarterback room structure reflects a contender&apos;s balance: an elite franchise starter in Goff, a developmental talent in Hooker, and veteran practice squad depth.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When comparing Detroit&apos;s offensive horsepower against non-conference NFC-AFC clashes with teams like the Buffalo Bills, quarterback play remains paramount. Fans following NFL schedules and live broadcasts can check complete details on the <Link href="/" className="text-sky-400 underline hover:text-sky-300">Buffalo Bills Schedule 2026</Link> homepage and verified guides on <a href="https://www.nfl.com/teams/detroit-lions" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">NFL.com Lions Portal</a> and <a href="https://www.espn.com/nfl/team/depth/_/name/det" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">ESPN Lions Depth Chart</a>.
        </p>
      </section>

      {/* Section 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          6. Jared Goff&apos;s 2026 Standing in Detroit&apos;s Offense
        </h2>
        <p>
          Jared Goff enters the 2026 season firmly entrenched as Detroit&apos;s franchise quarterback after a run of prolific campaigns under the Lions&apos; offensive system. The former No. 1 overall pick has thrived on timing routes, play-action, and a heavy dose of pre-snap motion that stresses opposing secondaries. For the Lions to repeat as NFC North champions, Goff must continue protecting the football and exploiting one-on-one matchups on the perimeter.
        </p>
        <p>
          Goff&apos;s rapport with his receiving targets and his quick, decisive throwing motion remain the engine of Detroit&apos;s attack. The Lions&apos; offensive staff has built the scheme around his strengths, leaning on spacing and tempo rather than exotic drop-backs, which keeps Goff playing within structure and limits negative plays.
        </p>
      </section>

      {/* Section 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white border-l-4 border-sky-500 pl-3">
          7. The Backup Battle: Joshua Dobbs vs Luke Altmyer
        </h2>
        <p>
          Behind Goff, the Lions carry a mix of experience and developmental upside. Joshua Dobbs, a former seventh-round pick known for his dual-threat capability and aerospace background, provides a different look with his legs and has started games across multiple franchises. His mobility gives Detroit a change-of-pace option if the offense ever needs to scramble its way out of trouble.
        </p>
        <p>
          Luke Altmyer, an undrafted developmental passer, represents the long-term project the coaching staff is sculpting on the practice squad. The pecking order behind Goff is less about Week 1 and more about emergency readiness should injury strike the starter. Detroit&apos;s investment in quarterback depth reflects a franchise that remembers how quickly a season can pivot on one snap.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Lions QB Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-sky-400">Who is the starting QB for the Detroit Lions?</h4>
            <p>Jared Goff is the franchise starting quarterback for the Detroit Lions.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sky-400">Who is Hendon Hooker on the Lions depth chart?</h4>
            <p>Hendon Hooker serves as the QB2 backup and primary developmental quarterback.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sky-400">Who designs the Detroit Lions passing offense?</h4>
            <p>Offensive coordinator Ben Johnson designs and calls plays for the Lions offense.</p>
          </div>
        </div>
      </section>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/lions/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/det/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
