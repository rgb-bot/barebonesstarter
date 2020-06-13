const path = require('path');
const outdir = path.join(__dirname, 'public')
const entry = path.join(__dirname, 'client/app.jsx')

module.exports = {
  entry: entry,
  output: {
    path: outdir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }

}