Popover 气泡卡片
===

点击/鼠标移入元素，弹出气泡式的卡片浮层。

```jsx
import { Popover } from 'uiw';
// or
import Popover from '@uiw/react-popover';
```

### 基础用法

最简单的用法。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, Card, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }
  onClick() {
    this.setState({ isOpen: false });
  }
  handleVisibleChange(isOpen) {
    this.setState({ isOpen });
  }
  render() {
    return (
      <div>
        <Popover
          trigger="click"
          placement="top"
          isOpen={this.state.isOpen}
          onVisibleChange={this.handleVisibleChange.bind(this)}
          content={
            <Card bordered={false} title="Card标题" extra={<a href="#">更多</a>} style={{ width: 200 }}>
              <div>Are you sure you want to delete these items? You won't be able to recover them.</div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                <Button size="small" onClick={this.onClick.bind(this)}>
                  Cancel
                </Button>
                <Button type="danger" size="small" onClick={this.onClick.bind(this)}>
                  Delete
                </Button>
              </div>
            </Card>
          }
        >
          <Button active={this.state.isOpen}>弹出目标</Button>
        </Popover>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### 位置

位置有 `12` 个方向，根据 `placement` 参数来设置。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Popover, Card, Button } from 'uiw';

const btnStl = {position: 'relative', width: 70 }
const content = (
  <Card bordered={false} style={{ width: 120 }}>
    <div>Are you sure you want to delete these items? You won't be able to recover them.</div>
  </Card>
)
const Demo = () => (
  <div>
    <div style={{ position: 'relative' }}>

      <Popover trigger="click" placement="topLeft" content={content}>
        <Button style={{ ...btnStl, left: 70 }}>TL</Button>
      </Popover>
      <Popover trigger="click" placement="top" content={content}>
        <Button style={{ ...btnStl, left: 70}}>Top</Button>
      </Popover>
      <Popover trigger="click" placement="topRight" content={content}>
        <Button style={{ ...btnStl, left: 70 }}>TR</Button>
      </Popover>

    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>

      <Popover trigger="click" placement="leftTop" content={content}>
        <Button style={{ ...btnStl }}>LT</Button>
      </Popover>
      <Popover trigger="click" placement="rightTop" content={content}>
        <Button style={{ ...btnStl, left: 216 }}>RT</Button>
      </Popover>

    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>

      <Popover trigger="click" placement="left" content={content}>
        <Button style={{ ...btnStl }}>Left</Button>
      </Popover>
      <Popover trigger="click" placement="right" content={content}>
        <Button style={{ ...btnStl, left: 216 }}>Right</Button>
      </Popover>

    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>

      <Popover trigger="click" placement="leftBottom" content={content}>
        <Button style={{ ...btnStl }}>LB</Button>
      </Popover>
      <Popover trigger="click" placement="rightBottom" content={content}>
        <Button style={{ ...btnStl, left: 216 }}>RB</Button>
      </Popover>

    </div>
    <div style={{ position: 'relative', paddingTop: 10 }}>

      <Popover trigger="click" placement="bottomLeft" content={content}>
        <Button style={{ ...btnStl, left: 70 }}>BL</Button>
      </Popover>
      <Popover trigger="click" placement="bottom" content={content}>
        <Button style={{ ...btnStl, left: 70 }}>Bottom</Button>
      </Popover>
      <Popover trigger="click" placement="bottomRight" content={content}>
        <Button style={{ ...btnStl, left: 70 }}>BR</Button>
      </Popover>

    </div>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 鼠标经过弹出目标

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Popover, Card, Button } from 'uiw';

const btnStl = {position: 'relative', width: 70 }
const content = (
  <Card
    style={{ width: 220 }}
    bordered={false}
    title="Card标题"
    footer={
      <span>这里是页脚</span>
    }
  >
    <div>这是你鼠标经过弹出的目标。</div>
  </Card>
)
const Demo = () => (
  <div>
    <Popover trigger="hover" placement="top" content={content}>
      <Button>鼠标经过弹出目标</Button>
    </Popover>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 焦点展示

通过设置 `trigger="focus"` 让 `Input` 组件在获取焦点的时候展示 `Popover`

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, Card, Button, Input } from 'uiw';

const btnStl = {position: 'relative', width: 70 }
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      value: '',
    }
  }
  onClick(val) {
    const state = { isOpen: false }
    if (val) {
      state.value = val;
    }
    if (val === null) state.value = '';
    this.setState({ ...state });
  }
  handleVisibleChange(isOpen) {
    this.setState({ isOpen });
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  renderPopup() {
    return (
      <Card
        style={{ width: 220 }}
        bordered={false}
        footer={
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button size="small" onClick={this.onClick.bind(this, undefined)}>
              取消
            </Button>
            <Button size="small" onClick={this.onClick.bind(this, null)}>
              清空
            </Button>
            <Button type="success" size="small" onClick={this.onClick.bind(this, '这是向 Input 输入框插入的内容')}>
              插入内容
            </Button>
          </div>
        }
      >
        <div>通过设置 `trigger="focus"` 让 `Input` 组件在获取焦点的时候展示 `Popover`</div>
      </Card>
    )
  }
  render() {
    return (
      <div>
        <div style={{ width: 200 }}>
          <Popover
            trigger="focus"
            placement="top"
            isOpen={this.state.isOpen}
            onVisibleChange={this.handleVisibleChange.bind(this)}
            content={this.renderPopup()}
          >
            <Input placeholder="请输入内容" value={this.state.value} onChange={this.onChange.bind(this)}/>
          </Popover>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

### usePortal

设置 `usePortal={false}` 将模态对话框生成到根节点的里面，这样为了计算位置准确，你需要将父层样式设为 `position: relative;` 。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, Card, Button } from 'uiw';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }
  onClick() {
    this.setState({ isOpen: false });
  }
  handleVisibleChange(isOpen) {
    this.setState({ isOpen });
  }
  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <Popover
            trigger="click"
            placement="right"
            usePortal={false}
            isOpen={this.state.isOpen}
            onVisibleChange={this.handleVisibleChange.bind(this)}
            content={
              <Card bordered={false} title="Card标题" extra={<a href="#">更多</a>} style={{ width: 200 }}>
                <div>Are you sure you want to delete these items? You won't be able to recover them.</div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                  <Button size="small" onClick={this.onClick.bind(this)}>
                    Cancel
                  </Button>
                  <Button type="danger" size="small" onClick={this.onClick.bind(this)}>
                    Delete
                  </Button>
                </div>
              </Card>
            }
          >
            <Button>弹出目标</Button>
          </Popover>
        </div>
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
| placement | 气泡框位置，可现实箭头在不同的方位 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |
| visibleArrow | 是否显示箭头 | Boolean | `true` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效，继承 `<OverlayTrigger />` 组件属性 | Object/Number | - |
| trigger| 悬停/点击弹出窗口，继承 `<OverlayTrigger />` 组件属性 | Enum{`hover`, `click`, `focus`} | `hover` |
| disabled | 是否禁用弹出目标 | Boolean | `false` |
| isOpen | 默认是否显示弹窗，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |
| autoAdjustOverflow | 弹出层被遮挡时自动调整位置，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |
| onVisibleChange | 显示隐藏的回调，继承 `<OverlayTrigger />` 组件属性 | Function(isVisible:bool) | - |

更多属性请参考 [OverlayTrigger](#/components/overlay-trigger)。