module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
  styles: {
    "mixins": true,

    "core": true,
    "icons": true,

    "larger": true,
    "path": true,
  }
};
