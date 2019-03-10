文档编辑预览
===

我们使用 [`npm`](https://www.npmjs.com/package/@uiw/doc) 来管理 `uiw` 文档站点的版本，使用 [unpkg.com](https://unpkg.com/@uiw/doc/web/index.html) 预览。文档版本管理，是根据 `unpkg` 工具支持静态服务和同步 `npm` 包的特点，来实现这一功能的。所以我们在发布 [`uiw`](https://www.npmjs.com/package/uiw) 包的同时会发布 [`@uiw/doc`](https://www.npmjs.com/package/@uiw/doc) 包，版本是同步的。

最新版本预览网址：https://unpkg.com/@uiw/doc/web/index.html  
官网地址预览：https://uiwjs.github.io/  


这是 [`v2.0.0+`](https://unpkg.com/@uiw/doc@2.0.0-beta.12/web/index.html) 版本预览方法

```bash
https://unpkg.com/@uiw/doc@<包版本>/web/index.html
# 例如：
https://unpkg.com/@uiw/doc@2.0.0-beta.12/web/index.html
```

这是 [v1.16.14](https://unpkg.com/uiw@1.16.14/dist/index.html) 版本预览，目前 `v1` 只有这一个版本可预览

```
https://unpkg.com/uiw@1.16.14/dist/index.html
```

⚠️ 文档网站静态资源原本放在 uiw 包中，由于每次安装 uiw 体积较大，下载非常慢，从 [`uiw@2.0.0-beta.7+`](https://unpkg.com/@uiw/doc/web/index.html) 版本开始抽离到单独的 [`@uiw/doc`](https://www.npmjs.com/package/@uiw/doc) 包，进行同步发布，后面所有的版本均有文档可预览。

### 文档离线预览

根据上述特点，可将文档网站资源下载到本地，通过类似 [ssr](https://www.npmjs.com/package/ssr) 的工具，启静态服务进行预览。

```bash
# 安装静态服务工具
$ mpm install -g ssr
# 安装下载文档
$ npm install --save-dev @uiw/doc
$ npm install --save-dev @uiw/doc@2.0.0-beta.12

# 进入目录
cd node_modules/@uiw/doc/web
ssr # 启动服务
```

### 文档编写

在 Markdown 文档中编写代 React 码实例，文档爬取代码实例进行预览。


```html
<\!--DemoStart--> 
```js
const Demo = () => (
  <div>
    <Button basic type="primary">主要按钮</Button>
  </div>
);
\```
<\!--End-->
```

使用 `<\!--DemoStart-->` 和 `<\!--End-->` 标识字符串，包裹一段代码高亮区域，文档将自动匹配，进行预览该区域代码，提供源码编辑器，编辑并实时预览。

被包裹的标识字符串是 `HTML` 注释，在 markdown 预览的时候将起到不显示的作用，在 GitHub 中预览 `标识字符串` 会被。

标识符在 `2.0.0+` 版本文档，可以传递参数，传递方法: 

```markdown
<!--DemoStart,bgWhite,noCode,noPreview,noScroll,codePen-->
```

参数用英文逗号隔开

- `bgWhite` 设置代码预览背景白色，否则为格子背景。
- `noCode` 不显示代码编辑器。 
- `noPreview` 不显示代码预览效果。
- `noScroll` 预览区域不显示滚动条。
- `codePen` 显示 Codepen 按钮，要特别注意 `包导入的问题`，实例中的 `import` 主要用于 Codepen 使用。

### 编辑器插件

可以在 VSCode中安装 [uiw document](https://github.com/uiwjs/vscode-uiw) 插件，方便快速查看文档。

[![Open in VSCode](https://jaywcjlove.github.io/sb/open/open-in-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=uiw.uiw)

![](https://raw.githubusercontent.com/uiwjs/vscode-uiw/90321e06d2d4be970a26b7761f7e86d145e896e5/images/uiw.gif)