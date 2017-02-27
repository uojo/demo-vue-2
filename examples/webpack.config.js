const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {

  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'index.js')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
	
	// console.log(">", entries)
	
    return entries
  }, {}),

  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap!autoprefixer-loader') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: "css-loader"
	   }) },
    ]
  },

  vue: {
	  loaders: {
		  // css:'vue-style-loader!css-loader'
	  }
  },
  /* resolve: {
    alias: {
      vuex: path.resolve(__dirname, '../build/dev-entry')
    }
  }, */

  plugins: [
	new ExtractTextPlugin("abc.css"),
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}
