// Webpack configuration for development
// 1. Build multiple JS files into one file
// 2. Convert ES6 to ES5
// 3. Convert JSX to JS
// 4. Convert SASS to CSS
// 5. Convert TypeScript to JS
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// commonJS module as this file is loaded by Webpack(Node.js)
module.exports = {
  mode: "development",
  // Where to start bundling the code
  entry: "./src/index.js",
  // How to output the bundled code to dist/bundled.js
  output: {
    filename: "bundled.js",
    // Absolute path to the output directory
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // Convert ES6 to ES5
        // Convert JSX to JS
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/, // Apply the following loaders to files that match this regex
        use: [
          "style-loader", // Inject CSS into the DOM
          "css-loader", // Convert CSS to JS
          "sass-loader", // Convert SASS to CSS
        ],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000,
  },
};