## 问题
1. scss文件的支持
   ```javascript
      // 1.  安装loader
      npm install sass sass-loader --save-dev
      // 2. 在config.override.js配置loader
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
   ```
   
2.  更新状态，状态也有改变但是组件没有更新
   mobx,mobx-react最新版本问题，将它们的版本改成旧版本

## 部署

[https://react-mobx-demo.vercel.app/](https://react-mobx-demo.vercel.app/)

