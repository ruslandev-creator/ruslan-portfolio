import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionBadge } from "./SectionBadge";

type SectionHeadingProps = {
  eyebrow: string;
  icon: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

/**
 * Every section opens like a new chapter:
 *   [ badge ]  →  large dominant heading (~55–60px)  →  centered description.
 * Always center-aligned; generous spacing between heading and description.
 */
export function SectionHeading({
  eyebrow,
  icon,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Reveal className="mb-8">
        <SectionBadge icon={icon} label={eyebrow} />
      </Reveal>

      <Reveal
        as="div"
        delay={0.08}
        className="mx-auto max-w-[700px] font-display text-heading font-medium text-white"
      >
        {title}
      </Reveal>

      {description && (
        <Reveal
          delay={0.16}
          className="mx-auto mt-8 max-w-[650px] text-balance text-subheading text-muted"
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
