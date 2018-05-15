'use strict';
const { dependencies } = require('./package.json');

const vendorPackages = Object.keys(dependencies).filter(
  dep => dep !== 'express',
);

module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    const config = defaultConfig;

    if (target === 'web') {
      config.output.filename = dev
        ? 'static/js/[name].js'
        : 'static/js/[name].[hash:8].js';

      config.entry.vendor = ['razzle/polyfills', ...vendorPackages];

      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              reuseExistingChunk: true,
            },
          },
        },
        runtimeChunk: true,
      };
    }

    return config;
  },
};
