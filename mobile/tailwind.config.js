/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
          black: "#393F42",
          gray: "#C8C8CB",
          border: "#F0F2F1",
          primary: "#67C4A7",
          cardColor: "#FAFAFC"
      }
    },
  },
  plugins: [],
}