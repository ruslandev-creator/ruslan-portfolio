import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Tailwind's default scale is a 4px base that lands cleanly on an 8px
      // rhythm; we keep it and add a couple of larger steps for premium spacing.
      spacing: {
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
      },
      colors: {
        // Deep, slightly-blue near-black canvas
        ink: {
          950: "#050609",
          900: "#08090F",
          800: "#0C0E16",
          700: "#12151F",
          600: "#191D2A",
        },
        line: {
          soft: "rgba(255,255,255,0.06)",
          DEFAULT: "rgba(255,255,255,0.10)",
          strong: "rgba(255,255,255,0.16)",
        },
        // Restrained blue accent — the only chromatic color in the system
        accent: {
          50: "#EAF2FF",
          200: "#B9D2FF",
          300: "#8EB6FF",
          400: "#5B93FF",
          500: "#3B82F6",
          600: "#2B6CE0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 6.25rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.9rem, 3.6vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
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
        // Premium, layered elevation
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 60px -24px rgba(0,0,0,0.8)",
        float: "0 40px 120px -32px rgba(0,0,0,0.9), 0 1px 0 0 rgba(255,255,255,0.06) inset",
        glow: "0 0 0 1px rgba(91,147,255,0.18), 0 24px 80px -20px rgba(59,130,246,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #050609 92%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
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
