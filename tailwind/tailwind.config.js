/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Kosugi"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
