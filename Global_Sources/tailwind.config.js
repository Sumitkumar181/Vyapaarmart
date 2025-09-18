/** @type {import('tailwindcss').Config} */
const pluginAnimate = require("tailwindcss-animate");

module.exports = {
  darkMode: ["class"], 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    container: {
      center: true, 
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
    
      screens: {
        xss: "350px",
        xs: "450px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        libertinus: ["Libertinus Serif", "serif"],
        audiowide: ["Audiowide", "cursive"],
      },
      colors: {
        gray: "#2d2d2d",
        orange: "#C65E3B",
        charcoal: "#3B3A3F",
        richBlack: "#231F20",
        footer: "#1C1C1C",
        darkRed: "#e50113",
        lightRed: "#EE343B",
        darkIndigo: "#7a45e5",
        lightgray: "#88898a",

        // CSS variables (HSL)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          light: "hsl(var(--primary-light))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
          light: "hsl(var(--accent-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        "nav-hover": "hsl(var(--nav-hover))",
        "kpi-bg": "hsl(var(--kpi-bg))",
        "status-new": "hsl(var(--status-new))",
        "status-contacted": "hsl(var(--status-contacted))",
        "status-quoted": "hsl(var(--status-quoted))",
        "status-closed": "hsl(var(--status-closed))",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        hover: "var(--shadow-hover)",
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
      backgroundImage: {
        "brown-radial":
          "radial-gradient(circle, #C65E3B, #7C4D3B, #00273E)",
      },
    },
  },
  plugins: [pluginAnimate],
};
