const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;
  const assetExtsSvg = resolver.assetExts.filter((ext) => ext !== "svg")
  const assetExtsAll = assetExtsSvg.concat(["db", "ttf", "png"])

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  };
  config.resolver = {
    ...resolver,
    assetExts: assetExtsAll,
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  return config;
})();