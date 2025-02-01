/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
        colors: {
          'white': '#ffffff',
        },
        boxShadow: {
          'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        borderRadius: {
          'lg': '0.5rem',
        },
        padding: {
          '6': '1.5rem',
        },
        margin: {
          '2': '0.5rem',
          '4': '1rem',
        },
        fontSize: {
          '2xl': '1.5rem',
        },
        fontWeight: {
          'bold': '700',
        },
      
    },
  },
  plugins: [require("daisyui")],
}

