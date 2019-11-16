import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import typescriptFormatter from "react-dev-utils/typescriptFormatter";
import NodemonPlugin from "nodemon-webpack-plugin";

const webpackconfiguration: webpack.Configuration = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "src"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    globalObject: "this"
  },
  resolve: {
    extensions: [".mjs", ".js", ".gql", ".graphql", ".ts", ".tsx", ".json"]
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      reportFiles: [
        "**",
        "!**/*.json",
        "!**/__tests__/**",
        "!**/?(*.)(spec|test).*",
        "!**/src/setupProxy.*",
        "!**/src/setupTests.*"
      ],
      watch: "./src",
      silent: true,
      formatter: typescriptFormatter
    }),
    new NodemonPlugin()
  ]
};

export default webpackconfiguration;
