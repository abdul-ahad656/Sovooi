/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0D10',
          surface: '#13161B',
          elevated: '#1A1E25',
          hover: '#21262E',
        },
        border: {
          DEFAULT: '#262B33',
          subtle: '#1E2228',
        },
        text: {
          primary: '#F4F5F7',
          secondary: '#9CA3AF',
          tertiary: '#6B7280',
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#818CF8',
          muted: '#312E81',
        },
        success: {
          DEFAULT: '#22C55E',
          muted: '#14301F',
          text: '#4ADE80',
        },
        warning: {
          DEFAULT: '#F59E0B',
          muted: '#3A2A0E',
          text: '#FBBF24',
        },
        danger: {
          DEFAULT: '#EF4444',
          muted: '#3A1A1A',
          text: '#F87171',
        },
        info: {
          DEFAULT: '#3B82F6',
          muted: '#172554',
          text: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}