"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { Scramble } from "@/components/ui/Scramble";
import { useContactModal } from "@/components/providers/ContactModal";
import { features } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function WhyMe() {
  const { open } = useContactModal();

  return (
    <section id="afzalliklar" className="section-pad relative border-t border-line">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          {/* Large statement — one side */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <Reveal className="flex items-center gap-2">
              <span className="h-px w-8 bg-white/40" />
              <span className="eyebrow">Nega men</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-heading text-white">
                Chiroyli emas — natija keltiradigan dizayn
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-md text-subheading text-muted">
                Har bir element sizning biznesingiz uchun ishlaydi: ishonch, tezlik va sotuv.
                Men shunchaki sayt emas — natija topshiraman.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <button type="button" onClick={open} className="btn-primary mt-8">
                <Scramble text="Ishni boshlash" duration={300} />
                <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>

          {/* Advantages — the other side, editorial index */}
          <motion.ul
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
                className="group grid grid-cols-[3.5rem_1fr] items-start gap-x-6 border-b border-line py-8 transition-colors duration-500"
              >
                <span className="font-display text-2xl text-white/20 transition-colors duration-500 group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="transition-transform duration-500 ease-premium group-hover:translate-x-1">
                  <h3 className="font-display text-xl text-white">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
