/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hue1: "#EEFDFF",
        hue2: "#DAF6FF",
        hue3: "#C5EFFF",
        hue4: "#9BE0FF",
        hue5: "#71D1FF",
        hue6: "#5CCAFF",
        hue7: "#47C2FF"
      },
      fontDarkBlue : '#47C2FF',
      
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("daisyui")],
};