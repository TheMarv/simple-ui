/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
};
