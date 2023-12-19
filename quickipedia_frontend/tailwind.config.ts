import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8758FF",
        primaryB: "#FAF5FF",
        primaryC: "#8758FF",
        secondary: "#000000",
        secondaryB: "#F92D64",
        ternary: "#2fb596",
      },
      screens: {
        betterhover: { raw: "(hover: hover) and (min-width: 1024px)" },
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        expand: {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        expand: "expand 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
