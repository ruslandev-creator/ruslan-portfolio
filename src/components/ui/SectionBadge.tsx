import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Consistent section label: a sharp-cornered bordered badge with a
 * monochrome Lucide icon. [ icon ] Label
 */
export function SectionBadge({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-9 items-center gap-2 border border-[#2A2A2A] bg-transparent px-4 text-[13px] font-medium tracking-[0.04em] text-[#B5B5B5]",
        className,
      )}
    >
      <Icon size={16} strokeWidth={1.5} className="shrink-0" aria-hidden />
      <span>{label}</span>
    </span>
  );
}
