import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['DM Sans', 'Poppins'],
    },
    extend: {
      // colors: {
      //   'lighterBlue': '#F5F5F8',
      //   'bgWhite': '#FAFAFA',
      //   'ratingBg': '#FFC850',
      //   'lightBlack': '#797979',
      //   'lighterOrange': '#FBF4EE',
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
export default config
