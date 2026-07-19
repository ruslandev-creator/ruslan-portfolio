"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Cross } from "@/components/ui/Icons";
import { GlowField } from "@/components/ui/Backgrounds";
import { comparison } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Comparison() {
  return (
    <section id="taqqoslash" className="section-pad relative overflow-hidden">
      <GlowField variant="soft" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Farqni ko'ring"
          title={<>Oddiy sayt va premium landing o&apos;rtasidagi farq</>}
          description="Bir xil byudjet, butunlay boshqacha natija. Mijoz saytga kirgan birinchi 3 soniyada qaror qabul qiladi."
        />

        <div className="mt-9 grid gap-3 lg:grid-cols-2">
          {/* Ordinary */}
          <Reveal variants={fadeUp}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-line-soft bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl text-white/70">
                    {comparison.ordinary.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-white/40">
                    {comparison.ordinary.subtitle}
                  </p>
                </div>
                <span className="rounded-full border border-line-soft px-2 py-0.5 text-[12px] text-white/40">
                  Ko&apos;pchilik
                </span>
              </div>

              <motion.ul
                variants={stagger(0.1, 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-4 flex flex-col gap-1.5"
              >
                {comparison.ordinary.points.map((p) => (
                  <motion.li
                    key={p}
                    variants={fadeUp}
                    className="flex items-center gap-2 rounded-2xl border border-line-soft bg-ink-900/40 px-2.5 py-2 text-[15px] text-white/55"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/5 text-white/40">
                      <Cross className="h-3 w-3" />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>

          {/* Premium */}
          <Reveal variants={fadeUp} delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-4 shadow-glow ring-premium sm:p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-20%] top-[-30%] h-64 w-64 rounded-full bg-accent-500/25 blur-[90px]"
              />
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl text-gradient-accent animate-gradient-pan">
                    {comparison.premium.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-white/55">
                    {comparison.premium.subtitle}
                  </p>
                </div>
                <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[12px] font-medium text-accent-200">
                  Tavsiya etiladi
                </span>
              </div>

              <motion.ul
                variants={stagger(0.14, 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative mt-4 flex flex-col gap-1.5"
              >
                {comparison.premium.points.map((p) => (
                  <motion.li
                    key={p}
                    variants={fadeUp}
                    className="flex items-center gap-2 rounded-2xl border border-line bg-white/[0.04] px-2.5 py-2 text-[15px] text-white/85"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-500/20 text-accent-200">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
