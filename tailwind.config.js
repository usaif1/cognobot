const Colors = require("./src/utils/Colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        orange1: "#F5821F",
        orange2: "#FF5C00",
      }),
      height: {
        chatbot: "40rem",
      },
      boxShadow: {
        roundedicon: "0px 0px 15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
