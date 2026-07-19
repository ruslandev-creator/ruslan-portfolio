import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Consistent bordered label badge: [ icon ] Label
 * Sharp corners, 1px #2A2A2A border, transparent, monochrome Lucide icon.
 */
export function SectionBadge({
  icon: Icon,
  label,
  size = "sm",
  className,
}: {
  icon: LucideIcon;
  label: string;
  size?: "sm" | "lg";
  className?: string;
}) {
  const sizing = size === "lg" ? "h-[42px] px-5" : "h-9 px-4";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-[#2A2A2A] bg-transparent text-[13px] font-medium tracking-[0.04em] text-[#B5B5B5]",
        sizing,
        className,
      )}
    >
      <Icon size={16} strokeWidth={1.5} className="shrink-0" aria-hidden />
      <span>{label}</span>
    </span>
  );
}
