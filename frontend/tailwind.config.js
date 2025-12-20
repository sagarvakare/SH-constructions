/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These are the EXACT colors from jrconstructionsandsolutions.com
        'jr-blue': '#0c2b64', 
        'jr-orange': '#f15a22',
        'jr-light': '#f8f9fa',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}