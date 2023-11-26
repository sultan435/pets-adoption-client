/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'violet': '#112A46',
        'pink': '#F8467C'
      }
    },
  },
  plugins: [require("daisyui")],
}

