Tabs 标签页
===

标签页切换组件，分隔内容上有关联但属于不同类别的数据集合。

```jsx
import { Tabs } from 'uiw';
// or
import Tabs from '@uiw/react-tabs';
```

### 基本用法

基础的、简洁的卡片式标签页。

<!--DemoStart,bgWhite,codePen--> 
```js
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
<!--End-->

### 行样式

基础的、简洁的卡片式标签页。

<!--DemoStart,bgWhite,codePen--> 
```js
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
<!--End-->

### 卡片样式

另一种样式的页签，不提供对应的垂直样式。

<!--DemoStart,bgWhite,codePen--> 
```js
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
<!--End-->


### 卡片样式

另一种样式的页签，不提供对应的垂直样式。

<!--DemoStart,bgWhite,codePen--> 
```js
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
<!--End-->

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
| keys | 对应 activeKey | String,Node | - |
| disabled | 标签是禁用不可点击 | Boolean | `false` |