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
        red: "#D01C28",
         'complementary-gray': '#595A5A',
        'analogous-gray-1': '#59595A',
        'analogous-gray-2': '#595A59',
        'triadic-gray-1': '#595A59',
        'triadic-gray-2': '#59595A',
        'tetradic-gray-1': '#595A59',
        'tetradic-gray-2': '#5A595A',
        'tetradic-gray-3': '#59595A',

        // Monochromatic Colors
        'monochromatic-light-gray': '#6A6969',
        'monochromatic-dark-gray': '#4A4949',
      }
    },
  },
  plugins: [],
}

