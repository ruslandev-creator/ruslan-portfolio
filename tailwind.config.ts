import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      colors: {
        // Strict two-tone monochrome system: #191919 (dark) / #F4F4F4 (light)
        ink: {
          950: "#141414",
          900: "#191919", // main background
          800: "#1F1F1F",
          700: "#262626",
          600: "#303030",
        },
        line: {
          soft: "rgba(244,244,244,0.06)",
          DEFAULT: "rgba(244,244,244,0.10)",
          strong: "rgba(244,244,244,0.18)",
        },
        // "accent" is now light/neutral — keeps the whole palette monochrome
        accent: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#ECECEC",
          300: "#CFCFCF",
          400: "#F4F4F4",
          500: "#F4F4F4",
          600: "#C4C4C4",
        },
      },
      fontFamily: {
        // Geist Mono everywhere
        sans: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2rem, 8vw, 5rem)", { lineHeight: "1.14", letterSpacing: "-0.05em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        // Big section headings
        "heading": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.045em" }],
        "subheading": ["18px", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
      },
      maxWidth: {
        content: "1200px",
        prose: "680px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(244,244,244,0.05) inset, 0 24px 60px -24px rgba(0,0,0,0.8)",
        float: "0 40px 120px -32px rgba(0,0,0,0.9), 0 1px 0 0 rgba(244,244,244,0.06) inset",
        glow: "0 0 0 1px rgba(244,244,244,0.14), 0 24px 80px -20px rgba(244,244,244,0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #191919 92%), linear-gradient(rgba(244,244,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,244,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        "glow-pulse": "glow-pulse 7s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
