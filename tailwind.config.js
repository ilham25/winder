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
        /(bg|text)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800)/,
    },
  ],
  plugins: [],
};
