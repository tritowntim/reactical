module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundled.js'
  },

  module: {
    loaders: [
      {
        test:     /\.js$/,
        exclude:  /node_modules/,
        loader:   "babel"
      }
    ]
  },

  devServer: {
    inline: true
  }
};
