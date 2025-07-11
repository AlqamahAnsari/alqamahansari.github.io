/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',  // <-- enables automatic dark mode based on OS settings
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
