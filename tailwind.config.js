/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#010851',
        "secoundary": "#9A7AF1",
        "tartiary": "#707070",
        "pink": "#EE9AE5",
      }
    },
  },
  plugins: [],
}

