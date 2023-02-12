/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      md: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        primary: {
          1: 'hsl(193, 38%, 86%)',
          2: 'hsl(150, 100%, 66%)'
        },
        neutral: {
          1: 'hsl(217, 19%, 38%)',
          2: 'hsl(217, 19%, 24%)',
          3: 'hsl(218, 23%, 16%)',
        },
      },
      fontSize: {
        quote: '28px'
      },
      fontWeight: {
        bold: 800
      },
      boxShadow: {
        dice: '0 0 30px 2px hsl(150, 100%, 66%)'
      }
    },
  },
  plugins: [],
}
