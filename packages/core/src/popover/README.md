Popover 气泡卡片
===

点击/鼠标移入元素，弹出气泡式的卡片浮层。

```jsx
import { Popover } from 'uiw';
```

### 基础用法

最简单的用法。

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisbale: false,
    }
  }
  onClick() {
    this.setState({ isVisbale: false });
  }
  handleVisibleChange(isVisbale) {
    this.setState({ isVisbale });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <Popover
          trigger="click"
          placement="top"
          visible={this.state.isVisbale}
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
          <Button active={this.state.isVisbale}>弹出目标</Button>
        </Popover>
      </div>
    )
  }
}
```
<!--End-->

### 位置

位置有 `12` 个方向，根据 `placement` 参数来设置。

<!--DemoStart-->
```js
const btnStl = {position: 'relative', width: 70 }
const content = (
  <Card bordered={false} style={{ width: 120 }}>
    <div>Are you sure you want to delete these items? You won't be able to recover them.</div>
  </Card>
)
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
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
```
<!--End-->

### 鼠标经过弹出目标

<!--DemoStart-->
```js
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
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Popover trigger="hover" placement="top" content={content}>
      <Button>鼠标经过弹出目标</Button>
    </Popover>
  </div>
)
```
<!--End-->

### usePortal

设置 `usePortal={false}` 将模态对话框生成到根节点的里面，这样为了计算位置准确，你需要将父层样式设为 `position: relative;` 。

<!--DemoStart--> 
```js
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisbale: false,
    }
  }
  onClick() {
    this.setState({ isVisbale: false });
  }
  handleVisibleChange(isVisbale) {
    this.setState({ isVisbale });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
        <div style={{ position: 'relative' }}>
          <Popover
            trigger="click"
            placement="top"
            usePortal={false}
            visible={this.state.isVisbale}
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
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| content | 显示的内容 | String,React.ReactNode | - |
| placement | 气泡框位置，可现实箭头在不通的方位 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | `top` |
| visibleArrow | 是否显示 Tooltip 箭头 | Boolean | `true` |
| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效，继承 `<OverlayTrigger />` 组件属性 | Object/Number | - |
| trigger | 悬停/点击弹出窗口，继承 `<OverlayTrigger />` 组件属性 | Enum{`hover`, `click`} | `hover` |
| disabled | 是否禁用弹出目标 | Boolean | `false` |
| visible | 默认是否显示弹窗，继承 `<OverlayTrigger />` 组件属性 | Boolean | `false` |
| onVisibleChange | 显示隐藏的回调，继承 `<OverlayTrigger />` 组件属性 | Function(isVisible:bool) | - |

更多属性请参考 [OverlayTrigger](#/components/overlay-trigger)。