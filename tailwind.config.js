// const colors = require("tailwindcss/defaultConfig");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        body: ["Rubik", "sans-serif"],
      },
    },
  },

  safelist: [
    {
      pattern: /[\s\S]+/,
    },
  ],
  plugins: [],
};
