/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "350px",
        xs: "450px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        
      },
      colors: {
        'gray': '#2d2d2d',
        'orange': '#C65E3B',
        'charcoal': '#3B3A3F',
        'richBlack': '#231F20',
        'footer': '#1C1C1C',
        'darkRed': '#e50113',
        'lightRed': '#EE343B',
        'darkIndigo': '#7a45e5',
        'lightgray': '#88898a'
      },
      boxShadow: {
      },
      backgroundImage: {
        'brown-radial': 'radial-gradient(circle, #C65E3B, #7C4D3B, #00273E)',
      },
    },
  },
  plugins: [],
};
