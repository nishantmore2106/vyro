/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        vyro: {
          cyan: '#00e5ff',
          teal: '#00b4d8',
          navy: '#030712',
        },
      },
    },
  },
  plugins: [],
}
