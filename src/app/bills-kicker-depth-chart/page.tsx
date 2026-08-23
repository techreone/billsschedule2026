import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import RelatedTrendPages from '@/components/RelatedTrendPages';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Bills Kicker 2026: Tyler Bass Field Goal Status",
  description: "Buffalo Bills kicker 2026 update: Tyler Bass field goal accuracy, Highmark Stadium wind performance, contract breakdown, punter Sam Martin holding tandem.",
  keywords: [
    "bills kicker",
    "buffalo bills kicker 2026",
    "tyler bass bills kicker",
    "tyler bass field goal stats",
    "bills kicker contract tyler bass",
    "highmark stadium wind field goals"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-kicker-depth-chart`,
  },
  openGraph: {
    title: "Bills Kicker 2026: Tyler Bass Depth Chart Status & Field Goals",
    description: "In-depth review of Buffalo Bills starting placekicker Tyler Bass, field goal percentage metrics, Highmark Stadium weather impact, and contract details.",
    url: `${SITE_CONFIG.url}/bills-kicker-depth-chart`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function BillsKickerDepthChartPage() {
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
        "name": "Bills Kicker Depth Chart",
        "item": "https://billsschedule2026.online/bills-kicker-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting kicker for the Buffalo Bills in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass is the starting placekicker for the Buffalo Bills, entering his seventh NFL season as Buffalo's franchise kicker."
        }
      },
      {
        "@type": "Question",
        "name": "What is Tyler Bass' longest career field goal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass hit a career-long 56-yard field goal and holds the Bills franchise record for the longest playoff field goal by a kicker (54 yards)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Tyler Bass' contract status with Buffalo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass signed a 4-year, $20.4 million contract extension with the Buffalo Bills, securing him through the 2027 season."
        }
      },
      {
        "@type": "Question",
        "name": "Who holds for Tyler Bass on field goal attempts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran punter Sam Martin serves as the primary holder for Tyler Bass, paired with long snapper Reid Ferguson."
        }
      },
      {
        "@type": "Question",
        "name": "What college did Tyler Bass attend before entering the NFL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass played college football at Georgia Southern before being selected by the Buffalo Bills in the 6th round of the 2020 NFL Draft."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bills Kicker 2026: Tyler Bass Depth Chart Status & Field Goals",
    "description": "Comprehensive report on Buffalo Bills placekicker Tyler Bass, special teams unit performance, and kicking conditions at Highmark Stadium.",
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
        <span className="text-white font-semibold">Bills Kicker Depth Chart</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          SPECIAL TEAMS SPOTLIGHT • PLACEKICKER ANALYSIS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Bills Kicker 2026: Tyler Bass Status, Contract & Field Goal Stats
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Everything you need regarding the <strong>bills kicker</strong> situation. Analyze starter Tyler Bass, field goal percentage trends, Highmark Stadium lakefront wind dynamics, contract extension terms, and the special teams snap-hold-kick operation.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Starting Kicker Verified
          </span>
          <span>•</span>
          <span>Kicker: Tyler Bass (#2)</span>
          <span>•</span>
          <span>By BillsSchedule2026 Special Teams Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Kicker Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Kicker Stats Table */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            Tyler Bass Career Field Goal & Extra Point Metrics
          </h2>
          <p className="text-xs text-zinc-400">
            Source data gathered from official NFL statistical records on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>, <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Category</th>
                  <th className="p-3 border border-zinc-700">Stat / Metric</th>
                  <th className="p-3 border border-zinc-700">Franchise Rank / Context</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Career FG Percentage</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">84.8%</td>
                  <td className="p-3 border border-zinc-800">Top-3 All-Time Bills Franchise Accuracy</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Extra Point Percentage</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">97.2%</td>
                  <td className="p-3 border border-zinc-800">Reliable PAT conversion rate</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Longest Career FG</td>
                  <td className="p-3 border border-zinc-800 text-yellow-400 font-bold">56 Yards</td>
                  <td className="p-3 border border-zinc-800">Nailed in regular season competition</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Playoff Long FG Record</td>
                  <td className="p-3 border border-zinc-800 text-yellow-400 font-bold">54 Yards</td>
                  <td className="p-3 border border-zinc-800">Longest playoff FG in Bills franchise history</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Contract Extension Value</td>
                  <td className="p-3 border border-zinc-800 text-blue-400 font-bold">4 Years / $20.4M</td>
                  <td className="p-3 border border-zinc-800">Signed through 2027 season</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/highmark-stadium-snow.webp"
              alt="Bills kicker Tyler Bass field goal Highmark Stadium wind weather"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Kicking conditions at Highmark Stadium in Orchard Park feature unpredictable Lake Erie swirl winds.
          </p>
        </div>

        {/* Section 1: Tyler Bass Starting Status */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Tyler Bass Starting Kicker Status & Contract Overview
          </h2>
          <p>
            An evaluation of the <strong>bills kicker</strong> position confirms veteran Tyler Bass as Buffalo&apos;s unchallenged placekicker. Drafted in the sixth round of the 2020 draft out of Georgia Southern, Bass quickly earned trust with a powerful leg, high kickoff touchback rates, and clutch postseason kicks.
          </p>
          <p>
            General Manager Brandon Beane rewarded Bass with a 4-year, $20.4 million contract extension featuring $12.3 million guaranteed, solidifying him among the top 10 highest-paid kickers in the NFL. Explore related position reviews in our <Link href="/bills-quarterback-depth-chart" className="text-blue-400 hover:underline">Bills quarterback depth chart</Link> and <Link href="/bills-rb-depth-chart" className="text-blue-400 hover:underline">Bills running back depth chart</Link>.
          </p>
          <p>
            Bass&apos;s contract structure provides Buffalo with salary cap stability while ensuring that one of the league&apos;s most reliable outdoor placekickers remains anchored in Western New York through the 2027 campaign.
          </p>
        </section>

        {/* Section 2: Highmark Stadium Wind Factors */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Highmark Stadium Weather & Wind Factors Impacting Kick Accuracy
          </h2>
          <p>
            Kicking at open-air Highmark Stadium in Orchard Park presents some of the most difficult weather hurdles in professional football. Swirling wind currents coming off Lake Erie, freezing temperatures, and heavy snow require extraordinary kick trajectory control and mental fortitude.
          </p>
          <p>
            Bass has adapted his plant-foot mechanics and leg extension, maintaining an 84.8% career field goal conversion rate despite treacherous home environmental conditions. Weather conditions for cold-weather home games are monitored closely in our <Link href="/bills-vs-browns-delay-weather" className="text-blue-400 hover:underline">weather and delay guide</Link>.
          </p>
        </section>

        {/* Mid-Article Image Placement */}
        <div className="my-8 space-y-2">
          <img 
            src="/images/bills/nfl-broadcast-truck.webp" 
            alt="Bills kicker broadcast analysis and special teams unit statistics" 
            className="rounded-xl border border-zinc-800 w-full object-cover max-h-80" 
          />
          <p className="text-xs text-zinc-400 font-mono text-center">
            Special teams graphics and kick distance probabilities are highlighted during regional television broadcasts.
          </p>
        </div>

        {/* Section 3: Training Camp Competition */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Training Camp & Preseason Special Teams Performance
          </h2>
          <p>
            During 2026 training camp, special teams coordinator Matthew Smiley brought in camp competition legs to manage preseason kick loads and test field goal consistency. Bass responded well in preseason action, converting all field goals and extra point attempts across Week 1 and Week 2 games.
          </p>
          <p>
            In the Week 2 contest against Cleveland, Bass drilled a 49-yard field goal directly into a 15-mph headwind, confirming his leg strength and follow-through mechanics heading into the regular season. Review full game results on our <Link href="/bills-vs-browns-stats" className="text-blue-400 hover:underline">Bills vs Browns box score stats page</Link>.
          </p>
        </section>

        {/* Section 4: Special Teams Coaching Staff */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Special Teams Trio: Snapper, Holder & Kicker Execution
          </h2>
          <p>
            Kicking success is a three-man operation requiring split-second coordination. Long snapper Reid Ferguson provides flawless, consistent snaps, while veteran punter Sam Martin handles holding duties.
          </p>
          <p>
            This veteran trio has developed seamless timing, executing 1.2-second snap-to-kick operations under extreme pass rush pressure. Martin&apos;s ability to tilt the football seam-away under high winds gives Bass maximum sweet-spot contact on long field goal tries.
          </p>
        </section>

        {/* Section 5: Fantasy Football Kicker Outlook */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Fantasy Football Kicker Outlook & 50+ Yard Field Goal Range
          </h2>
          <p>
            In fantasy football leagues, Tyler Bass represents a dependable starting kicker option. Because Josh Allen leads an explosive offense that frequently moves inside opponent territory, Bass generates abundant extra point and field goal scoring opportunities weekly.
          </p>
          <p>
            His proven ability to convert from 50+ yards adds premium fantasy point potential, making him a targeted top-8 kicker in fantasy drafts. Check out our player updates on <Link href="/damar-hamlin-bills-status" className="text-blue-400 hover:underline">Damar Hamlin safety status</Link> and <Link href="/ray-davis-bills-rb" className="text-blue-400 hover:underline">Ray Davis running back news</Link>.
          </p>
        </section>

        {/* Section 6: Franchise Records & Historic Placekicker Legacy */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            6. Franchise Records & Placekicker Legacy in Buffalo
          </h2>
          <p>
            With over 550 career points scored, Tyler Bass is rapidly ascending the Buffalo Bills all-time scoring charts, closing in on franchise legends Steve Christie and Scott Norwood. His 54-yard playoff field goal remains the longest postseason field goal in franchise history.
          </p>
          <p>
            Fans looking to follow every game live can check out our <Link href="/where-to-watch" className="text-blue-400 hover:underline">where to watch Bills games guide</Link>, consult the <Link href="/preseason-schedule" className="text-blue-400 hover:underline">2026 preseason schedule</Link>, or download the <Link href="/printable-schedule" className="text-blue-400 hover:underline">printable Bills schedule PDF</Link>.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Special Teams & Depth Chart Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
            <Link href="/bills-quarterback-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Quarterback Depth Chart: Josh Allen & Backups
            </Link>
            <Link href="/damar-hamlin-bills-status" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Damar Hamlin Safety Status & Roster Role
            </Link>
            <Link href="/where-to-watch" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills TV Broadcast & Streaming Guide 2026
            </Link>
          </div>
        </div>

      </article>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Tyler Bass: The Incumbent&apos;s Resume in Orchard Park
        </h2>
        <p>
          Any conversation about Buffalo&apos;s kicking situation starts and, so far, ends with Tyler Bass. A former fourth-round selection out of Georgia Southern, Bass has held the job since 2020 and has grown into one of the more durable specialists in the AFC, compiling a career body of work documented across his <a href="https://www.espn.com/nfl/player/stats/_/id/3917232/tyler-bass" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN statistics profile</a> and official <a href="https://www.nfl.com/players/tyler-bass/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com player page</a>. His leg strength remains the headline trait — comfortable from beyond fifty yards in a division where late-game drives routinely stall at the opponent&apos;s 35.
        </p>
        <p>
          The team&apos;s own media channels continue to showcase his range, including conversions that stretched leads into blowout territory during recent preseason action, footage archived on the <a href="https://www.buffalobills.com/team/players-roster/tyler-bass/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">official Bills roster page</a>. Consistency from extra-point distance, however, is the stat fans scrutinize most after several high-profile January misses league-wide have reminded everyone how thin the margin is at this position.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          Why Kicking in Buffalo Is the NFL&apos;s Hardest Specialist Job
        </h2>
        <p>
          Highmark Stadium&apos;s location in Orchard Park makes it a unique laboratory for placekickers. Lake-effect winds funnel off Lake Erie in unpredictable spirals, December and January games regularly feature snow-driven footing challenges, and the stadium&apos;s open bowl turns routine forty-yard attempts into genuine coin flips when gusts exceed twenty miles per hour. Kickers around the league privately rank western New York among the three most demanding environments for their craft, alongside Chicago and Cleveland.
        </p>
        <p>
          That environmental reality shapes every evaluation of the position. A kicker who posts identical accuracy totals in a dome and in Orchard Park is not the same quality of specialist — the Buffalo-adjusted numbers demand more. It is also why the organization tolerates volatility that other franchises would not, and why any challenger to the job must demonstrate command of bad-weather mechanics, not just indoor accuracy on a practice-squad tryout tape.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Training Camp Audition Standard
        </h2>
        <p>
          Every August brings challenger legs to camp — undrafted free agents or veteran stopgaps signed specifically to push the incumbent through competitive reps and protect specialist legs during the exhibition slate. The audition standard in Buffalo is brutally specific: make everything inside forty, show touchback consistency on kickoffs under the current dynamic rules, and prove the ball stays driven low enough to cut through crosswinds. Preseason makes are logged, but the coaching staff weighs trajectory and hang-time data nearly as heavily as the scoreboard result.
        </p>
        <p>
          Bass has handled this annual ritual repeatedly throughout his tenure, and the absence of any genuine competition headlines this summer suggests the organization&apos;s confidence remains intact heading toward cutdown day. For context on how the rest of the special-teams depth sheet is shaping up, our companion guides cover the <Link href="/" className="text-blue-400 underline hover:text-blue-300">full 2026 schedule picture</Link> and the <Link href="/bills-rb-depth-chart" className="text-blue-400 underline hover:text-blue-300">running back depth chart</Link>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          Cutoff Math: How Many Kickers Make the 53?
        </h2>
        <p>
          Unlike most position rooms, special teams carries no developmental numbers: NFL rosters almost universally keep exactly one placekicker, one punter, and one long snapper, which means the depth chart at this spot is binary — you are either the guy or you are not here. There is no practice-squad redshirt season to soften a slow start, and no rotation to hide behind during a slump. That structural reality explains why kicker competitions resolve abruptly, often within a single disappointing week of camp rather than through a prolonged committee look.
        </p>
        <p>
          It also frames the stakes of every August attempt. When a challenger leg gets signed mid-camp, the message is rarely a true open audition; more often it is inexpensive insurance designed to protect the incumbent&apos;s leg from a heavy exhibition workload while quietly reminding everyone in the building that performance standards exist. Buffalo&apos;s approach this summer followed exactly that template, and the incumbent&apos;s response — clean sheets on his limited attempts — is why the conversation heading into cutdown day is about trajectory toward January, not about who wins the job.
        </p>
      </section>

      {/* Mounting RelatedTrendPages Component */}
      {/* Mounting RelatedTrendPages Component */}
      <RelatedTrendPages currentSlug="bills-kicker-depth-chart" />

      {/* Sources & Authority References */}
      <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
        <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
        <ul className="space-y-1">
          <li><a href="https://www.nfl.com/teams/buffalo-bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com Official Roster</a></li>
          <li><a href="https://www.espn.com/nfl/team/_/name/buf/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com Bills Special Teams Stats</a></li>
          <li><a href="https://www.cbssports.com/nfl/teams/BUF/buffalo-bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">CBS Sports Kicker Analysis</a></li>
          <li><a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">BuffaloBills.com News</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Tyler_Bass" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia Tyler Bass Biography</a></li>
        </ul>
      </section>
    </div>
  );
}
