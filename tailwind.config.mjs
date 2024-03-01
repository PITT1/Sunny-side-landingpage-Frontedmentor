/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'Soft-red': 'hsl(7, 99%, 70%)',
				'Yellow': 'hsl(51, 100%, 49%)',
				'Dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
				'Dark-blue': 'hsl(198, 62%, 26%)',
				'Dark-moderate': 'hsl(168, 34%, 41%)',
				'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
				'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
				'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
				'Grayish-blue': 'hsl(210, 4%, 67%)',
				'White': 'hsl(0, 0%, 100%)',
				'white-transparent': 'rgba(255, 255, 255, 0.5)'
			},

			fontFamily: {
				'fraunces': ['Fraunces', 'sans-serif'],
				'barlow': ['Barlow', 'sans-serif']
			},

			letterSpacing: {
				'superwidest': '10px',
				'mediumwidest': '5px'
			},

			height: {
				'h-100': '32rem'
			}
		},
	},
	plugins: [],
}
