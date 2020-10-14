const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'production',
  entry: {
    verticalSpace: path.join(
      __dirname,
      '../../src/components/vertical-space/index.ts',
    ),
    globalStyles: path.join(__dirname, '../../src/styles/index.ts'),
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
};
