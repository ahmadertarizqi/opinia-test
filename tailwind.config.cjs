/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var, sans-serif"]
      },
      colors: {
        "primary": "#05B1A1",
        "primary-light": "#ACE5E0"
      },
      maxWidth: {
        "8xl": "90rem"
      },
      boxShadow: {
        "sm-reverse": "0 -1px 2px 0 rgb(0 0 0 / 0.05)"
      }
    },
  },
  plugins: [],
}
