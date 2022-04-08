module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif']
      },
      colors: {
        primary: '#FF009A',
        dark: "#0D0221",
        'soft-dark': "#797980",
        "border-gray": "#E4E4EC"
      }
    },
  },
  plugins: [],
}