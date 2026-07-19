"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { GlowField, GridBackdrop } from "@/components/ui/Backgrounds";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { stats, trustedBy } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // GSAP line-by-line text reveal for the headline
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = headingRef.current?.querySelectorAll("[data-line]");
    if (!lines) return;
    if (reduce) {
      gsap.set(lines, { yPercent: 0, opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        yPercent: 120,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.15,
      });
    });
    return () => ctx.revert();
  }, []);

  // Mouse-parallax for the mockup
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section id="top" className="noise relative overflow-hidden pb-12 pt-28 sm:pt-32 lg:pt-36">
      <GridBackdrop />
      <GlowField variant="hero" />

      <div className="container-page relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="mx-auto flex w-fit items-center gap-1.5 rounded-full glass px-2 py-1 text-[13px] text-white/70"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
          </span>
          O'zbekistondagi premium veb-dizayn
        </motion.div>

        {/* Headline */}
        <h1
          ref={headingRef}
          className="mx-auto mt-4 max-w-4xl text-center text-display-xl"
        >
          <span className="block overflow-hidden py-0.5">
            <span data-line className="block text-gradient">
              Biznesingiz
            </span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <span data-line className="block text-gradient-accent animate-gradient-pan">
              qimmat ko&apos;rinishi
            </span>
          </span>
          <span className="block overflow-hidden py-0.5">
            <span data-line className="block text-gradient">
              kerak.
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mx-auto mt-4 max-w-prose text-center text-[18px] leading-relaxed text-white/60"
        >
          O&apos;zbekiston bizneslari uchun ishonch uyg&apos;otadigan, tez va sotadigan premium
          landing sahifalar. Brendingizni bozorda yetakchiga aylantiradigan dizayn.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
          className="mt-6 flex flex-col items-center justify-center gap-1.5 sm:flex-row"
        >
          <a href="#aloqa" className="btn-primary px-6 py-3 text-[16px]">
            Loyihani boshlash
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#portfolio" className="btn-ghost px-6 py-3 text-[16px]">
            Ishlarni ko&apos;rish
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Mockup */}
        <div className="perspective mt-10 sm:mt-12" onMouseMove={onMouseMove} onMouseLeave={onLeave}>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            style={{ rotateX: rx, rotateY: ry, y: ty, transformStyle: "preserve-3d" }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="absolute -inset-2 -z-10 rounded-4xl bg-accent-500/20 blur-[80px]" />
            <BrowserMockup />
          </motion.div>

          {/* reflection */}
          <div className="mx-auto mt-1 h-16 max-w-3xl bg-gradient-to-b from-white/[0.04] to-transparent blur-md mask-fade-b" />
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl glass px-2 py-3 text-center ring-premium"
            >
              <dt className="font-display text-3xl font-semibold text-gradient">{s.value}</dt>
              <dd className="mt-1 text-[13px] text-white/45">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Trusted-by marquee */}
      <div className="relative mt-12 overflow-hidden py-3">
        <p className="container-page mb-3 text-center text-[12px] uppercase tracking-[0.24em] text-white/30">
          Turli sohalardagi bizneslar ishonadi
        </p>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...trustedBy, ...trustedBy].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-xl font-medium tracking-tight text-white/25"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only">
        {site.name} — {site.role}, {site.location}
      </span>
    </section>
  );
}
