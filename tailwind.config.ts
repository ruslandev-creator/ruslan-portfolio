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
        // Engineered monochrome system
        ink: {
          950: "#050505", // background
          900: "#0E0E0E", // surface
          800: "#141414", // raised surface
          700: "#1A1A1A",
          600: "#222222",
        },
        line: {
          soft: "#171717",
          DEFAULT: "#222222", // border
          strong: "#333333",
        },
        muted: "#A1A1AA", // secondary text
        accent: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#ECECEC",
          300: "#CFCFCF",
          400: "#FFFFFF",
          500: "#FFFFFF",
          600: "#D4D4D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2rem, 8vw, 5.625rem)", { lineHeight: "1.08", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.045em" }],
        // Section headings — dominant, 60–90px on desktop (shrinks on mobile)
        "heading": ["clamp(2.25rem, 6vw, 5.625rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "subheading": ["18px", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      maxWidth: {
        content: "1200px",
        prose: "620px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #050505 94%), linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 9s ease infinite",
        marquee: "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
    // 0px radius — everywhere. Every rounded-* utility resolves to a sharp corner.
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      "4xl": "0",
      full: "0",
    },
    // No shadows anywhere.
    boxShadow: {
      none: "none",
      card: "none",
      float: "none",
      glow: "none",
      DEFAULT: "none",
      sm: "none",
      md: "none",
      lg: "none",
      xl: "none",
    },
  },
  plugins: [],
};

export default config;
