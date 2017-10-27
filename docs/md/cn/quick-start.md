快速上手
===

[![](https://img.shields.io/github/issues/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/issues) [![](https://img.shields.io/github/forks/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/network) [![](https://img.shields.io/github/stars/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/stargazers) [![](https://img.shields.io/github/release/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/releases) [![Packagist](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiw-react/uiw) [![Packagist](https://img.shields.io/npm/v/uiw.svg)](https://www.npmjs.com/package/uiw)

### 安装

```bash
npm install uiw --save

# 通过git仓库安装
npm i -S git+ssh://git@github.com:uiw-react/uiw.git#v1.2.8
```

### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'uiw';

ReactDOM.render(
  <Button type="primary">Hello</Button>, 
  document.getElementById('app')
);
```

### 组件冲突

重新取一个名字

```js
import { Button as ButtonView } from 'uiw';
```

### 按需加载组件

```diff
- import { Alert } from 'uiw';
+ import { Alert } from 'uiw/src/alert';
```

### 开发

要开发，运行自重新构建，获取代码：

```
$ git clone https://github.com/uiw-react/uiw.git
$ cd uiw
$ npm install # or  yarn install
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

### 文件目录说明

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
