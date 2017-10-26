<p align="center">
    <a href="https://uiw-react.github.io">
        <img width="100" src="./docs/assets/logo.svg">
    </a>
</p>

uiw
---

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

Update the document

```bash
npm run deploy
```

### License

Licensed under the MIT License.