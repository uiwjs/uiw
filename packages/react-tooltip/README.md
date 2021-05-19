Tooltip 文字提示
===

简单的文字提示气泡框。

```jsx
import { Tooltip } from 'uiw';
// or
import Tooltip from '@uiw/react-tooltip';
```

### 基础用法

最简单的用法。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Tooltip, Button } from 'uiw';

const Demo = () => (
  <div>
    <Tooltip placement="right" content="右边文字提示">
      <Button>右边文字提示(right)</Button>
    </Tooltip>
    <Tooltip placement="top" content="上边文字提示">
      <Button>上边文字提示(top)</Button>
    </Tooltip>
    <Tooltip placement="left" content="左边文字提示">
      <Button>左边文字提示(left)</Button>
    </Tooltip>
    <Tooltip placement="bottom" content="下边文字提示">
      <Button>下边文字提示(bottom)</Button>
    </Tooltip>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 位置

位置有 `12` 个方向，根据 `placement` 参数来设置。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Tooltip, Button, Divider } from 'uiw';

const btnStl = {position: 'relative', width: 70 }
const Demo = () => (
  <div>
    <Tooltip placement="left" content={<strong>Hello uiw!</strong>}>
      <Button type="primary">左边文字提示(left)</Button>
    </Tooltip>

    <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>
      <Button type="primary">上边文字提示(top)</Button>
    </Tooltip>

    <Tooltip placement="bottom" content={<strong>Hello uiw!</strong>}>
      <Button type="primary">下边文字提示(bottom)</Button>
    </Tooltip>

    <Tooltip placement="right" content={<strong>Hello uiw!</strong>}>
      <Button type="primary">右边文字提示(right)</Button>
    </Tooltip>

    <Divider />
    <div style={{ position: 'relative' }}>
      <Tooltip placement="topLeft" content={<strong>Hello uiw!</strong>}>
        <Button style={{ ...btnStl, left: 70 }}>TL</Button>
      </Tooltip>
      <Tooltip placement="top" content={<strong>Hello uiw!</strong>}>
        <Button style={{ ...btnStl, left: 70}}>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" content={<strong>Hello uiw!</strong>}>
        <Button style={{ ...btnStl, left: 70 }}>TR</Button>
      </Tooltip>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <Tooltip placement="leftTop" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl }}>LT</Button>
      </Tooltip>
      <Tooltip placement="rightTop" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl, left: 216 }}>RT</Button>
      </Tooltip>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <Tooltip placement="left" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl }}>Left</Button>
      </Tooltip>
      <Tooltip placement="right" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl, left: 216 }}>Right</Button>
      </Tooltip>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <Tooltip placement="leftBottom" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl }}>LB</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl, left: 216 }}>RB</Button>
      </Tooltip>
    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>
      <Tooltip placement="bottomLeft" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl, left: 70 }}>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" content={<span><strong>Hello uiw!</strong> 位置有 12 个方向，根据 placement 参数来设置。</span>}>
        <Button style={{ ...btnStl, left: 70 }}>BR</Button>
      </Tooltip>
    </div>

  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 事件

文字提示组件 `<Tooltip />`，通过设置属性 `trigger` 可以文字提示操作方式。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Tooltip, Button } from 'uiw';

const Demo = () => (
  <div>

    <Tooltip trigger="hover" placement="top" content="Hello uiw!">
      <Button type="primary">悬浮弹出文字提示(top)</Button>
    </Tooltip>
    <Tooltip trigger="click" placement="top" content="Hello uiw!">
      <Button type="success">点击弹出提示(top)</Button>
    </Tooltip>

  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 文字提示框不显示箭头

通过设置属性 `visibleArrow` 可以文字提示框不显示箭头。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import ReactDOM from 'react-dom';
import { Tooltip, Button } from 'uiw';

const Demo = () => (
  <div>

    <Tooltip visibleArrow={false} trigger="hover" placement="top" content="Hello uiw!">
      <Button type="primary">悬浮弹出文字提示(top)</Button>
    </Tooltip>
    <Tooltip visibleArrow={false} trigger="click" placement="right" content="Hello uiw!">
      <Button type="success">点击弹出提示(right)</Button>
    </Tooltip>

  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 受控组件

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Tooltip, Switch, Divider } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }
  onChange(e) {
    this.setState({ isOpen: e.target.checked });
  }
  onVisibleChange(isOpen) {
    this.setState({ isOpen });
  }
  render() {
    return (
      <div>
        <Tooltip
          isOpen={this.state.isOpen}
          onVisibleChange={this.onVisibleChange.bind(this)}
          placement="top"
          content="Hello uiw!"
        >
          <span>鼠标移动到此处，显示和消失触发事件，也可以通过 Switch 组件来控制</span>
        </Tooltip>
        <Divider />
        <Switch checked={this.state.isOpen} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```


## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| content | 显示的内容 | String,React.ReactNode | - |
| placement | 气泡框位置，可现实箭头在不通的方位 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |
| visibleArrow | 是否显示 Tooltip 箭头 | Boolean | `true` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效，继承 `<OverlayTrigger />` 组件属性 | Object/Number | - |
| trigger | 悬停/点击弹出窗口，继承 `<OverlayTrigger />` 组件属性 | Enum{`hover`, `click`} | `hover` |
| disabled | 是否禁用弹出目标 | Boolean | `false` |
| isOpen | 默认是否显示弹窗，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |
| autoAdjustOverflow | 弹出层被遮挡时自动调整位置，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |
| onVisibleChange | 显示隐藏的回调，继承 `<OverlayTrigger />` 组件属性 | Function(isVisible:bool) | - |

更多属性请参考 [OverlayTrigger](#/components/overlay-trigger)。
