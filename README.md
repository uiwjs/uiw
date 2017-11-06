<p align="center">
  <a href="https://uiw-react.github.io">
    <img width="150" src="https://raw.githubusercontent.com/uiw-react/uiw/master/docs/assets/logo-README.svg?sanitize=true">
  </a>
</p>
<p align="center">
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

### License

Licensed under the MIT License.
