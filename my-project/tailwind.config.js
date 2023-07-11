/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#B38FFF',
      'white': '#FFFFF4',
      'black': '#33342E',
      'green': '#B5F27A',
 
    },

    fontFamily: {
      'IBMsans': ['IBM Plex Sans'],
      'IBMmono': ['IBM Plex Mono'],
    },

    extend: {
      lineHeight: {
        'extra-loose': '1.25',
      }
    }
  },
  plugins: [],
}
