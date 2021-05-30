const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
        },
        whiteblue: {
          100: '#DBE9F3',
          200: '#B8CCE0',
          300: '#96AFCD',
          400: '#7392BA',
          500: '#5175A7',
          600: '#2E5894',
        },
      },
      fontFamily: {
        noto: ['Noto Sans JP'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
