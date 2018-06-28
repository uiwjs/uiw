<p align="center">
  <a href="https://uiw-react.github.io">
    <img width="150" src="https://raw.githubusercontent.com/uiw-react/uiw/master/docs/assets/logo-README.svg?sanitize=true">
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

uiw
---

A high quality UI Toolkit, A Component Library for React 16+. 💘

### Installation

```bash
npm install uiw --save
```

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

<p align="center">
<a href="https://uiw-react.github.io"><img src="https://raw.githubusercontent.com/uiw-react/uiw/master/docs/assets/uiw-doc.png" /></a>
</p>

### Development

To develop, run the self-reloading build, Get the code:

```bash
$ git clone https://github.com/uiw-react/uiw.git
$ cd uiw
$ npm install # or  yarn install
# or
$ npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
```

To develop, run the self-reloading build:

```bash
# Run the app
# Restart the app automatically every time code changes. 
# Useful during development.
$ npm start
```

Open your browser and visit http://127.0.0.1:2087

Update the document

```bash
npm run deploy
```

Folders

```bash
├── dist           # document the static file.
├── docs           # documentation in markdown
├── lib            
├── package.json
├── script
└── src            # react source code 
```

### Contributors

This project exists thanks to all the people who contribute, either by submitting packages or with code.

[<img alt="jaywcjlove" src="https://avatars1.githubusercontent.com/u/1680273?v=4&s=68" width="34" />](https://github.com/jaywcjlove)
[<img alt="Xing-He" src="https://avatars0.githubusercontent.com/u/11990205?v=4&s=68" width="34" />](https://github.com/Xing-He)
[<img alt="xr" src="https://avatars0.githubusercontent.com/u/10526437?v=4&s=68" width="34" />](https://github.com/xurui3762791)
[<img alt="kooff88" src="https://avatars0.githubusercontent.com/u/23475830?v=4&s=68" width="34" />](https://github.com/kooff88)
[<img alt="gonghengda" src="https://avatars2.githubusercontent.com/u/30465062?v=4&s=68" width="34" />](https://github.com/gonghengda)
[<img alt="margox" src="https://avatars2.githubusercontent.com/u/7866354?v=4&s=68" width="34" />](https://github.com/margox)
[<img alt="52cik" src="https://avatars0.githubusercontent.com/u/5033310?v=4&s=68" width="34" />](https://github.com/52cik)

### License

Licensed under the MIT License.
