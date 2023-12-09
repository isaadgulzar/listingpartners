/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#05343B',
				secondary: '#002429',
				ternary: '#FF7F5D',
				negative: '#E3E3E3',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				'42px': [
					'42px',
					{
						lineHeight: '51.2px',
						letterSpacing: '1.5%',
					},
				],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
