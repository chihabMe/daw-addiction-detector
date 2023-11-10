/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['"Roboto"', "sans-serif"],
        "rubik": ['"Rubik"', "sans-serif"],
        "inter": ['"Inter"', "sans-serif"],
      },
      colors:{
        "primary":"#3B82F6",
        "dark":"#202b30",
        "light":"white",
        "text-dark":"#616872",
        "text-darker":"#1F2937",
        "text-light":"#fcfcfc",
        "text-ligther":"#ffffff"
      }
    },
  },
  plugins: [],
};
