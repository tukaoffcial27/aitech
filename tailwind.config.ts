import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Menjaga jika nanti ada folder components
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: "#C5A059",
          cream: "#F9F6F0",
          pearl: "#FFFFFF",
          dark: "#1A1A1A",
        }
      }
    },
  },
  plugins: [],
};
export default config;