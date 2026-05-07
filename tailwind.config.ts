import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#03060c",
        panel: "rgba(15, 23, 42, 0.72)",
        neonRed: "#ff2638",
        neonCyan: "#19e6ff",
        neonGreen: "#52ff9c",
        muted: "#9aa7bc"
      },
      boxShadow: {
        neon: "0 0 40px rgba(25, 230, 255, 0.20)",
        redglow: "0 0 40px rgba(255, 38, 56, 0.22)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
