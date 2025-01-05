/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./assets/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Averia Serif Libre Light', 'serif']
    },
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
  plugins: [],
}

