"use client";

import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { GridBackdrop } from "@/components/ui/Backgrounds";
import { Phone, Telegram, ArrowUpRight } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="aloqa" className="section-pad relative overflow-hidden border-t border-line">
      <GridBackdrop />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-16">
          {/* Statement + direct contact */}
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <SectionBadge icon={Mail} label="Aloqa" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-display-lg text-white">
                Biznesingizni premium darajaga olib chiqamiz
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-subheading text-muted">
                Ism va telefon raqamingizni qoldiring — 5 daqiqada aloqaga chiqamiz.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 border-t border-line">
                <a
                  href={site.phoneHref}
                  className="surface-hover flex items-center justify-between border-b border-line px-4 py-4"
                >
                  <span className="flex items-center gap-3 text-white">
                    <Phone className="h-4 w-4" />
                    {site.phone}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" />
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-hover flex items-center justify-between border-b border-line px-4 py-4"
                >
                  <span className="flex items-center gap-3 text-white">
                    <Telegram className="h-[17px] w-[17px]" />
                    Telegram
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form panel */}
          <Reveal delay={0.1} className="col-span-12 lg:col-span-6">
            <div className="surface p-6 sm:p-8">
              <p className="eyebrow">Ariza qoldiring</p>
              <h3 className="mt-3 font-display text-2xl text-white">Ishni boshlaymiz</h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
