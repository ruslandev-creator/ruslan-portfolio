"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { GlowField, GridBackdrop } from "@/components/ui/Backgrounds";
import { ArrowRight, Telegram } from "@/components/ui/Icons";
import { useContactModal } from "@/components/providers/ContactModal";
import { site } from "@/lib/site";

const enter = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.12 },
  }),
};

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { open } = useContactModal();

  // GSAP line-by-line headline reveal
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = headingRef.current?.querySelectorAll("[data-line]");
    if (!lines) return;
    if (reduce) {
      gsap.set(lines, { yPercent: 0, opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        yPercent: 130,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.14,
        delay: 0.15,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-28"
    >
      <GridBackdrop />
      <GlowField variant="hero" />

      <div className="container-page relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={enter}
          initial="hidden"
          animate="show"
          className="flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-[14px] text-white/75"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
          </span>
          Yoqmasa — pul qaytariladi
        </motion.div>

        {/* Headline (Geist Mono) */}
        <h1
          ref={headingRef}
          className="mt-6 max-w-5xl text-center font-mono text-display-xl font-medium leading-[1.16]"
        >
          <span className="block overflow-hidden pb-[0.14em]">
            <span data-line className="block text-gradient">
              8 soat ichida
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.14em]">
            <span data-line className="block text-gradient-accent animate-gradient-pan">
              zamonaviy
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.14em]">
            <span data-line className="block text-gradient">
              tayyor sayt
            </span>
          </span>
        </h1>

        {/* Subheading — 18px */}
        <motion.p
          custom={1}
          variants={enter}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-prose text-center text-subheading text-white/60"
        >
          Men yaratgan saytlar boshqa saytlardan{" "}
          <span className="font-medium text-white">3 barobar tezroq</span> ishlaydi.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={2}
          variants={enter}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-center gap-2 sm:flex-row"
        >
          <button type="button" onClick={open} className="btn-primary px-6 py-3 text-[16px]">
            Ishni boshlash
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-6 py-3 text-[16px]"
          >
            <Telegram className="h-[18px] w-[18px] text-accent-300" />
            Telegramdan yozish
          </a>
        </motion.div>
      </div>
    </section>
  );
}
