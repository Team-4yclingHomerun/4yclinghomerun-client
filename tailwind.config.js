/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left bottom',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        'kt-black-1': '#010101',
        'kt-black-2': '#111111',
        'kt-black-3': '#171717',
        'kt-black-4': '#272222',
        'kt-black-5': '#231F20',
        'kt-gray-1': '#35383E',
        'kt-gray-2': '#717781',
        'kt-white': '#ECEEF2',
        'kt-red-1': '#EA0101',
        'kt-red-2': '#D60C0C',
        'kt-red-3': '#F53232',
        'kt-blue': '#0098AF',
      },
    },
    animation: {
      gradient: 'gradient 3s ease infinite',
    },
  },
  plugins: [],
};
