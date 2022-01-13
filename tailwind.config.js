/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Din", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        black: "#2C3E50",
        white: "#F4F4F4",
        whiter: "#FAFAFA",
        alternate: "#FD746C",
      },
    },
  },
  plugins: [],
};
