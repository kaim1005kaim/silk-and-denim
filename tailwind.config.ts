import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        silk: { 
          50: '#FBFAF6',
          100: '#F7F4EC',
          200: '#EEE8DB'
        },
        indigo: {
          900: '#0D1C2B',
          800: '#13283C',
          700: '#1A324A'
        },
        ink: {
          900: '#131516',
          700: '#2C2F31',
          500: '#6C7073'
        },
        line: 'rgba(16,24,32,.08)'
      },
      container: {
        center: true,
        padding: '1.5rem'
      },
      borderRadius: {
        DEFAULT: '1.1rem',
        '2xl': '1.6rem'
      },
      boxShadow: {
        card: '0 6px 30px rgba(10,15,20,.05), 0 1px 0 rgba(10,15,20,.05)'
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-noto-serif-jp)', 'Crimson Text', 'serif'],
        display: ['var(--font-noto-serif-jp)', 'Playfair Display', 'serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1.5vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 5vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 6vw, 4rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 5rem)',
      },
      spacing: {
        'section': 'clamp(4rem, 10vh, 8rem)',
        'content': 'clamp(2rem, 5vh, 4rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'paper': 'paper 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        paper: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config
