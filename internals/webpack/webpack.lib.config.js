const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'production',
  entry: {
    textComponents: path.join(__dirname, '../../src/components/text/index.ts'),
    verticalSpace: path.join(
      __dirname,
      '../../src/components/vertical-space/index.ts',
    ),
    variables: path.join(__dirname, '../../src/variables/index.ts'),
    helpers: path.join(__dirname, '../../src/helpers/index.ts'),
    globalStyles: path.join(__dirname, '../../src/styles/index.ts'),
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
};
