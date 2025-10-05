/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0a0a0f',
          blue: '#1a1a2e',
          purple: '#16213e',
          cyan: '#0f3460',
          glow: '#64ffda',
          star: '#ffffff',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(100, 255, 218, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}