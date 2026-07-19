import { cn } from "@/lib/utils";

/**
 * Self-contained premium website preview (no image assets).
 * Rendered inside a glass browser chrome — used as the hero showcase.
 */
export function BrowserMockup({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-3xl glass-strong shadow-float", className)}>
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-line-soft px-2.5 py-2">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
        <div className="mx-auto flex h-4 w-1/2 items-center justify-center rounded-full bg-white/[0.04] text-[10px] text-white/35">
          ruslan.studio
        </div>
      </div>

      {/* Fake premium landing */}
      <div className="relative isolate overflow-hidden bg-ink-900 p-3 sm:p-4">
        <div className="absolute left-1/2 top-[-30%] -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-accent-500/25 blur-[80px]" />

        {/* mini nav */}
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded-full bg-white/70" />
          <div className="hidden gap-2 sm:flex">
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
          </div>
          <div className="h-3 w-14 rounded-full bg-white/85" />
        </div>

        {/* hero */}
        <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
          <div className="h-1.5 w-16 rounded-full bg-accent-400/50" />
          <div className="mt-1 h-3.5 w-4/5 rounded-full bg-white/85" />
          <div className="h-3.5 w-2/3 rounded-full bg-white/40" />
          <div className="mt-2 flex gap-1.5">
            <div className="h-3 w-16 rounded-full bg-white/90" />
            <div className="h-3 w-16 rounded-full border border-line bg-white/5" />
          </div>
        </div>

        {/* cards */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-line-soft bg-white/[0.03] p-2"
            >
              <div className="h-6 w-6 rounded-lg bg-accent-500/25" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/25" />
              <div className="mt-1 h-1.5 w-2/3 rounded-full bg-white/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
