# Bundling JavaScript Files with Webpack

Webpack is a powerful tool for bundling and transforming modern JavaScript projects. This README explains the key features and the capabilities you can achieve using Webpack.

![webpack-bundle-analyzer](/images/webpack-bundle-analyzer.png)

## What You Can Do with Webpack

1. **Bundle multiple JavaScript files into a single file**: Webpack helps you merge several JavaScript files into one, making it easier to manage and optimize for production.
2. **Convert ES6 to ES5 for better browser compatibility**: Use Babel with Webpack to transpile modern ES6+ syntax into ES5, ensuring your code runs smoothly on older browsers.
3. **Convert SASS to CSS**: With the right loader, Webpack can transform SASS (or SCSS) files into CSS, allowing you to write more expressive and maintainable styles.

## Purpose of This Repository

This repository serves as a reference for understanding the basics of bundling with Webpack. If you get stuck or need a quick reference about Webpack bundling, feel free to use this repo as a document.

## Example webpack.config.js

Below is an example `webpack.config.js` to demonstrate how you can use various features:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  mode: "development",
};
```

## webpack.config.js Explained

The configuration file contains detailed information on how to use each property:

- **entry**: Specifies the entry point of your application, where Webpack starts bundling.
- **output**: Defines where to save the bundled code.
- **module.rules**: Contains the different loaders to handle transformations, such as JavaScript (Babel) and SASS.
- **mode**: Indicates whether the build is for development or production.

## Running the Build

- **Development mode**: To run Webpack in development mode and get features like source maps, use:
  ```bash
  npx webpack --mode development
  ```
- **Production mode**: For optimized output, use:
  ```bash
  npx webpack --mode production
  ```

## Additional Resources

- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/docs/en/)

These resources will help you dive deeper into the setup and advanced features that Webpack offers.
