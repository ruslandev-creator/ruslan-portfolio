"use client";

import { motion } from "framer-motion";
import { GitCompare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Cross } from "@/components/ui/Icons";
import { comparison } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Comparison() {
  const rows = comparison.ordinary.points.map((o, i) => ({
    ordinary: o,
    premium: comparison.premium.points[i],
  }));

  return (
    <section id="taqqoslash" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          icon={GitCompare}
          eyebrow="Taqqoslash"
          title={<>Oddiy sayt va premium landing</>}
          description="Bir xil byudjet, butunlay boshqacha natija. Mijoz birinchi 3 soniyada qaror qabul qiladi."
        />

        <motion.div
          variants={stagger(0.05, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 border border-line"
        >
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div className="border-r border-line px-4 py-4 sm:px-6">
              <span className="text-[15px] text-muted">Oddiy sayt</span>
            </div>
            <div className="bg-ink-900 px-4 py-4 sm:px-6">
              <span className="text-[15px] font-medium text-white">Premium landing</span>
            </div>
          </div>

          {/* Comparison rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="grid grid-cols-2 border-t border-line"
            >
              <div className="flex items-start gap-3 border-r border-line px-4 py-4 sm:px-6">
                <Cross className="mt-0.5 h-4 w-4 shrink-0 text-muted/50" />
                <span className="text-[15px] leading-snug text-muted">{row.ordinary}</span>
              </div>
              <div className="flex items-start gap-3 bg-ink-900 px-4 py-4 sm:px-6">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span className="text-[15px] leading-snug text-white">{row.premium}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
