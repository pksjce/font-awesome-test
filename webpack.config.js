var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  plugins: [new ExtractTextPlugin('bundle.css')],
  module: {
    loaders: [{
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader?sourceMap' })
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    },  {
      test: /font-awesome\.config\.js/,
      use: [
        { loader: "style-loader" },
        { loader: "font-awesome-loader" }
      ]
  }]
  }
};
