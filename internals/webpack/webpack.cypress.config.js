const config = require('./webpack.config');
const path = require('path');

module.exports = {
  ...config,
  mode: 'development',
};
