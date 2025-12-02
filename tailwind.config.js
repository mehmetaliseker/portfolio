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
        phoneRotate: "phoneRotate 1s linear infinite",
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
        phoneRotate: {
          "0%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-10deg)" },
        },
      },
      colors: {
        graphite: {
          background: '#0A0A0A',
          accent: '#2563EB',
          accentAlt: '#3B82F6',
          secondary: '#121212',
          tertiary: '#1A1A1A',
          text: '#F5F5F5',
          textMuted: '#A3A3A3',
        },
      },
    },
  },
  plugins: [],
};