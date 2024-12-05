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
        orange: {
          700: "#BF7A24",
        },
      },
    },
  },
  plugins: [],
};
