/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        lime: '#65f640',
        midnight: '#1d133b'
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
