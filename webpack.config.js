module.exports = {
  entry: "./js/app.js",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js"
  },
  devServer: {
    inline: false
  }
};
