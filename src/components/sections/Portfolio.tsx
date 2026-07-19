"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { projects, type Project } from "@/lib/content";
import { scaleIn, stagger, viewportOnce } from "@/lib/motion";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={scaleIn}>
      <SpotlightCard className="h-full">
        {/* Rasm uchun joy — keyin real skrinshot qo'yiladi */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line-soft bg-ink-800">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(244,244,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,244,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[60px]" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="relative h-9 w-9 text-white/20"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="m4 18 5-5 4 4 3-3 4 4" />
          </svg>
        </div>

        {/* Keys nomi + nima ekanligi */}
        <div className="p-4">
          <h3 className="font-display text-2xl text-white">{project.title}</h3>
          <p className="mt-1.5 text-[15px] text-white/45">{project.category}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title={<>So&apos;nggi ishlar</>}
          description="Har bir loyiha — o'ziga xos brend va premium ijro."
        />

        <motion.div
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
