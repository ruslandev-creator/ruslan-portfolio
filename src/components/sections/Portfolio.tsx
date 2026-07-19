"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight } from "@/components/ui/Icons";
import { projects, type Project } from "@/lib/content";
import { scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={scaleIn}>
      <SpotlightCard className="h-full">
        {/* Preview */}
        <div className={cn("relative aspect-[16/10] overflow-hidden bg-gradient-to-br", project.accent)}>
          <div className="absolute inset-0 noise opacity-60" />
          <div className="absolute left-1/2 top-[-40%] h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-[70px]" />

          {/* mini site preview */}
          <div className="absolute inset-0 flex flex-col justify-between p-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-10 rounded-full bg-white/70" />
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-3/4 rounded-full bg-white/80" />
              <div className="h-3 w-1/2 rounded-full bg-white/35" />
              <div className="mt-2 flex gap-1.5">
                <div className="h-2.5 w-14 rounded-full bg-white/85" />
                <div className="h-2.5 w-14 rounded-full bg-white/15" />
              </div>
            </div>
          </div>

          {/* metric badge */}
          <div className="absolute right-2.5 top-2.5 rounded-2xl glass-strong px-2 py-1 text-right">
            <div className="font-display text-lg font-semibold text-white">{project.metric}</div>
            <div className="text-[10px] text-white/50">{project.metricLabel}</div>
          </div>
        </div>

        {/* Body */}
        <div className="flex items-start justify-between gap-3 p-3 sm:p-4">
          <div>
            <div className="flex items-center gap-2 text-[13px] text-white/40">
              <span>{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{project.year}</span>
            </div>
            <h3 className="mt-1 font-display text-2xl text-white">{project.title}</h3>
            <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-white/55">
              {project.summary}
            </p>
          </div>
          <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-white/60 transition-all duration-500 ease-premium group-hover:border-accent-400/60 group-hover:bg-accent-500/10 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative">
      <div className="container-page">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title={<>Natija keltirgan so&apos;nggi ishlar</>}
            description="Har bir loyiha — o'ziga xos brend, o'lchanadigan natija va premium ijro."
          />
          <a
            href="#aloqa"
            className="btn-ghost hidden shrink-0 text-[15px] sm:inline-flex"
          >
            Sizniki ham shunday bo&apos;lsin
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid gap-3 md:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
