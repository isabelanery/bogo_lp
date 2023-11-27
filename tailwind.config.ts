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
      dk: { min: '1025px', max: '1536px' },
      dlg: { min: '1536px' }
    },
    extend: {
      backgroundImage: theme => ({
        'bogo-mb': `url('assets/img/bg-mb.webp')`,
        'bogo-dk': `url('assets/img/bg-dk.webp')`,
        'bogo-left': `url('assets/img/bg-left.webp')`
      }),
      colors: {
        main: {
          dark: '#271254',
          purple: '#632CA9',
          bright: '#CB65F6',
          neon: '#0BC529',
        },
      },
    },
  },
  plugins: [],
}
export default config
