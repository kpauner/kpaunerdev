import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import { createPreset } from "fumadocs-ui/tailwind-plugin"

const config = {
  darkMode: ["class"],
  presets: [createPreset()],
  content: [
    "./pages/**/*.{ts,tsx, md, mdx}",
    "./components/**/*.{ts,tsx, md, mdx}",
    "./app/**/*.{ts,tsx, md, mdx}",
    "./src/**/*.{ts,tsx, md, mdx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "../../node_modules/fumadocs-ui/dist/**/*.js",
    "./content/**/*.mdx",
    "./mdx-components.tsx",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-suisseintlmono)", "sans-serif"],
        sans: ["var(--font-saans)", "sans-serif"],
        mango: ["var(--font-mango)", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      colors: {
        paper: "#f6f2ea",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      })
    }),
  ],
} satisfies Config

export default config
