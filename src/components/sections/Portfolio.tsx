"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/content";
import { fadeUp, slideIn, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ImagePlaceholder() {
  return (
    <div className="surface surface-hover relative flex aspect-[16/10] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [background-size:40px_40px]" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="relative h-10 w-10 text-white/15"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="3" y="4" width="18" height="16" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className="grid grid-cols-12 items-center gap-y-6 lg:gap-x-8">
      {/* Media */}
      <motion.div
        variants={slideIn(flip ? "right" : "left")}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className={cn("col-span-12 lg:col-span-7", flip && "lg:order-2")}
      >
        <ImagePlaceholder />
      </motion.div>

      {/* Info */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className={cn("col-span-12 lg:col-span-5", flip && "lg:order-1")}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-[15px] text-muted/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="text-[13px] uppercase tracking-[0.16em] text-muted/70">
            {project.category}
          </span>
        </div>
        <h3 className="mt-4 font-display text-4xl text-white">{project.title}</h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">{project.summary}</p>
      </motion.div>
    </div>
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

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
