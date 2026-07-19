"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/Icons";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

function FaqItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04}>
      <div
        className={cn(
          "overflow-hidden rounded-3xl border transition-colors duration-500",
          open ? "glass-strong border-line" : "border-line-soft bg-white/[0.015] hover:border-line",
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left sm:px-4"
        >
          <span className="font-display text-[17px] text-white sm:text-lg">{q}</span>
          <span
            className={cn(
              "grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-white/70 transition-all duration-500 ease-premium",
              open && "rotate-45 border-accent-400/60 bg-accent-500/10 text-accent-100",
            )}
          >
            <Plus className="h-3.5 w-3.5" />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-3 pb-3 text-[15px] leading-relaxed text-white/55 sm:px-4 sm:pb-4">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Savol-javob"
            title={<>Ko&apos;p beriladigan savollar</>}
            description="Javobini topa olmadingizmi? Menga to'g'ridan-to'g'ri yozing — 24 soat ichida javob beraman."
            className="lg:sticky lg:top-16 lg:self-start"
          />

          <div className="flex flex-col gap-1.5">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                index={i}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
