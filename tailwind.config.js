export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sand: '#faf6f0',
        sandDeep: '#f2ebe0',
        line: '#e9e0d4',
        ink: '#1d2933',
        muted: '#6e675b',
        ocean: '#14586b',
        oceanSoft: '#3f7d8d',
        coral: '#e8684a',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      screens: {
        md: '640px',
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(29,41,51,0.04), 0 8px 24px -16px rgba(29,41,51,0.18)',
        lift: '0 2px 4px rgba(29,41,51,0.06), 0 18px 40px -24px rgba(29,41,51,0.28)',
      },
    },
  },
  plugins: [],
}
