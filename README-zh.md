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

## uiw

`uiw` 是基于 React 16+ 的 UI 组件库。

### 安装

```bash
npm install uiw --save
```

你可以使用 [`kkt`](https://github.com/kktjs/kkt) 快速创建一个 react + uiw 的项目。

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
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "uiw";

ReactDOM.render(
  <Button type="primary">Hello</Button>,
  document.getElementById("app")
);
```

### 文档

有关更多信息，请访问 [uiwjs.github.io](https://uiwjs.github.io) 网站。

或者在 VSCode 使用 [`vscode-uiw`](https://github.com/uiwjs/vscode-uiw) 插件预览中打开：

[![Open in VSCode](https://jaywcjlove.github.io/sb/open/open-in-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=uiw.uiw)

### 依赖包

这个 `git` 仓库是一个使用 [`Lerna`](https://github.com/lerna/lerna) 构建的仓库。它包含以下一些软件包：

Package | Version | Description
---- | ---- | ----
[`uiw`](/packages/uiw) | [![npm](https://img.shields.io/npm/v/uiw.svg?maxAge=3600)](https://www.npmjs.com/package/uiw) | - |
[`@uiw/formatter`](https://github.com/uiwjs/date-formatter) | [![npm](https://img.shields.io/npm/v/@uiw/formatter.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/formatter) | - |
[`@uiw/react-affix`](/packages/react-affix) | [![npm](https://img.shields.io/npm/v/@uiw/react-affix.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-affix) | - |
[`@uiw/react-alert`](/packages/react-alert) | [![npm](https://img.shields.io/npm/v/@uiw/react-alert.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-alert) | - |
[`@uiw/react-avatar`](/packages/react-avatar) | [![npm](https://img.shields.io/npm/v/@uiw/react-avatar.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-avatar) | - |
[`@uiw/react-back-top`](/packages/react-back-top) | [![npm](https://img.shields.io/npm/v/@uiw/react-back-top.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-back-top) | - |
[`@uiw/react-badge`](/packages/react-badge) | [![npm](https://img.shields.io/npm/v/@uiw/react-badge.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-badge) | - |
[`@uiw/react-breadcrumb`](/packages/react-breadcrumb) | [![npm](https://img.shields.io/npm/v/@uiw/react-breadcrumb.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-breadcrumb) | - |
[`@uiw/react-button`](/packages/react-button) | [![npm](https://img.shields.io/npm/v/@uiw/react-button.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-button) | - |
[`@uiw/react-button-group`](/packages/react-button-group) | [![npm](https://img.shields.io/npm/v/@uiw/react-button-group.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-button-group) | - |
[`@uiw/react-calendar`](/packages/react-calendar) | [![npm](https://img.shields.io/npm/v/@uiw/react-calendar.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-calendar) | - |
[`@uiw/react-card`](/packages/react-card) | [![npm](https://img.shields.io/npm/v/@uiw/react-card.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-card) | - |
[`@uiw/react-checkbox`](/packages/react-checkbox) | [![npm](https://img.shields.io/npm/v/@uiw/react-checkbox.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-checkbox) | - |
[`@uiw/react-collapse`](/packages/react-collapse) | [![npm](https://img.shields.io/npm/v/@uiw/react-collapse.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-collapse) | - |
[`@uiw/react-copy-to-clipboard`](/packages/react-copy-to-clipboard) | [![npm](https://img.shields.io/npm/v/@uiw/react-copy-to-clipboard.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-copy-to-clipboard) | - |
[`@uiw/react-date-input`](/packages/react-date-input) | [![npm](https://img.shields.io/npm/v/@uiw/react-date-input.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-date-input) | - |
[`@uiw/react-date-picker`](/packages/react-date-picker) | [![npm](https://img.shields.io/npm/v/@uiw/react-date-picker.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-date-picker) | - |
[`@uiw/react-descriptions`](/packages/react-descriptions) | [![npm](https://img.shields.io/npm/v/@uiw/react-descriptions.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-descriptions) | - |
[`@uiw/react-divider`](/packages/react-divider) | [![npm](https://img.shields.io/npm/v/@uiw/react-divider.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-divider) | - |
[`@uiw/react-drawer`](/packages/react-drawer) | [![npm](https://img.shields.io/npm/v/@uiw/react-drawer.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-drawer) | - |
[`@uiw/react-dropdown`](/packages/react-dropdown) | [![npm](https://img.shields.io/npm/v/@uiw/react-dropdown.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-dropdown) | - |
[`@uiw/react-file-input`](/packages/react-file-input) | [![npm](https://img.shields.io/npm/v/@uiw/react-file-input.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-file-input) | - |
[`@uiw/react-form`](/packages/react-form) | [![npm](https://img.shields.io/npm/v/@uiw/react-form.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-form) | - |
[`@uiw/react-grid`](/packages/react-grid) | [![npm](https://img.shields.io/npm/v/@uiw/react-grid.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-grid) | - |
[`@uiw/react-icon`](/packages/react-icon) | [![npm](https://img.shields.io/npm/v/@uiw/react-icon.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-icon) | - |
[`@uiw/react-input`](/packages/react-input) | [![npm](https://img.shields.io/npm/v/@uiw/react-input.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-input) | - |
[`@uiw/react-list`](/packages/react-list) | [![npm](https://img.shields.io/npm/v/@uiw/react-list.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-list) | - |
[`@uiw/react-loader`](/packages/react-loader) | [![npm](https://img.shields.io/npm/v/@uiw/react-loader.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-loader) | - |
[`@uiw/react-menu`](/packages/react-menu) | [![npm](https://img.shields.io/npm/v/@uiw/react-menu.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-menu) | - |
[`@uiw/react-message`](/packages/react-message) | [![npm](https://img.shields.io/npm/v/@uiw/react-message.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-message) | - |
[`@uiw/react-modal`](/packages/react-modal) | [![npm](https://img.shields.io/npm/v/@uiw/react-modal.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-modal) | - |
[`@uiw/react-month-picker`](/packages/react-month-picker) | [![npm](https://img.shields.io/npm/v/@uiw/react-month-picker.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-month-picker) | - |
[`@uiw/react-notify`](/packages/react-notify) | [![npm](https://img.shields.io/npm/v/@uiw/react-notify.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-notify) | - |
[`@uiw/react-overlay`](/packages/react-overlay) | [![npm](https://img.shields.io/npm/v/@uiw/react-overlay.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-overlay) | - |
[`@uiw/react-overlay-trigger`](/packages/react-overlay-trigger) | [![npm](https://img.shields.io/npm/v/@uiw/react-overlay-trigger.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-overlay-trigger) | - |
[`@uiw/react-pagination`](/packages/react-pagination) | [![npm](https://img.shields.io/npm/v/@uiw/react-pagination.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-pagination) | - |
[`@uiw/react-pin-code`](/packages/react-pin-code) | [![npm](https://img.shields.io/npm/v/@uiw/react-pin-code.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-pin-code) | - |
[`@uiw/react-popover`](/packages/react-popover) | [![npm](https://img.shields.io/npm/v/@uiw/react-popover.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-popover) | - |
[`@uiw/react-portal`](/packages/react-portal) | [![npm](https://img.shields.io/npm/v/@uiw/react-portal.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-portal) | - |
[`@uiw/react-progress`](/packages/react-progress) | [![npm](https://img.shields.io/npm/v/@uiw/react-progress.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-progress) | - |
[`@uiw/react-radio`](/packages/react-radio) | [![npm](https://img.shields.io/npm/v/@uiw/react-radio.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-radio) | - |
[`@uiw/react-rate`](/packages/react-rate) | [![npm](https://img.shields.io/npm/v/@uiw/react-rate.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-rate) | - |
[`@uiw/react-search-select`](/packages/react-search-select) | [![npm](https://img.shields.io/npm/v/@uiw/react-search-select.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-search-select) | - |
[`@uiw/react-select`](/packages/react-select) | [![npm](https://img.shields.io/npm/v/@uiw/react-select.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-select) | - |
[`@uiw/react-split`](https://github.com/uiwjs/react-split) | [![npm](https://img.shields.io/npm/v/@uiw/react-split.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-split) | - |
[`@uiw/react-slider`](/packages/react-slider) | [![npm](https://img.shields.io/npm/v/@uiw/react-slider.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-slider) | - |
[`@uiw/react-steps`](/packages/react-steps) | [![npm](https://img.shields.io/npm/v/@uiw/react-steps.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-steps) | - |
[`@uiw/react-switch`](/packages/react-switch) | [![npm](https://img.shields.io/npm/v/@uiw/react-switch.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-switch) | - |
[`@uiw/react-table`](/packages/react-table) | [![npm](https://img.shields.io/npm/v/@uiw/react-table.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-table) | - |
[`@uiw/react-tabs`](/packages/react-tabs) | [![npm](https://img.shields.io/npm/v/@uiw/react-tabs.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-tabs) | - |
[`@uiw/react-tag`](/packages/react-tag) | [![npm](https://img.shields.io/npm/v/@uiw/react-tag.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-tag) | - |
[`@uiw/react-textarea`](/packages/react-textarea) | [![npm](https://img.shields.io/npm/v/@uiw/react-textarea.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-textarea) | - |
[`@uiw/react-time-picker`](/packages/react-time-picker) | [![npm](https://img.shields.io/npm/v/@uiw/react-time-picker.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-time-picker) | - |
[`@uiw/react-tooltip`](/packages/react-tooltip) | [![npm](https://img.shields.io/npm/v/@uiw/react-tooltip.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-tooltip) | - |
[`@uiw/react-tree`](/packages/react-tree) | [![npm](https://img.shields.io/npm/v/@uiw/react-tree.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-tree) | - |
[`@uiw/react-tree-checked`](/packages/react-tree-checked) | [![npm](https://img.shields.io/npm/v/@uiw/react-tree-checked.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/react-tree-checked) | - |
[`@uiw/utils`](/packages/utils) | [![npm](https://img.shields.io/npm/v/@uiw/utils.svg?maxAge=3600)](https://www.npmjs.com/package/@uiw/utils) | - |
                                  | -           |

### 开发

使用 `Gitpod`，`GitHub` 的免费在线开发环境。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/uiw)

或者在本地克隆：

```bash
$ npm install # Install dependencies
$ lerna bootstrap # Install all package dependencies
$ lerna bootstrap --scope @uiw/* # Set scope installation dependencies
$ npm run build
```

要开发，运行自动加载编译命令：

```bash
# Run the app
# Restart the app automatically every time code changes.
# Useful during development.
$ npm run w:t:uiw
$ npm run w:ts:uiw
$ lerna run --scope uiw watch --stream
$ lerna exec --scope @uiw/button -- tsbb types --outDir lib/esm --target ESNEXT --watch
$ lerna exec --scope @uiw/button -- tsbb watch --target react --env-name esm:dev --env-name cjs
```

文件夹说明：

```bash
├── LICENSE
├── README.md
├── package.json
├── website
│   ├── uiw        # Documentation website source code
└── packages
    ├── uiw        # Component library source code
    ├── react-alert
    ├── react-tree
    ├── ...
    └── react-affix
```

### License

Licensed under the MIT License.
