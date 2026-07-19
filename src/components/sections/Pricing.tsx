"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "@/components/ui/Icons";
import { useContactModal } from "@/components/providers/ContactModal";
import { plans } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { open } = useContactModal();

  return (
    <section id="narxlar" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Narxlar"
          title={<>Aniq tariflar, yashirin to&apos;lovsiz</>}
          description="Har bir tarif — o'lchanadigan natijaga qilingan investitsiya."
        />

        <motion.div
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 border border-line lg:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={cn(
                "flex flex-col p-6 lg:p-8",
                i > 0 && "border-t border-line lg:border-l lg:border-t-0",
                plan.featured && "bg-ink-900",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg text-white">{plan.name}</h3>
                {plan.featured && (
                  <span className="border border-line-strong px-2 py-0.5 text-[11px] uppercase tracking-[0.14em] text-white">
                    Mashhur
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl text-white">{plan.price}</span>
                <span className="pb-1.5 text-[13px] text-muted">{plan.cadence}</span>
              </div>
              <p className="mt-3 min-h-[40px] text-[14px] leading-snug text-muted">{plan.tagline}</p>

              <div className="my-6 h-px w-full bg-line" />

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={open}
                className={cn("mt-8 w-full", plan.featured ? "btn-primary" : "btn-ghost")}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
