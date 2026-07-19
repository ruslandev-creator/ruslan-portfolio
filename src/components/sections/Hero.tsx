"use client";

import { motion } from "framer-motion";
import { Award, Clock3, Sparkles, ShieldCheck } from "lucide-react";
import { GridBackdrop } from "@/components/ui/Backgrounds";
import { ArrowRight, Telegram } from "@/components/ui/Icons";
import { Scramble } from "@/components/ui/Scramble";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { useContactModal } from "@/components/providers/ContactModal";
import { site } from "@/lib/site";

const bullets = [
  { icon: Award, label: "50+ Yakunlangan loyihalar" },
  { icon: Clock3, label: "8 soatda tayyor" },
  { icon: Sparkles, label: "Premium dizayn" },
  { icon: ShieldCheck, label: "Sifat kafolati" },
];

export function Hero() {
  const { open } = useContactModal();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-16 text-center"
    >
      <GridBackdrop />

      <div className="container-page relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="inline-flex items-center gap-2 border border-[#2A2A2A] px-4 py-2 text-[13px] tracking-[0.04em] text-muted"
        >
          <span className="h-1.5 w-1.5 bg-white" />
          Yoqmasa — pul qaytariladi
        </motion.span>

        {/* Headline — exactly two lines, scramble once on load */}
        <h1 className="mt-8 font-display text-display-xl font-medium text-white">
          <Scramble text="8 soatda tayyor" playOnMount duration={720} className="block" />
          <Scramble text="zamonaviy sayt" playOnMount duration={720} className="block" />
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mx-auto mt-8 max-w-2xl text-subheading text-muted"
        >
          Biz yaratgan saytlar boshqa saytlardan{" "}
          <span className="text-white">3 barobar tezroq</span> ishlaydi. Biznesingiz qimmat va
          ishonchli ko&apos;rinadi.
        </motion.p>

        {/* CTAs — centered, equal height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row"
        >
          <button type="button" onClick={open} className="btn-primary">
            <Scramble text="Ishni boshlash" duration={300} />
            <ArrowRight className="h-4 w-4" />
          </button>
          <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Telegram className="h-[18px] w-[18px]" />
            <Scramble text="Telegramdan yozish" duration={300} />
          </a>
        </motion.div>

        {/* Hero bullets — 4 badges in one centered row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {bullets.map((b) => (
            <SectionBadge key={b.label} size="lg" icon={b.icon} label={b.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
