import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'xs': '360px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'vinaccio': '#883D51',
        'vinaccio-200': '#b65c74',
        'light-vinaccio': '#fff3f8',
        'light-green': '#9BDEAC',
        'smeraldo-base' : '#3d8874',
        'smeraldo': '#4dab92',
        'light-smeraldo': "#5cb69e",
        'smeraldo-50': "#C5FCEE",
        'smeraldo-10': "#e5f3ef",
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '21/9': '21 / 9'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
