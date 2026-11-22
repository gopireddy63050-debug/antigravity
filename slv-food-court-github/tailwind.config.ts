import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slv: {
          red: "#CB1D1D",
          "red-dark": "#A81414",
          "red-light": "#E63939",
          orange: "#EF6414",
          "orange-dark": "#D3510A",
          "orange-light": "#FF7E36",
          white: "#FFFFFF",
          cream: "#FDFBF7",
          warm: "#F7F2EA",
          amber: "#FFAA28",
          charcoal: "#0E0505",
          "dark-card": "#1A0909",
          "dark-border": "#341212",
        },
      },
      backgroundImage: {
        "slv-gradient": "linear-gradient(135deg, #CB1D1D 0%, #EF6414 100%)",
        "slv-gradient-subtle": "linear-gradient(135deg, rgba(203, 29, 29, 0.15) 0%, rgba(239, 100, 20, 0.15) 100%)",
        "slv-radial-glow": "radial-gradient(circle at 50% 50%, rgba(203, 29, 29, 0.25) 0%, rgba(239, 100, 20, 0.12) 50%, transparent 80%)",
        "slv-dark-radial": "radial-gradient(ellipse at top, #240A0A 0%, #0E0505 100%)",
      },
      fontFamily: {
        serif: ["var(--font-roboto-serif)", "Georgia", "serif"],
        display: ["var(--font-rozha-one)", "var(--font-roboto-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite alternate",
        "float-gentle": "floatGentle 5s ease-in-out infinite",
        "steam": "steam 4s ease-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(203, 29, 29, 0.35))" },
          "100%": { filter: "drop-shadow(0 0 35px rgba(239, 100, 20, 0.7))" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
        steam: {
          "0%": { transform: "translateY(0px) scaleX(1)", opacity: "0" },
          "50%": { opacity: "0.6" },
          "100%": { transform: "translateY(-40px) scaleX(1.4)", opacity: "0" },
        },
      },
      boxShadow: {
        "slv-glow": "0 0 40px -5px rgba(203, 29, 29, 0.4)",
        "slv-glow-orange": "0 0 40px -5px rgba(239, 100, 20, 0.45)",
        "slv-card": "0 10px 30px -10px rgba(14, 5, 5, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
