/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: '#00ff00',
      black: '#02040f',
      blue: '#0f1a64',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        'poppins': ['Handjet', 'cursive'],
      }
    },
  },
  plugins: [],
}

