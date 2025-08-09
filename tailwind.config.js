// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#375a21',
        accent: '#b92f2f',
        // add your custom colors here
      },
      fontFamily: {
        klear: ['KlearRegular', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#375a21',
          secondary: '#b92f2f',
          accent: '#f43f5e',
          neutral: '#fafafa',
          'base-100': '#e8f0e8',
          // add your theme colors
        },
      },
    ],
  },
};
