import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Cleveland Browns Depth Chart 2026",
  description: "Official Cleveland Browns 2026 depth chart breakdown: starters for offense (Watson, Sanders, Jeudy, Ford), defense led by Myles Garrett, secondary, and roster cut candidates.",
  keywords: [
    "cleveland browns depth chart 2026",
    "browns depth chart 2026",
    "cleveland browns qb depth chart",
    "deshaun watson shedeur sanders browns",
    "myles garrett browns defense depth",
    "jerry jeudy amari cooper browns wr",
    "cleveland browns roster 2026",
    "browns starting lineup 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cleveland-browns-depth-chart-2026`,
  },
  openGraph: {
    title: "Cleveland Browns Depth Chart 2026: Offense, Defense & QB ...",
    description: "Complete 2026 Cleveland Browns depth chart for offense, defense, special teams, quarterback competition, and 53-man roster projections.",
    url: `${SITE_CONFIG.url}/cleveland-browns-depth-chart-2026`,
    type: "article",
  },
};

export default function ClevelandBrownsDepthChart2026Page() {
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
        "name": "Cleveland Browns Depth Chart 2026",
        "item": "https://billsschedule2026.online/cleveland-browns-depth-chart-2026"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cleveland Browns Depth Chart 2026: Starters, QB Competition & Roster Breakdown",
    "description": "Comprehensive positional guide to the 2026 Cleveland Browns depth chart, evaluating offensive starters, Myles Garrett's pass rush defense, secondary depth, and preseason roster cut battles.",
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
        "name": "Who is the starting quarterback for the Cleveland Browns in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deshaun Watson enters the 2026 season as Cleveland's primary starting quarterback (QB1), with rookie Shedeur Sanders and veteran Jameis Winston competing behind him on the secondary depth chart."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Cleveland Browns defensive line in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Browns defensive line is led by former NFL Defensive Player of the Year Myles Garrett at defensive end, flanked by Za'Darius Smith and defensive tackles Dalvin Tomlinson and Shelby Harris."
        }
      },
      {
        "@type": "Question",
        "name": "Who are Cleveland's top starting wide receivers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cleveland's starting wide receiver corps features Amari Cooper, Jerry Jeudy, Elijah Moore, and third-year boundary target Cedric Tillman."
        }
      },
      {
        "@type": "Question",
        "name": "Who plays starting running back for the Browns in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jerome Ford serves as the primary starting running back, paired with rookie draft pick Quinshon Judkins and reserve Pierre Strong Jr."
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
        <span className="text-white font-semibold">Cleveland Browns Depth Chart 2026</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/90 border border-amber-800/60 rounded text-amber-400 text-xs font-headline font-bold uppercase tracking-wider">
          NFL TEAM DEPTH CHART DIRECTORY • 2026
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Cleveland Browns Depth Chart 2026: Starters, QB Competition & Roster Matrix
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Complete official 2026 Cleveland Browns depth chart breakdown. Position-by-position analysis of Kevin Stefanski&apos;s offense (Watson, Sanders, Ford, Jeudy), Jim Schwartz&apos;s elite defense (Myles Garrett, JOK, Denzel Ward), special teams, and 53-man roster cutdown battles.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Official 2026 Roster Verified
          </span>
          <span>•</span>
          <span>Updated: August 23, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 NFL Scouting Desk</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quick Summary Stat Box */}
        <div className="bg-gradient-to-r from-amber-950/40 via-zinc-900 to-zinc-950 p-6 rounded-xl border border-amber-800/40 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🟠</span> Cleveland Browns 2026 Team Snapshot
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">HEAD COACH</span>
              <strong className="text-white text-sm font-sans">Kevin Stefanski (7th Yr)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">DEFENSIVE COORDINATOR</span>
              <strong className="text-yellow-400 text-sm font-sans">Jim Schwartz (Base 4-3)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">STARTING QB</span>
              <strong className="text-emerald-400 text-sm font-sans">Deshaun Watson (#4)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">DEFENSIVE ANCHOR</span>
              <strong className="text-amber-400 text-sm font-sans">Myles Garrett (DE #95)</strong>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-amber-600 pl-3">
            1. Offensive Depth Chart (Quarterbacks, Running Backs, Receivers & O-Line)
          </h2>
          <p>
            Under Head Coach Kevin Stefanski and Offensive Coordinator Ken Dorsey, the Cleveland Browns enter the 2026 season striving for explosive balance. The offense blends West Coast passing principles with heavy gap-scheme running out of 11 and 12 personnel.
          </p>
          <p>
            Official depth chart data on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> and <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> lists the starters and key rotational backups across Cleveland&apos;s offensive unit:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Position</th>
                  <th className="p-3 font-bold text-amber-400">Starter (1st String)</th>
                  <th className="p-3">Second String (2nd)</th>
                  <th className="p-3">Third String (3rd)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Quarterback (QB)</td>
                  <td className="p-3 text-amber-400 font-bold">Deshaun Watson</td>
                  <td className="p-3 text-white">Shedeur Sanders</td>
                  <td className="p-3">Jameis Winston / DTR</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3 text-amber-400 font-bold">Jerome Ford</td>
                  <td className="p-3 text-white">Quinshon Judkins</td>
                  <td className="p-3">Pierre Strong Jr.</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Wide Receiver (WR-X)</td>
                  <td className="p-3 text-amber-400 font-bold">Amari Cooper</td>
                  <td className="p-3 text-white">Cedric Tillman</td>
                  <td className="p-3">Jamari Thrash</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Wide Receiver (WR-Z)</td>
                  <td className="p-3 text-amber-400 font-bold">Jerry Jeudy</td>
                  <td className="p-3 text-white">Elijah Moore</td>
                  <td className="p-3">Michael Woods II</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3 text-amber-400 font-bold">David Njoku</td>
                  <td className="p-3 text-white">Jordan Akins</td>
                  <td className="p-3">Geor&apos;quarius Spivey</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3 text-amber-400 font-bold">Jedrick Wills Jr.</td>
                  <td className="p-3 text-white">Dawand Jones</td>
                  <td className="p-3">Hakeem Adeniji</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Center (C)</td>
                  <td className="p-3 text-amber-400 font-bold">Ethan Pocic</td>
                  <td className="p-3 text-white">Luke Wypler</td>
                  <td className="p-3">Brian Allen</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Right Guard (RG)</td>
                  <td className="p-3 text-amber-400 font-bold">Wyatt Teller</td>
                  <td className="p-3 text-white">Zak Zinter</td>
                  <td className="p-3">Michael Dunn</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/josh-allen-action.webp"
              alt="Cleveland Browns offensive line scrimmage action"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              Stefanski&apos;s offensive line executing pass protection sets during team scrimmage drills.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            2. Defensive Line & Myles Garrett Led Pass Rush
          </h2>
          <p>
            Defensive Coordinator Jim Schwartz operates an aggressive, wide-nine 4-3 defense built around penetrating defensive line play and fast closing speed.
          </p>
          <p>
            The defensive unit is anchored by superstar defensive end <strong>Myles Garrett (#95)</strong>, former NFL Defensive Player of the Year. Opposite Garrett, veteran pass rusher <strong>Za&apos;Darius Smith</strong> provides secondary edge pressure, while interior tackles <strong>Dalvin Tomlinson</strong> and <strong>Shelby Harris</strong> plug B-gap running lanes.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Position</th>
                  <th className="p-3 font-bold text-blue-400">Starter (1st String)</th>
                  <th className="p-3">Second String (2nd)</th>
                  <th className="p-3">Third String (3rd)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Defensive End (LDE)</td>
                  <td className="p-3 text-blue-400 font-bold">Myles Garrett</td>
                  <td className="p-3 text-white">Ogbo Okoronkwo</td>
                  <td className="p-3">Isaiah McGuire</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Defensive Tackle (DT)</td>
                  <td className="p-3 text-blue-400 font-bold">Dalvin Tomlinson</td>
                  <td className="p-3 text-white">Maurice Hurst II</td>
                  <td className="p-3">Mike Hall Jr.</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Defensive Tackle (DT)</td>
                  <td className="p-3 text-blue-400 font-bold">Shelby Harris</td>
                  <td className="p-3 text-white">Quinton Jefferson</td>
                  <td className="p-3">Jowon Briggs</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Defensive End (RDE)</td>
                  <td className="p-3 text-blue-400 font-bold">Za&apos;Darius Smith</td>
                  <td className="p-3 text-white">Alex Wright</td>
                  <td className="p-3">Cameron Thomas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            3. Secondary & Linebacker Starters
          </h2>
          <p>
            Cleveland&apos;s back seven features elite athleticism and man-coverage capability, enabling Jim Schwartz to blitz aggressively on 3rd down.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Linebackers:</strong> Pro Bowler Jeremiah Owusu-Koramoah (JOK) plays weakside linebacker (Will), bringing sideline-to-sideline tackling speed, alongside veteran Jordan Hicks at middle linebacker (Mike) and Devin Bush at strongside (Sam).</li>
            <li><strong>Cornerback Trio:</strong> Denzel Ward (#21) locks down opposing WR1 targets, paired with Martin Emerson Jr. on the outside and Greg Newsome II covering slot receivers in nickel packages.</li>
            <li><strong>Safety Tandem:</strong> Strong safety Grant Delpit pairs with free safety Juan Thornhill, giving Cleveland deep coverage range against division air attacks.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            4. Special Teams & Kicking Duo
          </h2>
          <p>
            Special teams coordinator Bubba Ventrone oversees one of the NFL&apos;s most consistent specialist duos:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Placekicker:</strong> Dustin Hopkins (#7), who connected on 91.7% of field goal attempts, including long-range kicks beyond 50 yards.</li>
            <li><strong>Punter:</strong> Corey Bojorquez (#13), known for his booming left-footed punts and inside-the-20 pinning power.</li>
            <li><strong>Return Specialist:</strong> Pierre Strong Jr. and Jamari Thrash handle kickoff and punt return responsibilities.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            5. 2026 Preseason Roster Battles & Cutdown Candidates
          </h2>
          <p>
            As cutdown day approaches, secondary roster spots are fiercely contested:
          </p>
          <p>
            The backup quarterback battle between rookie <strong>Shedeur Sanders</strong> and veteran <strong>Jameis Winston</strong> has drawn national media coverage. Sanders delivered impressive drives during Preseason Week 2 against Buffalo (despite the 31-7 loss), proving his quick release and pocket poise under pressure.
          </p>
          <p>
            For complete game schedules, kickoff times, and TV channels, explore the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            Frequently Asked Questions: Cleveland Browns Depth Chart
          </h2>
          <div className="space-y-4">
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Who is the Browns backup quarterback behind Deshaun Watson?</h3>
              <p className="text-sm text-zinc-300">
                Rookie Shedeur Sanders and veteran Jameis Winston compete for the primary QB2 backup position behind starter Deshaun Watson.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Who are Cleveland&apos;s starting cornerbacks in 2026?</h3>
              <p className="text-sm text-zinc-300">
                Denzel Ward and Martin Emerson Jr. start on the perimeter, with Greg Newsome II playing primary nickel slot cornerback.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Where can I see complete NFL opponent schedules and broadcast times?</h3>
              <p className="text-sm text-zinc-300">
                Visit the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link> for complete team schedules, broadcast maps, and live streaming links.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
