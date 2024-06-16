/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        platypi: ["Platypi", "sans-serif"],
      },
      colors: {
        navBackgroundLight: "#ffffff",
        textPrimaryColorLight: "#000000",
        secondaryColor: "#fc6036",
        backgroundColorSecondaryLight: "#d6e3fe",
        navBackgroundDark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
