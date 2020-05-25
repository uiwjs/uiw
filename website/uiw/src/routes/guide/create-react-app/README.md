在 Create React App 中使用
===

要开始使用 [uiw](https://github.com/uiwjs/uiw) 和 [Create React App](https://github.com/facebook/create-react-app) (CRA)，此时我们需要对 [create-react-app](https://github.com/facebook/create-react-app) 的默认配置进行自定义，这里我们使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) （一个对 [create-react-app](https://github.com/facebook/create-react-app) 进行自定义配置的社区解决方案）。

> 也可以使用 [`kkt@5x`](https://github.com/kktjs/kkt-next) 新的版本，是基于 [create-react-app@3x](https://github.com/facebook/create-react-app) 轻度维护基于 `TypeScript` 重写的版本，此工具可以在不 `eject` 也不创建额外 react-scripts 的情况下修改 [create-react-app@3x](https://github.com/facebook/create-react-app) 内置的 webpack 配置，然后你将拥有 [create-react-app](https://github.com/facebook/create-react-app) 的一切特性，且可以根据你的需要去配置 `webpack` 的 `plugins`, `loaders` 等，这里是 [kkt 使用教程](#kkt)。

请按照下列步骤操作：

1. 安装最新版本的 Node LTS。 [请参阅此处获取说明](https://docs.npmjs.com/getting-started/installing-node)
2. 使用以下命令创建新的 `CRA` 项目：

```bash
npx create-react-app my-app
```

此时，您将能够在本地启动默认 `CRA` 应用程序：

```bash
cd my-app
yarn start
```

有关 Create React App 的更多信息，[请参阅CRA自述文件](https://github.com/facebook/create-react-app)。

3. 安装 [uiw](https://github.com/uiwjs/uiw) 包：

```bash
yarn add uiw
```

4. 打开 `src/App.js` 并将内容替换为：

```jsx
import React, { Component } from 'react';
import { Button } from 'uiw';

export default class App extends Component {
  render() {
    return <Button size="small" type="primary">Click Me</Button>;
  }
}
```