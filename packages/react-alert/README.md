Alert 确认对话框
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-alert/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-alert.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-alert)
[![npm version](https://img.shields.io/npm/v/@uiw/react-alert.svg?label=@uiw/react-alert)](https://npmjs.com/@uiw/react-alert)

弹出对话框会在继续之前，通知用户重要信息，点击确定后异步关闭对话框。

```jsx
import { Alert } from 'uiw';
// or
import Alert from '@uiw/react-alert';
```

## 基本用法

```jsx mdx:preview
import React from 'react';
import { Alert, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible1: false,
      visible2: false,
    }
  }
  onClick(type) {
    this.setState({ [type]: !this.state[type] });
  }
  onClosed(type) {
    this.setState({ [type]: false });
  }
  render() {
    return (
      <div>
        <Alert
          isOpen={this.state.visible1}
          confirmText="确定按钮"
          onClosed={this.onClosed.bind(this, 'visible1')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible2}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="danger"
          onConfirm={() => console.log('您点击了确定按钮！')}
          onCancel={() => console.log('您点击了取消按钮！')}
          onClosed={this.onClosed.bind(this, 'visible2')}
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。用作通知用户重要信息。
        </Alert>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this, 'visible1')}>单个按钮确认对话框</Button>
          <Button onClick={this.onClick.bind(this, 'visible2')}>确认对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
export default Demo
```

## 延迟关闭对话框

这里是利用 `Promise` 等它执行完成再去关闭窗口

```jsx mdx:preview
import React from 'react';
import { Alert, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick() {
    this.setState({ visible: !this.statevisible });
  }
  onClosed() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Alert
          icon="delete"
          isOpen={this.state.visible}
          confirmText="确定按钮"
          type="danger"
          onConfirm={() => {
            console.log('确定回调！, 这里是利用Promise等执行完成再去关闭窗口');
            return new Promise((resolve, reject) => {
              const random = Math.random();
              console.log('测试，随机值大于 0.5 执行 resolve 事件，否则 执行 reject 触发 catch 错误', random, random > 0.5)
              setTimeout(random > 0.5 ? resolve : reject, 3000);
            }).catch(() => {
              // 可以通过下面方式，阻止弹框消失
              // throw new Error();
            });
          }}
          onClosed={this.onClosed.bind(this, 'visible')}
        >
          这里是利用 <b>Promise</b> 的特性，等它执行完成后，再去关闭窗口，达到延迟关闭的效果。<br /><br />
          这个测试例子，生成随机值判断是否大于 <b>0.5</b> 执行 <b>resolve</b> 事件，否则 执行 <b>reject</b> 触发 <b>catch</b> 错误。
        </Alert>
        <Button onClick={this.onClick.bind(this, 'visible')}>延迟关闭对话框</Button>
      </div>
    )
  }
}
export default Demo
```

## 带图标的弹出框

通过设置 `icon` 和 `type` 参数设置带状态的弹出对话框。

```jsx mdx:preview
import React from 'react';
import { Alert, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible1: false,
      visible2: false,
    }
  }
  onClick(type) {
    this.setState({ [type]: !this.state[type] });
  }
  onClosed(type) {
    this.setState({ [type]: false });
  }
  render() {
    return (
      <div>
        <Alert
          isOpen={this.state.visible1}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="information"
          type="primary"
          onClosed={this.onClosed.bind(this, 'visible1')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible2}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="circle-check"
          type="success"
          onClosed={this.onClosed.bind(this, 'visible2')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible3}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="warning"
          type="warning"
          onClosed={this.onClosed.bind(this, 'visible3')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible4}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="circle-close"
          type="danger"
          onClosed={this.onClosed.bind(this, 'visible4')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible5}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="light"
          onClosed={this.onClosed.bind(this, 'visible5')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          isOpen={this.state.visible6}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="dark"
          onClosed={this.onClosed.bind(this, 'visible6')}
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。用作通知用户重要信息。
        </Alert>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this, 'visible1')} type="primary">主要</Button>
          <Button onClick={this.onClick.bind(this, 'visible2')} type="success">成功</Button>
          <Button onClick={this.onClick.bind(this, 'visible3')} type="warning">警告</Button>
          <Button onClick={this.onClick.bind(this, 'visible4')} type="danger">错误</Button>
          <Button onClick={this.onClick.bind(this, 'visible5')} type="light">亮按钮</Button>
          <Button onClick={this.onClick.bind(this, 'visible6')} type="dark">暗按钮</Button>
        </ButtonGroup>
      </div>
    )
  }
}
export default Demo
```


## 带标题的弹出框

```jsx mdx:preview
import React from 'react';
import { Alert, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible1: false,
      visible2: false,
    }
  }
  onClick(type) {
    this.setState({ [type]: !this.state[type] });
  }
  onClosed(type) {
    this.setState({ [type]: false });
  }
  render() {
    return (
      <div>
        <Alert
          title="带标题的弹出框"
          isOpen={this.state.visible1}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="information"
          type="primary"
          onClosed={this.onClosed.bind(this, 'visible1')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          title="带标题的弹出框"
          isOpen={this.state.visible2}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="success"
          onClosed={this.onClosed.bind(this, 'visible2')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          title="带标题的弹出框"
          isOpen={this.state.visible3}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="warning"
          type="warning"
          onClosed={this.onClosed.bind(this, 'visible3')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          title="带标题的弹出框"
          isOpen={this.state.visible4}
          confirmText="确定按钮"
          cancelText="取消按钮"
          icon="circle-close"
          type="danger"
          onClosed={this.onClosed.bind(this, 'visible4')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          title="带标题的弹出框"
          isOpen={this.state.visible5}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="light"
          onClosed={this.onClosed.bind(this, 'visible5')}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        />
        <Alert
          title="带标题的弹出框"
          isOpen={this.state.visible6}
          confirmText="确定按钮"
          cancelText="取消按钮"
          type="dark"
          onClosed={this.onClosed.bind(this, 'visible6')}
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。用作通知用户重要信息。
        </Alert>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this, 'visible1')} type="primary">主要</Button>
          <Button onClick={this.onClick.bind(this, 'visible2')} type="success">成功</Button>
          <Button onClick={this.onClick.bind(this, 'visible3')} type="warning">警告</Button>
          <Button onClick={this.onClick.bind(this, 'visible4')} type="danger">错误</Button>
          <Button onClick={this.onClick.bind(this, 'visible5')} type="light">亮按钮</Button>
          <Button onClick={this.onClick.bind(this, 'visible6')} type="dark">暗按钮</Button>
        </ButtonGroup>
      </div>
    )
  }
}
export default Demo
```

### 自定义按钮

这个对话框有两个按钮，单击 **`确定按钮`** 或 **`取消按钮`** 后，此对话框将关闭，将不触发 ~~`onConfirm`~~ 或 ~~`onCancel`~~ 事件。因为这俩按钮是自定义按钮。你可以正对自定义按钮外面的对象定义 `className="w-alert-footer"` 将显示默认样式。

```jsx mdx:preview
import React from 'react';
import { Alert, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick(type) {
    this.setState({ visible: !this.state.visible });
  }
  onClosed(type) {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Alert
          isOpen={this.state.visible}
          type="danger"
          useButton={false}
          maskClosable={true}
          onClose={this.onClosed.bind(this)}
          // onClosed={this.onClosed.bind(this)}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，将不触发 “<del>onConfirm</del>” 或 “<del>onCancel</del>” 事件。因为这俩按钮是自定义按钮。
          <br /><br />
          <div className="w-alert-footer">
            <Button type="danger" onClick={this.onClosed.bind(this)} >确定按钮</Button>
            <Button onClick={this.onClosed.bind(this)} >取消按钮</Button>
          </div>
        </Alert>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>单个按钮确认对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
export default Demo
```

### 不显示遮罩层

```jsx mdx:preview
import React from 'react';
import { Alert, ButtonGroup, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }
  onClick(type) {
    this.setState({ visible: !this.state.visible });
  }
  onClosed(type) {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Alert
          isOpen={this.state.visible}
          type="danger"
          maskClosable={true}
          hasBackdrop={false}
          onClose={this.onClosed.bind(this)}
          onClosed={this.onClosed.bind(this)}
          content="这个对话框只有两个个按钮，单击“确定按钮”后，此对话框将关闭。用作通知用户重要信息。"
        >
          这个对话框有两个按钮，单击 “<b>确定按钮</b>” 或 “<b>取消按钮</b>” 后，此对话框将关闭，将不触发 “<del>onConfirm</del>” 或 “<del>onCancel</del>” 事件。因为这俩按钮是自定义按钮。
        </Alert>
        <ButtonGroup>
          <Button onClick={this.onClick.bind(this)}>单个按钮确认对话框</Button>
        </ButtonGroup>
      </div>
    )
  }
}
export default Demo
```

## Props

虽然类似于对 `<Modal>`，但 `<Alert>` 更具限制性，只应用于重要信息。此组件继承 [`<Modal>`](#/components/modal) 的属性，所以部分参数可以参考 `<Modal>` 组件。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| onCancel | 取消按钮的回调函数 | Function(e) | - |
| onConfirm | 点击确定按钮回调 | Function(e) | - |
| cancelText | 取消按钮文字， | String | - |
| confirmText | 确认按钮文字 | String | `确认` |
| type | 按钮类型跟 `<Button>` 组件的 `type` 参数一致，同时会影响按钮颜色。 | String | `light` |
| icon[`<Modal>`](#/components/modal) | 设置对话框右上角图标，，设置 `type` 将图标设置不同的颜色。当前属性为 [`<Icon>`](#/components/icon) 组件的 `type` 属性，所以可以参考该组件自定义图标。 | String/ReactNode | - |
| title[`<Modal>`](#/components/modal)  | 设置标题 | Function(e) | - |
| useButton[`<Modal>`](#/components/modal) | 是否使用默认按钮，如果设置 `false` 需要自定义按钮关闭 | Boolean | `true` |
| isOpen[`<Modal>`](#/components/modal) | 对话框是否可见 | Boolean | `false` |
| maskClosable[`<Modal>`](#/components/modal) | 点击遮罩层是否允许关闭 | boolean | `true` |

更多属性文档请参考 [Modal](#/components/modal)。