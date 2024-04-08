/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        blue: "#3F8BFC",
        light_cyan: "#AEFFFF",
        dark_black: "#000000",
        red: "#D01C28"
      }
    },
  },
  plugins: [],
}

