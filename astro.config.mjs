export default ({
  renderers: ['@astrojs/renderer-svelte'],
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    sitemap: true,
    site: "https://lorem.space",
    pageUrlFormat: "file",
  },
});
