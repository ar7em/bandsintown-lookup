const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        components: path.join(__dirname, "src", "components")
      }
    }
  }
};
