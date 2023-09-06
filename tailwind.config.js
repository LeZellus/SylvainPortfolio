/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  purge: {
    content : ['./templates/**/*.html.twig'],
  },
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#B5FF3D',
          50: '#FBFFF5',
          100: '#F3FFE0',
          200: '#E4FFB7',
          300: '#D4FF8F',
          400: '#C5FF66',
          500: '#B5FF3D',
          600: '#A0FF05',
          700: '#7ECC00',
          800: '#5B9400',
          900: '#395C00',
          950: '#274000'
        },
      }
    },
  },
  plugins: [],
}

