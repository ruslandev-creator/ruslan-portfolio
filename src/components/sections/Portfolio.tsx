"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/content";
import { scaleIn, stagger, viewportOnce } from "@/lib/motion";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={scaleIn} className="surface surface-hover group">
      {/* Rasm uchun joy — keyin real skrinshot qo'yiladi */}
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-9 w-9 text-white/15"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="3" y="4" width="18" height="16" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m4 18 5-5 4 4 3-3 4 4" />
        </svg>
      </div>

      <div className="flex items-center justify-between px-5 py-5">
        <h3 className="font-display text-xl text-white">{project.title}</h3>
        <span className="text-[13px] uppercase tracking-[0.14em] text-muted">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative border-t border-line">
      <div className="container-page">
        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title={<>So&apos;nggi ishlar</>}
          description="Har bir loyiha — o'ziga xos brend va o'lchanadigan natija."
        />

        <motion.div
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
