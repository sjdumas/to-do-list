const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
	mode: "production",
	output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "./", // Ensures correct asset paths for GitHub Pages
    },
});
