/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#55423d", 
        button: "#ffc0ad", 
        buttonText: "#271c19",
        text: "#fff3ec", // main
        highlight: "#e78fb3", // pink
        secondary: "#ffc0ad", // Secondary
        stroke: "#140d0b", // borders
        tertiary: "#9656a1",
      },
    },
  },
  plugins: [],
};