Drawer 抽屉
===

一个从页面边缘滑动出来的浮层，可以替代 [`<Modal>`](#/components/modal) 更多样的展示方式。

```jsx
import { Drawer } from 'uiw';
// or
import Drawer from '@uiw/react-drawer';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Drawer, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.state.visible });
  }
  onClose() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Drawer
          title="抽屉标题"
          isOpen={this.state.visible}
          onClose={this.onClose.bind(this)}
        >
          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
          <br /><br />
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
          <br /><br />
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
          <br /><br />
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
          <br /><br />
          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
          <br /><br />
          <b>组件</b>
          <br /><br />
          React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。
        </Drawer>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>打开抽屉</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 显示位置

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Drawer, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      placement: null,
    }
  }
  onClick(placement) {
    this.setState({ visible: !this.state.visible, placement });
  }
  onClose() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Drawer
          title="抽屉标题"
          icon="information"
          placement={this.state.placement}
          isOpen={this.state.visible}
          footer="页脚，可以放点内容"
          onClose={this.onClose.bind(this)}
        >
          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
          <br /><br />
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
          <br /><br />
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
          <br /><br />
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
          <br /><br />
          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
          <br /><br />
          <b>组件</b>'top', 'right', 'bottom', 'left'
        </Drawer>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this, 'left')}>Left</Button>
          <Button onClick={this.onClick.bind(this, 'top')}>Top</Button>
          <Button onClick={this.onClick.bind(this, 'bottom')}>Bottom</Button>
          <Button onClick={this.onClick.bind(this, 'right')}>Right</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```


### 添加页脚

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Drawer, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.state.visible });
  }
  onClose() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Drawer
          title="抽屉标题"
          isOpen={this.state.visible}
          onClose={this.onClose.bind(this)}
          footer={
            <div>
              <Button size="small" type="danger" onClick={this.onClick.bind(this)}>关闭抽屉</Button>
              <Button size="small" type="success">其它</Button>
            </div>
          }
        >
          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
          <br /><br />
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
          <br /><br />
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
          <br /><br />
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
          <br /><br />
          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
          <br /><br />
          <b>组件</b>
          <br /><br />
          React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。
        </Drawer>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>打开抽屉</Button>
        </ButtonGroup>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 抽屉标题 | String | - |
| icon | 设置对话框右上角图标 | String/Element | - |
| isOpen | 是否可见 | Boollean | - |
| closable | 是否显示右上角的关闭按钮 | Boollean | `true` |
| placement | 抽屉的方向 | Enum{`top`, `right`, `bottom`, `left`} | `right` |
| size | 高度/宽度，在 `placement` 为 `top` 或 `bottom` 时使用为设置高度，否则设置宽度 | Number | - |
| bodyProps | 抽屉填充内容的参数样式对象，例如`className`,`style`等 | Object | - |


更多属性文档请参考 [Overlay](#/components/overlay)。
