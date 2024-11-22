import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#4F46E523",
        tertiary: "#BFFA43",
        back: "#FFF",
        back2: "gray",
        white: "#FFF",
        dangerous: "#DC143C",
        transparent: "#fff0",
        black: "#000",
        dlgBack: "#191919",
      },
    },
  },
  plugins: [],
};
export default config;
