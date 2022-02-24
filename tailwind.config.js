const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'moderate-violet': 'hsl(263, 55%, 52%)',
      'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
      'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(0, 0%, 81%)',
      'light-grayish-blue': 'hsl(210, 46%, 95%)',
    },
    extend: {
      fontFamily: {
        sans: [
          'Barlow Semi Condensed',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      backgroundImage: {
        'quotation-mark': "url('/src/assets/images/bg-pattern-quotation.svg')",
      },
    },
  },
  plugins: [],
}
