// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wellchildBlue: '#0292B7',
      },
      fontFamily: {
        // Add your custom fonts here
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [   require("tailwindcss-animate") ],
};