<p align="center">
  <a href="https://uiw-react.github.io">
    <img width="150" src="https://raw.githubusercontent.com/uiw-react/uiw/master/src/assets/logo-README.svg?sanitize=true">
  </a>
</p>
<p align="center">
  <a href="https://travis-ci.org/uiw-react/uiw">
    <img src="https://api.travis-ci.org/uiw-react/uiw.svg?branch=master">
  </a>
  <a href="https://github.com/uiw-react/uiw/issues">
    <img src="https://img.shields.io/github/issues/uiw-react/uiw.svg">
  </a>
  <a href="https://github.com/uiw-react/uiw/network">
    <img src="https://img.shields.io/github/forks/uiw-react/uiw.svg">
  </a>
  <a href="https://github.com/uiw-react/uiw/stargazers">
    <img src="https://img.shields.io/github/stars/uiw-react/uiw.svg">
  </a>
  <br>
  <a href="https://github.com/uiw-react/uiw/releases">
    <img src="https://img.shields.io/github/release/uiw-react/uiw.svg">
  </a>
  <a href="https://github.com/uiw-react/uiw">
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
  <a href="https://uiw-react.github.io"><img src="https://raw.githubusercontent.com/uiw-react/uiw/master/src/assets/uiw-doc.png" /></a>
</p>

uiw
---

A high quality UI Toolkit, A Component Library for React 16+. 💘

### Installation

```bash
npm install uiw@2.0.0-beta.1 --save
```

You can use the [`uiw v1.x`](https://github.com/uiw-react/uiw/tree/v1) version.

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

Visit the [uiw-react.github.io](https://uiw-react.github.io) website for more information.

### Development

To develop, run the self-reloading build, Get the code:

```bash
$ git clone https://github.com/uiw-react/uiw.git
$ cd uiw
$ npm install # or  yarn install
```

To develop, run the self-reloading build:

```bash
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
│   └── core
│       ├── lib
│       └── src
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
