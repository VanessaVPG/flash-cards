import type { Config } from 'tailwindcss'
import { colors, fonts, radii, spacing } from '@repo/tokens'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    spacing,
    borderRadius: radii,
    fontSize: fonts.fontSizes,
    fontWeight: fonts.fontWeights,
    fontFamily: {
      sans: fonts.fontFamily.default,
      mono: 'monospace'
    },
    lineHeight: fonts.lineHeights,
    boxShadow: {
      lg: '0px -1.628px 10.017px 0px rgba(0, 0, 0, 0.04), 0px -13px 80px 0px rgba(0, 0, 0, 0.07)'
    },
    animation: {
      wigle: 'wigle 2s ease-in-out infinite',
    }
  },
  plugins: [],
}
export default config
