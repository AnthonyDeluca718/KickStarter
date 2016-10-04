var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/kickstarter.js",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  "engines": {
  // Your versions of node and npm should go here
  // Check this by running the `node -v` and `npm -v` commands in the root of your project
  "node": "4.1.1",
  "npm": "2.1.x"
},

"scripts": {
  "postinstall": "./node_modules/.bin/webpack"
},
};
