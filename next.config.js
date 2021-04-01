module.exports = {
  trailingSlash: true,
  future: {
    webpack5: true
  },
  webpack: function (config, options) {
    console.log(`Using Webpack ${options.webpack.version}`);
    config.experiments = {};
    return config;
  }
};
