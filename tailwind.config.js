/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          light: '#111e38',
          mid: '#1e3050',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          muted: '#c8c2b3',
          dark: '#a09880',
        },
        // Light mode surface colors (card backgrounds, hover states)
        paper: {
          DEFAULT: '#f5f0e8',
          dim: '#ede5d6',
          dark: '#e4d9c8',
        },
        amber: {
          lab: '#d4a853',
          dim: '#b8903f',
          glow: '#e8c070',
          text: '#8a6218',   // darker amber — readable on light bg
        },
        teal: {
          lab: '#5b8a72',
          light: '#7ab094',
          dim: '#3d6150',    // darker teal — readable on light bg
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'draw-line': 'drawLine 1.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
