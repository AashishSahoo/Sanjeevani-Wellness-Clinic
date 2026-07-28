import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16231F",
        ivory: "#FBF8F3",
        pine: {
          DEFAULT: "#1F4D42",
          light: "#2F6B5B",
          dark: "#123029",
          50: "#EEF4F1",
        },
        sage: {
          DEFAULT: "#DCE6DE",
          dark: "#B9CBBC",
        },
        copper: {
          DEFAULT: "#B8703F",
          light: "#D08E5C",
          dark: "#8F5730",
        },
        gold: "#C9A227",
        line: "#D8D2C4",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "6px",
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgba(22, 35, 31, 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseLine: "pulseLine 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
