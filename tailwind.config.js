/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animateModal: {
          from: { top: '-200px', opacity: '0' },
          to: { top: '0', opacity: '1' },
        },
      },
      animation: {
        animateModal: 'animateModal 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

