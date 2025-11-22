/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A2CEEF', // Stronger Blue
        secondary: '#1A1A1A', // Darker Black for text
        accent: '#DAEEFA', // Lighter Blue
        background: '#FFFFFF',
        surface: '#F9FAFB',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
