const HtmlWebpackPlagin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./app/index.js",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlagin({
			template: "./app/index.html",
			inject: "body",
		}),
	],
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
