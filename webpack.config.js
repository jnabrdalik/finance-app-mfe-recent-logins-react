const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (options) => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      publicPath: "auto",
      uniqueName: "finance-app-mfe-recent-logins-react",
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/react", "@babel/env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "react",
        library: { type: "var", name: "react" },
        filename: "remoteEntry.js",
        exposes: {
          "./web-components": "./src/app.js",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: "^17.0.1",
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "^17.0.1",
          },
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./public/index.html",
          },
        ],
      }),
    ],
    devServer: {
      port: 4204,
    },
  };
};
