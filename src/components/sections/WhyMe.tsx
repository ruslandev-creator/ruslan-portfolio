"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { features } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function WhyMe() {
  return (
    <section id="afzalliklar" className="section-pad relative border-t border-line">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Sticky heading */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex items-center gap-2">
              <span className="h-px w-6 bg-white/40" />
              <span className="eyebrow">Nega men</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-heading text-white">
                Chiroyli emas — natija keltiradigan dizayn
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-subheading text-muted">
                Har bir element sizning biznesingiz uchun ishlaydi: ishonch, tezlik va sotuv.
              </p>
            </Reveal>
          </div>

          {/* Numbered list */}
          <motion.ol
            variants={stagger(0.04, 0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="col-span-12 border-t border-line lg:col-span-7"
          >
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                variants={fadeUp}
                className="group grid grid-cols-[auto_1fr] gap-x-5 border-b border-line py-6"
              >
                <span className="font-display text-[15px] text-muted/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-white transition-colors">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
