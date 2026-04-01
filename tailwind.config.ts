import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
	content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'loader-color':
					'linear-gradient(45deg, transparent, transparent 40%, #ee55ff)'
			},
			boxShadow: {
				'elevation-card-rest':
					'0 0 rgba(0, 0, 0, 0), 0 0 rgba(0, 0, 0, 0), var(--tw-shadoww)',
				'elevation-card-hover': 'var(--elevation-card-hover)'
			},
			minHeight: {
				'70vh': '70vh'
			},
			borderRadius: {
				'50%': '50%'
			},
			fontFamily: {
				sans: ['var(--font-gilroy)'],
				gilroy: ['var(--font-gilroy)']
			},
			fontWeight: {
				heavy: '900'
			},
			colors: {
				primary: '#7448FF',
				secondary: '#FFFFFF'
			}
		}
	},
	plugins: [typography]
}

export default config
