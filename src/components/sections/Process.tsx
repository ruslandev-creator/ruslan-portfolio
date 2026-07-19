"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { scaleIn, stagger, viewportOnce } from "@/lib/motion";

export function Process() {
  return (
    <section id="jarayon" className="section-pad relative overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ishlash jarayoni"
          title={<>Fikrdan ishga tushirishgacha — 4 qadam</>}
          description="Aniq, tez va shaffof jarayon. Siz doim loyiha qayerdaligini bilib turasiz."
        />

        <motion.ol
          variants={stagger(0.05, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => (
            <motion.li
              key={step.no}
              variants={scaleIn}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-4 ring-premium transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-line-strong sm:p-5"
            >
              {/* Top highlight line on hover */}
              <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <span className="font-display text-6xl font-semibold leading-none tracking-tightest text-white/[0.09] transition-colors duration-500 group-hover:text-white/25">
                {step.no}
              </span>

              <h3 className="mt-6 font-display text-2xl leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/50">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
