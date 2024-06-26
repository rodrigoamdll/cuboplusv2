/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./node_modules/flowbite/**/*.js"
          ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#235fa9',
          orange: '#f39323'
        }
      }
  }
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
  ],
}

