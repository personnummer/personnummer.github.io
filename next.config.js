module.exports = {
  trailingSlash: true,
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    config.cache = false;
    return config;
  },
};
