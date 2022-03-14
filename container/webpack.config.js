const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
        // NOTE: Having an id with the same name our DOM (index.html or other elements) cause a bug
        // It happens because when you create an element in the DOM the 
        // browser will try to create a global variable with the  id as a name.
        // However, webpack will try to do the same so the bug will happen

        // fixes: Be aware of not naming ids in html as this element
        // cart: 'mycart@http://localhost:8082/remoteEntry.js',

      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
