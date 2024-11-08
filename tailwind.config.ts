import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sapore-room': "url('/Sapore.webp')"
      },
      colors: {
        layoutColor: '#6B874F',
        greenCards: '#AAB588',
        bGround: '#E6DBC6'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        menuOpenTop: {
          '0%': { rotate: '0deg' },
          '100%': { rotate: '45deg' }
        },
        menuCloseTop: {
          '0%': { rotate: '45deg' },
          '100%': { rotate: '0deg' }
        },
        menuOpenDown: {
          '0%': { rotate: '0deg' },
          '100%': {
            rotate: '-45deg',
            transform: 'translate(7px, -6px)'
          }
        },
        menuClose: {
          '0%': { rotate: '45deg' },
          '100%': { rotate: '0deg' }
        },
        spinLogo: {
          '0%': {rotate: '0deg'},
          '50%': {rotate: '0deg'},
          '70%': {rotate: '-20deg'},
          '100%':{rotate: '360deg'}
        },
        textsFadeRightToLeft: {
          '0%': {opacity: '0', transform: 'translateX(10rem)'},
          '100%': {opacity: '1', transform: 'translateX(0)'}
        }
      },
      animation: {
        textsFadeRightToLeft1: 'textsFadeRightToLeft 1.5s ease-in-out',
        textsFadeRightToLeft2: 'textsFadeRightToLeft 1.5s ease-in-out .75s',
        textsFadeRightToLeft3: 'textsFadeRightToLeft 1.5s ease-in-out 1s',
        spinLogo: 'spinLogo 8.5s infinite',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        menuAnimeInTop: 'menuOpenTop 0.3s forwards',
        menuAnimeCloseTop: 'menuCloseTop 0.3s forwards',
        menuAnimeInDown: 'menuOpenDown 0.3s forwards',
        menuAnimeOut: 'menuClose 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
};

export default config;

