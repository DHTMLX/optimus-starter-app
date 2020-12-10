const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: "development",
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist,
		port: 8080,
		overlay: {
			warnings: true,
			errors: true,
		},
		historyApiFallback: true,
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: "[file].map",
		}),
	],
});

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig);
});
