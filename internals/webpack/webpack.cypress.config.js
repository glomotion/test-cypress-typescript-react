const config = require('./webpack.config');
const path = require('path');

module.exports = {
  ...config,
  // resolve: {
  //   ...config.resolve,
  //   alias: {
  //     '@components': path.resolve(__dirname, '../../src/components'),
  //   },
  // },
  module: {
    rules: [
      ...config.module.rules,
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }, // using babel after typescript transpiles to target es6
          {
            loader: 'ts-loader',
            options: {
              logLevel: 'info',
              // skip typechecking for speed
              transpileOnly: true,
            },
          },
        ],
      },
    ]
  },
};
