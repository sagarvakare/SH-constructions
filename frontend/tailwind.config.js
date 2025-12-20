/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",  // <--- CHANGED: Looks in ALL subfolders, not just src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}