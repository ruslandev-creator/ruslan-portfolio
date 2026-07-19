"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  // Progress line grows as the section scrolls into view
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="jarayon" className="section-pad relative overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ishlash jarayoni"
          title={<>Fikrdan ishga tushirishgacha — 6 aniq bosqich</>}
          description="Har bir bosqich shaffof. Siz doim loyiha qayerda ekanini bilib turasiz."
        />

        <div ref={ref} className="relative mt-10">
          {/* Vertical progress rail (desktop) */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-line-soft lg:block">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-accent-400 via-accent-500/60 to-transparent"
            />
          </div>

          <motion.ol
            variants={stagger(0.05, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"
          >
            {processSteps.map((step) => (
              <motion.li
                key={step.no}
                variants={fadeUp}
                className="group relative flex items-start gap-3 rounded-3xl glass p-3 transition-colors duration-500 hover:border-line-strong sm:p-4 lg:pl-12"
              >
                {/* Node marker on the rail (desktop) */}
                <span className="absolute left-6 top-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-400/60 bg-ink-950 lg:block">
                  <span className="absolute inset-0.5 rounded-full bg-accent-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>

                <span className="font-display text-4xl font-semibold leading-none text-white/10 transition-colors duration-500 group-hover:text-accent-400/40 lg:hidden xl:block">
                  {step.no}
                </span>

                <div className="lg:flex lg:flex-1 lg:items-center lg:gap-6">
                  <div className="lg:w-56">
                    <span className="mb-1 hidden font-display text-[13px] font-medium tracking-[0.2em] text-accent-300/70 lg:block">
                      {step.no}
                    </span>
                    <h3 className="font-display text-xl text-white">{step.title}</h3>
                  </div>
                  <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-white/55 lg:mt-0">
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
