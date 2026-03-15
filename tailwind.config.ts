import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Savri Brand Colors
        rose: {
          DEFAULT: "#B5636A",
          dark: "#9A5158",
        },
        cream: {
          DEFAULT: "#F5F0EB",
          dark: "#E8E2DC",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#C9A227",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      transitionDuration: {
        "600": "600ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
