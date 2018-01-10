const webpack = require('webpack')
const config = require('../config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const paths = config.utils_paths

const vendors = [
  'fastclick',
  'promise',
  'superagent',
  'url',
  'vue',
  'vue-router',
  'vuex'
]

module.exports = {
  output: {
    filename: '[name]_[hash].js',
    path: paths.lib(),
    library: '[name]_[hash]'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  entry: {
    'lib': vendors
  },
  rules: [{
    test: /\.vue$/,
    use: 'vue'
  }],
  plugins: [
    new CleanWebpackPlugin(['*'], {
      root: paths.lib()
    }),
    // new webpack.ProgressPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DllPlugin({
      path: paths.lib('manifest.json'),
      name: '[name]_[hash]',
      context: paths.lib()
    })
  ]
}
