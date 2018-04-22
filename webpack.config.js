const path = require('path');

const client = {
  target: 'node',
  mode: 'development',
  entry: './src/client/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'client.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

const server = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};


module.exports = [client, server];
