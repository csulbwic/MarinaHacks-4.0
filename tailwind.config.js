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
        mhblue: "#7CCDf3",
        mhsky: "#9bb0da",
        mhpink : {
          100: "#E8ACC9",
          200: "#E38FB6",
          300: "#CF7DAD",
        },
        mhpurple: {
          100: "#B47AAE",
          200: "#9B78B0",
          300: "#7E76B1",
          400: "#7275B6",
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [require("daisyui")],
};
