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
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        menuAnimeInTop: 'menuOpenTop 0.3s forwards',
        menuAnimeInDown: 'menuOpenDown 0.3s forwards',
        menuAnimeOut: 'menuClose 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
};
export default config;
