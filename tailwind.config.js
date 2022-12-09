/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animatedSettings: {
      animatedSpeed: 2000,
      classes: ['fadeIn']
    },
    extend: {
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
}
