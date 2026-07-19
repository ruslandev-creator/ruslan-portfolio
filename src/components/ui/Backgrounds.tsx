import { cn } from "@/lib/utils";

/** Faint engineered grid that fades toward the bottom. Purely structural. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid-fade opacity-70",
        "[background-size:100%_100%,72px_72px,72px_72px]",
        className,
      )}
    />
  );
}

/** Vertical column guides — a subtle structural motif (no glow, no blobs). */
export function ColumnGuides({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="mx-auto flex h-full max-w-content justify-between px-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="h-full w-px bg-white/[0.03]" />
        ))}
      </div>
    </div>
  );
}
