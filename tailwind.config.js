/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      cursive: ['cursive'],
      courier: ['Courier New', 'Courier', 'monospace'],
      poppins: ['Poppins', '"sans-serif"'],
      openSans: ['"Open Sans"', '"sans-serif"'],
    },
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        primaryPink: 'hsl(322, 100%, 66%)',
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
        attribution: 'hsl(228, 45%, 44%)',
      },
    },
  },
  plugins: [],
};
