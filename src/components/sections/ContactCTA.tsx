"use client";

import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { GridBackdrop } from "@/components/ui/Backgrounds";
import { Phone, Telegram } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="aloqa" className="section-pad relative overflow-hidden border-t border-line">
      <GridBackdrop />

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <Reveal className="mb-8">
          <SectionBadge icon={Mail} label="Aloqa" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto max-w-[760px] font-display text-heading font-semibold text-white">
            Biznesingizni premium darajaga olib chiqamiz
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-[680px] text-subheading text-muted">
            Ism va telefon raqamingizni qoldiring — 5 daqiqada aloqaga chiqamiz.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.24} className="mt-12 w-full max-w-md">
          <div className="surface p-6 text-left sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        {/* Direct contact */}
        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={site.phoneHref} className="btn-ghost">
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Telegram className="h-[17px] w-[17px]" />
            Telegram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
