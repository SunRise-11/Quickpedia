import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        primaryB: "#8ecae6",
        secondary: "#ffb703",
        secondaryB: "#fb8500",
        ternary: "#219ebc"
      },
    },
  },
  plugins: [],
}
export default config


