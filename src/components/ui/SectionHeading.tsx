import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Consistent section header: eyebrow → glowing rule → title → description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal className="flex items-center gap-2">
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-400/70" />
        <span className="eyebrow">{eyebrow}</span>
        {centered && (
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-accent-400/70" />
        )}
      </Reveal>

      <Reveal
        as="div"
        delay={0.06}
        className={cn("text-display-md text-gradient", centered ? "max-w-3xl" : "max-w-2xl")}
      >
        {title}
      </Reveal>

      {description && (
        <Reveal
          delay={0.12}
          className={cn(
            "mt-1 text-balance text-[17px] leading-relaxed text-white/55",
            centered ? "max-w-prose" : "max-w-xl",
          )}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
