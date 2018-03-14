const path = require('path');

const srcDir =  path.resolve(__dirname, 'src');
const distDir =  path.resolve(__dirname, 'dist');

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    path: distDir,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
