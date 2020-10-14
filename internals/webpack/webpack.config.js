const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx',  '.jsx', '.css'],
    // add alias to load "@components" from another folder
    // so that tests in cypress/component can load components using
    // import X from '@components/X'
    // see https://glebbahmutov.com/blog/using-ts-aliases-in-cypress-tests/
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  module: {
    rules: [
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
            },
          },
        ],
      },
      {
        test: /.global.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.module.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
