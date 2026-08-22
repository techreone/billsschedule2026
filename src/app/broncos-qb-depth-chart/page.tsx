import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Broncos QB Depth Chart 2026: Bo Nix Starter & Backup Hier...",
  description: "Comprehensive 2026 Denver Broncos QB depth chart: analysis of starter Bo Nix, backup Jarrett Stidham, reserve options, and Sean Payton's offensive scheme.",
  keywords: [
    "broncos qb depth chart",
    "denver broncos quarterback depth chart 2026",
    "broncos starting qb 2026",
    "bo nix broncos depth chart",
    "jarrett stidham broncos qb2",
    "sam ehlinger broncos qb",
    "sean payton quarterback offense"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/broncos-qb-depth-chart`,
  },
};

export default function BroncosQbDepthChartPage() {
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
        "name": "Broncos QB Depth Chart",
        "item": "https://billsschedule2026.online/broncos-qb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the Denver Broncos in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bo Nix enters the 2026 season as the starting quarterback (QB1) for the Denver Broncos under Head Coach Sean Payton."
        }
      },
      {
        "@type": "Question",
        "name": "Who serves as the primary backup quarterback on the Broncos depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran passer Jarrett Stidham is listed as QB2 on the Denver Broncos depth chart."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the third-string quarterback on the Denver Broncos 2026 roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam Ehlinger holds the QB3 slot on the active roster, providing mobile depth for scout-team assignments."
        }
      },
      {
        "@type": "Question",
        "name": "How does Sean Payton's scheme elevate Bo Nix's passing production?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sean Payton's offense features quick-rhythm spread concepts, pre-snap reads, and screen-passing designs that leverage Bo Nix's rapid decision-making and ball-placement accuracy."
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
        <span className="text-white font-semibold">Broncos QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-950/90 border border-orange-800/60 rounded text-orange-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL QUARTERBACK DIRECTORY • DENVER BRONCOS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Broncos QB Depth Chart 2026: Bo Nix Starter & Backup Hierarchy
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Detailed analysis of the 2026 Denver Broncos quarterback room. Track starter performance metrics for Bo Nix, backup depth with Jarrett Stidham, and offensive playcalling implementation under Head Coach Sean Payton.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified QB Roster Hierarchy
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By NFL Quarterback Analytics Desk</span>
        </div>
      </header>

      {/* Adsterra Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Article Content */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        
        {/* Showcase Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
          <Image 
            src="/images/broncos/broncos-qb-starter.webp" 
            alt="Denver Broncos Bo Nix Quarterback Action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            Denver Broncos quarterback Bo Nix leading offensive passing drills during 2026 summer practice.
          </div>
        </div>

        {/* Quick Reference Summary Box */}
        <div className="bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-orange-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🎯</span> 2026 Denver Broncos Quarterback Hierarchy
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-orange-400">
                  <th className="py-2 px-3">Role</th>
                  <th className="py-2 px-3">Player</th>
                  <th className="py-2 px-3">Experience</th>
                  <th className="py-2 px-3">Primary Attributes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB1 (Starter)</td>
                  <td className="py-2.5 px-3 text-orange-300 font-bold">Bo Nix</td>
                  <td className="py-2.5 px-3">2nd Year</td>
                  <td className="py-2.5 px-3 text-emerald-400">Quick processing, rhythm accuracy & scrambling mobility</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB2 (Primary Backup)</td>
                  <td className="py-2.5 px-3 font-bold text-white">Jarrett Stidham</td>
                  <td className="py-2.5 px-3">6th Year</td>
                  <td className="py-2.5 px-3 text-zinc-300">System familiarity & pocket stability</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB3 (Reserve)</td>
                  <td className="py-2.5 px-3">Sam Ehlinger</td>
                  <td className="py-2.5 px-3">5th Year</td>
                  <td className="py-2.5 px-3 text-zinc-400">Dual-threat capability & scout team execution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            1. Denver Broncos 2026 QB Hierarchy & Starter Overview
          </h2>
          <p>
            The Denver Broncos enter the 2026 NFL regular season with complete clarity at the quarterback position. Young signal-caller Bo Nix commands the starting role at QB1, providing Denver with a sharp-minded passer perfectly tailored to Sean Payton&apos;s offensive system.
          </p>
          <p>
            Official roster releases on <a href="https://www.denverbroncos.com/team/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">Denver Broncos Official Roster Updates</a> show that Nix took 100% of the first-team reps during training camp scrimmages, establishing strong rhythm with target receivers Courtland Sutton, Marvin Mims Jr., and tight end Evan Engram.
          </p>
          <p>
            Behind Nix, veteran backup Jarrett Stidham retains the QB2 spot, offering deep knowledge of Payton&apos;s playbook installation. Sam Ehlinger operates as the QB3 reserve, giving Denver three experienced passers on the active roster.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            2. Bo Nix: Starter Evaluation & Tactical Growth
          </h2>
          <p>
            Bo Nix&apos;s evolution into Denver&apos;s franchise leader represents one of the most successful quarterback transitions in recent AFC West history. Nix features exceptional pre-snap vision, getting the offense into favorable blocking checks before the snap.
          </p>
          <p>
            Operating behind a stellar offensive line featuring left tackle Garett Bolles and right guard Quinn Meinerz, Nix is able to step cleanly into throw progressions. In addition to pocket accuracy, Nix&apos;s athletic scrambling ability allows Denver to extend drives on third-and-medium situations.
          </p>
          <p>
            Tracking summaries on <a href="https://www.espn.com/nfl/team/depth/_/name/den" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">ESPN Denver Broncos Depth Chart</a> highlight that Nix completed over 70% of his short-to-intermediate throws during summer practice action.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            3. Backup Quarterbacks: Jarrett Stidham & Sam Ehlinger
          </h2>
          <p>
            Veteran backup Jarrett Stidham provides Denver with one of the most dependable QB2 options in the NFL. Stidham&apos;s quick release and cool demeanor under pressure ensure that Denver&apos;s passing attack can operate smoothly if Nix experiences minor mid-game setbacks.
          </p>
          <p>
            At QB3, Sam Ehlinger provides mobile dual-threat capabilities. Ehlinger frequently simulates athletic opposing dual-threat quarterbacks during mid-week defensive prep work. Scouting notes on <a href="https://www.cbssports.com/nfl/teams/den/denver-broncos/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">CBS Sports Broncos QB Evaluation</a> note that Ehlinger&apos;s rushing mobility makes him a valuable asset on the practice squad.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            4. Sean Payton&apos;s Offensive System & Quarterback Integration
          </h2>
          <p>
            Sean Payton&apos;s offensive system places high demands on quarterback decision-making speed. The scheme incorporates heavy play-action fakes to running back J.K. Dobbins, quick screen passes, and multi-receiver flood concepts to pull linebackers out of middle zone coverage.
          </p>
          <p>
            With Bo Nix demonstrating mastery of these concepts, the Broncos enter 2026 equipped with a high-tempo passing attack capable of matching scoring output against top AFC opponents.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Broncos QB Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback for the Denver Broncos in 2026?
              </h3>
              <p className="text-zinc-300">
                Bo Nix enters the 2026 season as the starting quarterback (QB1) for the Denver Broncos under Head Coach Sean Payton.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who serves as the primary backup quarterback on the Broncos depth chart?
              </h3>
              <p className="text-zinc-300">
                Veteran passer Jarrett Stidham is listed as QB2 on the Denver Broncos depth chart.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the third-string quarterback on the Denver Broncos 2026 roster?
              </h3>
              <p className="text-zinc-300">
                Sam Ehlinger holds the QB3 slot on the active roster, providing mobile depth for scout-team assignments.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does Sean Payton&apos;s scheme elevate Bo Nix&apos;s passing production?
              </h3>
              <p className="text-zinc-300">
                Sean Payton&apos;s offense features quick-rhythm spread concepts, pre-snap reads, and screen-passing designs that leverage Bo Nix&apos;s rapid decision-making and ball-placement accuracy.
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
    </div>
  );
}
