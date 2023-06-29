import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
    alias: {
      "$api/*": path.resolve("src/api/*"),
      "$store/*": path.resolve("src/store/*"),
      "$assets/*": path.resolve("src/assets/*"),
      "$utils": path.resolve("src/utils/*"),
      "$types/*": path.resolve("src/types/*")
    }
	},
};

export default config;
