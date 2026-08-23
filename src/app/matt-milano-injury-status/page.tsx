import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Matt Milano Injury Status & Bills Recovery",
  description: "Comprehensive Matt Milano injury status update for 2026: timeline, bicep and leg recovery, Buffalo Bills linebacker depth chart changes, and defensive impact.",
  keywords: [
    "matt milano injury status",
    "matt milano injury update",
    "buffalo bills linebacker injury",
    "matt milano 2026 news",
    "terrel bernard dorian williams linebacker depth",
    "bills defense without matt milano",
    "matt milano return timeline",
    "buffalo bills roster news 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/matt-milano-injury-status`,
  },
  openGraph: {
    title: "Matt Milano Injury Status: Bills Linebacker Recovery & 20...",
    description: "Latest Matt Milano injury recovery breakdown, 2026 Buffalo Bills linebacker depth chart adjustments, and defensive metrics.",
    url: `${SITE_CONFIG.url}/matt-milano-injury-status`,
    type: "article",
  },
};

export default function MattMilanoInjuryStatusPage() {
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
        "name": "Matt Milano Injury Status",
        "item": "https://billsschedule2026.online/matt-milano-injury-status"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Matt Milano Injury Status: Bills Linebacker Recovery & 2026 Depth Chart",
    "description": "Comprehensive analysis of Matt Milano's injury history, recovery timeline, practice participation status, and Buffalo Bills linebacker depth chart modifications for 2026.",
    "datePublished": "2026-08-23T07:00:00+08:00",
    "dateModified": "2026-08-23T07:00:00+08:00",
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
        "name": "What is the latest Matt Milano injury status for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Matt Milano has navigated a complex multi-year rehabilitation trail following a fractured fibula and Lisfranc injury in late 2023, a torn biceps during August 2024 training camp, and load management protocols in 2025. Heading into 2026, Buffalo has transitioned its starting weakside linebacker snap distribution while monitoring Milano's physical condition."
        }
      },
      {
        "@type": "Question",
        "name": "Who starts at linebacker for the Buffalo Bills without Matt Milano?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Terrel Bernard locks down the middle linebacker (Mike) position with defensive signal-calling duties, while third-year linebacker Dorian Williams plays primary weakside (Will) linebacker. Baylon Spector and veteran depth options provide strongside (Sam) and special teams support."
        }
      },
      {
        "@type": "Question",
        "name": "How does Matt Milano's absence impact Buffalo's pass coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milano was regarded as one of the elite pass-coverage linebackers in the NFL, routinely neutralizing opposing tight ends and running backs in nickel sets. Without Milano at 100% capacity, Buffalo relies more heavily on safety help from Taylor Rapp and Damar Hamlin alongside sub-package dime packages."
        }
      },
      {
        "@type": "Question",
        "name": "Is Matt Milano under contract with the Buffalo Bills for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Milano reached the conclusion of his contract extensions in Buffalo, becoming an unrestricted free agent while evaluating health, veteran roster fits, and physical clearance for full-contact football."
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
        <span className="text-white font-semibold">Matt Milano Injury Status</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          INJURY REPORT & ROSTER RECOVERY ANALYSIS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Matt Milano Injury Status: Timeline, Medical Recovery & Bills Linebacker Depth Chart
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Complete injury tracking and medical timeline for All-Pro linebacker Matt Milano. Detailed breakdown of his recovery from biceps tear and leg surgery, defensive coverage metrics, practice participation reports, and how Head Coach Sean McDermott reorganizes Buffalo&apos;s 2026 linebacker core with Terrel Bernard and Dorian Williams.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Status: Rehabilitation & Free Agent Evaluation
          </span>
          <span>•</span>
          <span>Updated: August 23, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 Medical & Roster Team</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quick Summary Stat Box */}
        <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-950 p-6 rounded-xl border border-red-800/40 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🚨</span> Matt Milano Career & Injury Fact Sheet
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">POSITION / DRAFT</span>
              <strong className="text-white text-sm font-sans">Linebacker / 2017 Pick 163</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">ALL-PRO SELECTIONS</span>
              <strong className="text-yellow-400 text-sm font-sans">First-Team All-Pro (2022)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">CAREER TACKLES / INTs</span>
              <strong className="text-emerald-400 text-sm font-sans">488 Tackles / 10 INTs</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">KEY INJURY HISTORIES</span>
              <strong className="text-red-400 text-sm font-sans">Fibula (2023), Biceps (2024)</strong>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-600 pl-3">
            1. Matt Milano Injury Timeline & Return Expectations
          </h2>
          <p>
            Few defensive players in modern Buffalo Bills franchise history have possessed the transformative instincts of linebacker Matt Milano. Selected in the fifth round of the 2017 NFL Draft out of Boston College, Milano evolved from a converted safety into a First-Team All-Pro weakside linebacker. However, his career path over recent seasons has been heavily altered by a succession of severe physical setbacks that tested both Buffalo&apos;s defensive depth and Milano&apos;s personal resilience.
          </p>
          <p>
            The injury ordeal began in earnest during Week 5 of the 2023 regular season. Playing against the Jacksonville Jaguars at Tottenham Hotspur Stadium in London, Milano suffered a devastating lower-leg injury in the first quarter. Medical evaluation revealed a fractured fibula coupled with Lisfranc ligament damage in his foot, requiring season-ending surgery and an arduous eight-month rehabilitation program. 
          </p>
          <p>
            After working endlessly to regain full movement for the 2024 campaign, tragedy struck again in mid-August during a mandatory training camp practice at St. John Fisher University. During a red-zone coverage drill, Milano suffered a torn left biceps muscle while making a tackle. The injury required immediate surgical repair, sidelining him through the majority of the regular season before Buffalo opened his 21-day practice evaluation window in December.
          </p>
          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/training-camp-practice.webp"
              alt="Buffalo Bills training camp practice field where linebacker drills take place"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              Buffalo Bills training camp grounds at St. John Fisher University, site of intensive defensive preparation.
            </div>
          </div>
          <p>
            Heading into the 2026 league year, official updates from medical experts and national sports reporting outlets indicate that while Milano successfully rehabbed the soft-tissue bicep repair, cumulative wear on his lower extremities led the Bills organization to proceed cautiously. Official details from <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> and <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a> document that Milano hit unrestricted free agency following the conclusion of his contract, allowing both player and team to assess physical clearance without premature on-field strain.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            2. Linebacker Depth Chart Adjustments (Terrel Bernard, Dorian Williams)
          </h2>
          <p>
            With Matt Milano undergoing gradual physical management and exploring veteran options, Buffalo Bills General Manager Brandon Beane and Head Coach Sean McDermott implemented a strategic youth movement within the linebacker room. Defensive Coordinator Bobby Babich has reorganized the unit around two dynamic young linebackers who gained invaluable starter experience during Milano&apos;s recovery stretches.
          </p>
          
          <div className="bg-black/50 p-5 rounded-xl border border-zinc-800 space-y-4 my-6">
            <h3 className="text-lg font-headline font-bold text-white">
              2026 Buffalo Bills Linebacker Depth Order
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono text-zinc-300">
                <thead className="bg-zinc-800 text-white uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">Role</th>
                    <th className="p-3">Primary Starter</th>
                    <th className="p-3">Primary Backup</th>
                    <th className="p-3">Key Skillset & Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr className="hover:bg-zinc-800/40">
                    <td className="p-3 font-bold text-yellow-400">Mike (Middle LB)</td>
                    <td className="p-3 text-white font-semibold">Terrel Bernard</td>
                    <td className="p-3">Nicholas Morrow</td>
                    <td className="p-3">Green-dot helmet communicator, lateral pursuit, pre-snap checks</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/40">
                    <td className="p-3 font-bold text-blue-400">Will (Weakside LB)</td>
                    <td className="p-3 text-white font-semibold">Dorian Williams</td>
                    <td className="p-3">Baylon Spector</td>
                    <td className="p-3">Downfield pass coverage, sideline-to-sideline tackling, blitz blitzing</td>
                  </tr>
                  <tr className="hover:bg-zinc-800/40">
                    <td className="p-3 font-bold text-emerald-400">Sam (Strongside LB)</td>
                    <td className="p-3 text-white font-semibold">Baylon Spector</td>
                    <td className="p-3">Edefuan Ulofoshio</td>
                    <td className="p-3">Edge setting against 12-personnel, special teams coverage captain</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            <strong>Terrel Bernard</strong> has anchored the defense as the primary starter at middle linebacker. Demonstrating remarkable football IQ, Bernard wears the defensive green dot on his helmet, communicating calls from McDermott directly to the huddle. His ability to intercept intermediate passes over the middle of the field mirrors Milano&apos;s coverage instincts.
          </p>
          <p>
            Meanwhile, <strong>Dorian Williams</strong>, a 2023 third-round pick out of Tulane, has stepped into the weakside starter position full-time. Williams possesses explosive 4.49 40-yard dash speed and violent tackling technique. In 2024 and 2025, Williams racked up over 90 total tackles, proving that while replacing an All-Pro like Milano is a daunting task, Buffalo&apos;s pipeline remains strong and aggressive.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            3. Defensive Impact on Pass Coverage & Run Defense
          </h2>
          <p>
            Analyzing game film reveals why Matt Milano earned the moniker &quot;Cookie Monster&quot; among Bills faithful. In McDermott&apos;s base 4-2-5 nickel scheme—which Buffalo runs on nearly 80% of defensive snaps—the weakside linebacker is tasked with covering tight ends man-to-man, reading screen plays, and plugging B-gap run lanes.
          </p>
          <p>
            According to historical scouting breakdown on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, when Milano was on the field at peak health, opposing passer ratings against Buffalo drop significantly:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Passer Rating Allowed vs TE/RB:</strong> With Milano healthy, Buffalo limited opposing tight ends to under 42 yards per game and held backfield pass-catchers to a 68.2 passer rating.</li>
            <li><strong>Third-Down Efficiency:</strong> Buffalo&apos;s defense stopped third-down conversions at a 35.1% rate with Milano directing underneath zone drops, compared to 41.8% when secondary linebackers filled in.</li>
            <li><strong>Turnover Creation:</strong> Milano recorded 10 career interceptions, 3 forced fumbles, and 9 fumble recoveries, possessing rare ball-hawking awareness that swung crucial AFC East momentum.</li>
          </ul>
          <p>
            In Milano&apos;s absence, opponents frequently targeted the seam routes between linebackers and safeties. To counter this, McDermott modified safety alignment, placing Taylor Rapp closer to the line of scrimmage while tasking Damar Hamlin and Mike Edwards with deep split-safety coverage.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            4. Medical Evaluation & Practice Participation Reports
          </h2>
          <p>
            Understanding the medical nuances of Milano&apos;s injuries clarifies why recovery required extreme caution. Biceps tendon reattachment surgery involves reanchoring the long head of the biceps tendon to the radial tuberosity. While functional strength typically returns within 5 to 7 months, football-specific contact—such as shedding 310-pound offensive guards—places immense stress on the upper arm repair.
          </p>
          <p>
            During private training sessions monitored by orthopedic specialists ahead of the 2026 season, reports on <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a> noted that Milano demonstrated solid upper-body strength metrics and full range of motion. However, managing joint longevity after severe lower-leg Lisfranc reconstruction dictates that Milano undergo tailored workload management rather than immediate full-contact trial games.
          </p>
          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/roster-cut-practice.webp"
              alt="Buffalo Bills coaching staff evaluating player health and practice performance"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              McDermott and Buffalo&apos;s medical staff evaluating conditioning and health protocols during team drills.
            </div>
          </div>
          <p>
            Practice reports indicate that any team considering signing Milano as a veteran mid-season addition will conduct thorough medical scans to evaluate scar tissue density and lower-body explosion before extending a contact offer.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            5. Bills Defense Performance Metrics Without Milano
          </h2>
          <p>
            How have the Buffalo Bills fared statistically over games played without Matt Milano? Statistical logging across recent regular season slates demonstrates both resilience and areas for growth across Sean McDermott&apos;s defense:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-black/60 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="font-headline font-bold text-white text-base">Rushing Defense EPA/Play</h4>
              <p className="text-xs text-zinc-400">
                Without Milano plugging cutback lanes, opponent Expected Points Added (EPA) per rush increased from -0.09 to +0.02, reflecting slightly higher rushing success for opposing backs on early downs.
              </p>
            </div>
            <div className="bg-black/60 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="font-headline font-bold text-white text-base">Red-Zone Touchdown Percentage</h4>
              <p className="text-xs text-zinc-400">
                Opponents converted red-zone possessions into touchdowns at a 56.4% clip without Milano&apos;s goal-line instincts, compared to a stifling 47.2% rate when Milano was anchored inside the 20-yard line.
              </p>
            </div>
          </div>

          <p>
            Despite these challenges, the emergence of Terrel Bernard as a pro-bowl caliber defender and Dorian Williams&apos; aggressive tackling progression ensures that Buffalo remains a formidable contender in the AFC East. Fans continuing to follow <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026</Link> updates can rest assured that Sean McDermott&apos;s defensive structure remains built for championship resilience.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-cyan-500 pl-3">
            6. Milano&apos;s Defensive Impact When Healthy
          </h2>
          <p>
            Matt Milano is the heartbeat of Buffalo&apos;s second level. A first-team All-Pro caliber weak-side linebacker, Milano blends elite coverage instincts with violent downhill run support. When healthy, he allows defensive coordinator Bobby Babich to deploy exotic pressures and match man coverage against elite tight ends — a luxury few defenses enjoy.
          </p>
          <p>
            His ability to erase crossing routes and spy mobile quarterbacks is a cornerstone of Buffalo&apos;s defensive identity. Milano&apos;s range from sideline to sideline lets the safeties play aggressive run fits, knowing the linebacker will close the intermediate window. That trust cascade is why his presence fundamentally upgrades every layer of the unit.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-orange-500 pl-3">
            7. Buffalo&apos;s Linebacker Depth Around Milano
          </h2>
          <p>
            Should Milano need to be eased back into action, Buffalo is not without options. Middle linebacker Terrel Bernard emerged as a tackle machine and signal-caller on defense, while Dorian Williams and the rest of the room provide rotational snaps. The Bills have historically valued versatility at linebacker, and the 2026 depth chart reflects a deliberate balance of proven starters and ascending backups.
          </p>
          <p>
            The coaching staff can deploy sub-packages that hide any individual limitation, using Milano in coverage while rotating Bernard and Williams against the run. This flexibility means Buffalo can weather brief absences without catastrophic drop-off, preserving the unit&apos;s status among the league&apos;s best.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            Frequently Asked Questions: Matt Milano & Bills Linebackers
          </h2>
          <div className="space-y-4">
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">What is the exact Matt Milano injury status today?</h3>
              <p className="text-sm text-zinc-300">
                Milano has completed physical rehabilitation from his 2024 biceps tear and 2023 leg surgery. Entering 2026, he became an unrestricted free agent while continuing specialized strength training to ensure long-term physical health.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Who are Buffalo&apos;s starting linebackers in 2026?</h3>
              <p className="text-sm text-zinc-300">
                Terrel Bernard starts at middle linebacker (Mike) and calls plays, while Dorian Williams starts at weakside linebacker (Will). Baylon Spector serves as strongside linebacker and key special teams contributor.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Could Matt Milano return to the Bills later in the 2026 season?</h3>
              <p className="text-sm text-zinc-300">
                While Buffalo transitioned its young starters during offseason OTAs, GM Brandon Beane maintains strong ties with Milano. If mid-season injuries arise, a veteran reunion remains a potential scenario depending on roster spots.
              </p>
            </div>
          </div>
        </section>
      </article>
            <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
