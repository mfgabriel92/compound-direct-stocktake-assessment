/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F7FAFC",
          100: "#EDEDED",
          200: "#E2E6ED",
          500: "#4A5568",
          700: "#1B314E",
        },
        blue: {
          300: "#2793F2",
          500: "#296CA6",
        },
        green: {
          200: "#D5E7DE",
          500: "#2F855A",
          700: "#205939",
        },
        orange: {
          700: "#BF7A24",
        },
        brown: {
          200: "#F4EBE1",
          700: "#733F12",
        },
      },
    },
    fontFamily: {
      normal: ["Vazirmatn Regular", "sans-serif"],
      medium: ["Vazirmatn Medium", "sans-serif"],
      bold: ["Vazirmatn Bold", "sans-serif"],
    },
  },
  plugins: [],
};
