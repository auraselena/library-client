/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#040f16',
        sidebarText: '#fffbfc',
        bg: '#141d21'
      }
    },
  },
  plugins: [],
}