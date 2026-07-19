"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="jarayon" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Ishlash jarayoni"
          title={<>Fikrdan ishga tushirishgacha</>}
          description="Aniq, tez va shaffof jarayon — atigi 4 qadam. Har bir bosqichda loyiha qayerdaligini bilib turasiz."
        />

        <div ref={ref} className="relative mt-16">
          {/* Connecting rail with scroll-driven fill */}
          <div className="absolute left-16 top-3 h-[calc(100%-2rem)] w-px bg-line sm:left-20">
            <motion.div style={{ scaleY: fill }} className="h-full w-full origin-top bg-white/60" />
          </div>

          <motion.ol
            variants={stagger(0.05, 0.14)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            {processSteps.map((step) => (
              <motion.li
                key={step.no}
                variants={fadeUp}
                className="group relative grid grid-cols-[4rem_1fr] gap-x-8 pb-16 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-x-12 md:pb-24"
              >
                {/* Large step number */}
                <span className="text-right font-display text-4xl leading-none tracking-tightest text-white/15 transition-colors duration-500 group-hover:text-white sm:text-6xl">
                  {step.no}
                </span>

                {/* Node on the rail */}
                <span className="absolute left-16 top-2.5 h-2.5 w-2.5 -translate-x-1/2 border border-white bg-ink-950 transition-colors duration-500 group-hover:bg-white sm:left-20" />

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display text-2xl text-white">{step.title}</h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
