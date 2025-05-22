/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8eb8ff',
          400: '#5a91ff',
          500: '#3366ff',
          600: '#1a47f5',
          700: '#1333e5',
          800: '#152db9',
          900: '#172b94',
          950: '#121c59',
        },
        teal: {
          50: '#effefb',
          100: '#c8fff5',
          200: '#95f9eb',
          300: '#5ceede',
          400: '#2edacd',
          500: '#14b8a6',
          600: '#0e9488',
          700: '#11766d',
          800: '#125e58',
          900: '#134e4a',
          950: '#052f2d',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};