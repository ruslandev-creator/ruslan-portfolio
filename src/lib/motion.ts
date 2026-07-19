import type { Variants } from "framer-motion";

/** Premium easing — matches the CSS `ease-premium` curve. */
export const easePremium = [0.22, 1, 0.36, 1] as const;

/** Fade + rise, used for most scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easePremium },
  },
};

/** Softer fade for large blocks. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: easePremium } },
};

/** Stagger container for lists / grids. */
export const stagger = (delayChildren = 0.05, stagger = 0.09): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren: stagger },
  },
});

/** Scale-in for cards and media. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: easePremium },
  },
};

/** Shared viewport config so reveals feel consistent. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
