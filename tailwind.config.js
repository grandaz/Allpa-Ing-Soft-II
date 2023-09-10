/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero-image': "url('./assets/agricultura.jpg')",
      }
    },
  },
  plugins: [],
}
