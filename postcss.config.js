const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer').default;
module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./tailwind.config.js'),
    autoprefixer
  ],
};
