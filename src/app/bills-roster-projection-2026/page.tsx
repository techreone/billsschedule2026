import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Buffalo Bills 53-Man Roster Projection 2026: Cutdown Day Preview",
  description: "Our Buffalo Bills 53-man roster projection for 2026: cutdown day deadline (Aug 30, 6 PM ET), position-by-position picks, biggest battles on the defensive line, wide receiver room and practice squad outlook.",
  keywords: [
    "buffalo bills roster projection 2026",
    "bills roster projection",
    "bills 53 man roster",
    "bills roster cuts 2026",
    "bills cutdown day 2026",
    "buffalo bills 53 man roster projection",
    "bills practice squad 2026",
    "nfl roster cuts august 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-roster-projection-2026`,
  },
  openGraph: {
    title: "Buffalo Bills 53-Man Roster Projection 2026: Who Makes the Cut?",
    description: "Position-by-position Bills 53-man roster projection ahead of the Aug 30 cutdown deadline — QB, RB, WR battles, defensive line crunch and practice squad picks.",
    url: `${SITE_CONFIG.url}/bills-roster-projection-2026`,
    type: "article",
  },
};

export default function BillsRosterProjection2026Page() {
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
        "name": "Bills Roster Projection 2026",
        "item": "https://billsschedule2026.online/bills-roster-projection-2026"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Buffalo Bills 53-Man Roster Projection 2026: Cutdown Day Preview & Position-by-Position Picks",
    "description": "Full Buffalo Bills 53-man roster projection for the 2026 season: cutdown day rules and deadline, position battles at defensive line and wide receiver, and practice squad predictions.",
    "datePublished": "2026-08-24T08:00:00+00:00",
    "dateModified": "2026-08-24T08:00:00+00:00",
    "author": {
      "@type": "Organization",
      "name": "BillsSchedule2026 Editorial Team",
      "url": "https://billsschedule2026.online"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is NFL cutdown day in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2026 NFL roster cutdown day is Sunday, August 30, at 6:00 PM ET. Every team must reduce its offseason roster from a maximum of 90 players to the regular-season limit of 53 by that deadline."
        }
      },
      {
        "@type": "Question",
        "name": "How many players will the Bills cut on cutdown day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teams carry up to 90 players in the offseason and must reach 53 by the deadline, so the Bills will release, waive, trade or reassign as many as 37 players on or before August 30, 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the Bills' starting quarterbacks in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Josh Allen is the undisputed starter, with veteran Kyle Allen projected as the backup. ESPN's final roster projection describes it as the all-Allen lineup once again."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to waived Bills players after cutdown day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Players with fewer than four accrued seasons go through the NFL waiver wire, where any of the 32 teams can claim their contract. Unclaimed players can then be re-signed to the Bills' 16-man practice squad or become free agents."
        }
      }
    ]
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Bills Roster Projection 2026</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          CUTDOWN DAY TRACKER · UPDATED AUGUST 24
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Buffalo Bills 53-Man Roster Projection 2026: Who Makes the Final Cut?
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Our complete Buffalo Bills roster projection for the 2026 season. With cutdown day set for Sunday, August 30 at 6:00 PM ET, we break down the 90-to-53 reduction position by position — the settled quarterback room, the loaded receiver corps, and the defensive line crunch created by Jim Leonhard&apos;s new 3-4 scheme.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Deadline: Aug 30 · 6:00 PM ET
          </span>
          <span>•</span>
          <span>Updated: August 24, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 Editorial Team</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Section 0: Key dates box */}
        <div className="my-2">
          <Image
            src="/images/bills/roster-projection-card.webp"
            alt="Buffalo Bills 2026 cutdown day tracker infographic: 90 to 53 players by August 30"
            width={1000}
            height={406}
            className="rounded-xl border border-zinc-800 w-full h-auto"
          />
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-600 pl-3">
            1. When Is Bills Cutdown Day? Deadline, Rules & Key Dates
          </h2>
          <p>
            The NFL moved cutdown day up two days from the Tuesday deadline used in recent seasons. For 2026, every club must be down to 53 players by <strong>6:00 PM ET on Sunday, August 30</strong>, per the league&apos;s official important-dates calendar published on <a href="https://www.nfl.com/news/2026-27-national-football-league-important-dates" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>. Buffalo enters the deadline after its preseason finale against the Pittsburgh Steelers on Thursday, August 27 at Highmark Stadium.
          </p>
          <p>
            The math is brutal: rosters open training camp at a maximum of 90 players, which means each team must release, waive, trade or reassign as many as <strong>37 players</strong> in a single weekend. For bubble players like running back <Link href="/frank-gore-jr-bills-roster" className="text-blue-400 hover:underline">Frank Gore Jr.</Link>, those 72 hours between the final preseason whistle and the deadline decide an entire year of their career.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Sun, Aug 30, 6:00 PM ET:</strong> 53-man limit enforced league-wide.</li>
            <li><strong>Sun, Aug 31 – Wed, Sep 2:</strong> Waiver wire claims process; teams build 16-player practice squads.</li>
            <li><strong>Sun, Sep 13, 1:00 PM ET:</strong> Week 1 kickoff — Bills open the regular season at the Houston Texans (CBS). See our guide to <Link href="/when-is-first-bills-game" className="text-blue-400 hover:underline">when the first Bills game kicks off</Link>.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            2. Quarterbacks & Running Backs: The Settled Rooms
          </h2>
          <p>
            The quarterback competition never really was one. As <a href="https://www.espn.com/nfl/story/_/id/49679821/2026-nfl-season-buffalo-bills-final-roster-projection-depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN&apos;s final Bills roster projection</a> puts it, it&apos;s the &quot;all-Allen lineup once again&quot;: MVP finalist <strong>Josh Allen</strong> under center with journeyman <strong>Kyle Allen</strong> as the backup. Our earlier analysis of <Link href="/kyle-allen-bills-qb2" className="text-blue-400 hover:underline">Kyle Allen&apos;s hold on the QB2 job</Link> explains why Buffalo values his veteran presence over a developmental third arm.
          </p>
          <p>
            The backfield is similarly stable at the top. <strong>James Cook</strong> is the RB1 after his breakout contract year form, <strong>Ray Davis</strong> returns as the power back and goal-line finisher, and veteran third-down specialist Ty Johnson offers pass protection Allen trusts. That leaves Gore Jr. fighting for a potential fourth spot or — far more likely — a practice squad designation with game-day elevation rights.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Unit</th>
                  <th className="p-3">Projected Count</th>
                  <th className="p-3">Locks</th>
                  <th className="p-3">On the Bubble</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Quarterback</td>
                  <td className="p-3">2</td>
                  <td className="p-3 text-emerald-400">Josh Allen, Kyle Allen</td>
                  <td className="p-3">—</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Running Back</td>
                  <td className="p-3">3–4</td>
                  <td className="p-3 text-emerald-400">Cook, Davis, Johnson</td>
                  <td className="p-3 text-red-400">Gore Jr. (PS candidate)</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Wide Receiver</td>
                  <td className="p-3">5–6</td>
                  <td className="p-3 text-emerald-400">Moore, Coleman, Shakir, Palmer</td>
                  <td className="p-3 text-yellow-400">Shavers, Hamler, returners</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Defensive Line</td>
                  <td className="p-3">9–10</td>
                  <td className="p-3 text-emerald-400">Oliver, Walker, Sanders</td>
                  <td className="p-3 text-red-400">Veteran vs rookie swing spots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            3. The Wide Receiver Room Is the Deepest It Has Been in Years
          </h2>
          <p>
            For most of the Josh Allen era, the question at receiver was whether he had enough help. In 2026 the question is inverted: how many receivers can Buffalo actually keep? D.J. Moore arrived from Chicago as a premium acquisition, Keon Coleman enters year two coming off a standout training camp, Khalil Shakir remains the NFL&apos;s most efficient slot receiver over the past two seasons, and Joshua Palmer brings perimeter speed despite a quiet first year in Western New York (22 catches, 303 yards).
          </p>
          <p>
            That quartet is safe. Everything behind them is a battle of special-teams value: Tyrell Shavers, KJ Hamler and the return specialists are effectively competing for one or two jobs. Our full breakdown lives in the <Link href="/bills-wr-depth-chart" className="text-blue-400 hover:underline">Buffalo Bills wide receiver depth chart for 2026</Link>, including who benefits most from offensive coordinator Joe Brady&apos;s &quot;everybody eats&quot; rotation.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            4. Defensive Line: Where the Real Drama Happens
          </h2>
          <p>
            New defensive coordinator <strong>Jim Leonhard</strong> has installed an identity-changing 3-4 base defense, and the front line is absorbing the shock. Coverage from <a href="https://billswire.usatoday.com/story/sports/nfl/bills/2026/07/29/2026-buffalo-bills-training-camp-defensive-line-deone-walker-ed-oliver-tj-sanders/91044411007/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Bills Wire&apos;s training camp previews</a> and Syracuse.com frames the unit around Ed Oliver, second-year nose tackle Deone Walker and T.J. Sanders — but the scheme switch means traditional 4-3 edge rushers and undersized tackles are suddenly scheme fits in question.
          </p>
          <p>
            Expect Buffalo to carry nine or ten defensive linemen, which is bad news for the middle of the roster. Veterans on modest contracts are competing directly with late-round rookies for three or four spots, and practice-squad eligibility will hinge on waiver exposure: any player with fewer than four accrued seasons must clear waivers before Buffalo can stash him. The health watch on stars also matters here — monitor our updates on <Link href="/matt-milano-injury-status" className="text-blue-400 hover:underline">Matt Milano&apos;s status</Link> and the <Link href="/ed-oliver-son-family-news" className="text-blue-400 hover:underline">Ed Oliver family story</Link> when projecting Week 1 availability up front.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            5. Practice Squad Rules & What Happens After the Cuts
          </h2>
          <p>
            Making the initial 53 is not the end of the churn. Immediately after the deadline, waived players under four accrued seasons pass through the <strong>NFL waiver wire</strong>, where every team holds a claim based on inverse standings. Players who clear can be re-signed to Buffalo&apos;s <strong>16-player practice squad</strong> — and each game day, the Bills can elevate two practice-squad players without exposing them to other teams&apos; poaching attempts beyond the standard limits.
          </p>
          <p>
            Historically Sean McDermott&apos;s staff protects its development candidates: expect the Bills to lose one or two fringe players to claims while quietly stashing a rookie cornerback, a young tackle and — if he does not make the active roster — Gore Jr. as the designated elevation back. Once the dust settles, attention flips to the real thing: the <Link href="/preseason-schedule" className="text-blue-400 hover:underline">preseason finale</Link> is done, and the <Link href="/printable-schedule" className="text-blue-400 hover:underline">regular-season schedule</Link> begins in Houston on September 13.
          </p>
          <p>
            For live verification of every move, the team&apos;s official transaction log at <a href="https://www.buffalobills.com/team/transactions/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a> is updated in real time as cuts are announced during deadline weekend.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            FAQ: Bills Roster Cuts & 53-Man Projection
          </h2>
          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">When is NFL cutdown day in 2026?</h3>
              <p className="text-sm text-zinc-400">Sunday, August 30, 2026, at 6:00 PM ET. All 32 teams must be at 53 players by that deadline — two days earlier than the Tuesday deadlines of recent seasons.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">How many players do the Bills have to cut?</h3>
              <p className="text-sm text-zinc-400">Up to 37. Offseason rosters max out at 90, so trimming to 53 means releasing, waiving or trading roughly a third of the training camp roster in one weekend.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Will Frank Gore Jr. make the Bills roster?</h3>
              <p className="text-sm text-zinc-400">He is projected on the bubble. With Cook, Davis and Johnson locked in, Gore Jr.&apos;s likeliest landing spot is the practice squad with game-day elevations — unless Buffalo decides to carry four running backs.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Where can I track every Bills roster move as it happens?</h3>
              <p className="text-sm text-zinc-400">Bookmark this page and the team&apos;s official transactions feed. We refresh our projection table through cutdown weekend and flag every surprise release as it lands.</p>
            </div>
          </div>
        </section>
      </article>

      <RelatedTrendPages slugs={['frank-gore-jr-bills-roster', 'ray-davis-bills-rb', 'kyle-allen-bills-qb2', 'bills-wr-depth-chart', 'when-is-first-bills-game']} />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />
    </div>
  );
}
