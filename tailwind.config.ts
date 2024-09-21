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
      }
    },
  },
  plugins: [],
};
export default config;
