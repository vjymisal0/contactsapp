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
        blue: "3F8BFC",
        yellow: "#AEFFFF",
        orange: "#000000",
        purple: "5A5959",
        red: "#D01C28"
      }
    },
  },
  plugins: [],
}

