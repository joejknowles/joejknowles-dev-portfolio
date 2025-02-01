/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '340px',
				'2xs': '290px',
			},
			keyframes: {
				bounce: {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'linear',
					},
					'50%': {
						transform: 'translateY(-15%)',
						animationTimingFunction: 'linear',
					},
				},
			},
			animation: {
				bounce: 'bounce 0.5s infinite',
			},
		},
	},
	plugins: [],
}
