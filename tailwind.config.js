/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = withMT({
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
});

