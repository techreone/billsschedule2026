import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import PrintButton from '@/components/PrintButton';
import { SITE_CONFIG, BILLS_2026_GAMES } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Printable Buffalo Bills Schedule 2026 PDF: Free Download & Calendar Sync",
  description: "Free printable 2026 Buffalo Bills schedule PDF in standard 8.5x11 inch and wallet-sized folding formats. Features color-coded home/away games, 4-time zone conversion (EST, CST, MST, PST), Google/Apple calendar sync, and office pool prediction sheets.",
  keywords: [
    "printable buffalo bills schedule 2026 pdf free download",
    "buffalo bills schedule 2026 printable pdf",
    "bills schedule 2026 8.5x11 letter",
    "wallet size printable bills schedule",
    "buffalo bills schedule color coded royal blue red",
    "sync bills schedule google calendar apple calendar ical",
    "nfl office pool printable grid buffalo bills",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/printable-schedule`,
  },
};

export default function PrintableSchedulePage() {
  const regularGames = BILLS_2026_GAMES.filter((g) => g.type === 'regular');
  const preseasonGames = BILLS_2026_GAMES.filter((g) => g.type === 'preseason');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download the printable 2026 Buffalo Bills schedule PDF for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click the Download PDF Schedule button on our page to instantly save a high-resolution, 1-page 8.5x11 US Letter landscape or wallet-sized printable PDF schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What colors represent Home vs. Away games on the printable schedule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Home games played at Highmark Stadium in Orchard Park are highlighted in Bills Royal Blue (#00338D), while Away road games are highlighted in Bills Red (#C60C30)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I sync the Buffalo Bills 2026 schedule to my phone calendar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copy our official Webcal/ICS calendar subscription URL and add it to Apple Calendar (iOS), Google Calendar (Android/Web), or Microsoft Outlook for automatic kickoff time updates and flex game notifications."
        }
      },
      {
        "@type": "Question",
        "name": "How do I adjust kickoff times for Central, Mountain, or Pacific time zones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refer to our 4-Time Zone Conversion Matrix table: subtract 1 hour for Central Time (CT), 2 hours for Mountain Time (MT), and 3 hours for Pacific Time (PT) from the standard Eastern Time (ET) game times."
        }
      }
    ]
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Printable Schedule</span>
      </nav>

      {/* Hero Header */}
      <header className="space-y-3 bg-zinc-950 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          FREE PRINTABLE PDF & CALENDAR SYNC • 2026
        </div>
        <h1 className="text-3xl md:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Printable Buffalo Bills Schedule 2026 PDF: Free Download & Wallet Guide
        </h1>
        <p className="text-zinc-300 text-sm md:text-base max-w-3xl leading-relaxed">
          Download your free 1-page 2026 Buffalo Bills schedule PDF optimized for standard 8.5x11 inch printing or wallet-sized 4-fold cards. Complete with Royal Blue home vs. Red away color coding, 4-time zone conversion grid (EST, CST, MST, PST), 1-click Google & Apple calendar sync, and an office pool prediction sheet.
        </p>

        {/* Action Button Downloads Area */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80">
          <a
            href="#download-pdf-8-5x11"
            className="p-3 bg-[#00338D] hover:bg-blue-700 text-white rounded-xl border border-blue-400/30 flex items-center justify-center gap-2 font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
          >
            📄 Download 8.5x11 PDF Sheet
          </a>
          <a
            href="#download-wallet-pdf"
            className="p-3 bg-zinc-900 hover:bg-zinc-800 text-yellow-400 rounded-xl border border-zinc-700 flex items-center justify-center gap-2 font-headline font-bold text-xs uppercase tracking-wider transition-all text-center"
          >
            🪪 Wallet Size Folding PDF
          </a>
          <a
            href="#calendar-sync-guide"
            className="p-3 bg-zinc-900 hover:bg-zinc-800 text-emerald-400 rounded-xl border border-zinc-700 flex items-center justify-center gap-2 font-headline font-bold text-xs uppercase tracking-wider transition-all text-center"
          >
            📅 1-Click Calendar Sync
          </a>
        </div>
      </header>

      <AdSlot label="Advertisement" type="banner" />

      {/* Main Guide Content Article */}
      <article className="bg-zinc-900/60 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Intro Overview */}
        <div className="space-y-4">
          <p>
            Whether taped to your refrigerator door, pinned to your office cubicle wall, tucked into your game-day wallet, or saved as a high-resolution wallpaper on your tablet, having an official, easy-to-read <strong>printable Buffalo Bills schedule</strong> is a cherished tradition for members of Bills Mafia worldwide. In an era dominated by digital distractions, a clear 1-page physical schedule sheet provides instant clarity on upcoming game dates, kickoff times, television networks, and bye week timing without requiring an internet connection.
          </p>
          <p>
            This page provides completely free access to print-ready PDF formats engineered specifically for 300 DPI high-contrast printing, alongside digital integration tutorials to sync all 17 regular season matchups directly to your mobile calendar. For live game status, kickoff countdowns, and broadcast channel details, visit our homepage at{' '}
            <Link href="/" className="text-blue-400 font-bold underline hover:text-white">
              Buffalo Bills Schedule 2026
            </Link>.
          </p>
        </div>

        {/* H2-1: Standard 8.5x11 PDF */}
        <section className="space-y-4 pt-4 border-t border-zinc-800/80">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            Free Printable 2026 Buffalo Bills Schedule PDF (Standard 8.5x11 Sheet)
          </h2>
          <div className="my-4 rounded-xl overflow-hidden border border-zinc-800">
            <img
              src="/images/bills/printable-schedule-preview.webp"
              alt="Printable Buffalo Bills Schedule PDF 8.5x11 Letter Layout Preview"
              className="w-full h-64 md:h-72 object-cover"
            />
            <div className="p-2 bg-black/80 text-[11px] text-zinc-400 font-mono text-center">
              Standard 8.5x11 Inch Printable Schedule Sheet — High Resolution 300 DPI Vector PDF Template
            </div>
          </div>
          <p>
            Our master 1-page printable schedule template is designed specifically for standard US Letter paper dimensions (8.5 x 11 inches). Layout geometry has been optimized for both landscape and portrait orientations, featuring crisp vector typography, distinct home/away color indicators, and dedicated space for recording weekly win/loss results and final game scores.
          </p>

          {/* Download Box Graphic Component */}
          <div className="p-6 md:p-8 bg-zinc-950 rounded-2xl border border-zinc-800 space-y-4 text-center max-w-2xl mx-auto shadow-2xl">
            <div className="w-16 h-16 bg-blue-950/80 border border-blue-800/60 rounded-2xl flex items-center justify-center mx-auto text-3xl">
              📥
            </div>
            <h3 className="text-lg md:text-xl font-headline font-bold text-white uppercase tracking-wide">
              Official_Buffalo_Bills_2026_Schedule_Printable.pdf
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto">
              Includes all 17 regular season games, 3 August preseason games, Week 12 Bye Week, EST game times, television networks (CBS, FOX, NBC, ESPN, Prime Video), and Highmark Stadium home venue labels.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/docs/Buffalo_Bills_2026_Schedule_Printable.pdf"
                download="Buffalo_Bills_2026_Schedule_Printable.pdf"
                className="w-full sm:w-auto px-6 py-3 bg-[#00338D] hover:bg-blue-700 text-white font-headline font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg text-center"
              >
                ⬇️ Download 8.5x11 PDF (Free)
              </a>
              <PrintButton />
            </div>
          </div>

          <div className="space-y-3 pt-2 text-xs md:text-sm">
            <h3 className="font-headline font-bold text-white text-base">Recommended Printer Driver Settings for Best Results:</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
              <li><strong>Paper Size:</strong> Select <em>US Letter (8.5 x 11 inches)</em> or <em>A4 Standard</em>.</li>
              <li><strong>Page Scaling:</strong> Choose <em>Fit to Printable Area</em> or <em>100% Actual Size</em> to prevent margins from truncating column edges.</li>
              <li><strong>Print Resolution:</strong> Set printer output to <em>High Quality (300 DPI)</em> for crisp readability of time zone conversion tables.</li>
              <li><strong>Color Mode:</strong> Print in <em>Full Color</em> to utilize Royal Blue and Red game coding, or select <em>Grayscale / Black & White</em> to save ink.</li>
            </ul>
          </div>

          <blockquote className="p-4 bg-zinc-950 border-l-4 border-blue-500 rounded-r-xl my-4 text-xs md:text-sm text-zinc-300">
            <strong>Official Source Verification:</strong> Game dates and kickoff networks match official release schedules from the National Football League. Verify updates at{' '}
            <a href="https://www.nfl.com/schedules/2026/by-team/buffalo-bills" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-white">
              NFL.com Official Schedule Release
            </a>.
          </blockquote>
        </section>

        {/* H2 Chapter 2: Pocket & Wallet Format */}
        <section className="space-y-5 pt-4 border-t border-zinc-800" id="download-wallet-pdf">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-6 bg-yellow-500 rounded-full inline-block" />
            2. Pocket & Wallet-Sized Foldable Mini Schedule Format
          </h2>
          <p>
            For fans on the move who want a portable reference sheet inside their wallet, purse, or jacket pocket, we offer a specialized <strong>Wallet-Sized Foldable Mini Schedule PDF</strong>. When printed and folded along pre-marked guide lines, the schedule shrinks down to a compact 2.125 x 3.375 inch card (identical to standard credit card dimensions).
          </p>

          {/* Folding Guide Instructions Container */}
          <div className="p-5 bg-black/80 rounded-xl border border-zinc-800 space-y-4">
            <h3 className="text-base font-headline font-bold text-yellow-400 uppercase tracking-wider">
              ✂️ How to Print & Quad-Fold Your Wallet Schedule Card
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 space-y-1">
                <span className="text-yellow-400 font-bold font-mono">STEP 1: PRINT</span>
                <p className="text-zinc-300">Print the 2-up wallet PDF on heavy 65 lb cardstock or regular printer paper.</p>
              </div>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 space-y-1">
                <span className="text-yellow-400 font-bold font-mono">STEP 2: TRIM</span>
                <p className="text-zinc-300">Carefully trim along the solid outer black border lines using scissors or paper cutter.</p>
              </div>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 space-y-1">
                <span className="text-yellow-400 font-bold font-mono">STEP 3: FOLD H</span>
                <p className="text-zinc-300">Fold horizontally in half along the center dotted crease line.</p>
              </div>
              <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 space-y-1">
                <span className="text-yellow-400 font-bold font-mono">STEP 4: FOLD V</span>
                <p className="text-zinc-300">Accordion-fold vertically in half to complete your credit-card-sized schedule booklet!</p>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-zinc-300">
            <strong>Ink-Saver Grayscale Mode:</strong> The wallet PDF template includes a high-contrast black-and-white print preset that eliminates heavy solid color fills, conserving valuable printer ink while preserving high legibility under stadium lighting or direct sunlight.
          </p>
        </section>

        {/* H2 Chapter 3: Color-Coded Legend */}
        <section className="space-y-5 pt-4 border-t border-zinc-800" id="color-coded-legend">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-6 bg-red-600 rounded-full inline-block" />
            3. Royal Blue & Red Color-Coded Schedule Legend
          </h2>
          <p>
            Quick visual recognition is essential when reviewing a 17-game NFL schedule. Our printable PDF templates feature a intuitive color-coding system built upon official Buffalo Bills team brand colors:
          </p>

          {/* Color Breakdown Legend Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 font-sans text-xs md:text-sm">
            <div className="p-5 bg-gradient-to-br from-[#00338D]/40 to-black rounded-xl border border-blue-500/50 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#00338D] border border-blue-300" />
                <h3 className="font-headline font-bold text-white text-base">Bills Royal Blue (#00338D)</h3>
              </div>
              <span className="text-blue-300 font-mono font-bold block uppercase">HOME GAMES @ HIGHMARK STADIUM</span>
              <p className="text-zinc-300 text-xs">
                Designates home games hosted at Highmark Stadium in Orchard Park, NY. Features home crowd advantage against rivals like Miami, New England, and Kansas City.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-[#C60C30]/40 to-black rounded-xl border border-red-500/50 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#C60C30] border border-red-300" />
                <h3 className="font-headline font-bold text-white text-base">Bills Red (#C60C30)</h3>
              </div>
              <span className="text-red-300 font-mono font-bold block uppercase">AWAY ROAD MATCHUPS</span>
              <p className="text-zinc-300 text-xs">
                Designates away road games across North America, including road trips to Houston, Miami, Baltimore, Seattle, Indianapolis, Los Angeles, and Foxborough.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-yellow-950/40 to-black rounded-xl border border-yellow-500/50 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-400 border border-yellow-200" />
                <h3 className="font-headline font-bold text-white text-base">Gold & Primetime Accent</h3>
              </div>
              <span className="text-yellow-300 font-mono font-bold block uppercase">NATIONAL PRIMETIME BROADCASTS</span>
              <p className="text-zinc-300 text-xs">
                Highlights Thursday Night Football (Prime Video), Sunday Night Football (NBC), and Monday Night Football (ESPN) marquee games.
              </p>
            </div>
          </div>

          <blockquote className="p-4 bg-zinc-950 border-l-4 border-red-500 rounded-r-xl text-xs md:text-sm text-zinc-300">
            <strong>Accessibility Compliance:</strong> Color contrast ratios on our printable templates adhere strictly to WCAG 2.1 AAA standards, guaranteeing readability for color-blind fans or low-light environments.
          </blockquote>
        </section>

        {/* H2 Chapter 4: Four US Time Zone Matrix */}
        <section className="space-y-5 pt-4 border-t border-zinc-800" id="time-zone-matrix">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-6 bg-emerald-600 rounded-full inline-block" />
            4. Four US Time Zone Kickoff Conversion Matrix (EST, CST, MST, PST)
          </h2>
          <p>
            Because Bills Mafia spans across all 50 states, Canada, and overseas, keeping track of kickoff times across different time zones is vital. While official NFL schedule announcements list game times in Eastern Time (ET), fans in Texas, Colorado, California, or Hawaii must calculate local conversions.
          </p>

          {/* Time Zone Conversion Grid */}
          <div className="overflow-x-auto my-4 border border-zinc-800 rounded-xl bg-black/90 shadow-xl">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-zinc-950 text-zinc-400 font-headline font-bold uppercase border-b border-zinc-800">
                <tr>
                  <th className="p-3.5 md:p-4">Game Window</th>
                  <th className="p-3.5 md:p-4">Eastern Time (ET)</th>
                  <th className="p-3.5 md:p-4 text-blue-400">Central Time (CT)</th>
                  <th className="p-3.5 md:p-4 text-yellow-400">Mountain Time (MT)</th>
                  <th className="p-3.5 md:p-4 text-red-400">Pacific Time (PT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 font-mono text-zinc-300">
                <tr className="hover:bg-zinc-900/80">
                  <td className="p-3.5 md:p-4 font-bold text-white">Sunday Early Afternoon</td>
                  <td className="p-3.5 md:p-4 font-bold text-white">1:00 PM ET</td>
                  <td className="p-3.5 md:p-4 text-blue-300">12:00 PM CT</td>
                  <td className="p-3.5 md:p-4 text-yellow-300">11:00 AM MT</td>
                  <td className="p-3.5 md:p-4 text-red-300">10:00 AM PT</td>
                </tr>
                <tr className="hover:bg-zinc-900/80">
                  <td className="p-3.5 md:p-4 font-bold text-white">Sunday Late Afternoon</td>
                  <td className="p-3.5 md:p-4 font-bold text-white">4:05 PM / 4:25 PM ET</td>
                  <td className="p-3.5 md:p-4 text-blue-300">3:05 PM / 3:25 PM CT</td>
                  <td className="p-3.5 md:p-4 text-yellow-300">2:05 PM / 2:25 PM MT</td>
                  <td className="p-3.5 md:p-4 text-red-300">1:05 PM / 1:25 PM PT</td>
                </tr>
                <tr className="hover:bg-zinc-900/80">
                  <td className="p-3.5 md:p-4 font-bold text-white">Thursday Night Football</td>
                  <td className="p-3.5 md:p-4 font-bold text-white">8:15 PM ET</td>
                  <td className="p-3.5 md:p-4 text-blue-300">7:15 PM CT</td>
                  <td className="p-3.5 md:p-4 text-yellow-300">6:15 PM MT</td>
                  <td className="p-3.5 md:p-4 text-red-300">5:15 PM PT</td>
                </tr>
                <tr className="hover:bg-zinc-900/80">
                  <td className="p-3.5 md:p-4 font-bold text-white">Sunday Night Football</td>
                  <td className="p-3.5 md:p-4 font-bold text-white">8:20 PM ET</td>
                  <td className="p-3.5 md:p-4 text-blue-300">7:20 PM CT</td>
                  <td className="p-3.5 md:p-4 text-yellow-300">6:20 PM MT</td>
                  <td className="p-3.5 md:p-4 text-red-300">5:20 PM PT</td>
                </tr>
                <tr className="hover:bg-zinc-900/80">
                  <td className="p-3.5 md:p-4 font-bold text-white">Monday Night Football</td>
                  <td className="p-3.5 md:p-4 font-bold text-white">8:15 PM ET</td>
                  <td className="p-3.5 md:p-4 text-blue-300">7:15 PM CT</td>
                  <td className="p-3.5 md:p-4 text-yellow-300">6:15 PM MT</td>
                  <td className="p-3.5 md:p-4 text-red-300">5:15 PM PT</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs md:text-sm text-zinc-400">
            <em>Daylight Saving Time Note:</em> Daylight Saving Time ends on Sunday, November 1, 2026. Clocks fall back 1 hour across most US time zones prior to Week 9. For broadcast networks in your area, consult our{' '}
            <Link href="/where-to-watch" className="text-blue-400 font-bold underline hover:text-white">
              Bills Where to Watch Channel Guide
            </Link>.
          </p>
        </section>

        {/* H2 Chapter 5: Google & Apple Calendar Sync */}
        <section className="space-y-5 pt-4 border-t border-zinc-800" id="calendar-sync-guide">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-6 bg-purple-600 rounded-full inline-block" />
            5. 1-Click Digital Integration: Sync to Google & Apple Calendars
          </h2>
          <p>
            Pair your physical printed schedule sheet with live dynamic calendar alerts! By subscribing to our Webcal / iCal (`.ics`) automated feed, every Bills game is synced automatically to your iPhone, iPad, Android device, Google Calendar, or Microsoft Outlook calendar.
          </p>

          <div className="p-5 bg-black/80 rounded-xl border border-zinc-800 space-y-4">
            <h3 className="text-base font-headline font-bold text-white">How to Sync the Bills Schedule to Your Smartphone Calendar:</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
                <h4 className="font-bold text-blue-400 text-sm"> Apple iOS & macOS</h4>
                <ol className="list-decimal pl-4 space-y-1 text-zinc-300">
                  <li>Open <em>Settings</em> → <em>Calendar</em> → <em>Accounts</em>.</li>
                  <li>Select <em>Add Account</em> → <em>Other</em> → <em>Add Subscribed Calendar</em>.</li>
                  <li>Paste calendar URL: <code className="text-yellow-400 text-[11px] block mt-1">webcal://billsschedule2026.xyz/bills-2026.ics</code></li>
                </ol>
              </div>

              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
                <h4 className="font-bold text-emerald-400 text-sm">🤖 Google Calendar (Android/Web)</h4>
                <ol className="list-decimal pl-4 space-y-1 text-zinc-300">
                  <li>Open Google Calendar on desktop browser.</li>
                  <li>Click the <strong>+</strong> icon next to <em>"Other calendars"</em>.</li>
                  <li>Select <em>"From URL"</em> and paste the <code>.ics</code> link.</li>
                </ol>
              </div>

              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
                <h4 className="font-bold text-purple-400 text-sm">📧 Microsoft Outlook</h4>
                <ol className="list-decimal pl-4 space-y-1 text-zinc-300">
                  <li>Open Outlook Calendar → Select <em>Add Calendar</em>.</li>
                  <li>Choose <em>Subscribe from Web</em>.</li>
                  <li>Paste the <code>.ics</code> subscription URL and click Save.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-xs md:text-sm text-zinc-300 space-y-1">
            <h4 className="font-bold text-yellow-400 uppercase tracking-wider">Benefits of Dynamic Calendar Sync:</h4>
            <p>
              When the NFL executes flex scheduling in Weeks 12-18—moving Sunday 1:00 PM games to Sunday Night Football on NBC or 4:25 PM Game of the Week slots—your calendar updates automatically without requiring manual re-entry. Official help documentation is available at{' '}
              <a href="https://support.google.com/calendar/answer/37100" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-white">
                Google Calendar Support
              </a>{' '}
              and{' '}
              <a href="https://support.apple.com/guide/calendar/welcome/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-white">
                Apple iCal Support Guide
              </a>.
            </p>
          </div>
        </section>

        {/* H2 Chapter 6: Office Pool & Prediction Sheet */}
        <section className="space-y-5 pt-4 border-t border-zinc-800" id="office-pool-prediction-sheet">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-6 bg-pink-600 rounded-full inline-block" />
            6. Office Pool & Game-by-Game Score Prediction Sheet
          </h2>
          <p>
            Beyond personal reference, our printable schedule PDF functions as an ideal <strong>Office Pick'Em Prediction Sheet</strong> for co-workers, fantasy football leagues, and Bills Mafia fan groups. Track your weekly straight-up (SU) or against-the-spread (ATS) predictions against actual game results throughout the 18-week NFL marathon.
          </p>

          {/* Interactive Prediction Table Sample */}
          <div className="overflow-x-auto my-4 border border-zinc-800 rounded-xl bg-black/90 shadow-xl">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-zinc-950 text-zinc-400 font-headline font-bold uppercase border-b border-zinc-800">
                <tr>
                  <th className="p-3">Week</th>
                  <th className="p-3">Opponent</th>
                  <th className="p-3">Location</th>
                  <th className="p-3 text-blue-400">Your Pick (W/L)</th>
                  <th className="p-3 text-yellow-400">Predicted Score</th>
                  <th className="p-3 text-emerald-400">Actual Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 font-mono text-zinc-300">
                {regularGames.slice(0, 5).map((game) => (
                  <tr key={game.id} className="hover:bg-zinc-900/80">
                    <td className="p-3 font-bold text-white">{game.week}</td>
                    <td className="p-3 font-bold text-white flex items-center gap-1.5">
                      <span>{game.opponent}</span>
                      <img src={game.opponentLogoUrl} alt={game.opponent} className="w-4 h-4 object-contain inline-block" />
                    </td>
                    <td className="p-3 text-zinc-400">{game.isHome ? 'Home' : 'Away'}</td>
                    <td className="p-3 text-blue-300 font-bold">[ W / L ]</td>
                    <td className="p-3 text-yellow-300">___ - ___</td>
                    <td className="p-3 text-zinc-500">TBD</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-black/80 rounded-xl border border-zinc-800 space-y-3 text-xs md:text-sm">
            <h3 className="font-headline font-bold text-white text-base">How to Organize an Office Schedule Pool:</h3>
            <ol className="list-decimal pl-5 space-y-1.5 text-zinc-300">
              <li>Distribute printed 8.5x11 PDF schedule sheets to participants prior to Week 1.</li>
              <li>Have each member submit their predicted 17-game season record for the Bills (e.g. 13-4 or 12-5).</li>
              <li>Award 1 point for each correct weekly game winner pick, with a tie-breaker bonus based on predicting total points in the Week 18 regular season finale.</li>
            </ol>
          </div>

          <p className="text-xs md:text-sm text-zinc-400">
            For preseason warmup games, check our dedicated{' '}
            <Link href="/preseason-schedule" className="text-blue-400 font-bold underline hover:text-white">
              Buffalo Bills Preseason Schedule Guide
            </Link>. Further news and analysis can be tracked on{' '}
            <a href="https://www.democratandchronicle.com/sports/bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-white">
              Democrat & Chronicle Bills Sports Coverage
            </a>{' '}
            and{' '}
            <a href="https://www.espn.com/nfl/team/schedule/_/name/buf/buffalo-bills" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-white">
              ESPN Buffalo Bills Schedule Page
            </a>.
          </p>
        </section>

        {/* Schema FAQ Section */}
        <section className="space-y-4 pt-6 border-t border-zinc-800" id="faq">
          <h2 className="text-xl font-headline font-bold text-white uppercase tracking-wider">
            Frequently Asked Questions (Printable Schedule FAQ)
          </h2>

          <div className="space-y-3 font-sans">
            <div className="p-4 bg-black/60 rounded-xl border border-zinc-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Q: How do I download the printable 2026 Buffalo Bills schedule PDF for free?</h3>
              <p className="text-xs md:text-sm text-zinc-400">
                A: Click the Download 8.5x11 PDF button above to instantly download or print a 1-page high-resolution PDF schedule optimized for home and office printing.
              </p>
            </div>

            <div className="p-4 bg-black/60 rounded-xl border border-zinc-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Q: What colors represent Home vs. Away games on the printable schedule?</h3>
              <p className="text-xs md:text-sm text-zinc-400">
                A: Home games at Highmark Stadium are highlighted in Bills Royal Blue (#00338D), while Away road games are highlighted in Bills Red (#C60C30).
              </p>
            </div>

            <div className="p-4 bg-black/60 rounded-xl border border-zinc-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Q: How do I sync the Buffalo Bills schedule to my phone calendar?</h3>
              <p className="text-xs md:text-sm text-zinc-400">
                A: Copy our Webcal/ICS calendar feed link and subscribe via Apple Calendar (iOS), Google Calendar (Android), or Outlook for automatic kickoff time updates.
              </p>
            </div>

            <div className="p-4 bg-black/60 rounded-xl border border-zinc-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Q: How do I adjust kickoff times for Central, Mountain, or Pacific time zones?</h3>
              <p className="text-xs md:text-sm text-zinc-400">
                A: Use our 4-Time Zone Conversion Matrix table: subtract 1 hour for Central Time (CT), 2 hours for Mountain Time (MT), and 3 hours for Pacific Time (PT) from standard Eastern Time (ET).
              </p>
            </div>
          </div>
        </section>

        {/* SEO Anchor Link Convergence Box */}
        <div className="p-5 bg-blue-950/40 border border-blue-800/50 rounded-xl mt-8">
          <p className="text-xs md:text-sm text-blue-200 font-mono">
            👉 Need real-time game countdowns and live stream channel details? Head over to our main{' '}
            <Link href="/" className="text-white font-bold underline hover:text-yellow-300">
              Buffalo Bills Schedule 2026
            </Link>{' '}
            pillar homepage.
          </p>
        </div>

      </article>

    </div>
  );
}
