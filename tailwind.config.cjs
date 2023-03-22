/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        dm: "'DM Serif Display', serif",
      },
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
    plugins: [require("tailwindcss-opentype")],
  },
};
