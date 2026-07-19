"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function CornerMarks() {
  const mark = (
    <svg viewBox="0 0 12 12" className="absolute h-3 w-3 text-line-strong" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M6 0V12 M0 6H12" />
    </svg>
  );
  return (
    <>
      <span className="pointer-events-none absolute -left-1.5 -top-1.5">{mark}</span>
      <span className="pointer-events-none absolute -right-1.5 -top-1.5">{mark}</span>
      <span className="pointer-events-none absolute -bottom-1.5 -left-1.5">{mark}</span>
      <span className="pointer-events-none absolute -bottom-1.5 -right-1.5">{mark}</span>
    </>
  );
}

export function Process() {
  return (
    <section id="jarayon" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          icon={Workflow}
          eyebrow="Ishlash jarayoni"
          title={<>Fikrdan ishga tushirishgacha</>}
          description="Aniq, tez va shaffof jarayon — atigi 4 qadam. Har bir bosqichda loyiha qayerdaligini bilib turasiz."
        />

        <div className="relative mt-16 border border-line">
          <CornerMarks />
          <motion.div
            variants={stagger(0.05, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.no}
                variants={fadeUp}
                className="group relative flex flex-col bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl leading-none tracking-tightest text-white/15 transition-colors duration-500 group-hover:text-white">
                    {step.no}
                  </span>
                  <span className="h-1.5 w-1.5 bg-line-strong transition-colors duration-500 group-hover:bg-white" />
                </div>
                <h3 className="mt-12 font-display text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
