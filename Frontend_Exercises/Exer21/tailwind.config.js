/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '240px',
        'tablet': '425px',
        'laptop': '810px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}

