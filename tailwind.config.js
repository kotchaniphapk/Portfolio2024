/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "-apple-system", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              100: "#CBEAFD",
              200: "#98E7FB",
              300: "#64CFF5",
              400: "#3DA8EB",
              500: "#004AAD",
              600: "#0276BE",
              700: "#02639F",
              800: "#014F80",
              900: "#00416A",
              DEFAULT: "#004AAD",
            },
            secondary: {
              100: "#FEEDD9",
              200: "#FDD6B3",
              300: "#FAB98C",
              400: "#F69C6F",
              500: "#F17041",
              600: "#CF4F2F",
              700: "#AD3220",
              800: "#8B1B14",
              900: "#730C0D",
              DEFAULT: "#F17041",
            },
            content1: {
              DEFAULT: "#FFFFFF",
            },
            content2: {
              DEFAULT: "#F2F6FC",
            },
          }, // light theme colors
        },
      },
    }),
  ],
};
