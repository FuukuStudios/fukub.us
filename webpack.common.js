const path = require('path');

module.exports = {
	entry: {
		app: './js/app.js',
	},
	output: {
		filename: './js/app.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json'],
	},
};
