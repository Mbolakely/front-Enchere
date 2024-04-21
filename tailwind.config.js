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
        'vehicules': "url('/src/assets/vehicules.PNG')",
        'arts': "url('/src/assets/arts.PNG')",
        'car': "url('/src/assets/car.jpg')",
        'appareils': "url('/src/assets/appareils.jpg')",
        'textiles': "url('/src/assets/textiles.jpg')",
        'immobiliers': "url('/src/assets/immobiliers.jpg')",
        'autres': "url('/src/assets/autres.jpg')",
        'logo2': "url('/src/assets/Group 2.png')",
        'logo1': "url('/src/assets/Group 1.png')",
        'neutre': "url('/src/assets/neutre.jpg')",
        'neutre2': "url('/src/assets/neutre2.jpg')",
        'ceramic': "url('/src/assets/ceramic.jpg')",
        'ferrari': "url('/src/assets/ferrari.jpg')",
        'penthouse': "url('/src/assets/penthouse.jpg')",
        'tapis': "url('/src/assets/tapis.jpg')",
        'leica': "url('/src/assets/leica.jpg')",
        'sculpture': "url('/src/assets/sculpture.jpg')",
        'tableau': "url('/src/assets/tableau.jpg')",
        'mercedes': "url('/src/assets/mercedes.jpg')",
        'chateau': "url('/src/assets/chateau.jpg')",
        'kimono': "url('/src/assets/kimono.jpg')",
        'mac': "url('/src/assets/mac.jpg')",
        'book': "url('/src/assets/book.jpg')",
        'statue': "url('/src/assets/statue.jpg')",
        'bmw': "url('/src/assets/bmw.jpg')",
        'villa': "url('/src/assets/villa.jpg')",
        'chale': "url('/src/assets/chale.jpg')",
        'ps5': "url('/src/assets/ps5.jpg')",
        'bijoux': "url('/src/assets/bijoux.jpg')",
        'instrument': "url('/src/assets/instrument.jpg')",
        'porsche': "url('/src/assets/porsche.jpg')",
        'maison': "url('/src/assets/maison.jpg')",
        'echarpe': "url('/src/assets/echarpe.jpg')",
        'tele': "url('/src/assets/tele.jpg')",
        'vynile': "url('/src/assets/vynile.jpg')",
        'illustration': "url('/src/assets/illustration.jpg')",
        'illustration2': "url('/src/assets/illustration2.jpg')"
      }
    },
  },
  plugins: [],
}