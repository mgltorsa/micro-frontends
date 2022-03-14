const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        //We changed /src/index.js
        //because bootstrap is the one exporting mount and not index
        "./ProductsIndex": "./src/bootstrap",
      },
      shared: ["faker"],
      //To make it singleton. Review console messages when trying to load
      //to different versions as singleton
      // shared: {
      //   faker:{
      //     singleton:true
      //   }
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
