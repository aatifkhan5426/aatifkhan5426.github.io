/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: '#7a5af5',
        secondary: '#382bf0',
        accent: '#ba9ffb',
        darkBg: '#121212',
        darkSurface: '#282828',
        lightBg: '#f9f9f9',
        textPrimary: '#e4e4e7',
        textSecondary: '#a1a1aa'
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'card': '22rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    }
  },
  plugins: [],
}
