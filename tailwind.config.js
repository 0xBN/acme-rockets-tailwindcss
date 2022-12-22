/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./build/**/*.{html,js}'],
  // content: ['./build/**/*.html'],
  // content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        },
      },
      screens: {
        widescreen: { raw: '(min-aspect-ratio:3/2)' },
        tallscreen: { raw: '(max-aspect-ratio:13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '90%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
