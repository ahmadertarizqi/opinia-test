/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05B1A1"
      },
      maxWidth: {
        "8xl": "90rem"
      }
    },
  },
  plugins: [],
}
