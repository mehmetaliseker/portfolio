/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateOnce: 'rotateOnce 0.9s ease forwards',
        bounceY: 'bounceY 1.2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
      },
      keyframes: {
        rotateOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        bounceY: {
          '0%, 100%': { transform: 'rotate(90deg) translateX(0px)' },
          '50%': { transform: 'rotate(90deg) translateX(5px)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      colors: {
        graphite: {
          background: '#1C1C1E',
          accent: '#FFB347',
          accentAlt: '#FFB525',
          secondary: '#2C2C2E',
          text: '#E5E5E7',
        },
      },
    },
  },
  plugins: [],
};