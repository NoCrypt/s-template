/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Rubik', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: [require('daisyui')]
};
