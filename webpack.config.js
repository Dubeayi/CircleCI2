const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, 'src/index.js')
const OUT_DIR = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: SRC_DIR,
  output: {
    path: path.join(OUT_DIR),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

