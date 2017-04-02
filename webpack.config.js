const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        include: path.resolve(__dirname, 'public'),
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false // So webpack doesn't inline images...
            }
          }
        ]
      }
    ]
  }
};
