/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#141414',
          elevated: '#1e1e1e',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a0a0a0',
          muted: '#666666',
        },
        accent: {
          DEFAULT: '#c9a96e',
          hover: '#dbb978',
        },
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
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
