'use strict';
const { dependencies } = require('./package.json');

const vendorPackages = Object.keys(dependencies)
  .filter(dep => dep !== 'express')
  .map(dep => require.resolve(dep));

module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    const config = defaultConfig;

    if (target === 'web') {
      config.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';

      config.entry.vendor = [
        require.resolve('razzle/polyfills'),
        ...vendorPackages,
      ];

      config.optimization = {
        splitChunks: {
          chunks: 'all',
          name: false,
        },
      };
    }

    return config;
  },
};
