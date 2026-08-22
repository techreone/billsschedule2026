export default function AdSlot({ label = "Advertisement", type = "banner" }: { label?: string; type?: "banner" | "sidebar" | "in-feed" }) {
  return (
    <div className={`my-6 mx-auto w-full overflow-hidden rounded-xl border border-dashed border-gray-700 bg-gray-900/60 p-4 text-center ${type === "sidebar" ? "max-w-xs" : "max-w-4xl"}`}>
      <span className="block text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-2">
        {label}
      </span>
      <div className="flex h-20 md:h-24 items-center justify-center rounded-lg bg-gray-800/40 text-xs text-gray-400 font-mono">
        {/* AdSense Slot Code Placeholder */}
        <p className="text-gray-400">
          [ AdSpace Slot • Place AdSense / Affiliate Ad Code Here ]
        </p>
      </div>
    </div>
  );
}
