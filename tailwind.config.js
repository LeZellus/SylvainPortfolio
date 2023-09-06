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
    extend: {},
  },
  plugins: [],
}

