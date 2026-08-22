'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="w-full sm:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-headline font-bold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-all text-center"
    >
      🖨️ Direct Print Page
    </button>
  );
}
