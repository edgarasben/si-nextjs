module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    screens: {
      sm: '475px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
