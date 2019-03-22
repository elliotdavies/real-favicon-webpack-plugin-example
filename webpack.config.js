const RFG = require("real-favicon-webpack-plugin");
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",

  output: {
    path: __dirname + "/dist"
  },

  plugins: [
    new RFG({
      faviconJson: "./favicon.json",
      outputPath: __dirname + "/dist/favicons",
      inject: true
    }),

    new HWP()
  ]
};
