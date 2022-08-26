/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgCover:' background-image: url("Cover.jpg");'
      }
    },
  },
  plugins: [],
}
