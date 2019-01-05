快速上手
===

[![](https://api.travis-ci.org/uiw-react/uiw.svg?branch=master)](https://travis-ci.org/uiw-react/uiw/builds) [![](https://img.shields.io/github/issues/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/issues) [![](https://img.shields.io/github/forks/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/network) [![](https://img.shields.io/github/stars/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/stargazers) [![](https://img.shields.io/github/release/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/releases) [![Packagist](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiw-react/uiw) [![Packagist](https://img.shields.io/npm/v/uiw.svg)](https://www.npmjs.com/package/uiw) [![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

## 安装

```bash
npm i @uiw/core # 安装 v2.x.x 最新版本
```

> `v1.x` 不可以升级到 `v2.x`，`v2`是对 v1 的重构和简化  

安装 `v1.x.x` 版本

```bash
npm install uiw --save
```

## 通过 GitHub 仓库安装

```bash
npm i -S uiw-react/uiw
# 指定版本
npm i -S uiw-react/uiw#v1.2.12
# 或者
yarn add uiw-react/uiw
```

>  **通过GitHub仓库安装**的 `win` 用户请在 `Git Bash` 下执行，因为需要用到 `git`。

## 对新版本 v2.x 的更新内容

1. 优化大部分组件，让组件变得更小更简单。
2. 删除大部分组件冗余功能，直接使用样式就可以展现组件效果。
2. 删除冗余组件，例如组件 `Capsule 胶囊` 与 `Tag 标签` 组件合并。
3. 抽离组件，需要单独安装，如 `HeatMap 日历热图`
4. 支持服务端渲染，可以通过 [kkt-ssr](https://github.com/jaywcjlove/kkt-ssr) 工具建立实例。

## 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```

## 组件冲突

重新取一个名字

```js
import { Button as ButtonView } from 'uiw';
```

## 按需加载组件

```diff
- import { Alert } from 'uiw';
+ import { Alert } from 'uiw/lib/alert';
```

## 开发

要开发，运行自重新构建，获取代码：

```bash
$ git clone https://github.com/uiw-react/uiw.git
$ cd uiw
$ npm install # or  yarn install
# or 解决phantomjs下载失败问题
$ npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
```

要开发，运行自重新构建：

```bash
# Run the app
# Restart the app automatically every time code changes. 
# Useful during development.
$ npm start
```

打开浏览器并访问：http://127.0.0.1:2087

更新文档

```bash
npm run deploy
```

## 文件目录说明

```bash
├── dist           # 生成的文档静态文件目录
├── docs           # 文档的源文件
├── lib            
├── package.json
├── script
└── src            # React组件在此
```

## License

Licensed under the MIT License.
