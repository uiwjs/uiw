## 定制主题

样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，可以根据需求进行相应调整。使用 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式来覆盖变量

> 主题更换只需要 `less-loader` 的 `webpack` 相关配置，配置参数 modifyVars即可。

```js
{
  test: /\.module\.less$/,
  loader: ExtractTextPlugin.extract(
    'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
    'postcss!' +
    `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify({
        primary-color:#333;
    })}}`
  ),
},
```