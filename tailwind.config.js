/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: "#FF8C00",
        tertiary: "#FFFFFF",
        grad1:"#FF8C00",
        grad2:'FFA300',
        label:'#CDCDE0',
        placeholder:'#7B7B8B',
        bgInput:'#1E1E2D',
        message: '#CDCDE0',
        accountStatus: '#FF9001',
        text:'#D6D9DF'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height:{
        80:'20rem',
        100:'25rem',
        120:'30rem',
        140:'35rem',
        160:'40rem',
        180: '45rem'
      },
      width:{
         80:'20rem',
        100:'25rem',
        120:'30rem',
        140:'35rem',
        160:'40rem',
        180: '45rem',
  
      }
    },
  },
  plugins: [],
};
