import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html' // for SPA mode if needed
		}),
		paths: {
			base: '' 
		}
	}
};

export default config;