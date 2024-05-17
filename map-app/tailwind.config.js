/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'lg':'1133px',
        '3xl':'1800px',
        '4xl':'2100px'
      }
    },
  },
  plugins: [],
}

