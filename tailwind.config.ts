import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#03060c",
        ink: "#07101e",
        panel: "rgba(15, 23, 42, 0.72)",
        line: "rgba(255,255,255,0.12)",
        muted: "#9aa7bc",
        neonRed: "#ff2638",
        neonCyan: "#19e6ff",
        neonGreen: "#52ff9c",
        neonAmber: "#ffb020",
        violetPulse: "#8b5cf6"
      },
      boxShadow: {
        neon: "0 0 42px rgba(25, 230, 255, 0.22)",
        redglow: "0 0 42px rgba(255, 38, 56, 0.22)",
        glass: "0 20px 80px rgba(0,0,0,0.34)"
      },
      animation: {
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        float: "float 5s ease-in-out infinite"
      },
      keyframes: {
        pulseSlow: {
          "0%,100%": { opacity: ".58", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
