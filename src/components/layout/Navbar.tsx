"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, nav } from "@/lib/site";
import { Logo, ArrowUpRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-2 sm:pt-3">
      <nav
        className={cn(
          "flex w-full max-w-content items-center justify-between rounded-full px-2 py-1.5 transition-all duration-500 ease-premium",
          scrolled ? "glass-strong shadow-card" : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-1.5 pl-1.5 text-white" aria-label={site.name}>
          <Logo className="h-4 w-4 text-accent-300" />
          <span className="font-display text-[17px] font-semibold tracking-tight">
            {site.wordmark}
            <span className="text-accent-400">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-2 py-1 text-[15px] text-white/60 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a href="#aloqa" className="btn-primary hidden px-2.5 py-1 text-[14px] sm:inline-flex">
            Loyihani boshlash
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost h-10 w-10 !p-0 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0.5 h-px w-4 bg-white transition-transform duration-300",
                  open && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-4 bg-white transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0.5 left-0 h-px w-4 bg-white transition-transform duration-300",
                  open && "bottom-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-3 top-8 z-40 rounded-3xl glass-strong p-2 shadow-float md:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-2.5 py-2 text-[17px] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-white/40" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#aloqa"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 w-full"
            >
              Loyihani boshlash
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
