const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        //explanation of changing index.js in /products microfrontend
        './CartShow': './src/bootstrap',
      },
      shared: ['faker']
      //To make it singleton. Review console messages when trying to load 
      //to different versions as singleton
      // shared: {
      //   faker:{
      //     singleton:true
      //   }
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
