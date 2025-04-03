/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          fontSize: {
              '2xs': '.625rem',
              '3xs': '.5rem',
          },
          colors: {
              primary: {
                  DEFAULT: '#3490dc',
                  dark: '#2779bd',
              },
              secondary: '#ffed4a',
              danger: '#e3342f',
          },  
          scale: {
              101: '1.01',
              102: '1.02',
          },
          aspectRatio: {
              'A4': '210/297',
          },
          gridTemplateColumns: {
              '13': 'repeat(13, minmax(0, 1fr))',
              '14': 'repeat(14, minmax(0, 1fr))',
              '15': 'repeat(15, minmax(0, 1fr))',
          },
          spacing: {
              '600px': '600px',
              '80vh': '80vh',
              '1/2': '50%',
          },
          margin: {
              '18': '4.5rem',
          },
          zIndex: {
              'auto': 'auto',
              '0': '0',
              '10': '10',
              '20': '20',
              '30': '30',
              '40': '40',
              '50': '50',
              '60': '60',
              '70': '70',
              '80': '80',
              '90': '90',
              '100': '100',
              '200': '200',
          },
          boxShadow: {
              'custom-light': '0 2px 5px rgba(0, 0, 0, 0.1)',
              'custom-dark': '0 4px 10px rgba(0, 0, 0, 0.25)',
          },
          keyframes: {
              bounce: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
              },
              fadeIn: {
                  '0%': { opacity: '0' },
                  '100%': { opacity: '1' },
              },
          },
          animation: {
              bounce: 'bounce 1s infinite',
              fadeIn: 'fadeIn 0.5s ease-out',
          },
          inset: {
              '18': '4.5rem',
          }
      },
  },
  plugins: [
      // require('tailwind-scrollbar-hide'),
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/forms'),
  ],
};