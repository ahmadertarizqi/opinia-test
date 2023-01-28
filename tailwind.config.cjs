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
        "primary": "#05b1a1",
        "primary-light": "#ace5e0",
        "secondary": "#ea6c00",
        "secondary-light": "#ffc089"
      },
      maxWidth: {
        "8xl": "90rem"
      },
      boxShadow: {
        "sm-reverse": "0 -1px 2px 0 rgb(0 0 0 / 0.05)",
        "app-auth": "0px 0px 13px rgba(13, 15, 19, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)"
      }
    },
  },
  plugins: [],
}
