module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundled.js'
  },

  devServer: {
    inline: true
  }
};
