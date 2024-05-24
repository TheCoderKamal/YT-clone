/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        'xsm': '550px',
        'md': '770px',
        'xmd': '881px',
        'lg': '992px',
        'xlg': '1100px',
        'xl': '1200px',
        'xxl': '1400px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

