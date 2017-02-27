const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
	publicPath: '/__build__/',
	stats: {
		"colors": true,
		"chunks": false,
	},
	// "quiet":true,
	// "noInfo":true,
	"clientLogLevel":"none"
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname))

const port = process.env.PORT || 21611
module.exports = app.listen(port, () => {
	console.log(`Server listening on http://127.0.0.1:${port}, Ctrl+C to stop`)
})
