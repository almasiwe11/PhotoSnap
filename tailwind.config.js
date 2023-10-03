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
        stories: "repeat(auto-fit, minmax(22rem, 1fr))",
        "stories-2xl": "repeat(auto-fit, minmax(24rem, 1fr))",
        footer: "max-content, 1fr, max-content",
      },
      backgroundImage: {
        "stories-des": "url(/stories/desktop/moon-of-appalacia.jpg)",
        "stories-tab": "url(/stories/tablet/moon-of-appalacia.jpg)",
        "stories-mob": "url(/stories/mobile/moon-of-appalacia.jpg)",
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
