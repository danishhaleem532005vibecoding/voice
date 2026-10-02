/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        pakistan: {
          green: '#01411c',
          light: '#1a6b38',
          emerald: '#059669',
        },
        breaking: {
          red: '#dc2626',
          orange: '#ea580c',
          yellow: '#ca8a04',
        },
        dark: {
          bg:       '#0a0a0f',
          surface:  '#111118',
          elevated: '#1a1a24',
          border:   '#2a2a3a',
          muted:    '#3a3a4a',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        urdu:    ['Noto Nastaliq Urdu', 'serif'],
        pashto:  ['Noto Nastaliq Urdu', 'serif'],
      },
      animation: {
        'ticker':        'ticker 30s linear infinite',
        'fade-in':       'fadeIn 0.5s ease-in-out',
        'slide-up':      'slideUp 0.4s ease-out',
        'slide-down':    'slideDown 0.3s ease-out',
        'pulse-dot':     'pulseDot 2s ease-in-out infinite',
        'shimmer':       'shimmer 1.5s infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-10px)', opacity: '0' },
          to:   { transform: 'translateY(0)',     opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-4px)' },
        },
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'card':          '0 2px 15px rgba(0,0,0,0.08)',
        'card-hover':    '0 8px 30px rgba(0,0,0,0.12)',
        'breaking':      '0 0 20px rgba(220,38,38,0.3)',
        'pakistan':      '0 0 20px rgba(1,65,28,0.3)',
        'glass':         '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-dark':    '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.800'),
            lineHeight: '1.75',
            'h1,h2,h3,h4': {
              fontFamily: theme('fontFamily.display'),
              fontWeight: '700',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            'h1,h2,h3,h4': { color: theme('colors.gray.100') },
            a: { color: theme('colors.brand.400') },
          },
        },
      }),
    },
  },
  plugins: [],
};
