"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** Glow strength 0–1 */
  intensity?: number;
};

/**
 * Glass card with a mouse-following radial glow.
 * Uses CSS custom properties updated on mousemove (no re-render).
 */
export function SpotlightCard({
  children,
  className,
  intensity = 0.12,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass ring-premium",
        "transition-[transform,border-color] duration-500 ease-premium",
        "hover:-translate-y-1 hover:border-line-strong",
        className,
      )}
      style={
        {
          "--mx": "50%",
          "--my": "0%",
        } as React.CSSProperties
      }
    >
      {/* Mouse spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx) var(--my), rgba(120,170,255,${intensity}), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
