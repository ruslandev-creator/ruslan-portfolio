"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowField } from "@/components/ui/Backgrounds";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { plans, type Plan } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl p-4 sm:p-5",
        plan.featured
          ? "glass-strong shadow-glow ring-premium"
          : "border border-line-soft bg-white/[0.02]",
      )}
    >
      {plan.featured && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-40%] h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/22 blur-[90px]"
          />
          <span className="absolute right-3 top-3 rounded-full bg-accent-500/15 px-2 py-0.5 text-[12px] font-medium text-accent-200">
            Mashhur
          </span>
        </>
      )}

      <div className="relative">
        <h3 className="font-display text-xl text-white">{plan.name}</h3>
        <p className="mt-1 min-h-[40px] text-[14px] leading-snug text-white/50">
          {plan.tagline}
        </p>

        <div className="mt-3 flex items-end gap-1.5">
          <span className="font-display text-4xl font-semibold text-gradient">{plan.price}</span>
          <span className="pb-1 text-[13px] text-white/40">{plan.cadence}</span>
        </div>
      </div>

      <ul className="relative mt-4 flex flex-1 flex-col gap-1.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[15px] text-white/70">
            <span
              className={cn(
                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                plan.featured ? "bg-accent-500/20 text-accent-200" : "bg-white/5 text-white/50",
              )}
            >
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#aloqa"
        className={cn(
          "relative mt-5 w-full text-[15px]",
          plan.featured ? "btn-primary" : "btn-ghost",
        )}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="narxlar" className="section-pad relative overflow-hidden">
      <GlowField variant="soft" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Narxlar"
          title={<>Biznesingizga mos aniq tariflar</>}
          description="Yashirin to'lovlar yo'q. Har bir tarif — o'lchanadigan natijaga qilingan investitsiya."
        />

        <motion.div
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid items-stretch gap-3 lg:grid-cols-3"
        >
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </motion.div>

        <p className="mt-5 text-center text-[14px] text-white/40">
          Individual loyihami?{" "}
          <a href="#aloqa" className="text-accent-300 underline-offset-4 hover:underline">
            Shaxsiy taklif oling →
          </a>
        </p>
      </div>
    </section>
  );
}
