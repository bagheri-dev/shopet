/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#F7763D",
        "second" : "#519BC2",
      },
      fontFamily : {
        "IRANSans" : "IRANSans",
        "Peyda" : "Peyda",
      }
    },
  },
  plugins: [],
}