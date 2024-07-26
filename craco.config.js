const path = require("path");

module.exports = {
  webpack: {
    alias: {
      $routes: path.resolve(__dirname, "src/routes/"),
      $utils: path.resolve(__dirname, "src/utils/"),
      $components: path.resolve(__dirname, "src/components/"),
    },
  },
};
