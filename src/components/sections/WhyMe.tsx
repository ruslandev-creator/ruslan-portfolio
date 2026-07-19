"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GlowField } from "@/components/ui/Backgrounds";
import { iconMap } from "@/components/ui/Icons";
import { features } from "@/lib/content";
import { scaleIn, stagger, viewportOnce } from "@/lib/motion";

export function WhyMe() {
  return (
    <section id="afzalliklar" className="section-pad relative overflow-hidden">
      <GlowField variant="soft" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Nega men"
          title={<>Nega bizneslar aynan men bilan ishlaydi</>}
          description="Chiroyli dizayn — bu boshlanishi. Men natijaga, tezlikka va sizning biznesingizga javob beraman."
        />

        <motion.div
          variants={stagger(0.06, 0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <motion.div key={f.title} variants={scaleIn}>
                <SpotlightCard className="h-full p-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white/[0.04] text-accent-200 transition-colors duration-500 group-hover:border-accent-400/50 group-hover:text-accent-100">
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mt-3 font-display text-xl text-white">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/55">
                    {f.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
