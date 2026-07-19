"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { GridBackdrop } from "@/components/ui/Backgrounds";
import { ArrowRight, Telegram } from "@/components/ui/Icons";
import { useContactModal } from "@/components/providers/ContactModal";
import { site } from "@/lib/site";

const meta = [
  { k: "Joylashuv", v: "Toshkent, UZ" },
  { k: "Muddat", v: "8 soatdan" },
  { k: "Javob", v: "24 soat ichida" },
];

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { open } = useContactModal();

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
        yPercent: 118,
        opacity: 0,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-16">
      <GridBackdrop />

      {/* Animated background: a single hairline sweeping down slowly */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        initial={{ y: 0 }}
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 9, ease: "linear", repeat: Infinity }}
      />

      <div className="container-page relative z-10 grid grid-cols-12 gap-y-8">
        <div className="col-span-12 lg:col-span-11">
          {/* Eyebrow chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[13px] text-muted"
          >
            <span className="h-1.5 w-1.5 bg-white" />
            Yoqmasa — pul qaytariladi
          </motion.div>

          {/* Headline */}
          <h1 ref={headingRef} className="mt-6 font-display text-display-xl font-medium">
            <span className="block overflow-hidden pb-[0.12em]">
              <span data-line className="block text-white">
                8 soat ichida
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span data-line className="block text-gradient-accent animate-gradient-pan">
                zamonaviy
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span data-line className="block text-white">
                tayyor sayt
              </span>
            </span>
          </h1>
        </div>

        {/* Subheading + CTAs (offset into the grid for asymmetry) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="col-span-12 flex flex-col gap-6 md:col-span-8 lg:col-span-6 lg:col-start-6"
        >
          <p className="text-subheading text-muted">
            Men yaratgan saytlar boshqa saytlardan{" "}
            <span className="text-white">3 barobar tezroq</span> ishlaydi. Biznesingiz qimmat va
            ishonchli ko&apos;rinadi.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={open} className="btn-primary">
              Ishni boshlash
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Telegram className="h-[18px] w-[18px]" />
              Telegramdan yozish
            </a>
          </div>
        </motion.div>
      </div>

      {/* Engineered meta row along the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="container-page relative z-10 mt-16 border-t border-line pt-4"
      >
        <dl className="grid grid-cols-2 gap-y-4 sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.k} className="flex flex-col gap-1">
              <dt className="text-[12px] uppercase tracking-[0.18em] text-muted/70">{m.k}</dt>
              <dd className="text-[15px] text-white">{m.v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
