在 KKT 中使用
===

要开始使用 [@uiw/core](https://github.com/uiw-react/uiw) 和 [KKT](https://github.com/jaywcjlove/kkt)，请按照下列步骤操作：

1. 安装最新版本的 Node LTS。 [请参阅此处获取说明](https://docs.npmjs.com/getting-started/installing-node)

2. 使用以下命令创建新的 `kkt` 项目：

```bash
npx kkt create my-app
```

此时，您将能够在本地启动默认 `kkt` 应用程序：

```bash
cd my-app
npm start
```

有关 `KKT` 的更多信息，[请参阅自述文件](https://github.com/jaywcjlove/kkt)。

3. 安装 [@uiw/core](https://github.com/uiw-react/uiw) 节点模块：

```bash
npm i @uiw/core
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