"use client";

import { motion } from "framer-motion";
import { GridBackdrop } from "@/components/ui/Backgrounds";
import { HeroArt } from "@/components/ui/HeroArt";
import { ArrowRight, Telegram } from "@/components/ui/Icons";
import { Scramble } from "@/components/ui/Scramble";
import { useContactModal } from "@/components/providers/ContactModal";
import { site } from "@/lib/site";

const stats = [
  { value: "50+", label: "Muvaffaqiyatli loyihalar", sub: "Turli bizneslar uchun yaratilgan" },
  { value: "8 soatdan", label: "Tezkor topshirish", sub: null },
  { value: "24 soat", label: "Doimiy aloqa va qo'llab-quvvatlash", sub: null },
];

export function Hero() {
  const { open } = useContactModal();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-16"
    >
      <GridBackdrop />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-x-8">
          {/* Content — one shared left axis */}
          <div className="col-span-12 flex flex-col items-start lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="inline-flex items-center gap-2 border border-line px-3 py-2 text-[13px] text-muted"
            >
              <span className="h-1.5 w-1.5 bg-white" />
              Yoqmasa — pul qaytariladi
            </motion.div>

            {/* Headline — exactly two lines, scramble once on load */}
            <h1 className="mt-8 font-display text-display-xl font-medium text-white">
              <Scramble text="8 soatda tayyor" playOnMount duration={720} className="block" />
              <Scramble text="zamonaviy sayt" playOnMount duration={720} className="block" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="mt-8 max-w-xl text-subheading text-muted"
            >
              Men yaratgan saytlar boshqa saytlardan{" "}
              <span className="text-white">3 barobar tezroq</span> ishlaydi. Biznesingiz qimmat va
              ishonchli ko&apos;rinadi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              className="mt-8 flex flex-col gap-2 sm:flex-row"
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
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="col-span-12 hidden lg:col-span-5 lg:block"
          >
            <HeroArt className="mx-auto max-w-[440px]" />
          </motion.div>
        </div>
      </div>

      {/* Stats — same left axis, unified spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.85 }}
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
