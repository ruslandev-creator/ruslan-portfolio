"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowUpRight } from "@/components/ui/Icons";
import { Scramble } from "@/components/ui/Scramble";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent";

const inputCls =
  "w-full border border-line bg-ink-950 px-3 py-3 text-[16px] text-white placeholder:text-muted/50 outline-none transition-colors duration-300 focus:border-white/40";

/**
 * Minimal aloqa formasi: faqat ism + telefon raqami.
 * Popup modal va aloqa bo'limi — ikkalasi ham shuni ishlatadi.
 */
export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const company = String(data.get("company") || ""); // honeypot

    if (!name || !contact) {
      setError("Iltimos, ism va telefon raqamini kiriting.");
      return;
    }
    setError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, company }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Yuborishda xatolik.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Yuborilmadi. Qayta urinib ko'ring.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn("flex flex-col items-center gap-2 px-2 py-8 text-center", className)}
        >
          <span className="grid h-12 w-12 place-items-center border border-line-strong text-white">
            <Check className="h-6 w-6" />
          </span>
          <h3 className="font-display text-xl text-white">Zayavka qabul qilindi</h3>
          <p className="max-w-xs text-[15px] text-white/55">
            5 daqiqada aloqaga chiqamiz.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn("flex flex-col gap-3", className)}
          noValidate
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="cf-name" className="text-[13px] text-muted">
              Ismingiz
            </label>
            <input id="cf-name" name="name" className={inputCls} placeholder="Ism Familiya" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cf-contact" className="text-[13px] text-muted">
              Telefon raqamingiz
            </label>
            <input
              id="cf-contact"
              name="contact"
              type="tel"
              inputMode="tel"
              className={inputCls}
              placeholder="+998 __ ___ __ __"
            />
          </div>

          {error && <p className="text-[13px] text-red-300/80">{error}</p>}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-1 w-full text-[16px]"
          >
            {status === "sending" ? "Yuborilmoqda…" : <Scramble text="Yuborish" duration={300} />}
            {status !== "sending" && <ArrowUpRight className="h-4 w-4" />}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
