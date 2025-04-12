/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'turbine-spin 8s linear infinite',
      },
      keyframes: {
        'turbine-spin': {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} 