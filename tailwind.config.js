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
        primary: "#1D1D1B",
        secondary: "#8E0610",
        tertiary: "#e1e1dd",
        gray: "#EDEEEF",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      lg: "1080px",
    },
  },
  plugins: [],
};
