/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        albion: "url(/src/assets/img/background-img.png)",
      },
      fontFamily: {
        sans: "Jura, sans-serif",
        serif: "Julius Sans One, sans-serif",
      },
    },
  },
  plugins: [],
};
