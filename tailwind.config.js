/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#6aa274",
          500: "secondary",
        },
      },
    },
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      base: "1.25rem",
      lg: "1.4rem",
      xl: "1.6rem",
      "2xl": "2.0rem",
      "3xl": "3.0rem",
    },
  },
  plugins: [],
};
