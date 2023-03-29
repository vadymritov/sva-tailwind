/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
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
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/forms"),
    require("./plugins/openVariant"),
  ],
};
