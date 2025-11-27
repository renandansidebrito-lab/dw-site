/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: '#772c2c',
        brand2: '#744d44',
        brandLight: '#e1e2cc',
      },
    },
  },
  plugins: [],
};
