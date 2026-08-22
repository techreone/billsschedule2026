import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Denver Broncos Depth Chart 2026: Complete Offense & Defense",
  description: "Official 2026 Denver Broncos depth chart: comprehensive roster analysis of starters, Bo Nix QB leadership, J.K. Dobbins backfield, defense, and special teams.",
  keywords: [
    "denver broncos depth chart 2026",
    "broncos 2026 roster depth chart",
    "denver broncos starting offense 2026",
    "broncos defense depth chart",
    "bo nix broncos qb1",
    "jk dobbins broncos depth chart",
    "courtland sutton broncos wr1",
    "patrick surtain broncos cb1"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/denver-broncos-depth-chart-2026`,
  },
};

export default function DenverBroncosDepthChart2026Page() {
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
        "name": "Denver Broncos Depth Chart 2026",
        "item": "https://billsschedule2026.online/denver-broncos-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback on the Denver Broncos 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bo Nix is the starting quarterback (QB1) on the Denver Broncos 2026 depth chart, backed up by Jarrett Stidham at QB2."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Denver Broncos backfield in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "J.K. Dobbins commands the top running back spot on the depth chart alongside rookie RJ Harvey and Javonte Williams."
        }
      },
      {
        "@type": "Question",
        "name": "How is the Denver Broncos offensive line structured under Sean Payton?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Broncos offensive line features left tackle Garett Bolles, left guard Ben Powers, center Luke Wattenberg, right guard Quinn Meinerz, and right tackle Mike McGlinchey."
        }
      },
      {
        "@type": "Question",
        "name": "Who anchors the Denver Broncos defense in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Pro cornerback Patrick Surtain II leads the secondary alongside edge rushers Baron Browning and Nik Bonitto, linebackers Alex Singleton and Cody Barton, and safety Brandon Jones."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Denver Broncos Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-950/90 border border-orange-800/60 rounded text-orange-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL ROSTER & POSITION DIRECTORY • DENVER BRONCOS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Denver Broncos Depth Chart 2026: Complete Offense & Defense
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Complete position-by-position breakdown of the 2026 Denver Broncos depth chart. Analyze offensive starters under Head Coach Sean Payton, defensive rotation units, special teams specialists, and practice squad reserve players.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified 2026 Training Camp Roster
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By Broncos Football Analytics Desk</span>
        </div>
      </header>

      {/* Adsterra Banner */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        
        {/* Showcase Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
          <Image 
            src="/images/broncos/broncos-depth-chart.webp" 
            alt="Denver Broncos 2026 Roster Depth Chart"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="denver-broncos-depth-chart-2026 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            Denver Broncos team lining up for offensive series drills during 2026 summer practice at Centura Health Training Center.
          </div>
        </div>

        {/* Quick Summary Roster Box */}
        <div className="bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-orange-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🐴</span> 2026 Denver Broncos Starters Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-orange-400 block font-sans text-xs mb-1">OFFENSIVE STARTERS (QB / RB / WR / TE)</strong>
              <p>QB: <span className="text-white font-bold">Bo Nix</span> (Backup: Jarrett Stidham)</p>
              <p>RB: <span className="text-white font-bold">J.K. Dobbins</span> (Backup: RJ Harvey)</p>
              <p>WR1: <span className="text-white font-bold">Courtland Sutton</span></p>
              <p>WR2: <span className="text-white font-bold">Marvin Mims Jr.</span></p>
              <p>TE: <span className="text-white font-bold">Evan Engram</span></p>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-yellow-400 block font-sans text-xs mb-1">DEFENSIVE & LINE STARTERS</strong>
              <p>LT / RT: <span className="text-white font-bold">Garett Bolles / Mike McGlinchey</span></p>
              <p>DT: <span className="text-white font-bold">Zach Allen / DJ Jones</span></p>
              <p>EDGE: <span className="text-white font-bold">Baron Browning / Nik Bonitto</span></p>
              <p>CB: <span className="text-white font-bold">Patrick Surtain II / Riley Moss</span></p>
              <p>S: <span className="text-white font-bold">Brandon Jones / P.J. Locke</span></p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            1. Denver Broncos 2026 Offensive Depth Chart & Quarterback Room
          </h2>
          <p>
            The Denver Broncos enter the 2026 season with clear direction at quarterback under Head Coach Sean Payton. Franchise quarterback Bo Nix enters his second full season as the undisputed QB1. Nix established himself as a high-efficiency passer with rare pre-snap processing speed and pinpoint accuracy on quick-rhythm throws.
          </p>
          <p>
            Official depth chart listings on <a href="https://www.denverbroncos.com/team/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">Denver Broncos Official Depth Chart Page</a> demonstrate that veteran Jarrett Stidham serves as the primary backup at QB2, with Sam Ehlinger listed at QB3. Stidham provides solid veteran backup depth, allowing Denver&apos;s offensive installation to maintain continuity.
          </p>
          <p>
            In the receiving room, veteran target Courtland Sutton leads the depth chart at WR1, serving as Nix&apos;s primary contested-catch weapon. Speedster Marvin Mims Jr. operates at WR2, stretching defenses vertically and operating on jet-sweep concepts.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            2. Running Back Backfield & Offensive Line Foundation
          </h2>
          <p>
            Denver&apos;s rushing attack relies on a dynamic backfield rotation led by veteran J.K. Dobbins and rookie RB RJ Harvey. Dobbins brings explosive vision and hard-nosed interior running, while Harvey provides dynamic pass-catching skills out of the backfield.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-orange-400">
                  <th className="py-2 px-3">Position</th>
                  <th className="py-2 px-3">Starter</th>
                  <th className="py-2 px-3">Second Tier</th>
                  <th className="py-2 px-3">Third Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Tackle (LT)</td>
                  <td className="py-2 px-3 text-orange-300">Garett Bolles</td>
                  <td className="py-2 px-3">Matt Peart</td>
                  <td className="py-2 px-3">Demontrey Jacobs</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Guard (LG)</td>
                  <td className="py-2 px-3">Ben Powers</td>
                  <td className="py-2 px-3">Nick Gargiulo</td>
                  <td className="py-2 px-3">Oliver Jervis</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Center (C)</td>
                  <td className="py-2 px-3 text-orange-300">Luke Wattenberg</td>
                  <td className="py-2 px-3">Alex Forsyth</td>
                  <td className="py-2 px-3">Sam Mustipher</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Guard (RG)</td>
                  <td className="py-2 px-3 text-orange-300">Quinn Meinerz</td>
                  <td className="py-2 px-3">Will Sherman</td>
                  <td className="py-2 px-3">Calvin Throckmorton</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Tackle (RT)</td>
                  <td className="py-2 px-3">Mike McGlinchey</td>
                  <td className="py-2 px-3">Alex Palczewski</td>
                  <td className="py-2 px-3">Frank Crum</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Protecting Bo Nix is an offensive line anchored by left tackle Garett Bolles and powerful right guard Quinn Meinerz. Roster reports on <a href="https://www.espn.com/nfl/team/depth/_/name/den" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">ESPN Denver Broncos Depth Chart</a> emphasize that Denver&apos;s offensive line ranked among the top groups in pass-block win rate during early 2026 scrimmages.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            3. Defensive Front Seven & Pass-Rush Rotation
          </h2>
          <p>
            Defensively, Denver employs a disruptive defensive front anchored by interior lineman Zach Allen and nose tackle DJ Jones. Allen&apos;s ability to penetrate interior gaps creates collapse against opposing quarterbacks.
          </p>
          <p>
            On the perimeter, edge rushers Baron Browning, Nik Bonitto, and Jonah Elliss form a deep rotational pass rush. At linebacker, Alex Singleton anchors the defense as the middle tackle leader alongside Cody Barton.
          </p>
          <p>
            Scouting analysis on <a href="https://www.cbssports.com/nfl/teams/den/denver-broncos/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">CBS Sports Broncos Roster Breakdown</a> details how Denver&apos;s defensive front creates third-down pressure through disguised blitz angles.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            4. Secondary Defensive Backs & Special Teams Units
          </h2>
          <p>
            The crown jewel of Denver&apos;s defense is All-Pro cornerback Patrick Surtain II. Surtain shuts down half the field in boundary single-coverage, allowing Denver&apos;s defensive coordinator to tilt safety coverage toward slot receivers.
          </p>
          <p>
            Opposite Surtain, physical cornerback Riley Moss holds down the CB2 spot, with Ja&apos;Quan McMillian excelling in the nickel slot corner role. Safeties Brandon Jones and P.J. Locke provide physical run support and deep-half coverage.
          </p>
          <p>
            On special teams, veteran placekicker Wil Lutz handles field goal duties, while punter Riley Dixon controls net field position metrics.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Denver Broncos Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback on the Denver Broncos 2026 depth chart?
              </h3>
              <p className="text-zinc-300">
                Bo Nix is the starting quarterback (QB1) on the Denver Broncos 2026 depth chart, backed up by Jarrett Stidham at QB2.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who leads the Denver Broncos backfield in 2026?
              </h3>
              <p className="text-zinc-300">
                J.K. Dobbins commands the top running back spot on the depth chart alongside rookie RJ Harvey and Javonte Williams.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How is the Denver Broncos offensive line structured under Sean Payton?
              </h3>
              <p className="text-zinc-300">
                The Broncos offensive line features left tackle Garett Bolles, left guard Ben Powers, center Luke Wattenberg, right guard Quinn Meinerz, and right tackle Mike McGlinchey.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who anchors the Denver Broncos defense in 2026?
              </h3>
              <p className="text-zinc-300">
                All-Pro cornerback Patrick Surtain II leads the secondary alongside edge rushers Baron Browning and Nik Bonitto, linebackers Alex Singleton and Cody Barton, and safety Brandon Jones.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation Link */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <Link href="/" className="text-orange-400 hover:underline flex items-center gap-1">
            ← Return to Buffalo Bills Schedule 2026 Home
          </Link>
          <span className="text-zinc-500">Official NFL Roster Data • Denver Broncos Coverage</span>
        </div>

      </article>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/broncos/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/den/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
