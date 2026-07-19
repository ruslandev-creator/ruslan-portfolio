"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm } from "@/components/ui/ContactForm";
import { Cross } from "@/components/ui/Icons";

type ContactModalCtx = { open: () => void; close: () => void };

const Ctx = createContext<ContactModalCtx | null>(null);

/** Sahifaning istalgan joyidan popup formani ochish uchun. */
export function useContactModal(): ContactModalCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              aria-hidden
              onClick={close}
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Bog'lanish formasi"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-4xl glass-strong p-5 shadow-float ring-premium"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[-30%] h-56 w-56 -translate-x-1/2 rounded-full bg-accent-500/25 blur-[80px]"
              />

              <button
                type="button"
                onClick={close}
                aria-label="Yopish"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line text-white/60 transition-colors hover:border-line-strong hover:text-white"
              >
                <Cross className="h-4 w-4" />
              </button>

              <div className="relative">
                <h2 className="font-display text-2xl text-white">Ishni boshlaymiz</h2>
                <p className="mt-1.5 text-[15px] text-white/55">
                  Ism va telefon raqamingizni qoldiring — tez orada bog&apos;lanaman.
                </p>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
