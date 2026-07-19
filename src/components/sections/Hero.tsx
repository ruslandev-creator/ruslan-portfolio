"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { GridBackdrop } from "@/components/ui/Backgrounds";
import { ArrowRight, Telegram } from "@/components/ui/Icons";
import { useContactModal } from "@/components/providers/ContactModal";
import { site } from "@/lib/site";

const stats = [
  { value: "50+", label: "Muvaffaqiyatli loyihalar", sub: "Turli bizneslar uchun yaratilgan" },
  { value: "8 soatdan", label: "Tezkor topshirish", sub: null },
  { value: "24 soat", label: "Doimiy aloqa va qo'llab-quvvatlash", sub: null },
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
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-16"
    >
      <GridBackdrop />

      {/* Everything shares one left axis via the container */}
      <div className="container-page relative z-10">
        <div className="flex max-w-4xl flex-col items-start">
          {/* Eyebrow chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="inline-flex items-center gap-2 border border-line px-3 py-2 text-[13px] text-muted"
          >
            <span className="h-1.5 w-1.5 bg-white" />
            Yoqmasa — pul qaytariladi
          </motion.div>

          {/* Headline */}
          <h1 ref={headingRef} className="mt-8 font-display text-display-xl font-medium">
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

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
            className="mt-8 max-w-xl text-subheading text-muted"
          >
            Men yaratgan saytlar boshqa saytlardan{" "}
            <span className="text-white">3 barobar tezroq</span> ishlaydi. Biznesingiz qimmat va
            ishonchli ko&apos;rinadi.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
            className="mt-8 flex flex-col gap-2 sm:flex-row"
          >
            <button type="button" onClick={open} className="btn-primary">
              Ishni boshlash
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Telegram className="h-[18px] w-[18px]" />
              Telegramdan yozish
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats — same left axis, unified spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="container-page relative z-10 mt-24 border-t border-line pt-8"
      >
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col">
              <dt className="font-display text-4xl text-white">{s.value}</dt>
              <dd className="mt-2 text-[15px] text-white">{s.label}</dd>
              {s.sub && <dd className="mt-1 text-[14px] text-muted">{s.sub}</dd>}
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
