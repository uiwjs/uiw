在 Create React App 中使用
===

要开始使用 [@uiw/core](https://github.com/uiw-react/uiw) 和 [Create React App](https://github.com/facebook/create-react-app) (CRA)，请按照下列步骤操作：

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

3. 安装 [@uiw/core](https://github.com/uiw-react/uiw) 节点模块：

```bash
yarn add @uiw/core
```

4. 打开 `src/App.js` 并将内容替换为：

```jsx
import React, { Component } from 'react';
import { Button } from '@uiw/core';

export default class App extends Component {
  render() {
    return <Button size="small" type="primary">Click Me</Button>;
  }
}
```