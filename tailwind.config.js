/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      montserat:['Montserrat Alternates','sans-serif'],
      OpenSans: ['Open Sans', 'sans-serif'], 
      Righteous: ['Righteous', 'cursive'],
      }
    },
  },
  plugins: [],
}