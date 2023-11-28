/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray': '#333333',
        'orange': '#f1823d',
        "offWhite": "#f8f3e8"
      }
    },
  },
  plugins: [require("daisyui")],
}

