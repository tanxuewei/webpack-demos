const path = require('path')

module.exports = {
  entry: {
    app: './src/test.txt'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          // './src/myloader2.js',
          './src/myloader1.js'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].txt'
  },
  mode: 'development',
  devtool: 'source-map'
}