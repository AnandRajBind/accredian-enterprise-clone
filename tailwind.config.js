/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/sections/**/*.{js,jsx}',
    './src/layouts/**/*.{js,jsx}',
    './src/modals/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abfa',
          500: '#0c8ef2',
          600: '#0070d1',
          700: '#0059a9',
          800: '#054b8a',
          900: '#0a3f72',
          950: '#07284b',
        },
        accent: {
          green: '#10B981',
          gold: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
