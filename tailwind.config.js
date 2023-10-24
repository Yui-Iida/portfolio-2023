/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.js", // JavaScript ファイル
    "./index.html",
    // "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
    },
  },
  plugins: [],
  darkMode: "class",
};
