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
  align?: "left" | "center";
  className?: string;
};

/**
 * Har bir blok uchun bir xil sarlavha tuzilishi:
 *   Blok nomi (eyebrow) -> Heading (50–65px) -> Subheading (18px)
 * Heading va subheading orasidagi masofa hamma joyda bir xil.
 */
export function SectionHeading({
  eyebrow,
  icon,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {/* Blok nomi — badge */}
      <Reveal className="mb-6">
        <SectionBadge icon={icon} label={eyebrow} />
      </Reveal>

      {/* Heading */}
      <Reveal
        as="div"
        delay={0.08}
        className={cn(
          "font-display text-heading text-gradient",
          centered ? "max-w-4xl" : "max-w-3xl",
        )}
      >
        {title}
      </Reveal>

      {/* Subheading — heading bilan bir xil masofada */}
      {description && (
        <Reveal
          delay={0.16}
          className={cn(
            "mt-6 text-subheading text-balance text-muted",
            centered ? "max-w-prose" : "max-w-xl",
          )}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
