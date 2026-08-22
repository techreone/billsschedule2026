import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and Conditions of Use for billsschedule2026.online.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 text-zinc-300 leading-relaxed">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-zinc-400 flex items-center gap-2 font-mono">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Terms of Service</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-white uppercase tracking-tight border-b border-zinc-800 pb-4">
        Terms of Service
      </h1>

      <p className="text-xs text-zinc-400 font-mono">
        Last Updated: August 22, 2026
      </p>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">1. Acceptance of Terms</h2>
        <p>
          By accessing and using <strong>billsschedule2026.online</strong>, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">2. Schedule Flex Policy & Disclaimer</h2>
        <p>
          NFL game schedules, kickoff times, and television network assignments are subject to the NFL Flexible Scheduling policy. While we strive to maintain 100% current data, users should verify critical game times prior to attending stadium events.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">3. Intellectual Property</h2>
        <p>
          All original textual content, custom PDF templates, and site layouts are protected by applicable copyright law.
        </p>
      </section>

    </div>
  );
}
