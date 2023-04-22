/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      mhblue: "#7CCDf3",
      mhpink100: "#E8ACC9",
      mhpink200: "#E38FB6",
      mhpink300: "#CF7DAD",
      mhpurple100: "#B47AAE",
      mhpurple200: "#9B78B0",
      mhpurple300: "#7E76B1",
      mhpurple400: "#7275B6",
    }
  },
  plugins: [require("daisyui")],
}