/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayH: "#343a40",
        orangeH: "#ffd7ba",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
