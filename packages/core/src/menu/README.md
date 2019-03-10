Menu 菜单
===

为页面和功能提供导航的菜单列表。

```jsx
import { Menu } from 'uiw';
```

### 基本用法

<!--DemoStart,bgWhite,codePen--> 
```js
import { Menu, Row, Col } from 'uiw';

const Demo = () => (
  <Row justify="flex-start" gutter={10}>
    <Col fixed>
      <Menu bordered style={{ maxWidth: 200 }}>
        <Menu.Item icon="reload" text="重新加载" />
        <Menu.Divider />
        <Menu.Item icon="heart-on" text="另存为" active />
        <Menu.Item icon="appstore" text="应用商城" />
        <Menu.Item icon="bar-chart" text="月统计报表导出" />
        <Menu.Item icon="setting" text="偏好设置" />
        <Menu.Divider />
        <Menu.Item icon="map" text="谷歌地图" />
      </Menu>
    </Col>
    <Col>
      <Menu bordered style={{ maxWidth: 200 }}>
        <Menu.Divider title="编辑" />
        <Menu.Item icon="file-add" text="添加文件" />
        <Menu.Item icon="folder-add" text="添加文件夹" />
        <Menu.Item icon="copy" text="拷贝" />
        <Menu.Item icon="delete" disabled text="删除" />
        <Menu.Divider title="其它" />
        <Menu.Item icon="bar-chart" text="月统计报表导出">
          <Menu.Item icon="file-add" text="添加文件" />
          <Menu.Item icon="folder-add" text="添加文件夹" />
          <Menu.Divider title="类别" />
          <Menu.Item icon="copy" text="拷贝" />
          <Menu.Item icon="bar-chart" text="报表">
            <Menu.Item icon="file-add" text="添加文件" />
            <Menu.Item icon="folder-add" text="添加文件夹">
              <Menu.Item icon="file-add" text="添加文件" />
              <Menu.Item icon="folder-add" text="添加文件夹" />
            </Menu.Item>
          </Menu.Item>
        </Menu.Item>
        <Menu.Item icon="bar-chart" text="月统计报表导出" />
        <Menu.Item icon="setting" disabled text="偏好设置">
          <Menu.Item icon="file-add" text="添加文件" />
          <Menu.Item icon="folder-add" text="添加文件夹" />
        </Menu.Item>
        <Menu.Item icon="setting" disabled text="偏好设置" />
        <Menu.Item icon="map" text="谷歌地图" />
      </Menu>
    </Col>
  </Row>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 下拉菜单

<!--DemoStart,bgWhite,codePen--> 
```js
import { Menu, Popover, Button, Row, Col } from 'uiw';

const btnStl = {position: 'relative', width: 70 }
const content = (
  <Menu>
    <Menu.Divider title="编辑" />
    <Menu.Item icon="file-add" text="添加文件" />
    <Menu.Item icon="folder-add" text="添加文件夹" />
    <Menu.Item icon="copy" text="拷贝" />
    <Menu.Item icon="delete" disabled text="删除" />
    <Menu.Divider title="其它" />
    <Menu.Item icon="bar-chart" text="月统计报表导出" />
    <Menu.Item icon="setting" disabled text="偏好设置" />
    <Menu.Item icon="map" text="谷歌地图" />
  </Menu>
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
<!--End-->

## Menu.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 设置类的名称 | String | - |
| style | 元素的行内样式 | Object | - |
| bordered | 是否有边框 | Boolean | `false` |


## Menu.Item.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| icon | 菜单图标 | String | - |
| text | 菜单内容 | Boolean | `false` |
| tagName | 设置子节点标签名 | String | `a` |
| active | 激活选中状态 | Boolean | `false` |
| disabled | 禁用状态 | Boolean | `false` |
| overlayProps | 对象将传递到 `OverlayTrigger`，相关参数参考 [`OverlayTrigger`](#/components/overlay-trigger) | Object | - |

## Menu.Divider.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 设置类的名称 | String | - |
| style | 元素的行内样式 | Object | - |
| title | 标题 | String | - |