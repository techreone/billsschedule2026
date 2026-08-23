import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import RelatedTrendPages from '@/components/RelatedTrendPages';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Bills Quarterback Depth Chart: Josh Allen & Backups",
  description: "Explore the Bills quarterback depth chart 2026: starter Josh Allen, QB2 backup Kyle Allen, Shane Buechele performance, and offensive scheme fit.",
  keywords: [
    "bills quarterback depth chart",
    "buffalo bills qb depth chart 2026",
    "josh allen starter bills qb",
    "kyle allen bills backup qb",
    "shane buechele bills depth chart",
    "mitch trubisky bills quarterback status"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-quarterback-depth-chart`,
  },
  openGraph: {
    title: "Bills Quarterback Depth Chart 2026: Josh Allen & Backup Q...",
    description: "Detailed evaluation of the Buffalo Bills quarterback room in 2026, featuring Josh Allen, Kyle Allen, and Shane Buechele.",
    url: `${SITE_CONFIG.url}/bills-quarterback-depth-chart`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function BillsQuarterbackDepthChartPage() {
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
        "name": "Bills Quarterback Depth Chart",
        "item": "https://billsschedule2026.online/bills-quarterback-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the Buffalo Bills in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Josh Allen is the franchise starting quarterback for the Buffalo Bills, anchored under a long-term contract as one of the NFL's premier dual-threat signal-callers."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the primary backup quarterback behind Josh Allen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kyle Allen is currently listed as the QB2 backup quarterback on the official Bills depth chart following strong preseason performances."
        }
      },
      {
        "@type": "Question",
        "name": "Is Mitch Trubisky still on the Buffalo Bills roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, veteran backup Mitch Trubisky moved on during the 2026 offseason, opening the door for Kyle Allen to secure the QB2 role."
        }
      },
      {
        "@type": "Question",
        "name": "How many quarterbacks do the Bills carry on their 53-man roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bills typically carry 2 quarterbacks (Josh Allen and Kyle Allen) on their active 53-man roster, signing a 3rd QB like Shane Buechele to the practice squad."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bills Quarterback Depth Chart 2026: Josh Allen & Backup QB Role",
    "description": "Comprehensive analysis of the Buffalo Bills quarterback depth chart, player traits, contract values, and offensive scheme fit under Joe Brady.",
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
        <span className="text-white font-semibold">Bills Quarterback Depth Chart</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          ROSTER EVALUATION • QUARTERBACK ROOM
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Bills Quarterback Depth Chart 2026: Josh Allen & QB2 Competition
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          An in-depth breakdown of the <strong>bills quarterback depth chart</strong>. Examine franchise starter Josh Allen, backup QB2 Kyle Allen, practice squad signal-caller Shane Buechele, and Joe Brady&apos;s offensive passing philosophy.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Verified Depth Chart Roster
          </span>
          <span>•</span>
          <span>Quarterbacks: 3 Active / Reserve</span>
          <span>•</span>
          <span>By BillsSchedule2026 Scouting Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Quarterback Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quarterback Depth Chart Table */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            2026 Buffalo Bills Quarterback Depth Chart Table
          </h2>
          <p className="text-xs text-zinc-400">
            Data verified via official roster listings on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Rank</th>
                  <th className="p-3 border border-zinc-700">Quarterback</th>
                  <th className="p-3 border border-zinc-700">Height / Weight</th>
                  <th className="p-3 border border-zinc-700">NFL Experience</th>
                  <th className="p-3 border border-zinc-700">College</th>
                  <th className="p-3 border border-zinc-700">Roster Role</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">QB1</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Josh Allen</td>
                  <td className="p-3 border border-zinc-800">6-5 / 237 lbs</td>
                  <td className="p-3 border border-zinc-800">9th Season</td>
                  <td className="p-3 border border-zinc-800">Wyoming</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Franchise Starter</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-blue-400">QB2</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Kyle Allen</td>
                  <td className="p-3 border border-zinc-800">6-3 / 210 lbs</td>
                  <td className="p-3 border border-zinc-800">7th Season</td>
                  <td className="p-3 border border-zinc-800">Houston</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Primary Backup (53 Lock)</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-zinc-400">QB3</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Shane Buechele</td>
                  <td className="p-3 border border-zinc-800">6-0 / 210 lbs</td>
                  <td className="p-3 border border-zinc-800">4th Season</td>
                  <td className="p-3 border border-zinc-800">SMU / Texas</td>
                  <td className="p-3 border border-zinc-800 text-amber-400 font-bold">Practice Squad / Developmental</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Showcase Image — Josh Allen */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/josh-allen-action.webp"
              alt="Bills quarterback Josh Allen under center during 2026 training camp"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Franchise QB Josh Allen leading quarter-by-quarter passing drills alongside offensive coordinator Joe Brady.
          </p>
        </div>

        {/* Section 1: Franchise Starter: Josh Allen */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Franchise QB1 Anchor: Josh Allen
          </h2>
          <p>
            The pinnacle of the <strong>bills quarterback depth chart</strong> belongs to superstar signal-caller Josh Allen. Boasting an elite arm, punishing running style, and incredible durability, Allen serves as the foundation for Buffalo&apos;s perennial championship aspirations.
          </p>
          <p>
            Allen has amassed over 40 total touchdowns in four consecutive seasons, combining effortless deep ball accuracy with power rushing inside the red zone.
          </p>
          <p>
            Entering the 2026 campaign, Allen remains squarely in his prime at age 30 and is widely viewed as a perennial MVP candidate. His 2021 six-year extension keeps him under contract through the 2028 league year, with a 2026 salary-cap charge in the low-$40-million range that general manager Brandon Beane has structured to preserve flexibility for the rest of the roster. That financial stability allows the Bills to invest heavily in the offensive line and skill positions around him.
          </p>
          <figure className="my-6">
            <img src="/images/bills/nfl-broadcast-truck.webp" alt="NFL broadcast crew capturing Buffalo Bills quarterback play during 2026 games" className="rounded-xl border border-zinc-800 w-full" />
            <figcaption className="text-xs text-zinc-400 font-mono mt-2 text-center">
              National broadcasts of Bills quarterback play are a weekly fixture on the 2026 NFL schedule.
            </figcaption>
          </figure>
        </section>

        {/* Section 2: QB2 Backup Battle: Kyle Allen */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. QB2 Backup Battle: Kyle Allen Preseason Performance & System Fit
          </h2>
          <p>
            With Mitch Trubisky leaving during free agency, veteran Kyle Allen secured the primary QB2 backup position. Kyle Allen possesses extensive starter experience from his time in Carolina and Houston, making him an ideal backup capable of processing complex defensive coverage disguises.
          </p>
          <p>
            In Preseason Week 2 action against Cleveland, Kyle Allen went 11-of-16 for 128 yards and a touchdown, validating general manager Brandon Beane&apos;s decision to entrust him with the backup clipboard.
          </p>
          <p>
            Allen&apos;s professional path has taken him through Carolina, Houston, and Washington, giving him reps against a wide variety of defensive structures. That experience shows up in the pocket: he is comfortable operating from a clean base, climbs into throws under pressure, and has enough mobility to extend plays when the first read is covered. For a team built around a franchise cornerstone, a steady, low-variance QB2 is exactly the profile Buffalo wants.
          </p>
        </section>

        {/* Section 3: QB3 & Practice Squad Candidate: Shane Buechele */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. QB3 & Practice Squad Candidate: Shane Buechele Breakdown
          </h2>
          <p>
            Former SMU and Texas quarterback Shane Buechele represents the developmental QB3 project. Known for high football intelligence and quick release mechanics, Buechele completed 8-of-13 attempts for 92 yards in second-half preseason play.
          </p>
          <p>
            Buechele provides valuable emergency depth and scout team preparation throughout the regular season.
          </p>
          <p>
            His value is not measured in regular-season snaps but in the quality of looks he gives the starting defense each week. Running the opponent&apos;s plays on the scout team helps Buffalo&apos;s linebackers and secondary rehearse against the exact route concepts they will face on Sunday, an underrated contributor to the team&apos;s defensive preparation.
          </p>
        </section>

        {/* Section 4: Veteran Philosophy Under Brandon Beane */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Veteran Quarterback Philosophy & Roster Construction Under Brandon Beane
          </h2>
          <p>
            Brandon Beane and Sean McDermott prioritize having veteran backups who mirror Josh Allen&apos;s preparation habits. By pairing Allen with seasoned backups like Kyle Allen, the quarterback room maintains an open film study environment where pre-snap defensive keys are dissected efficiently.
          </p>
          <p>
            That cultural continuity matters during the grind of a 17-game schedule. When the starter and backup study the same way, installations move faster and communication in the quarterbacks room stays consistent, reducing the mental errors that typically creep in during December road games.
          </p>
        </section>

        {/* Section 5: Joe Brady Offensive Scheme */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Joe Brady&apos;s Offensive Scheme & Quarterback Room Dynamics
          </h2>
          <p>
              Under offensive coordinator Joe Brady, Buffalo&apos;s scheme incorporates heavy use of pre-snap motion, play-action rollouts, and intermediate tight end crossing routes. Both Josh Allen and Kyle Allen benefit from Brady&apos;s quick-rhythm passing progressions, keeping defenses off-balance.
          </p>
          <p>
            The scheme&apos;s reliance on motion also means the backup must be decisive with his eyes, because moving pieces create both opportunity and confusion. Kyle Allen&apos;s experience reading defenses pre-snap translates well here, which is why Brady&apos;s system does not have to be dumbed down when the QB2 is under center.
          </p>
        </section>

        {/* Section 6: Contract & Cap */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            6. 2026 Contract &amp; Cap Implications for the QB Room
          </h2>
          <p>
            The Bills have built their salary-cap strategy around keeping Josh Allen as the highest-paid foundational piece while surrounding him with cost-controlled talent. Allen&apos;s large but predictable cap hit is paired with veteran-minimum deals for the backups, which keeps the quarterback room one of the most cap-efficient in the league relative to on-field production. Kyle Allen&apos;s contract is structured to be cut or extended with minimal dead money, giving Beane optionality if a different profile is needed in 2027.
          </p>
          <p>
            Because the starter commands so much of the cap, the organization tolerates a thinner depth chart at backup — carrying two on the 53 and one on the practice squad. This philosophy accepts slightly more risk at QB3 in exchange for spending power at offensive tackle, wide receiver, and along the defensive front, where marginal upgrades more directly swing win totals.
          </p>
        </section>

        {/* Section 7: Injury Contingency */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            7. Injury Contingency: If Josh Allen Misses Time
          </h2>
          <p>
            No contender plans to lose its franchise quarterback, but every staff models the scenario. If Allen were forced to miss games, Kyle Allen would step in as the immediate starter, with Shane Buechele promoted from the practice squad to QB2. The offense would likely lean more on play-action, a heavier dose of outside-zone runs, and quicker timing concepts to mask any drop-off in raw arm talent.
          </p>
          <p>
            Historical precedent shows the Bills are comfortable simplifying the scheme for a backup: ball-control rushing, play-action off the run game, and high-percentage throws to tight ends and slot receivers. The 2026 roster is deep enough at skill positions that even a multi-week Allen absence would not necessarily sink the season, though the ceiling naturally lowers without the MVP-caliber ceiling he provides.
          </p>
        </section>

        {/* Section 8: Schedule Outlook */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            8. 2026 Schedule Outlook &amp; Quarterback Impact
          </h2>
          <p>
            The composition of the quarterback room directly shapes how the Bills approach the 2026 schedule. With Josh Allen healthy, Buffalo can script an aggressive, pass-heavy attack against soft coverage and lean on play-action against loaded boxes. In games where Allen is rested or managed late in blowouts, Kyle Allen&apos;s readiness ensures the offense does not stall, protecting both the scoreboard and the franchise investment.
          </p>
          <p>
            December road tests against physical defenses remain the truest measure of depth. The Bills&apos; ability to protect a lead with the run game and a dependable backup gives Sean McDermott confidence to play conservatively when the situation calls for it. Coordinators can call a narrower menu of concepts without fearing a steep drop-off, which keeps the weekly game plan flexible across a 17-game grind.
          </p>
          <p>
            Ultimately, the 2026 ceiling rests on Allen&apos;s MVP-caliber play, but the floor is far more stable than in years when the backup tier was uncertain. A proven QB2, a developmental QB3, and a cap structure built around the starter give Buffalo one of the league&apos;s most secure quarterback foundations as the season unfolds.
          </p>
          <p>
            For fantasy managers and bettors tracking the Bills, the depth chart offers rare stability at the sport&apos;s most volatile position. Few contenders can say their QB2 has started meaningful regular-season games, and fewer still pair that with a coach who trusts the backup enough to install a near-identical system. That continuity is a quiet competitive advantage Buffalo has spent years building.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Buffalo Bills Depth Chart Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/is-josh-allen-playing-today" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Is Josh Allen Playing Today? Preseason Starter News
            </Link>
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
            <Link href="/bills-kicker-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Kicker Depth Chart: Tyler Bass & Special Teams
            </Link>
            <Link href="/bills-vs-browns-stats" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Box Score & Quarterback Stats
            </Link>
          </div>
        </div>

        <RelatedTrendPages slugs={['bills-rb-depth-chart','bills-kicker-depth-chart','kyle-allen-bills-qb2','bills-vs-browns-stats','is-josh-allen-playing-today']} />
      </article>
    
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Backup Room&apos;s Real Value: Scout-Team Season
        </h2>
        <p>
          Backup quarterback contributions extend far beyond emergency snaps. Every week, the reserve arms run opponent simulations against Buffalo&apos;s starting defense — mimicking upcoming mobile passers, replicating rival schemes, and giving the defensive starters realistic preparation looks that no practice script replicates. This scout-team season is where backup evaluation actually happens: coaches grade decision speed, install retention, and command presence long before any game snap tests them.
        </p>
        <p>
          The construction philosophy behind this room mirrors league best practice: one experienced game-manager, one developmental arm with physical upside, and a practice-squad elevation path that keeps three live options without consuming active-roster flexibility. For a franchise whose Super Bowl odds ride on one player&apos;s health, this layered insurance is not paranoia — it is arithmetic.
        </p>
      </section>

        {/* Sources & Authority References */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Two-Minute Offense: Where Backup Value Peaks
        </h2>
        <p>
          Buffalo&apos;s two-minute operation is the most quarterback-dependent system element on the roster, and it is precisely where backup preparation shows its true quality. Hurry-up offense strips coaching intervention down to hand signals and memorized conversions — the backup must process coverage, manage clocks, and call protections without a single sideline consultation. Rooms that practice this weekly produce competent emergency football; rooms that do not produce September disasters.
        </p>
        <p>
        The staff grades two-minute periods in practice with scoreboard pressure applied — manufactured deficits, specific clock arithmetic, and timeout management all tested under simulated stress. That rehearsal discipline is why Bills emergency games have historically stayed competitive rather than collapsing into uncompetitive losses.
        </p>
      </section>

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
