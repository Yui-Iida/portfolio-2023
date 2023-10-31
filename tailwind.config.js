/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.js", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      scale: {
        200: "2",
        300: "3",
      },
      maxWidth: {
        "2xs": "12rem",
      },
      outlineWidth: {
        thin: "0.5px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
