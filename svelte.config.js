import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: ['three']
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],
};

export default config;
