"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { GlowField, GridBackdrop } from "@/components/ui/Backgrounds";
import { Phone, Telegram } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="aloqa" className="section-pad relative overflow-hidden">
      <GridBackdrop />
      <GlowField variant="center" />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Aloqa"
              title={<>Biznesingizni premium darajaga olib chiqamiz</>}
              description="Ism va telefon raqamingizni qoldiring — 24 soat ichida bepul maslahat va aniq taklif bilan bog'lanaman."
            />

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <a href={site.phoneHref} className="btn-ghost text-[15px]">
                  <Phone className="h-[16px] w-[16px] text-accent-300" />
                  {site.phone}
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-[15px]"
                >
                  <Telegram className="h-[16px] w-[16px] text-accent-300" />
                  Telegram
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="relative rounded-4xl glass-strong p-5 shadow-float ring-premium">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[-30%] h-56 w-56 -translate-x-1/2 rounded-full bg-accent-500/20 blur-[80px]"
              />
              <div className="relative">
                <h3 className="font-display text-2xl text-white">Ishni boshlaymiz</h3>
                <p className="mt-1.5 text-[15px] text-white/55">
                  Bir necha soniya — qolganini o&apos;zim hal qilaman.
                </p>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
