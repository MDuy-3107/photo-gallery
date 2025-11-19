/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#f8fafc',
        'light-card': '#ffffff',
        'light-card-hover': '#f1f5f9',
      },
    },
  },
  plugins: [],
}
