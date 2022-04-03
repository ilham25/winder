const colors = require("tailwindcss/colors");

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
      pattern:
        /(bg|text)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate)-(100|200|300|400|500|600|700|800)/,
    },
    {
      pattern: /rounded-(sm|md|lg|xl|2xl|3xl)/,
    },
  ],
  plugins: [],
};
