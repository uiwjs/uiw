在 KKT 中使用
===

[`kkt@5x`](https://github.com/kktjs/kkt) 新的版本，是基于 [create-react-app@3x](https://github.com/facebook/create-react-app) 轻度维护基于 `TypeScript` 重写的版本，此工具可以在不 `eject` 也不创建额外 react-scripts 的情况下修改 [create-react-app@3x](https://github.com/facebook/create-react-app) 内置的 webpack 配置，然后你将拥有 [create-react-app](https://github.com/facebook/create-react-app) 的一切特性，且可以根据你的需要去配置 `webpack` 的 `plugins`, `loaders` 等，未来将在 `kkt` 中集成 [@kktjs/kkt-ssr](https://github.com/kktjs/kkt-ssr) 服务端渲染。

要开始使用 [uiw](https://github.com/uiwjs/uiw) 和 [kkt](https://github.com/kktjs/kkt)，请按照下列步骤操作：

1. 安装最新版本的 Node LTS。 [请参阅此处获取说明](https://docs.npmjs.com/getting-started/installing-node)
2. 使用以下命令创建新的 `kkt` 项目：

你可以直接通过下面命令初始化一个工程，直接开始开发

```bash
npx create-kkt my-app -e uiw
# or npm
npm create kkt my-app -e uiw
# or yarn
yarn create kkt my-app -e uiw
```

注意 [**npx**](https://github.com/npm/npm/releases/tag/v5.2.0) 命令只在 npm 5.2+ 或更高版本中支持。

你也可以使用 [kkt](https://github.com/kktjs/kkt) 工具通过下面步骤，一步一步的创建一个 [kkt](https://github.com/kktjs/kkt) 工程

```bash
npx create-kkt my-app
```

此时，您将能够在本地启动默认 `kkt` 应用程序：

```bash
cd my-app
npm start
```

有关 `KKT` 的更多信息，[请参阅自述文件](https://github.com/kktjs/kkt)。

1. 安装 [uiw](https://github.com/uiwjs/uiw) 包：

```bash
npm i uiw
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

### 从 create-react-app 迁移到 kkt 中

```diff
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
+  "devDependencies": {
+    "kkt": "5.0.4"
+  },
-  "dependencies": {
-    "@testing-library/jest-dom": "^4.2.4",
-    "@testing-library/react": "^9.3.2",
-    "@testing-library/user-event": "^7.1.2",
-    "react": "^16.12.0",
-    "react-dom": "^16.12.0",
-    "react-scripts": "3.3.0"
-  },
+  "dependencies": {
+    "react": "^16.12.0",
+    "react-dom": "^16.12.0",
+    "uiw": "^3.10.4"
+  },
  "scripts": {
-    "start": "react-scripts start",
+    "start": "kkt start",
-    "build": "react-scripts build",
+    "build": "kkt build",
-    "test": "react-scripts test",
+    "test": "kkt test --env=jsdom",
+    "test:coverage": "kkt test --env=jsdom --coverage"
-    "eject": "react-scripts eject"
  },
-  "eslintConfig": {
-    "extends": "react-app"
-  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```