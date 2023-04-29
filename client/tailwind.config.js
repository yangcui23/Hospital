/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hospital' : "url('src/assets/hospital.jpg')",
        'back' : "url('src/assets/background.jpg')"
      },
      fontFamily : {
        'bruno ace' : ['"Bruno Ace"','cursive'],
        'instrument' : ['Instrument Serif' ,'regular 400']
      }
    },
  },
  plugins: [],
}

