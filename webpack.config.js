const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000

module.exports = () => {
  return {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public', 'js'),
    },
    module: {
      rules: [
        { // JS
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },

        { // CSS
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico'
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.parsed)
      })
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true
    }
  }
}