import preprocess from "svelte-preprocess";
//import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';


let dev = true; 

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
      base: process.argv.includes('dev') ? '' : ''
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
