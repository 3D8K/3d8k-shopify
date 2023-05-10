/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
    },
  },
  plugins: [],
};
