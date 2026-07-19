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
            transition={{ duration: 0.25 }}
          >
            <div aria-hidden onClick={close} className="absolute inset-0 bg-ink-950/92" />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Bog'lanish formasi"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="surface-2 relative w-full max-w-md p-6"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Yopish"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center border border-line-strong text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                <Cross className="h-4 w-4" />
              </button>

              <p className="eyebrow">Ariza qoldiring</p>
              <h2 className="mt-3 font-display text-2xl text-white">Ishni boshlaymiz</h2>
              <p className="mt-2 text-[15px] text-muted">
                Ism va telefon raqamingizni qoldiring — 5 daqiqada aloqaga chiqaman.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
