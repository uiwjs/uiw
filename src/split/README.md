Split 面板分割
===

可将一块内容，分割为可以拖拽调整宽度或高度的区域。

```jsx
import { Split } from 'uiw';
```

### 基础用法

~~通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。通过设置子节点样式 `flexBasis` 样式即可设置默认分割内容的占比宽度。~~

- 固定初始宽度或者高度，可通过设置子节点，样式 `width: '80%'` 宽度百分百来计算。
- 拖拽至最小宽度，可通过设置子节点样式 `minWidth: 30`，来达到效果
- 默认情况下，不设置样式 `width`，需要将某个子节点样式设为 `flex: 1`，来自适应

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

const Demo = () => (
  <div>
    <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ width: '20%', minWidth: 30 }}>
        <iframe
          srcDoc="<div>test</div>"
          style={{ width: '100%', height: '100%' }}
          title="Code Preview"
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
      <div style={{ width: '80%' }}>
        Right Pane
      </div>
    </Split>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 可用于布局

设置 `visiable={false}` 禁用拖拽栏，可用于布局。

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split, Divider } from 'uiw';

const Demo = () => (
  <div>
    <Split mode="vertical" visiable={false}>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>
        Header
      </div>
      <Split visiable={false}>
        <div style={{ minWidth: 200, maxWidth: 200, minHeight: 120, background: '#b5b5b5' }}>
          Sider
        </div>
        <div style={{ width: '100%', background: '#ececec' }}>
          Content
        </div>
      </Split>
      <div style={{ minHeight: 45, background: '#dcdcdc' }}>
        Footer
      </div>
    </Split>
    <Divider />
    <Split visiable={false}>
      <div style={{ minWidth: 200, maxWidth: 200, minHeight: 85, background: '#a9a9a9' }}>
        Sider
      </div>
      <Split mode="vertical" visiable={false} style={{ width: '100%' }}>
        <div style={{ minHeight: 45, background: '#dcdcdc' }}>
          Header
        </div>
        <div style={{ minHeight: 85, background: '#b5b5b5' }}>
          Content
        </div>
        <div style={{ minHeight: 45, background: '#dcdcdc' }}>
          Footer
        </div>
      </Split>
    </Split>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 多栏分割

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

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
    <div style={{ flex: 1 }}>
      Right Pane
    </div>
  </Split>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 线条拖拽

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

const Demo = () => (
  <div>
    <Split lineBar style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div>
        Left Pane
      </div>
      <div>
        Center Pane
      </div>
      <div>
        Center Pane
      </div>
      <div style={{ flex: 1 }}>
        Right Pane
      </div>
    </Split>
    <Split mode="vertical" lineBar style={{ height: 210, border: '1px solid #d5d5d5', borderRadius: 3, marginTop: 10 }}>
      <div style={{ height: '33.3%' }}>
        Left Pane
      </div>
      <div style={{ height: '33.3%' }}>
        Center Pane
      </div>
      <div style={{ flex: 1 }}>
        Right Pane
      </div>
    </Split>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 垂直分割

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

const Demo = () => (
  <Split mode="vertical" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <div style={{ height: '50%' }}>
      Top Pane
    </div>
    <div style={{ height: '50%' }}>
      Bottom Pane
    </div>
  </Split>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 嵌套使用

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

const Demo = () => (
  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>
    <Split mode="vertical">
      <div style={{ height: '50%' }}>
        Top Pane
      </div>
      <Split style={{ height: '50%' }}>
        <div>
          Left Pane
        </div>
        <div>
          Right Pane
        </div>
      </Split>
    </Split>
    <div style={{ flex: 1 }}>
      Right Pane
    </div>
  </Split>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 拖拽工具不显示

下面实例通过设置 `visiable` 的值来设置拖拽工具是否可见

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

const Demo = () => (
  <div>
    <Split visiable={false} style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>
      <div style={{ maxWidth: 100, backgroundColor: '#eaeaea' }}>
        Left Pane
      </div>
      <div style={{ flex: 1 }}>
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
      <div style={{ flex: 1 }}>
        Pane 5
      </div>
    </Split>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 禁用拖拽

通过设置 `disable` 的值，禁用拖拽工具拖拽。

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split } from 'uiw';

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
      <div style={{ flex: 1 }}>
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
      <div style={{ flex: 1 }}>
        Pane 5
      </div>
    </Split>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 抽屉

可拖拽左边栏宽度。

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Split, Menu, Button } from 'uiw';

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
    const styl = {};
    if (this.state.width === 0) {
      styl.width = `0%`;
    } else {
      styl.width = this.state.width;
    }
    return (
      <>
        <div style={{ marginBottom: 10 }}>
          <Button type="primary" onClick={this.onClick.bind(this)}>{this.state.width === 0 ? '隐藏菜单' : '展示菜单'}</Button>
        </div>
        <Split lineBar visiable={this.state.width !== 0} style={{ border: '1px solid #d5d5d5', borderRadius: 3 }}>
          <div style={{ ...styl, overflow: 'hidden' }}>
            <Menu>
              <Menu.Item icon="heart-on" text="另存为" active />
              <Menu.Item icon="appstore" text="应用商城" />
              <Menu.Item icon="bar-chart" text="月统计报表导出" />
              <Menu.Item icon="setting" text="偏好设置" />
              <Menu.Divider />
              <Menu.Item icon="map" text="谷歌地图" />
            </Menu>
          </div>
          <div style={{ flex: 1, minWidth: 30 }}>
            Right Pane
          </div>
        </Split>
      </>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visiable | 设置拖拽的工具条，是否可见 | Boolean/Array | `true` |
| disable | 设置拖拽的工具条，禁用 | Boolean/Array | - |
| lineBar | 设置拖拽的工具条，为线条样式。 | Boolean | - |
| mode | 类型，可选值为 `horizontal` 或 `vertical` | String | `horizontal` |
| onDragging | 拖拽宽度/高度变化回调函数，宽度或者高度根据 mode 参数来确定 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |
| onDragEnd | 拖拽结束的回调函数 | Function(prePaneSize,<br />nextPaneSize,<br />nextPaneNumber) | - |
