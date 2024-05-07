/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['"Manrope", sans-serif'],
      headling: ['"NeueMontreal"'],
    },
    screens: {
      mobile: "360px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        "primary-dark": "#181818",
        black: "#000000",
        "light-blue": "#8ab4f8",
        "dark-gray": "#373535",
        "medium-gray": "#898989",
        "light-gray": "#c2c2c2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
