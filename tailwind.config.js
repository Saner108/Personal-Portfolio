/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: 'rgb(var(--color-bg) / <alpha-value>)',
        offwhite: 'rgb(var(--color-text) / <alpha-value>)',
        clay: '#E8785A',
        electric: '#3D8BFF',
      },
      fontFamily: {
        display: ['"General Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
