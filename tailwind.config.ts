import { Brygada_1918 } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1979px" },

      xl: { max: "1439px" },

      lg: { max: "959px" },

      md: { max: "767px" },

      sm: { max: "374px" },
    },
    fontFamily: {
      Brygada_1918: ["Brygada_1918"],
    },
    extend: {
      colors: {
        gray: "#4E4E4E",
        purpleUl: "#8000FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
