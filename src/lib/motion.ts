import type { Variants } from "framer-motion";

/** Premium easing — matches the CSS `ease-premium` curve. */
export const easePremium = [0.22, 1, 0.36, 1] as const;

/** Strong fade + rise + blur — the default scroll reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 56, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easePremium },
  },
};

/** Softer fade for large blocks. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  show: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.1, ease: easePremium } },
};

/** Stagger container for lists / grids. */
export const stagger = (delayChildren = 0.05, stagger = 0.12): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren: stagger },
  },
});

/** Dramatic scale-in for cards and media. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easePremium },
  },
};

/** Shared viewport config so reveals feel consistent. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
