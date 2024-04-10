/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayH: "#343a40",
        orangeH: "#ffd7ba",
        backColor: "#dfdeda",
        darkColor:"#5b5754",
        creamColor:"#9e8e7f",
        blackColor:"#2a2a2a",
        lightRed:"#e6a5a3"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
