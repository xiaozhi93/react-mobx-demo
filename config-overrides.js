const { override, addDecoratorsLegacy, adjustStyleLoaders } = require('customize-cra')
module.exports = override(
  addDecoratorsLegacy(),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-loader')
      });
    }
  })
)