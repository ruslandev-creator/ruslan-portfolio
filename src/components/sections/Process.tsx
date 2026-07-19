"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="jarayon" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Ishlash jarayoni"
          title={<>Fikrdan ishga tushirishgacha</>}
          description="Aniq, tez va shaffof jarayon — atigi 4 qadam. Siz doim loyiha qayerdaligini bilib turasiz."
        />

        <motion.ol
          variants={stagger(0.05, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => (
            <motion.li
              key={step.no}
              variants={fadeUp}
              className={cn(
                "group relative flex flex-col border-line px-0 py-8 lg:px-6 lg:py-0",
                "border-b sm:border-b-0",
                i > 0 && "lg:border-l",
                i % 2 === 1 && "sm:border-l lg:border-l",
              )}
            >
              <span className="font-display text-5xl font-semibold leading-none tracking-tightest text-white/10 transition-colors duration-500 group-hover:text-white">
                {step.no}
              </span>
              <h3 className="mt-8 font-display text-xl text-white lg:mt-10">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
