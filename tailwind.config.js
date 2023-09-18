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

        v2blue: "var(--v2blue)",
        v2lightblue: "var(--v2lightblue)",
        v2black: "var(--v2black)",
        v2white: "var(--v2white)",
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
