import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#957D56',
        green: '#3E4A46',
        background: '#FFFFFF',
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(62, 74, 70, 0.1), 0 2px 4px -1px rgba(62, 74, 70, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(149, 125, 86, 0.1), 0 4px 6px -2px rgba(149, 125, 86, 0.05)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;