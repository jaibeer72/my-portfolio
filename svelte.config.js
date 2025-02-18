import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

let dev = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: false
    }),
    paths: {
      base: dev ? '' : '/jaibeer72.github.io'
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;