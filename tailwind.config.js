module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
  ],
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['"Kalam"'],
      }
    }
  },
  daisyui: {
    themes: [
      'synthwave'
    ]
  }
};
