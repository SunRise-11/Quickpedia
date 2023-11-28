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
        primary: "#FFFFFF",
        primaryB: "#000000",
        secondary: "#2E71FF",
        secondaryB: "#F92D64",
        ternary: "#219ebc",
      },
    },
  },
  plugins: [],
};
export default config;
