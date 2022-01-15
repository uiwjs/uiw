按需加载
===

默认 [`uiw`](https://github.com/uiwjs) 支持基于 ES module 的 Tree Shaking，不使用以下插件也会有按需加载的效果，这是为了解决在生产环境文件体积过大的问题，您可以通过打包工具的 Tree Shaking 功能去掉文件中无用的代码。

> - [Tree Shaking in Rollup](https://rollupjs.org/guide/en/#tree-shaking)
> - [Tree Shaking in Webpack](https://webpack.js.org/guides/tree-shaking/)

Tree Shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 和 [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)。这个术语和概念实际上是由 ES2015 模块打包工具 [Rollup](https://github.com/rollup/rollup) 普及起来的。

如果您当前的开发环境不支持 Tree Shaking, 可以采用以下两种方案。


## 手动引入

手动引入，需要在写代码的时候就只引入用到的文件

```js
import Button from 'uiw/lib/cjs/button';
```

引入对应的样式文件:

```diff
import Button from 'uiw/lib/cjs/button';
+ import 'uiw/lib/cjs/button/style/index.less'; // 引入默认样式 less
```

加载 ES module 组件，不需要加载样式，将自动在代码中加载样式。

```js
import Button from 'uiw/lib/esm/button';
```

> 组件包名规则 `CopyToClipboard` > `copy-to-clipboard`

## Babel 插件来解决

在 Babel 编译阶段通过插件 [`@uiwjs/babel-plugin-transform-uiw-import`](https://github.com/uiwjs/babel-plugin-transform-uiw-import) 把代码转换成按需引入的方式

通过 `.babelrc` 或 `babel-loader` 设置。

```js
{
  "plugins": [
    ["babel-plugin-transform-uiw-import"]
  ]
}
```

示例：

```js
// 转换之前:
import { Button } from 'uiw';

// Babel 最终转换为
var _Button = require('uiw/lib/cjs/button');
```