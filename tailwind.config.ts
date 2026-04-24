import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "oklch(0.195 0.006 80)",
        surface: {
          DEFAULT: "oklch(0.220 0.006 80)",
          raised:  "oklch(0.235 0.007 80)",
          hover:   "oklch(0.260 0.007 80)",
        },
        ink: {
          DEFAULT:   "oklch(0.975 0.005 80)",
          secondary: "oklch(0.810 0.008 80)",
          muted:     "oklch(0.640 0.010 80)",
          dim:       "oklch(0.510 0.012 80)",
          faint:     "oklch(0.400 0.012 80)",
        },
        rule: {
          subtle: "oklch(0.275 0.008 80)",
          DEFAULT: "oklch(0.340 0.009 80)",
          strong: "oklch(0.440 0.010 80)",
        },
        signal: {
          DEFAULT: "oklch(0.840 0.150 78)",
          ink:     "oklch(0.190 0.060 78)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "display": "-0.038em",
        "hero":    "-0.042em",
      },
    },
  },
  plugins: [],
};

export default config;
