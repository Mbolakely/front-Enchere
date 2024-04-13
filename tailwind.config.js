/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim': '#410F03',
        'primary': '#1974a8',
        'nav': '#FBEDAE',

      },
      backgroundImage: {
        'car': "url('/src/assets/car.jpg')",
        'desk': "url('/src/assets/desk.jpg')",
        'ordi': "url('/src/assets/ordi.jpg')",
      }
    },
  },
  plugins: [],
}