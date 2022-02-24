OverlayTrigger 基础触发弹出
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-overlay-trigger/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-overlay-trigger.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-overlay-trigger)
[![npm version](https://img.shields.io/npm/v/@uiw/react-overlay-trigger.svg?label=@uiw/react-overlay-trigger)](https://npmjs.com/@uiw/react-overlay-trigger)

基础弹出触发组件，在组件 [`<Overlay>`](#/components/overlay) 的基础上添加事件和 12 个方向的位置，组件 [`<Tooltip>`](#/components/tooltip)，[`<Popover>`](#/components/popover) 是基于这个组件封装的，弹出框围绕对象指定位置。

```jsx
import { OverlayTrigger } from 'uiw';
// or
import OverlayTrigger from '@uiw/react-overlay-trigger';
```

### 基础用法

最简单的用法。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { OverlayTrigger } from 'uiw';

const tooltip = (
  <div style={{ backgroundColor: '#fff', border: '1px solid #333', padding: 10, borderRadius: 3 }}>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </div>
);
const Demo = () => (
  <OverlayTrigger placement="top" trigger="click" overlay={tooltip}>
    <span>鼠标移动到此处，点击显示和消失触发事件</span>
  </OverlayTrigger>
)
ReactDOM.render(<Demo />, _mount_);
```

### 配合组件使用

下面配合 [`<Card />`](#/components/card) 组件使用。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card } from 'uiw';

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <OverlayTrigger placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件</span>
  </OverlayTrigger>
)
ReactDOM.render(<Demo />, _mount_);
```

### 位置

位置有 12 个方向，根据 placement 参数来设置。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card, Button } from 'uiw';
const btnStl = {position: 'relative', width: 70, height: 50 }

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <div>
    <div style={{ position: 'relative' }}>
      <OverlayTrigger placement="topLeft" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>TL</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={card}>
        <Button style={{ ...btnStl, left: 70}}>Top</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="topRight" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>TR</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="leftTop" overlay={card}>
        <Button style={{ ...btnStl }}>LT</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightTop" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>RT</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="left" overlay={card}>
        <Button style={{ ...btnStl }}>Left</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="right" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>Right</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="leftBottom" overlay={card}>
        <Button style={{ ...btnStl }}>LB</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="rightBottom" overlay={card}>
        <Button style={{ ...btnStl, left: 216 }}>RB</Button>
      </OverlayTrigger>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <OverlayTrigger placement="bottomLeft" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>BL</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>
      </OverlayTrigger>
      <OverlayTrigger placement="bottomRight" overlay={card}>
        <Button style={{ ...btnStl, left: 70 }}>BR</Button>
      </OverlayTrigger>
    </div>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 鼠标经过事件

默认离开**触发区域**隐藏弹出目标，设置 `isOutside` 值为 `true`，在**触发区域**或**弹出目标区域**内，不隐藏**弹出目标**。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card, Divider } from 'uiw';

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisbale: false,
    }
  }
  onVisibleChange(isVisbale) {
    this.setState({ isVisbale })
  }
  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          isOutside={true}
          onVisibleChange={this.onVisibleChange.bind(this)}
          overlay={card}
        >
          <span>鼠标移动到此处，显示和消失触发事件</span>
        </OverlayTrigger>
        <Divider />
        <div>状态：{this.state.isVisbale ? '' : '不'}可见</div>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```


### 延迟进入和消失

延迟属性，只针对 `trigger=hover` 有效。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card } from 'uiw';

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);
const Demo = () => (
  <OverlayTrigger delay={{ show: 0, hide: 4000 }} placement="top" overlay={card}>
    <span>鼠标移动到此处，显示和消失触发事件，延迟 `4s` 消失</span>
  </OverlayTrigger>
)
ReactDOM.render(<Demo />, _mount_);
```

### 组件受控

通过设置属性 isOpen 可以文字提示手动控制状态的展示。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card, Divider, Switch } from 'uiw';

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }
  onChange(e) {
    this.clickChecked = false;
    this.setState({ isOpen: e.target.checked });
  }
  onVisibleChange(isOpen) {
    console.log('onVisibleChange: ', isOpen);
  }
  render() {
    return (
      <div>
        <OverlayTrigger
          onVisibleChange={this.onVisibleChange.bind(this)}
          isOpen={this.state.isOpen}
          placement="right"
          onEnter={(node, isAppearing) => {
            console.log('~~', node, isAppearing);
          }}
          overlay={card}
        >
          <span>鼠标移动到此处，显示和消失触发事件</span>
        </OverlayTrigger>
        <Divider />
        <Switch checked={this.state.isOpen} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### usePortal

设置 `usePortal={false}` 将模态对话框生成到根节点的里面。

<!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayTrigger, Card, Divider } from 'uiw';

const card = (
  <Card active>
    <strong>Hellow uiw!</strong> Check this info.<br />
    展示 12 个方向位置
  </Card>
);

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }
  onVisibleChange(isOpen) {
    this.setState({ isOpen })
  }
  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <OverlayTrigger
            usePortal={false}
            isOutside={true}
            autoAdjustOverflow
            placement="top"
            trigger="click"
            onVisibleChange={this.onVisibleChange.bind(this)}
            overlay={card}
          >
            <span>鼠标移动到此处，点击显示和消失触发事件</span>
          </OverlayTrigger>
        </div>
        <Divider />
        <div>状态：{this.state.isOpen ? '' : '不'}可见</div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| placement | 指定弹出框位置 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | - |
| trigger | 悬停/点击弹出窗口 | Enum{`hover`, `click`, `focus`} | `hover` |
| disabled | 是否禁用弹出目标 | Boolean | `false` |
| overlay | 弹出内容 | Function/Element | - |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效 | Object/Number | - |
| isOpen | 默认是否显示弹窗 | Boolean | `false` |
| isOutside | 默认离开**触发区域**隐藏弹出目标，设置值为 `true`，在触发区域和弹出目标区域内，不隐藏**弹出目标**。 | Boolean | `false` |
| isClickOutside | 点击目标区域以外的区域，是否隐藏。 | Boolean | `true` |
| autoAdjustOverflow | 弹出层被遮挡时自动调整位置 | Boolean | `false` |
| onVisibleChange | 显示隐藏的回调 | Function(isVisiable:bool) | - |

更多属性文档请参考 [Overlay](#/components/overlay)。
