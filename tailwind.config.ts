import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2B4A3E',
        cream: '#F5F0E8',
        gold: '#8B7D3C',
        charcoal: '#1A1A1A',
        sage: '#D4DDD7',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        dancing: ['var(--font-dancing)', 'cursive'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        logo: '0.3em',
      },
    },
  },
  plugins: [],
}
export default config
