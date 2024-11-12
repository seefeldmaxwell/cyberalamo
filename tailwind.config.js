// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // White
        secondary: '#0a0a0a', // Near Black
        accent: '#e82127', // Red Accent
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        bold: ['"Helvetica Neue Bold"', 'Arial Bold', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      backgroundImage: theme => ({
        'home-background': "url('/background.jpg')",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
