import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#EDE5D8",
        beige: "#D8C8B4",
        taupe: "#9B8D7A",
        sage: "#6E7C61",
        forest: "#2F4A3A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      borderRadius: {
        xl2: "1.75rem",
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(47, 74, 58, 0.15)",
        softer: "0 4px 18px -8px rgba(47, 74, 58, 0.12)",
        lift: "0 20px 45px -18px rgba(47, 74, 58, 0.28)",
      },
      maxWidth: {
        content: "1400px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        leafDraw: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        leafDraw: "leafDraw 1.6s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
