var path = require('path');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: {
        "App": "./App.js"
    },
    output: {
        libraryTarget: "umd", // enum
        path: path.resolve(__dirname, "dist"), // string
        filename: "[name].js"
    },
    watch: true,
    module: {
      preLoaders: [
        {
          test: /\.jsx$|\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
      ],
      loaders: [
        {
          test: /\.jsx$|\.js$/,
          exclude: /node_modules/,
          loader: 'react-hot-loader!babel-loader'
        },
        {
          test: /\.jsx$|\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader', 'eslint-loader']
        }
      ]
    },
    resolve: {
        extensions: ["", ".js", ".json", ".jsx", ".css"],
    }
}