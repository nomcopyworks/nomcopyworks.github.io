/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1c1917', // deep earthy espresso/brown
          secondary: '#292524', // slightly lighter brown-gray
          elevated: '#3b3431',
        },
        text: {
          primary: '#faf7f2', // off-white warm sand
          secondary: '#d6d1c9', // muted sand
          muted: '#a39c93', // warm gray
        },
        accent: {
          DEFAULT: '#d97746', // warm terracotta/clay
          hover: '#e88f61',
        },
        border: 'rgba(250, 247, 242, 0.08)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '5xl': ['4.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        '4xl': ['3.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        '3xl': ['2.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '2xl': ['2rem', { lineHeight: '1.1' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
