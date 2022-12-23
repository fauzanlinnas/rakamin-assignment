/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01959F",

        "neutral-40": "#E0E0E0",
        "neutral-90": "#404040",
        "neutral-100": "#1D1F20",

        "rakamin-grey": "#EDEDED",
      },
    },
  },
  plugins: [],
};
