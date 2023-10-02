/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#DFDFDF",
        orange: "#FFC593",
        pink: "#BC7198",
        blue: "#5A77FF",
      },
      fontFamily: {
        dm: "DM Sans, sans-serif",
      },
      gridTemplateColumns: {
        stories: "repeat(auto-fit, minmax(20rem, 1fr))",
        features: "repeat(auto-fit, minmax(22rem, 1fr))",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
  },
  plugins: [],
}
