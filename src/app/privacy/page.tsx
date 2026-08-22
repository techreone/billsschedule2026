import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for billsschedule2026.online - Details on user data protection, cookies, analytics, and third-party advertising policies.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 text-zinc-300 leading-relaxed">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-zinc-400 flex items-center gap-2 font-mono">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-white uppercase tracking-tight border-b border-zinc-800 pb-4">
        Privacy Policy
      </h1>

      <p className="text-xs text-zinc-400 font-mono">
        Last Updated: August 22, 2026
      </p>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">1. Introduction</h2>
        <p>
          Welcome to <strong>billsschedule2026.online</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to respecting your privacy and protecting any personal information collected through our sports schedule and broadcasting guide website.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">2. Information Collection & Usage</h2>
        <p>
          We do not require user account registration to access our 2026 Buffalo Bills schedule, printable PDF downloads, or streaming platform guides. Standard server logs automatically record non-personally identifiable technical information such as IP address, browser type, referring URL, and page request timestamps to ensure server stability and prevent abuse.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">3. Cookies & Advertising Partners</h2>
        <p>
          We may utilize standard web cookies and third-party analytics services (such as Google Analytics) to analyze aggregate site traffic patterns. Third-party advertising vendors (such as Google AdSense) may also place cookies on your browser to serve relevant advertisements based on prior web visits. Users can manage or disable cookies via individual web browser settings.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">4. Contact &amp; Inquiries</h2>
        <p>
          If you have questions regarding this Privacy Policy or site data practices, please contact our editorial staff at{' '}
          <a href="mailto:support@billsschedule2026.online" className="text-blue-400 underline font-bold">
            support@billsschedule2026.online
          </a>.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-lg font-headline font-bold text-white uppercase">5. Third-Party Advertising (Adsterra)</h2>
        <p>
          To keep the schedule free to access, we display advertising through the Adsterra network, which may serve banner, native, social-bar, and other ad formats. Adsterra and its demand partners may use cookies, web beacons, or similar technologies to measure ad performance and personalize creatives. You can opt out of personalized advertising by adjusting your browser cookie settings or visiting the Adsterra privacy center.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-lg font-headline font-bold text-white uppercase">6. Your Privacy Rights (GDPR &amp; CCPA)</h2>
        <p>
          Depending on your region, you may have the right to access, correct, or delete personal data we hold, and to object to certain processing. Residents of the European Economic Area and California can exercise these rights by contacting{' '}
          <a href="mailto:support@billsschedule2026.online" className="text-blue-400 underline font-bold">support@billsschedule2026.online</a>. We respond to verified requests within the timeframes required by applicable law.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-lg font-headline font-bold text-white uppercase">7. Children&apos;s Privacy</h2>
        <p>
          This website is not directed to children under the age of 13, and we do not knowingly collect personal information from minors. If you believe a child has provided us personal data, please contact us and we will delete it promptly.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-lg font-headline font-bold text-white uppercase">8. Data Security &amp; Retention</h2>
        <p>
          We maintain reasonable technical and organizational safeguards to protect information against unauthorized access. Server logs used for security and stability are retained only as long as necessary to detect abuse and diagnose issues, after which they are purged on a routine schedule.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-lg font-headline font-bold text-white uppercase">9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be reflected by the &quot;Last Updated&quot; date at the top of this page, and continued use constitutes acceptance of the revised policy.
        </p>
      </section>

    </div>
  );
}
