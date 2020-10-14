module.exports = (on, config) => {
  require('cypress-react-unit-test/plugins/react-scripts')(on, config);
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}

const webpackPreprocessor = require('@cypress/webpack-preprocessor');
module.exports = (on, config) => {
  const options = {
    ...webpackPreprocessor.defaultOptions,
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../internals/webpack/webpack.cypress.config'),
    watchOptions: {},
  }
  on('file:preprocessor', webpackPreprocessor(options));
  return config;
}
