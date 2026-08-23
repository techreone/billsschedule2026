import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Commanders Quarterback Depth Chart 2026: QB Ranks",
  description: "Complete Washington Commanders quarterback depth chart breakdown: starter Jayden Daniels, Marcus Mariota & Kliff Kingsbury's offense.",
  keywords: [
    "commanders qb depth chart",
    "washington commanders quarterbacks 2026",
    "jayden daniels qb1 commanders",
    "marcus mariota backup qb commanders",
    "sam hartman commanders qb3",
    "kliff kingsbury offense commanders",
    "commanders quarterback stats 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commanders-qb-depth-chart`,
  },
};

export default function CommandersQBDepthChartPage() {
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
        "name": "Commanders QB Depth Chart",
        "item": "https://billsschedule2026.online/commanders-qb-depth-chart"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Commanders Quarterback Depth Chart 2026: QB Ranks & Metrics",
    "description": "Full analysis of the 2026 Washington Commanders quarterback room led by Jayden Daniels, Marcus Mariota, and Sam Hartman.",
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
        "name": "Who is the starting QB for the Washington Commanders in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jayden Daniels is the starting QB1 for the Washington Commanders, directing Kliff Kingsbury's high-tempo offense."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the backup quarterback for the Commanders in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran Marcus Mariota serves as the primary QB2 backup, bringing dual-threat experience to the quarterback room."
        }
      },
      {
        "@type": "Question",
        "name": "Who holds the QB3 spot on the Commanders depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam Hartman holds the QB3 developmental spot on the roster and practice squad."
        }
      },
      {
        "@type": "Question",
        "name": "Where can fans verify weekly Commanders QB stats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official game stats and depth charts are updated weekly on Commanders.com and ESPN."
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
        <span className="text-zinc-200">Commanders QB Depth Chart</span>
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
          Commanders Quarterback Depth Chart 2026: QB Ranks & Metrics
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Detailed evaluation of the 2026 Washington Commanders quarterback room. Analysis of Jayden Daniels&apos; growth as QB1, Marcus Mariota&apos;s backup role, and Kliff Kingsbury&apos;s offensive playbook.
        </p>
      </header>

      {/* Snapshot Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/images/bills/roster-cut-practice.webp"
            alt="Washington Commanders Quarterback Depth Chart Overview"
            width={220}
            height={150}
            className="object-cover rounded-lg border border-zinc-700 drop-shadow-md"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="commanders-qb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
        </div>
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-xl font-bold text-red-400">Commanders QB Room Metrics</h3>
          <ul className="text-sm text-zinc-300 space-y-1.5 font-mono">
            <li><strong className="text-white">Franchise QB1:</strong> Jayden Daniels</li>
            <li><strong className="text-white">Veteran QB2:</strong> Marcus Mariota</li>
            <li><strong className="text-white">Developmental QB3:</strong> Sam Hartman</li>
            <li><strong className="text-white">Offensive Coordinator:</strong> Kliff Kingsbury</li>
            <li><strong className="text-white">Official Tracker:</strong> <a href="https://www.commanders.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">Commanders.com QB Roster</a></li>
          </ul>
        </div>
      </div>

      <NativeBanner />

      {/* H2-1: Franchise QB1 Starter: Jayden Daniels */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          1. Franchise QB1 Starter: Jayden Daniels & Skillset Analysis
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Jayden Daniels enters the 2026 season as the indisputable centerpiece of the Washington Commanders franchise. Drafted to anchor the organization&apos;s new era under head coach Dan Quinn, Daniels combines rare deep-ball accuracy with electrifying scramble ability. His quick-trigger release unlocks fast-paced intermediate throws to wide receiver Terry McLaurin, while his threat as a runner forces linebackers to freeze on read-option plays.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Daniels&apos; poise inside the pocket has elevated Washington&apos;s 3rd-down conversion rate, making him one of the most exciting young quarterbacks across the NFL.
        </p>

        {/* QB Depth Chart Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-zinc-950 border border-zinc-800 rounded-lg">
            <thead>
              <tr className="bg-zinc-800/80 text-red-400 text-xs font-bold uppercase">
                <th className="p-3 border-b border-zinc-700">Rank</th>
                <th className="p-3 border-b border-zinc-700">Player</th>
                <th className="p-3 border-b border-zinc-700">Role</th>
                <th className="p-3 border-b border-zinc-700">Key Skillset</th>
              </tr>
            </thead>
            <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 font-semibold text-white">QB1</td>
                <td className="p-3 text-red-300 font-bold">Jayden Daniels</td>
                <td className="p-3 text-white font-semibold">Franchise Starter</td>
                <td className="p-3">Dual-Threat / Deep Ball Accuracy / Scramble Creation</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB2</td>
                <td className="p-3 text-red-300 font-bold">Marcus Mariota</td>
                <td className="p-3">Veteran Backup</td>
                <td className="p-3">Mobility / System Continuity / Veteran Leadership</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">QB3</td>
                <td className="p-3 text-zinc-300">Sam Hartman</td>
                <td className="p-3">Developmental / Practice Squad</td>
                <td className="p-3">Pocket Distribution / Preseason Snaps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Banner adKey="3486a9e8f02f65f02cecbc611f008cdd" width={728} height={90} />

      {/* H2-2: Veteran Backup QB: Marcus Mariota */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        
<h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          2. Veteran Backup QB: Marcus Mariota
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Former No. 2 overall pick Marcus Mariota serves as Washington&apos;s primary backup quarterback. Mariota&apos;s athletic profile mirrors Daniels&apos; mobility, allowing offensive coordinator Kliff Kingsbury to maintain identical play-calling packages without scaling back quarterback run options if Mariota enters the game.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Mariota&apos;s extensive starting experience across the NFL provides invaluable mentorship inside the quarterback meeting room.
        </p>
      </section>

      {/* H2-3: QB3 & Preseason Rotation */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          3. QB3 & Preseason Quarterback Rotation
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Behind Mariota, former Wake Forest and Notre Dame standout Sam Hartman operates in the QB3 developmental role. Hartman receives extensive snap volume during August preseason games, executing late-game drives and competing for a spot on the 53-man active roster or emergency third quarterback slot under current NFL rules.
        </p>
      </section>

      {/* H2-4: Kliff Kingsbury Air Raid Scheme */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          4. Kliff Kingsbury Air Raid Offense Scheme Fit
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Kliff Kingsbury&apos;s offensive system blends traditional spread passing concepts with modern NFL run-pass options (RPOs). The playbook requires fast pre-snap reads, rapid ball distribution to perimeter receivers Terry McLaurin and Noah Brown, and quick check-downs to running back Austin Ekeler.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          Daniels&apos; command of this system ensures Washington&apos;s offense operates at high tempo, testing opposing defensive conditioning.
        </p>
      </section>

      {/* H2-5: Preseason Metrics & Fantasy Outlook */}
      <section className="space-y-6 bg-zinc-900/70 border border-zinc-800 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
          5. Preseason Metrics & Fantasy Football Outlook
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          From a fantasy football perspective, Jayden Daniels stands as a top-tier QB1 option due to his high rushing floor and explosive passing ceiling. His ability to produce 40-50 rushing yards per game alongside passing touchdowns creates elite fantasy upside.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          When comparing Washington&apos;s quarterback output against AFC elite passing teams like the Buffalo Bills, Daniels&apos; development will dictate Washington&apos;s playoff contention. Fans tracking NFL schedules and games can check complete broadcast schedules on the <Link href="/" className="text-red-400 underline hover:text-red-300">Buffalo Bills Schedule 2026</Link> homepage and analysis guides on <a href="https://www.nfl.com/players/jayden-daniels/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">NFL.com Jayden Daniels Profile</a> and <a href="https://www.espn.com/nfl/team/depth/_/name/wsh" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ESPN Commanders Depth Chart</a>.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          Jayden Daniels: The Cornerstone Everything Else Defers To
        </h2>
        <p>
          Washington&apos;s entire competitive window is anchored to Jayden Daniels, and every other entry on this depth chart exists to protect or develop that fact. Since his arrival, the franchise has rebuilt its offensive identity around his dual-threat profile — full-field reads from clean pockets, scheduled quarterback runs in the red zone, and the kind of processing speed that lets coordinator play-calling stay aggressive on third down. National trackers from <a href="https://www.espn.com/nfl/team/depth/_/name/wsh" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN</a> to <a href="https://sports.yahoo.com/articles/commanders-depth-chart-updated-stefon-193253221.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Yahoo Sports</a> agree on the top line without qualification.
        </p>
        <p>
          What makes Daniels unusual among young franchise quarterbacks is how little the offense hides him: Washington asks its QB1 to win from the pocket first, which is both the best long-term development path and the reason the backup situation below him matters more than in most buildings.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-red-500 pl-3">
          Mariota&apos;s MCL Sprain Opens a Genuine Audition Window
        </h2>
        <p>
          The most consequential depth-chart news of Washington&apos;s August arrived via injury: Marcus Mariota, the designatedQB2, is sidelined with an MCL sprain — and per <a href="https://www.si.com/nfl/commanders/onsi/athan-kaliakmanis-commanders-qb3-battle-marcus-mariota-injury" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Sports Illustrated&apos;s Commanders coverage</a>, that absence has turned rookie Athan Kaliakmanis into the emergency understudy taking second-team reps ahead of schedule.
        </p>
        <p>
          These snaps matter beyond the preseason standings. Backup quarterback evaluations drive the league&apos;s transaction wire all September: a strong showing from Kaliakmanis could make him a practice-squad development keeper, push Sam Hartman down the chart, or even put a veteran signing on the table if the medical timeline on Mariota drifts. Roster builders treat the two weeks before cutdown as the only live audition the position ever gets.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
          Why This Room Shapes Washington&apos;s Season More Than Fans Think
        </h2>
        <p>
          The NFC East race is projected to be a knife fight, and divisional tiebreakers historically swing on one or two plays from backup quarterbacks entering games cold. A healthy Mariota gives Washington one of the better insurance policies in the conference; an extended injury plus rookie inexperience would force the staff to shrink its playbook in ways opponents can plan for. That is the practical stakes behind every training-camp rep listed here.
        </p>
        <p>
          Fans mapping Washington&apos;s season can compare this construction with stable situations like the one in our <Link href="/bills-quarterback-depth-chart" className="text-blue-400 underline hover:text-blue-300">Bills quarterback depth chart</Link>, and track every interconference date on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub.
        </p>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="space-y-4 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white">Frequently Asked Questions: Commanders QB Depth Chart</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold text-red-400">Who is the starting QB for the Commanders?</h4>
            <p>Jayden Daniels is the starting QB1 for the Washington Commanders.</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">Who is Marcus Mariota&apos;s role in Washington?</h4>
            <p>Marcus Mariota serves as the primary backup quarterback and veteran mentor.</p>
          </div>
          <div>
            <h4 className="font-semibold text-red-400">What style of offense does Kliff Kingsbury run?</h4>
            <p>Kingsbury runs a fast-paced spread system incorporating RPOs, quick slants, and deep boundary shots.</p>
          </div>
        </div>
      </section>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/commanders/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/was/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
