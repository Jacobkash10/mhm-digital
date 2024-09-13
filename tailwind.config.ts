import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "560px",
      sm: "640px",  
      md: "768px",  
      lg: "960px",  
      xl: "1200px",
      xxl: "1440px",
      xll: "1800px",
      xxx: "2000px",
      lll: "2200px"
    },
    fontFamily: {
      primary: "var(--font-plusJakartaSans)"
    },
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/home_banner.jpg')",
      },
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#f56565',
          hover: '#f56565'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config