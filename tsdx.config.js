const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          require('tailwindcss'),
          autoprefixer(),
          cssnano({ preset: 'default' }),
        ],
        inject: true,
        minimize: true,
        sourceMap: false,
        modules: false,
      })
    );
    return config;
  },
};
