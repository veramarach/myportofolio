/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    colors:{
      black:"black",
      red:"red",
      green:"green",
      orange:"orange",
      white:"white",
      purple:"purple",
      pink:"pink",
      blue:"blue",
      indigo:"indigo 400"

    },
   

    extend: {
      backgroundImage: (theme)=>({
        "hero-image": "url('/src/assets/pexels-samad-ismayilov-764873.jpg')",
        
      }),

      keyframes: {
        wave:{
          "0%":{transform:"rotate(0.0deg)"},
          "10%":{transform:"rotate(14deg)"},
          "20%":{transform:"rotate(-8deg)"},
          "30%":{transform:"rotate(14deg)"},
          "40%":{transform:"rotate(-4deg)"}, 
          "50%":{transform:"rotate(10.0deg)"},
          "60%":{transform:"rotate(0.0deg)"},
          "100%":{transform:"rotate(0.0deg)"},

        },

        slide:{
          "0%":{transform:"translateX(-100%)"},
          "100%":{transform:"translateX(0%)"}

        },
        slidedown:{
          "0%":{transform:"translateY(-250%)"},
          "50%":{transform:"translateY(8%)"},
          "65%":{transform:"translateY(-4%)"},
          "80%":{transform:"translateY(4%)"},
          "95%":{transform:"translateY(-2%)"},
          "100%":{transform:"translateY(0%)"}

        }

      },
      animation:{
        "waving-hand":"wave 4s linear infinite",
        "slide-in":"slide 3s linear ",
        "slide-down":"slidedown 10s ease"
      },

      
      

      

      
    }


  },
  plugins: [require('tailwindcss-animated')],
}

