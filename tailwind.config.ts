import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#14181C",
          900: "#1B2027",
          800: "#262D36",
          700: "#3A424D",
          500: "#5B6572",
          300: "#9AA3AD",
        },
        fog: {
          50: "#FAFAFA",
          100: "#F4F5F6",
          200: "#E7E9EC",
        },
        brand: {
          DEFAULT: "#C9060A",
          deep: "#9A0407",
          bright: "#E10E13",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,24,28,0.04), 0 1px 12px rgba(20,24,28,0.06)",
        "card-hover": "0 4px 8px rgba(20,24,28,0.06), 0 8px 24px rgba(15,76,129,0.10)",
      },
      keyframes: {
        "grid-drift": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "grid-drift": "grid-drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
