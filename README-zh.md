<p align="center">
  <a href="https://uiwjs.github.io">
    <img width="150" src="https://raw.githubusercontent.com/uiwjs/uiw/92f189f53312f1177466f48991736f95f86da0a6/src/assets/logo-README.svg?sanitize=true">
  </a>
</p>
<p align="center">
  <a href="https://travis-ci.org/uiwjs/uiw">
    <img src="https://api.travis-ci.org/uiwjs/uiw.svg?branch=master">
  </a>
  <a href="https://github.com/uiwjs/uiw/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/uiw.svg">
  </a>
  <a href="https://github.com/uiwjs/uiw/network">
    <img src="https://img.shields.io/github/forks/uiwjs/uiw.svg">
  </a>
  <a href="https://github.com/uiwjs/uiw/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/uiw.svg">
  </a>
  <br>
  <a href="https://github.com/uiwjs/uiw/releases">
    <img src="https://img.shields.io/github/release/uiwjs/uiw.svg">
  </a>
  <a href="https://github.com/uiwjs/uiw">
    <img src="https://img.shields.io/dub/l/vibe-d.svg">
  </a>
  <a href="https://www.npmjs.com/package/uiw">
    <img src="https://img.shields.io/npm/v/uiw.svg">
  </a>
  <a href="https://github.com/facebook/jest">
    <img src="https://facebook.github.io/jest/img/jest-badge.svg">
  </a>
</p>

<p align="center">
  <a href="https://uiwjs.github.io"><img src="https://raw.githubusercontent.com/uiwjs/uiw/92f189f53312f1177466f48991736f95f86da0a6/src/assets/uiw-doc.png" /></a>
</p>

uiw
---

`uiw` 是基于 React 16+ 的 UI 组件库。

### 安装

```bash
npm install uiw --save
```

你可以使用 [`kkt`](https://github.com/kktjs/kkt-next) 快速创建一个 react + uiw 的项目。

```bash
npx create-kkt my-app -e uiw
# or npm
$ npm create kkt my-app -e uiw
# or yarn 
$ yarn create kkt my-app -e uiw
```

您可以使用 [uiw v1.x](https://github.com/uiwjs/uiw/tree/v1) 版本。 [请在此处查看文档](https://github.com/uiwjs/uiw/tree/v1)。([**`npx`**](https://github.com/npm/npm/releases/tag/v5.2.0) 需要 `npm 5.2+` 及更高版本。）

### 基本使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```

### 文档

有关更多信息，请访问 [uiwjs.github.io](https://uiwjs.github.io) 网站。

或者在 VSCode 使用 [`vscode-uiw`](https://github.com/uiwjs/vscode-uiw) 插件预览中打开：

[![Open in VSCode](https://jaywcjlove.github.io/sb/open/open-in-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=uiw.uiw)

### 开发

使用 `Gitpod`，`GitHub` 的免费在线开发环境。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/uiw)

或者在本地克隆：

```bash
$ git clone https://github.com/uiwjs/uiw.git
$ npm install # Install dependencies
$ lerna bootstrap # Install all package dependencies
$ lerna bootstrap --scope @uiw/* # Set scope installation dependencies
```

要开发，运行自动加载编译命令：

```bash
$ npm run watch:uiw
$ npm run watch:pkg
$ lerna run --scope uiw watch --stream
```

文件夹说明：

```bash
├── LICENSE
├── README.md
├── package.json
└── packages        
    ├── uiw        # Component library source code
    ├── react-alert
    ├── react-tree
    ├── ...
    └── react-affix
```

### License

Licensed under the MIT License.
