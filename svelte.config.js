import preprocess from "svelte-preprocess";
//import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';


let dev = true; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : "https://jaibeer72.github.io/",
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
