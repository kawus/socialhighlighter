import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Layers
        bg: {
          primary: "#0A0A0B",
          secondary: "#111113",
          tertiary: "#1A1A1D",
        },
        // Accent Colors
        accent: {
          primary: "#00FF87",
          secondary: "#00D4FF",
        },
        // Energy Colors
        energy: {
          hot: "#FF4D4D",
          warm: "#FFB800",
          cool: "#7B61FF",
        },
      },
      fontFamily: {
        display: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        body: [
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ["SF Mono", "JetBrains Mono", "monospace"],
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "pulse-live": "pulse-live 2s infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-live": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,77,77,0.7)" },
          "50%": { boxShadow: "0 0 0 8px rgba(255,77,77,0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,255,135,0.3)",
        "glow-lg": "0 0 40px rgba(0,255,135,0.4)",
        "glow-warm": "0 0 20px rgba(255,184,0,0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "linear-gradient(180deg, rgba(0,255,135,0.15) 0%, transparent 40%, transparent 100%)",
        "card-glow":
          "radial-gradient(ellipse at center, rgba(0,255,135,0.1) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
