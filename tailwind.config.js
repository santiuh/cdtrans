/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D8261C",
        primaryCD: "#D8261C",
        secondary: "#8E0610",
        tertiary: "#e1e1dd",
        persogreen: "#409474",
        gray: "#EDEEEF",
        persoblack: "#1A1A18",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
    },
    screens: {
      lg: "1080px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": { textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-md": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-lg": { textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)" },
      });
    },
  ],
};
