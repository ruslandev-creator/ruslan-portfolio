import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);

export const Cross = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Spark = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8.5 13.4 12 12 15.5 10.6 12 12 8.5Z" />
  </svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
  </svg>
);

export const Target = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const Device = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="13" height="11" rx="1.5" />
    <path d="M3 15h13" />
    <rect x="17" y="8" width="4.5" height="12" rx="1.2" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const Gem = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 3h12l3 6-9 12L3 9l3-6Z" />
    <path d="M3 9h18M9 3 7 9l5 12M15 3l2 6-5 12" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5c0 8.3 6.7 15 15 15a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.2-1.47l-2.6-.52a1.5 1.5 0 0 0-1.5.62l-.6.86A11.5 11.5 0 0 1 8 8l.86-.6a1.5 1.5 0 0 0 .62-1.5l-.52-2.6A1.5 1.5 0 0 0 7.5 2.5" />
  </svg>
);

// Telegram — filled paper-plane (uses fill, not stroke)
export const Telegram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.94 4.66a1.2 1.2 0 0 0-1.24-.2L3.4 11.2c-.86.34-.83 1.58.05 1.87l4.34 1.42 1.64 5.02c.2.62 1 .8 1.46.33l2.4-2.43 4.3 3.16c.5.37 1.22.1 1.36-.5l3.02-14.2a1.2 1.2 0 0 0-.48-1.23ZM9.9 14.2l-.6 3.9-.9-2.9 7.02-6.3-5.52 5.3Z" />
  </svg>
);

export const iconMap = {
  spark: Spark,
  bolt: Bolt,
  target: Target,
  device: Device,
  search: Search,
  gem: Gem,
} as const;

export const Logo = (p: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" {...p}>
    <rect x="1" y="1" width="30" height="30" rx="9" stroke="currentColor" strokeOpacity="0.25" />
    <path
      d="M11 22V10h5.2c2.4 0 4 1.4 4 3.6 0 1.7-1 2.9-2.6 3.3L21 22h-2.8l-2.9-4.6H13.6V22H11Zm2.6-6.6h2.3c1.1 0 1.8-.5 1.8-1.5s-.7-1.5-1.8-1.5h-2.3v3Z"
      fill="currentColor"
    />
  </svg>
);
