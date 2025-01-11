import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/toggle.js"
  ],
  theme: {
    extend: {
      animation: {
        "slide-right": "slideRight 0.5s ease-out forwards",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8A226F",
        border:"#D9D9D9",
        "custom-gray-100": "#D9D9D9"
      },
      borderRadius: {
        'custom-12': '12px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), #FFFFFF',
      },
      border: {},
    },
  },
  plugins: [nextui()],
} satisfies Config;
