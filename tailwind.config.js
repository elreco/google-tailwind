/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        google: {
          50: '#303134',
          100: '#202124',
          150: '#171717'
        }
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
