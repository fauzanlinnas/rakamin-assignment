/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "20px"],
      sm: ["14px", "24px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        primary: "#01959F",
        "primary-border": "#4DB5BC",

        "secondary-pressed": "#FA9810",
        "secondary-border": "#FEEABC",
        "secondary-surface": "#FFFCF5",

        success: "#43936C",
        "success-border": "#B8DBCA",
        "success-surface": "#F8FBF9",

        danger: "#E11428",
        "danger-border": "#F5B1B7",
        "danger-surface": "#FFFAFA",

        surface: "#F7FEFF",

        "neutral-20": "#FAFAFA",
        "neutral-30": "#EDEDED",
        "neutral-40": "#E0E0E0",
        "neutral-70": "#757575",
        "neutral-90": "#404040",
        "neutral-100": "#1D1F20",
      },
      boxShadow: {
        rakamin: "0px 4px 4px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
