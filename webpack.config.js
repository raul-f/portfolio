const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' }
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		})
	]
}