"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus } from "@/components/ui/Icons";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          align="left"
          icon={CircleHelp}
          eyebrow="Savol-javob"
          title={<>Ko&apos;p beriladigan savollar</>}
          description="Javobini topa olmadingizmi? To'g'ridan-to'g'ri yozing — 24 soat ichida javob beramiz."
        />

        <div className="mt-14 border-t border-line">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-6 text-left sm:gap-6"
                >
                  <span className="font-display text-[14px] text-muted/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg text-white sm:text-xl">{item.q}</span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center border border-line-strong text-white transition-transform duration-500 ease-premium",
                      isOpen && "rotate-45",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pl-8 text-[15px] leading-relaxed text-muted sm:pl-10">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
