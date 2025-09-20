/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7f7672",
          300: "#938883",
        },
        secondary: {
          DEFAULT: "#6aa274",
          300: "#83b18b",
        },
      },
    },
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      base: "1.25rem",
      lg: "1.35rem",
      xl: "1.6rem",
      "2xl": "1.8rem",
      "3xl": "2.6rem",
    },
  },
  plugins: [],
};
