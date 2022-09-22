/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['Bellota Text','Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom': '10px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F97561",
          'primary-focus': "#f86049",
          "primary-content": "#FFFFFF",

          secondary: "#FFCA0F",
          "secondary-content": "#000",

          accent: "#37CDBE",
          "accent-content": "#000",

          neutral: "#3D4451",
          "neutral-content": "#000",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",
          "info-content": "#000",

          success: "#36D399",
          "success-content": "#000",

          warning: "#FBBD23",
          "warning-content": "#000",

          error: "#ef4444",
          "error-content": "#FFF",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
