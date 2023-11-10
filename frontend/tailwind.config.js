/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['"Roboto"', "sans-serif"],
        "Rubik": ['"Rubik"', "sans-serif"],
      },
      colors:{
        "primary":"#3B82F6",
        "dark":"#304049",
        "light":"white",
      }
    },
  },
  plugins: [],
};
