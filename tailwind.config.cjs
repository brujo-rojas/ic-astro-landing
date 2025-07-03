/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6f4ea',
          100: '#cce9d5',
          200: '#99d3ab',
          300: '#66bd81',
          400: '#33a757',
          500: '#15803d', // antes: #22c55e
          600: '#116634',
          700: '#0d4d26',
          800: '#093318',
          900: '#061a0c',
          950: '#031006',
        },
        secondary: {
          50:  '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#7c3aed', // antes: #a855f7
          600: '#6b21a8',
          700: '#581c87',
          800: '#3b0764',
          900: '#2a0447',
          950: '#1a022a',
        },
        accent: {
          50:  '#fbeee6',
          100: '#f7dccd',
          200: '#efb99b',
          300: '#e79669',
          400: '#df7337',
          500: '#c2410c', // antes: #f97316
          600: '#9a3412',
          700: '#7c2d12',
          800: '#431407',
          900: '#2a0a03',
          950: '#170502',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans Pro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};