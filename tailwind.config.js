/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        // other fonts
      },
      colors: {
        "color-purlpe": "var(--bookmark-purple)",
        "color-red": "var(--bookmark-red)",
        "color-blue": "var(--bookmark-blue)",
        "color-grey": "var(--bookmark-grey)",
        "color-white": "var(--bookmark-white)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
};
