import { cn } from "@/lib/utils";

/** Faint dotted/line grid that fades toward the bottom. Purely decorative. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid-fade opacity-[0.5]",
        "[background-size:100%_100%,64px_64px,64px_64px]",
        className,
      )}
    />
  );
}

/** Blue/white glow orbs — the only chromatic light in the design. */
export function GlowField({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "soft" | "center";
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {variant === "hero" && (
        <>
          <div className="glow-orb left-1/2 top-[-14%] h-[42rem] w-[42rem] -translate-x-1/2 animate-glow-pulse bg-accent-500/22" />
          <div className="glow-orb right-[-8%] top-[24%] h-[24rem] w-[24rem] bg-accent-400/12" />
          <div className="glow-orb left-[-6%] top-[46%] h-[22rem] w-[22rem] bg-white/[0.05]" />
        </>
      )}
      {variant === "soft" && (
        <div className="glow-orb left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 bg-accent-500/10" />
      )}
      {variant === "center" && (
        <>
          <div className="glow-orb left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse bg-accent-500/18" />
          <div className="glow-orb left-1/2 top-1/2 h-[20rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 bg-accent-400/[0.06]" />
        </>
      )}
    </div>
  );
}
