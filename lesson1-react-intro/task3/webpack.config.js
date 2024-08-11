const HtmlWebpacklugin = require('html-webpack-plugin')

module.exports = {
	module: {
		rules: [
			{
				test: /.js$/,
				use: ['babel-loader'],
			},
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpacklugin({
			template: './src/index.html',
		}),
	],
	// output: {
	// 	filename: 'bundle.js',
	// 	path: __dirname + '/dist',
	// },
}
