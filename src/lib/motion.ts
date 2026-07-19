import type { Variants } from "framer-motion";

/** Premium ease-out — no bounce, no overshoot. */
export const easePremium = [0.22, 1, 0.36, 1] as const;

/** Fade + slide up — the default reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easePremium },
  },
};

/** Plain fade for large blocks. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: easePremium } },
};

/** Stagger container for lists / grids. */
export const stagger = (delayChildren = 0.04, stagger = 0.1): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren: stagger } },
});

/** Subtle scale + rise for cards and media. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: easePremium },
  },
};

/** Horizontal slide for split compositions. */
export const slideIn = (from: "left" | "right" = "left"): Variants => ({
  hidden: { opacity: 0, x: from === "left" ? -48 : 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easePremium } },
});

export const viewportOnce = { once: true, amount: 0.2 } as const;
