/* 
  webpack的覆盖配置文件
*/

const {
  override,
  addWebpackAlias,
  fixBabelImports
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "styles": path.resolve(__dirname, "./src/assets/styles"),
    "images": path.resolve(__dirname, "./src/assets/images"),
    "components": path.resolve(__dirname, "./src/components"),
    "pages": path.resolve(__dirname, "./src/pages"),
    "utils": path.resolve(__dirname, "./src/utils"),
    "store": path.resolve(__dirname, "./src/store"),
  })
)