/**** Tailwind CSS Config ****/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#a5d8ff',
          green: '#b2f2bb',
          purple: '#e5d4ff',
          pink: '#ffd6e7',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
