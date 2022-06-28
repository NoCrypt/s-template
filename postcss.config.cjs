module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: {
		tailwindcss: {},
		autoprefixer: {}
	},
	purge: {
		options: {
			safelist: [/data-theme$/] //Theme-change
		}
	}
};
