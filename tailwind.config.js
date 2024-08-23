/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "maize" : "#F1E038",
        "latte" : "#FCF8E7",
        "black" : "#000"
      },
    },
  },
  plugins: [],
}

