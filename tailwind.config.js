/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F7FAFC",
          100: "#EDEDED",
          200: "#cdcdcd",
          500: "#4A5568",
        },
        blue: {
          500: "#296CA6",
        },
        green: {
          500: "#2F855A",
        },
        orange: {
          700: "#BF7A24",
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
