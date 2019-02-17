历史版本文档预览
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

**文档离线预览**

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
