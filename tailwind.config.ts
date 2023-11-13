import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mb: { max: '1024px' },
      dk: { min: '1024px', max: '1536px' },
      dlg: { min: '1536px' }
    },
    extend: {
      backgroundImage: theme => ({
        'bogo-1': `linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url('assets/img/bg-1.webp')`
      }),
      colors: {
        main: {
          dark: '#271254',
          bright: '#CB65F6',
        },
      },
    },
  },
  plugins: [],
}
export default config
