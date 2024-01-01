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
        secondaryB: {
          "50": "#fff1f3",
          "100": "#ffe3e8",
          "200": "#ffccd7",
          "300": "#ffa1b6",
          "400": "#ff6d90",
          DEFAULT: "#f92d64",
          "500": "#f92d64",
          "600": "#e71759",
          "700": "#c30d4b",
          "800": "#a30e46",
          "900": "#8b1042",
          "950": "#4e031f",
        },
        ternary: {
          "50": "#f2fbf8",
          "100": "#d2f5e9",
          "200": "#a6e9d4",
          "300": "#71d7bb",
          "400": "#43be9f",
          DEFAULT: "#2fb596",
          "500": "#2fb596",
          "600": "#1f826d",
          "700": "#1d6859",
          "800": "#1b5449",
          "900": "#1b463e",
          "950": "#0a2924",
        },
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
        expand_high: {
          "0%": { opacity: "0", maxHeight: "0px" },
          "100%": { opacity: "1", maxHeight: "400px" },
        },
        expand: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        expand: "expand 0.3s ease-out forwards",
        expand_high: "expand_high 0.4s ease-out forwards",
        shimmer_2s_delay_1: 'shimmer 2s infinite linear 1s',
        shimmer_2s_delay_2: 'shimmer 2s infinite linear 2s',
        shimmer_2s_delay_3: 'shimmer 2s infinite linear 3s',
        shimmer_2s_delay_4: 'shimmer 2s infinite linear 4s',
        shimmer_2s_delay_5: 'shimmer 2s infinite linear 5s',
      },
    },
  },
  plugins: [],
};

export default config;
