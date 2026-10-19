import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: {
          50:  "#f8faff",
          100: "#eef2fc",
          200: "#dce4f5",
          300: "#c4d0ea",
          400: "#a8b8d8",
          500: "#8899bb",
          600: "#6677a0",
          700: "#4d5a80",
          800: "#343f60",
          900: "#1e2540",
        },
        ink: {
          50:  "#0a0a14",
          100: "#0d0d1a",
          200: "#111120",
          300: "#16162a",
          400: "#1d1d38",
          500: "#252550",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-silver": "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(140,155,210,0.12) 0%, transparent 70%)",
        "radial-deep":   "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(80,90,160,0.08) 0%, transparent 70%)",
        "shimmer-line":  "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
      },
      animation: {
        float:       "float 6s ease-in-out infinite",
        "pulse-slow":"pulse-slow 4s ease-in-out infinite",
        shimmer:     "shimmer 3s linear infinite",
        grain:       "grain 8s steps(10) infinite",
      },
      keyframes: {
        float:       { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "pulse-slow":{ "0%,100%": { opacity: "0.4" }, "50%": { opacity: "0.8" } },
        shimmer:     { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        grain:       { "0%,100%": { transform: "translate(0,0)" }, "50%": { transform: "translate(-2%,2%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
