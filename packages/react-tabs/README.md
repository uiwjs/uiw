Tabs 标签页
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-tabs/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-tabs.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-tabs)
[![npm version](https://img.shields.io/npm/v/@uiw/react-tabs.svg?label=@uiw/react-tabs)](https://npmjs.com/@uiw/react-tabs)

标签页切换组件，分隔内容上有关联但属于不同类别的数据集合。

```jsx
import { Tabs } from 'uiw';
// or
import Tabs from '@uiw/react-tabs';
```

### 基本用法

基础的、简洁的卡片式标签页。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'uiw';

class Demo extends React.Component {
  render() {
    return (
      <Tabs activeKey="1" onTabClick={(tab, key, e) => {
          console.log("=>", key, tab);
        }}>
          <Tabs.Pane label="用户管理" key="1">用户管理</Tabs.Pane>
          <Tabs.Pane label="配置管理" key="2">配置管理</Tabs.Pane>
          <Tabs.Pane sequence="fadeIn up" label="角色管理" key="3">角色管理</Tabs.Pane>
          <Tabs.Pane label="大爷欢乐多" key="4"><div>大爷欢乐多22</div></Tabs.Pane>
      </Tabs>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 行样式

基础的、简洁的卡片式标签页。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'uiw';

class Demo extends React.Component {
  render() {
    return (
      <Tabs type="line" activeKey="1" onTabClick={(tab, key, e) => {
          console.log("=>", key, tab);
        }}>
        <Tabs.Pane label="用户管理" key="1">用户管理</Tabs.Pane>
        <Tabs.Pane disabled label="配置管理" key="2">配置管理</Tabs.Pane>
        <Tabs.Pane sequence="fadeIn up" label="角色管理" key="3">角色管理</Tabs.Pane>
        <Tabs.Pane label="大爷欢乐多" key="4"><div>大爷欢乐多22</div></Tabs.Pane>
      </Tabs>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 卡片样式

另一种样式的页签，不提供对应的垂直样式。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'uiw';

class Demo extends React.Component {
  render() {
    return (
      <Tabs type="card" activeKey="1" onTabClick={(tab, key, e) => {
          console.log("=>", key, tab);
        }}>
        <Tabs.Pane label="用户管理" key="1">用户管理</Tabs.Pane>
        <Tabs.Pane label="配置管理" key="2">配置管理</Tabs.Pane>
        <Tabs.Pane disabled sequence="fadeIn up" label="角色管理" key="3">角色管理</Tabs.Pane>
        <Tabs.Pane label="大爷欢乐多" key="4"><div>大爷欢乐多22</div></Tabs.Pane>
      </Tabs>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```


### 卡片样式

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Divider } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
    };
  }
  render() {
    const { activeKey } = this.state;
    return (
      <div>
        <Tabs
          type="card"
          activeKey={activeKey}
          onTabClick={(activeKey, key, e) => {
            this.setState({ activeKey });
          }}
        >
          <Tabs.Pane label="用户管理" key="1" />
          <Tabs.Pane label="配置管理" key="2" />
          <Tabs.Pane disabled sequence="fadeIn up" label="角色管理" key="3" />
          <Tabs.Pane label="大爷欢乐多" key="4" />
        </Tabs>
        <Divider />
        {activeKey === '1' && (
          <div>用户管理{activeKey}</div>
        )}
        {activeKey === '2' && (
          <div>配置管理{activeKey}</div>
        )}
        {activeKey === '3' && (
          <div>角色管理{activeKey}</div>
        )}
        {activeKey === '4' && (
          <div>大爷欢乐多{activeKey}</div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 超出收缩

当pane过多,超出宽度度时,会将超出部分收缩到下拉选项

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'uiw';

class Demo extends React.Component {

render() {
    const panes=[]
    for (let index = 0; index < 20; index++) {
      panes.push({label:`Tabs-${index}`,key:index})
    }

    return (
      <Tabs
        style={{width:700}}
        activeKey="1"
        onTabClick={(tab, key, e) => {
          console.log("=>", key, tab);
        }}>
        {panes.map(item=>{
          return(
            <Tabs.Pane label={item.label} key={item.key}>{item.label}</Tabs.Pane>
          )
        })}
      </Tabs>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```


## Tabs.Porps

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| type | 页签的基本样式 | Enum{`line`、`card`、`default`} | `default` |
| activeKey | 当前激活 `tab` 面板的 `key` | String | - |
| onTabClick | `tab` 被点击的回调 | Function | `(item, key, e)=>{}` |

## Tabs.Pane.Porps

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| label | 选项卡标题 | String,Node | - |
| key | 对应 activeKey | String,Node | - |
| disabled | 标签是禁用不可点击 | Boolean | `false` |
