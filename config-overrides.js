const rewireAliases = require("react-app-rewire-aliases");
const path = require("path");

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@src": path.resolve(__dirname, "src"),
    "@components": path.resolve(__dirname, "src/components"),
    "@ui": path.resolve(__dirname, "src/components/ui"),
  })(config, env);

  return config;
};
