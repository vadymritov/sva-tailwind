/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    fontFamily: {
      marydale: ['"Marydale"', "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("./plugins/openVariant")],
};
