# 快速上手

[![](https://api.travis-ci.org/uiwjs/uiw.svg?branch=master)](https://travis-ci.org/uiwjs/uiw/builds) [![](https://img.shields.io/github/issues/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/issues) [![](https://img.shields.io/github/forks/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/network) [![](https://img.shields.io/github/stars/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/stargazers) [![](https://img.shields.io/github/release/uiwjs/uiw.svg)](https://github.com/uiwjs/uiw/releases) [![Packagist](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiwjs/uiw) [![Packagist](https://img.shields.io/npm/v/uiw.svg)](https://www.npmjs.com/package/uiw) [![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

## 安装

使用 npm 或 yarn 安装

```bash
$ npm i uiw
# or Use yarn
$ yarn add uiw
```

您可以使用 [`kkt`](https://github.com/kktjs/kkt) 快速创建一个 react + uiw 项目。

```bash
$ npx create-kkt my-app -e uiw
```

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 uiw。

我们在 [`npm`](https://www.npmjs.com/package/uiw) 发布包内的 `uiw/dist` 目录下提供了 `uiw.js` `uiw.css` 以及 `uiw.min.js` `uiw.min.css`。你也可以通过 [UNPKG](https://unpkg.com/uiw/dist/) 进行下载。

> ⚠️ 强烈不推荐使用已构建文件，这样无法按需加载。  
> ⚠️ 浏览器引入只在 uiw v2.x 以上的版本支持。

### 安装 [**v1.x**](https://unpkg.com/uiw@1.16.19/dist/index.html#/cn/quick-start) 旧版本

> ⚠️ `v1.x` 不可以升级到 `v2.x`，`v2`是对 v1 的重构和简化

安装 [**`v1.x`**](https://unpkg.com/uiw/dist/index.html#/cn/quick-start) 版本

```bash
npm install uiw --save

## 通过 GitHub 仓库安装
npm i -S uiwjs/uiw
# 指定版本
npm i -S uiwjs/uiw#v1.16.19
# 或者
yarn add uiwjs/uiw
```

> **通过 GitHub 仓库安装**的 `win` 用户请在 `Git Bash` 下执行，因为需要用到 `git`。

### 升级 v4

1. 从 @4.x 开始每个组件都可以独立使用。
2. 代码优化部分组件 Class 组件转换成 函数组件，编译之后体积大幅缩小。
3. 跟进 React 16 废弃生命周期 API。
4. 重构通过 useMemo 进行性能优化。

### 升级 v3

1. 基于 TypeScript 重构。
2. v2 基本无压力升级到 v3。
3. 一些组件优化。

### 升级 v2.x

1. 优化大部分组件，让组件变得更小更简单。
2. 删除大部分组件冗余功能，直接使用样式就可以展现组件效果。
3. 删除冗余组件，例如组件 `Capsule 胶囊` 与 `Tag 标签` 组件合并。
4. 抽离组件，需要单独安装，如 `HeatMap 日历热图`
5. 支持服务端渲染，可以通过 [kkt-ssr](https://github.com/kktjs/kkt-ssr) 工具建立实例。

### 使用

使用过程中不需要引入 `CSS`，打包工具需要支持加载 [ES Module](https://github.com/rollup/rollup/wiki/pkg.module)，如果不支持需要手工引入 `css` 或者 `less` 样式，如果对环境使用有障碍，可以通过 [`kkt`](#/guide/kkt) 工具初始化一个工程。

```js
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "uiw";

ReactDOM.render(
  <Button type="primary">Hello</Button>,
  document.getElementById("app")
);
```

### 组件冲突

重新取一个名字

```js
import { Button as ButtonView } from "uiw";
```

### VSCode 中文档预览

组件文档可以在 [`VSCode`](https://marketplace.visualstudio.com/items?itemName=uiw.uiw) 中预览，打开下面链接进行安装 [`VSCode`](https://marketplace.visualstudio.com/items?itemName=uiw.uiw) 插件。

[![Open in VSCode](https://jaywcjlove.github.io/sb/open/open-in-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=uiw.uiw)

### 国内镜像站点

国内用户，通过[国内镜像站点](http://uiw.gitee.io/)访问文档网站来提高访问速度。

### 开发

使用 [`Gitpod`](https://gitpod.io)，`GitHub` 的免费在线开发环境，点击打开下面链接，自动初始化项目，将开发环境跑起来。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/uiwjs.github.io)

要开发，运行自重新构建，获取代码：

```bash
$ git clone https://github.com/uiwjs/uiwjs.github.io.git --recurse-submodules
```

要开发，运行自重新构建，这里将要跑两个任务：

```bash
# Listening compiled component code.
$ cd ./uiwjs.github.io
$ npm install # 安装依赖

$ lerna bootstrap # 安装所有包依赖
$ lerna bootstrap --scope @uiw/* # 单独安装匹配到的包依赖
$ npm run build # 生成编译 JS. TS

$ npm run w:t:uiw
$ npm run w:ts:uiw
$ lerna run --scope uiw watch --stream
$ lerna exec --scope @uiw/button -- tsbb types --outDir lib/esm --target ESNEXT --watch
$ lerna exec --scope @uiw/button -- tsbb watch --target react --env-name esm:dev --env-name cjs
```

```bash
# Run the app
# Restart the app automatically every time code changes.
# Useful during development.
$ npm start
```

打开浏览器并访问：http://localhost:19870

## 文件目录说明

```bash
├── LICENSE
├── README.md
├── package.json
├── website
│   ├── uiw        # Documentation website source code
└── packages
    ├── uiw        # Component library source code
    ├── react-alert
    ├── ...
    └── react-affix
```

## License

Licensed under the MIT License.
