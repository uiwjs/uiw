Split 面板分割
===

可将一块内容，分割为可以拖拽调整宽度或高度的区域。

```jsx
import { Split } from 'uiw';
```

### 基础用法

通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。通过设置子节点样式 `flexBasis` 样式即可设置默认分割内容的占比宽度。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div style={{ minWidth: 30, flexBasis: '20%' }}>
      Left Pane
    </div>
    <div style={{ minWidth: 30 }}>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

### 多栏分割

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div style={{ minWidth: 20, maxWidth: 30 }}>
      Left Pane
    </div>
    <div>
      Center Pane
    </div>
    <div>
      Center Pane
    </div>
    <div>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

### 垂直分割

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split mode="vertical" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div>
      Top Pane
    </div>
    <div>
      Bottom Pane
    </div>
  </Split>
);
```
<!--End-->

### 嵌套使用

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <Split mode="vertical">
      <div>
        Top Pane
      </div>
      <Split>
        <div>
          Left Pane
        </div>
        <div>
          Right Pane
        </div>
      </Split>
    </Split>
    <div>
      Right Pane
    </div>
  </Split>
);
```
<!--End-->

### 拖拽工具不显示

下面实例通过设置 `visiable` 的值来设置拖拽工具是否可见

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <div>
    <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>
        Left Pane
      </div>
      <div>
        Right Pane
      </div>
    </Split>
    <Split visiable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>
      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>
        Pane 1
      </div>
      <div style={{ maxWidth: 60 }}>
        Pane 2
      </div>
      <div>
        Pane 3
      </div>
      <div>
        Pane 4
      </div>
      <div>
        Pane 5
      </div>
    </Split>
  </div>
);
```
<!--End-->

### 禁用拖拽

通过设置 `disable` 的值，禁用拖拽工具拖拽。

<!--DemoStart,bgWhite--> 
```js
const Demo = () => (
  <div>
    <Split disable style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>
        Left Pane
      </div>
      <Split disable mode="vertical">
        <div>
          Top Pane
        </div>
        <div>
          Bottom Pane
        </div>
      </Split>
      <div>
        Right Pane
      </div>
    </Split>
    <Split disable={[4, 5]} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>
      <div style={{ maxWidth: 50, backgroundColor: '#eaeaea' }}>
        Pane 1
      </div>
      <div style={{ maxWidth: 60 }}>
        Pane 2
      </div>
      <div>
        Pane 3
      </div>
      <div>
        Pane 4
      </div>
      <div>
        Pane 5
      </div>
    </Split>
  </div>
);
```
<!--End-->


### 抽屉

通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。通过设置子节点样式 `flexBasis` 样式即可设置默认分割内容的占比宽度。

<!--DemoStart,bgWhite--> 
```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 210,
    };
  }
  onClick() {
    this.setState({
      width: this.state.width === 0 ? 210 : 0,
    });
  }
  render() {
    return (
      <>
        <div style={{ marginBottom: 10 }}>
          <Button type="primary" onClick={this.onClick.bind(this)}>{this.state.width === 0 ? '隐藏菜单' : '展示菜单'}</Button>
        </div>
        <Split visiable={this.state.width !== 0} style={{ border: '1px solid #d5d5d5', borderRadius: 3 }}>
          <div style={{ maxWidth: this.state.width, overflow: 'hidden' }}>
            <Menu>
              <Menu.Item icon="heart-on" text="另存为" active />
              <Menu.Item icon="appstore" text="应用商城" />
              <Menu.Item icon="bar-chart" text="月统计报表导出" />
              <Menu.Item icon="setting" text="偏好设置" />
              <Menu.Divider />
              <Menu.Item icon="map" text="谷歌地图" />
            </Menu>
          </div>
          <div>
            Right Pane
          </div>
        </Split>
      </>
    )
  }
}
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 设置拖拽的工具，是否可见 | Boolean/Array | `true` |
| disable | 设置拖拽的工具，禁用 | Boolean/Array | - |
| mode | 类型，可选值为 `horizontal` 或 `vertical` | String | `horizontal` |
| onDragging | 拖拽宽度/高度变化回调函数，宽度或者高度根据 mode 参数来确定 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |
| onDragEnd | 拖拽结束的回调函数 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |
