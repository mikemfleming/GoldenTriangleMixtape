module.exports = {
  context: __dirname + "/client/src",
  entry: "./main.jsx",
  devtool: 'cheap-module-inline-source-map',
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react', 'stage-2', 'es2015-node6' ],
          "plugins": [ 'transform-es2015-destructuring' ]
        }
      }
    ]
  }
};
