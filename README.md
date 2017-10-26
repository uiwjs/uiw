<p align="center">
    <a href="https://uiw-react.github.io">
        <img width="150" src="https://raw.githubusercontent.com/uiw-react/uiw/master/docs/assets/logo-README.svg?sanitize=true">
    </a>
</p>

uiw
---

<p align="center">

[![](https://img.shields.io/github/issues/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/issues) [![](https://img.shields.io/github/forks/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/network) [![](https://img.shields.io/github/stars/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/stargazers) [![](https://img.shields.io/github/release/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/releases) [![Packagist](https://img.shields.io/packagist/l/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw) [![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/uiw)

</p>

A high quality UI Toolkit, A Component Library for React 16+. 💘

### Install

```bash
npm install uiw --save
```

### Usage

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