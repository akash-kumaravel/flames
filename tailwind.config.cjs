/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { backgroundImage: { radial: 'radial-gradient(var(--tw-gradient-stops))' } } },
  plugins: [],
};
