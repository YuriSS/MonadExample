const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'srcs/index.js'),
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
                        {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  'file?name=[name].[ext]',
      },
      {
        test: /(\.js)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  },

  devServer: {
      stats: {colors: true}
  }
};