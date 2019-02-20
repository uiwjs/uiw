<p align="center">
  <a href="https://uiwjs.github.io">
    <img width="150" src="https://raw.githubusercontent.com/uiwjs/uiw/master/src/assets/logo-README.svg?sanitize=true">
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
  <a href="https://uiwjs.github.io"><img src="https://raw.githubusercontent.com/uiwjs/uiw/master/src/assets/uiw-doc.png" /></a>
</p>

uiw
---

A high quality UI Toolkit, A Component Library for React 16+. 💘

### Installation

```bash
npm install uiw@2.0.0-beta.22 --save
```

You can use [`kkt`](https://github.com/jaywcjlove/kkt) to quickly create a react + uiw project.

```bash
npx kkt create my-app -e uiw
```

You can use the [`uiw v1.x`](https://github.com/uiwjs/uiw/tree/v1) version. [Please see here for instructions](https://github.com/uiwjs/uiw/tree/v1).

### Basic Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```

### Documentation

Visit the [uiwjs.github.io](https://uiwjs.github.io) website for more information.

### Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/uiw)

Or clone locally:

```bash
$ git clone https://github.com/uiwjs/uiw.git
$ cd uiw
$ npm install # or  yarn install
$ cd uiw/packages/core && npm install
```

To develop, run the self-reloading build:

```bash
$ cd ./packages/core
npm run watch
# Run the app
# Restart the app automatically every time code changes. 
# Useful during development.
$ npm start
```

Open your browser and visit http://localhost:19870

Update the document

```bash
npm run deploy
```

Folders

```bash
├── LICENSE
├── README.md
├── package.json
├── packages        # Component library source code
│   ├── core
│   |   └── src
│   └── doc
├── public          # Document the static file.
└── src             # Document website source code.
    ├── Router.js
    ├── assets
    ├── common      # Menu and routing configuration.
    ├── components
    ├── index.js
    ├── layouts
    ├── models
    ├── routes
    ├── store
    ├── styles
    └── utils
```

### License

Licensed under the MIT License.
