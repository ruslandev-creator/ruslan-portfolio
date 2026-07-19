"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type ScrambleProps = {
  text: string;
  /** Animation length in ms. */
  duration?: number;
  /** Play once on mount instead of on hover. */
  playOnMount?: boolean;
  className?: string;
};

/**
 * Signature text-scramble interaction.
 * - Same character count throughout (Geist Mono) → no layout shift.
 * - Only A–Z random letters; spaces/apostrophes kept; resolves left→right.
 * - On hover it binds to the nearest <a>/<button> so the whole control triggers it.
 */
export function Scramble({ text, duration = 300, playOnMount = false, className }: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const play = () => {
      if (reduce || playingRef.current) return;
      playingRef.current = true;
      const start = performance.now();
      const n = text.length;

      const loop = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const revealed = p * n;
        let out = "";
        for (let i = 0; i < n; i++) {
          const ch = text[i];
          if (!/[a-z]/i.test(ch)) {
            out += ch;
          } else if (i < revealed) {
            out += ch;
          } else {
            out += CHARS[(Math.random() * 26) | 0];
          }
        }
        el.textContent = out;
        if (p < 1) {
          rafRef.current = requestAnimationFrame(loop);
        } else {
          el.textContent = text;
          playingRef.current = false;
        }
      };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };

    let trigger: Element | null = null;
    if (playOnMount) {
      play();
    } else {
      trigger = el.closest("a, button") ?? el;
      trigger.addEventListener("mouseenter", play);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      trigger?.removeEventListener("mouseenter", play);
      playingRef.current = false;
    };
  }, [text, duration, playOnMount]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
