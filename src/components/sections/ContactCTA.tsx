"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { GlowField, GridBackdrop } from "@/components/ui/Backgrounds";
import { Check, ArrowUpRight } from "@/components/ui/Icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent";

const budgets = ["$500 gacha", "$500–1500", "$1500–3000", "$3000+"] as const;

export function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [budget, setBudget] = useState<string>(budgets[1]);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    const company = String(data.get("company") || ""); // honeypot

    if (!name || !contact) {
      setError("Iltimos, ism va aloqa ma'lumotini kiriting.");
      return;
    }
    setError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, budget, message, company }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Yuborishda xatolik.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Yuborilmadi. Iltimos, qayta urinib ko'ring yoki Telegram orqali yozing.",
      );
    }
  }

  const inputCls =
    "w-full rounded-2xl border border-line bg-white/[0.03] px-2.5 py-2 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-accent-400/60 focus:bg-white/[0.05]";

  return (
    <section id="aloqa" className="section-pad noise relative overflow-hidden">
      <GridBackdrop />
      <GlowField variant="center" />

      <div className="container-page relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Copy */}
          <div>
            <Reveal className="flex items-center gap-2">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-400/70" />
              <span className="eyebrow">Keling, boshlaymiz</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-2 max-w-xl text-display-lg text-gradient">
                Biznesingizni premium darajaga olib chiqamiz.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-3 max-w-md text-[17px] leading-relaxed text-white/55">
                Loyihangiz haqida qisqacha yozing — 24 soat ichida bepul maslahat va aniq
                taklif bilan bog&apos;lanaman.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <a href={`mailto:${site.email}`} className="btn-ghost text-[15px]">
                  {site.email}
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-[15px]"
                >
                  Telegram
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="relative rounded-4xl glass-strong p-3 shadow-float ring-premium sm:p-4">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-2 px-2 py-8 text-center"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-500/20 text-accent-100">
                      <Check className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl text-white">Rahmat! So&apos;rovingiz yuborildi.</h3>
                    <p className="max-w-xs text-[15px] text-white/55">
                      Xabaringiz menga yetib bordi. Tez orada siz bilan bog&apos;lanaman.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn-ghost mt-2 px-2.5 py-1 text-[14px]"
                    >
                      Yana yuborish
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-2"
                    noValidate
                  >
                    {/* Honeypot — odamlar ko'rmaydi, botlar to'ldiradi */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                    />
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-[13px] text-white/50">
                          Ismingiz
                        </label>
                        <input id="name" name="name" className={inputCls} placeholder="Ism Familiya" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="contact" className="text-[13px] text-white/50">
                          Telefon yoki Telegram
                        </label>
                        <input
                          id="contact"
                          name="contact"
                          className={inputCls}
                          placeholder="@username / +998…"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] text-white/50">Byudjet</span>
                      <div className="flex flex-wrap gap-1.5">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={cn(
                              "rounded-full border px-2 py-1 text-[13px] transition-colors duration-300",
                              budget === b
                                ? "border-accent-400/60 bg-accent-500/12 text-accent-100"
                                : "border-line-soft text-white/50 hover:border-line hover:text-white/70",
                            )}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="message" className="text-[13px] text-white/50">
                        Loyihangiz haqida
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className={cn(inputCls, "resize-none")}
                        placeholder="Qanday biznes, qanday maqsad?"
                      />
                    </div>

                    {error && <p className="text-[13px] text-red-300/80">{error}</p>}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary mt-1 w-full text-[16px]"
                    >
                      {status === "sending" ? "Yuborilmoqda…" : "So'rov yuborish"}
                      {status !== "sending" && <ArrowUpRight className="h-4 w-4" />}
                    </button>
                    <p className="text-center text-[12px] text-white/30">
                      Xabaringiz to&apos;g&apos;ridan-to&apos;g&apos;ri menga yetib boradi.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
