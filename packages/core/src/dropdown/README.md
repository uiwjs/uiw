Dropdown 下拉菜单
===

向下弹出的列表。

```jsx
import { Dropdown } from 'uiw';
```

### 基本用法

<!--DemoStart,bgWhite--> 
```jsx
const menu = (
  <Menu bordered style={{ minWidth: 120 }}>
    <Menu.Item icon="reload" text="重新加载" />
    <Menu.Item icon="heart-on" text="另存为" active />
    <Menu.Item icon="appstore" text="应用商城" />
    <Menu.Item icon="bar-chart" text="月统计报表" />
    <Menu.Item icon="setting" text="偏好设置" />
  </Menu>
);

class Demo extends Component {
  render() {
    return (
      <div>
        <Dropdown menu={menu}>
          <a href="javascript:;">
            鼠标经过出现菜单 <Icon type="arrow-down" />
          </a>
        </Dropdown>
        <Dropdown trigger="click" menu={menu}>
          <a href="javascript:;">
            点击我出现下拉菜单 <Icon type="arrow-down" />
          </a>
        </Dropdown>
        <Divider />
        <ButtonGroup style={{ marginRight: 5, display: 'inline-block' }}>
          <Button icon="copy">点击右边</Button>
          <Dropdown trigger="click" placement="bottomRight" menu={menu}>
            <Button icon="more" />
          </Dropdown>
        </ButtonGroup>
        <Dropdown trigger="click" menu={menu}>
          <Button basic icon="file-text" type="dark">文件<Icon type="caret-down" /></Button>
        </Dropdown>
      </div>
    )
  }
}
```
<!--End-->

### 被禁用

<!--DemoStart,bgWhite--> 
```jsx
const menu = (
  <Menu bordered style={{ maxWidth: 200 }}>
    <Menu.Item icon="reload" text="重新加载" />
    <Menu.Divider />
    <Menu.Item icon="heart-on" text="另存为" active />
    <Menu.Item icon="appstore" text="应用商城" />
    <Menu.Item icon="bar-chart" text="月统计报表导出" />
    <Menu.Item icon="setting" text="偏好设置" />
  </Menu>
);

class Demo extends Component {
  render() {
    return (
      <div>
        <ButtonGroup style={{ marginRight: 5, display: 'inline-block' }}>
          <Button disabled icon="copy">点击右边</Button>
          <Dropdown disabled trigger="click" placement="bottomRight" menu={menu}>
            <Button icon="more" />
          </Dropdown>
        </ButtonGroup>
        <Dropdown disabled menu={menu}>
          <Button basic type="link"> (超连接样式)link </Button>
        </Dropdown>
        <Dropdown disabled menu={menu}>
          <Button type="primary">主要按钮</Button>
        </Dropdown>
        <Dropdown disabled menu={menu}>
          <Button type="success">成功按钮</Button>
        </Dropdown>
        <Dropdown disabled menu={menu}>
          <Button type="warning">警告按钮</Button>
        </Dropdown>
        <Dropdown disabled menu={menu}>
          <Button type="danger">错误按钮</Button>
        </Dropdown>
        <Dropdown disabled menu={menu}>
          <Button type="light">亮按钮</Button>
        </Dropdown>
        <Dropdown disabled menu={menu}>
          <Button type="dark">暗按钮</Button>
        </Dropdown>
      </div>
    )
  }
}
```
<!--End-->

### 弹出位置

<!--DemoStart,bgWhite--> 
```jsx
const menu = (
  <Menu bordered style={{ maxWidth: 200 }}>
    <Menu.Item icon="reload" text="重新加载" />
    <Menu.Divider />
    <Menu.Item icon="heart-on" text="另存为" active />
    <Menu.Item icon="appstore" text="应用商城" />
    <Menu.Item icon="bar-chart" text="月统计报表导出" />
    <Menu.Item icon="setting" text="偏好设置" />
  </Menu>
);

class Demo extends Component {
  render() {
    return (
      <div>
        <ButtonGroup style={{ marginRight: 5, display: 'inline-block' }}>
          <Button icon="copy">top</Button>
          <Dropdown trigger="click" placement="top" menu={menu}>
            <Button icon="more" />
          </Dropdown>
        </ButtonGroup>
        <Dropdown menu={menu} trigger="click" placement="topLeft">
          <Button type="primary">topLeft</Button>
        </Dropdown>
        <Dropdown menu={menu} trigger="click" placement="topRight">
          <Button type="success">topRight</Button>
        </Dropdown>
        <Divider />
        <Dropdown menu={menu} trigger="click" placement="bottomRight">
          <Button type="light">bottomRight</Button>
        </Dropdown>
        <Dropdown menu={menu} trigger="click" placement="bottom">
          <Button type="warning">bottom</Button>
        </Dropdown>
        <Dropdown menu={menu} trigger="click" placement="bottomLeft">
          <Button type="danger">bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={menu} trigger="click" placement="right">
          <Button type="dark">right</Button>
        </Dropdown>
      </div>
    )
  }
}
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| menu | 菜单 | [`<Menu>`](#/components/menu) | - |
| disabled | 菜单是否禁用 | Boolean | - |
| trigger[`<OverlayTrigger>`](#/components/overlay-trigger) | 悬停/点击弹出窗口 | Enum{`hover`, `click`, `focus`} | `hover` |
| placement[`<OverlayTrigger>`](#/components/overlay-trigger) | 指定弹出框位置，支持 12 个访问展示菜单。 | Enum{} | `bottomLeft` |

更多属性文档请参考 [OverlayTrigger](#/components/overlay-trigger)。