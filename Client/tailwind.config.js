/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode toggling
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ['"Saira Stencil One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
