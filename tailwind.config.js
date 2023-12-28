/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000',
        'primaryBlue': '#4831d4',
        'lightBlue': '#8ecae6',
        'darkBlue': '#03045e',
        'shinyBlue': '#023e8a'
      },
      dropShadow: {
        'custom': '4px 4px 4px rgb(0 0 0 / 0.6)'
      }
    },
  },
  plugins: [],
}
