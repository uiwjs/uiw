Menu 菜单
===

为页面和功能提供导航的菜单列表。

```jsx
import { Menu } from 'uiw';
// or
import Menu from '@uiw/react-menu';
```

### 基本用法

⚠️ 注意 `SubMenu` 父菜单为折叠菜单，当前 `SubMenu` 的子菜单弹出会因为 `overflow: hidde` 而无法显示。

<!--DemoStart,bgWhite,noScroll,codePen-->
```jsx
import { Menu, Row, Col } from 'uiw';

const Demo = () => (
  <Row justify="flex-start" gutter={10}>
    <Col fixed>
      <Menu bordered>
        <Menu.Item icon="reload" text="重新加载" />
        <Menu.Divider />
        <Menu.Item icon="heart-on" text="另存为" active />
        <Menu.Item icon="appstore" text="应用商城" />
        <Menu.Item icon="bar-chart" text="月统计报表导出" />
        <Menu.Item icon="setting" text="偏好设置" />
        <Menu.Divider />
        <Menu.Item icon="map" text="谷歌地图" />
        <Menu.Item icon="map" text="百度地图" href="https://map.baidu.com" target="_blank" />
      </Menu>
    </Col>
    <Col fixed>
      <Menu bordered>
        <Menu.Divider title="编辑" />
        <Menu.Item icon="file-add" text="添加文件" />
        <Menu.Item icon="folder-add" text="添加文件夹" />
        <Menu.Item icon="copy" text="拷贝" />
        <Menu.Item icon="delete" disabled text="删除" />
        <Menu.SubMenu icon="setting-o" text="选项" collapse>
          <Menu.Item icon="dot-chart" text="显示边栏" />
          <Menu.Item icon="date" text="添加日期" />
          <Menu.Item icon="tags-o" text="标签名称" />
        </Menu.SubMenu>
        <Menu.Divider title="其它" />
        <Menu.SubMenu icon="bar-chart" text="月统计报表导出">
          <Menu.Item icon="file-add" text="添加文件" />
          <Menu.Item icon="folder-add" text="添加文件夹" />
          <Menu.Divider title="类别" />
          <Menu.Item icon="copy" text="拷贝" />
          <Menu.SubMenu icon="bar-chart" text="报表" collapse>
            <Menu.Item icon="file-add" text="添加文件" />
            <Menu.SubMenu icon="folder-add" text="添加文件夹">
              <Menu.Item icon="file-add" text="添加文件" />
              <Menu.Item icon="folder-add" text="添加文件夹" />
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu icon="setting" disabled text="偏好设置">
          <Menu.Item icon="file-add" text="添加文件" />
          <Menu.Item icon="folder-add" text="添加文件夹" />
        </Menu.SubMenu>
        <Menu.Item icon="map" text="谷歌地图" />
      </Menu>
    </Col>
  </Row>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 下拉菜单

<!--DemoStart,bgWhite,noScroll,codePen-->
```jsx
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

### 内嵌菜单

通过设置 `overlayProps={ isOpen: true }`，让菜单默认展开。

<!--DemoStart,bgWhite,noScroll,codePen-->
```jsx
import { Menu, Row, Col } from 'uiw';

const Demo = () => (
  <Row justify="flex-start" gutter={10}>
    <Col fixed>
      <Menu bordered style={{ maxWidth: 200 }}>
        <Menu.Item icon="delete" disabled text="删除" />
        <Menu.SubMenu icon="setting-o" text="选项" disabled collapse>
          <Menu.Item icon="dot-chart" text="显示边栏" />
          <Menu.Item icon="date" text="添加日期" />
          <Menu.Item icon="tags-o" text="标签名称" />
        </Menu.SubMenu>
        <Menu.Divider title="其它" />
        <Menu.SubMenu
          icon="bar-chart" text="每年2019年统计报表导出" collapse
          // overlayProps={{ isOpen: true }}
        >
          <Menu.Item text="添加文件" />
          <Menu.Item text="添加文件夹" />
          <Menu.Divider title="类别" />
          <Menu.Item icon="copy" text="拷贝" />
          <Menu.SubMenu icon="folder-add" text="添加文件夹" collapse>
            <Menu.Item icon="file-add" text="添加文件" />
            <Menu.Item icon="folder-add" text="添加文件夹" />
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item icon="setting" disabled text="偏好设置" />
        <Menu.Item icon="map" text="谷歌地图" />
      </Menu>
    </Col>
  </Row>
)
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 主题

内建了两套主题 `light`、`dark`，默认 `light`。

<!--DemoStart,bgWhite,noScroll,codePen-->
```jsx
import { Menu, Row, Col, Switch } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    }
  }
  render() {
    return (
      <div>
        <Row justify="flex-start" gutter={10}>
          <Col style={{ paddingBottom: 5 }}>
            <Switch
              checked
              style={{ marginRight: 10 }}
              onChange={(e) => {
                this.setState({ theme: e.target.checked ? 'dark' : 'light' });
              }}
            />
          </Col>
        </Row>
        <Row justify="flex-start" gutter={10}>
          <Col fixed>
            <Menu theme={this.state.theme} bordered style={{ maxWidth: 200 }}>
              <Menu.Item icon="delete" disabled text="删除" />
              <Menu.SubMenu icon="setting-o" text="选项" disabled collapse>
                <Menu.Item icon="dot-chart" text="显示边栏" />
                <Menu.Item icon="date" text="添加日期" />
                <Menu.Item icon="tags-o" text="标签名称" />
              </Menu.SubMenu>
              <Menu.Divider title="其它" />
              <Menu.Item active icon="map" text="谷歌地图" />
              <Menu.SubMenu icon="bar-chart" text="每年2019年统计报表导出">
                <Menu.Item text="添加文件" />
                <Menu.Item text="添加文件夹" />
                <Menu.Divider title="类别" />
                <Menu.SubMenu icon="folder-add" text="添加文件夹" collapse>
                  <Menu.Item icon="file-add" text="添加文件" />
                  <Menu.Item icon="folder-add" text="添加文件夹" />
                </Menu.SubMenu>
                <Menu.Item icon="copy" text="拷贝" />
              </Menu.SubMenu>
              <Menu.Item icon="setting" disabled text="偏好设置" />
              <Menu.SubMenu icon="setting-o" text="选项" collapse>
                <Menu.Item icon="dot-chart" text="显示边栏" />
                <Menu.Item icon="date" text="添加日期" />
                <Menu.Item icon="tags-o" text="标签名称" />
              </Menu.SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 完整菜单展示

包括点击选中效果，事件等操作，完整的实例展示。

<!--DemoStart,bgWhite,noScroll,codePen-->
```jsx
import { Menu, Row, Col, Switch } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      menus: [
        { key: '1', icon: 'delete', label: '删除' },
        {
          icon: 'setting-o',
          label: '选项',
          childrend: [
            { key: '1-1', icon: 'dot-chart', label: '显示边栏' },
            { key: '1-2', icon: 'date', disabled: true, label: '添加日期' },
            { key: '1-3', icon: 'tags-o', label: '标签名称' },
          ],
        },
        { divider: true },
        { key: '2', icon: 'map', label: '谷歌地图' },
        {
          icon: 'bar-chart',
          label: '每年2019年统计报表导出',
          childrend: [
            { key: '2-1', label: '统计添加文件' },
            { key: '2-2', label: '统计添加文件夹' },
            { key: '2-3', icon: 'tags-o', label: '类别', divider: true },
            {
              icon: 'folder-add',
              label: '添加文件夹',
              childrend: [
                { key: '2-3-1', label: '添加文件夹' },
                { key: '2-3-2', label: '添加文件' },
                { key: '2-3-3', label: '添加文件夹' },
              ],
            },
          ],
        },
      ],
      active: '1',
    }
  }

  onClickItem(key) {
    this.setState({ active: key });
  }

  renderMenu(menus, k) {
    const { active } = this.state;
    const items = [];
    menus.forEach((item, key) => {
      if (item.childrend) {
        items.push(
          <Menu.SubMenu key={key} icon={item.icon} text={item.label} collapse
            // 参数 usePortal 容易出问题
            // overlayProps={{ usePortal: true }}
          >
            {this.renderMenu(item.childrend, `${k}${key}`)}
          </Menu.SubMenu>
        );
      } else if (item.divider) {
        items.push(<Menu.Divider key={`${k}${key}`} title={item.label} />);
      } else {
        items.push(
          <Menu.Item
            onClick={this.onClickItem.bind(this, item.key)}
            active={active === item.key} key={`${k}${key}`}
            icon={item.icon}
            text={item.label}
          />
        );
      }
    });
    return items;
  }

  render() {
    return (
      <div>
        <Row justify="flex-start" gutter={10}>
          <Col style={{ paddingBottom: 5 }}>
            <Switch
              checked={this.state.theme === 'dark'}
              style={{ marginRight: 10 }}
              onChange={(e) => {
                this.setState({ theme: e.target.checked ? 'dark' : 'light' });
              }}
            />
          </Col>
        </Row>
        <Row justify="flex-start" gutter={10}>
          <Col fixed>
            <Menu inlineIndent={13} theme={this.state.theme} bordered style={{ maxWidth: 200 }}>
              {this.renderMenu(this.state.menus, 'k')}
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 缩起内嵌菜单

内嵌菜单可以被缩起/展开，需要 `SubMenu` 的参数 `collapse` 和 `inlineCollapsed` 配合使用。

<!--DemoStart,bgWhite,noScroll,codePen-->
```jsx
import { useState, useEffect, useRef } from 'react';
import { Menu, Row, Col, Icon, Button } from 'uiw';

const menusData = [
  { key: '1', icon: 'delete', label: '删除' },
  {
    icon: 'setting-o',
    label: '选项',
    childrend: [
      { key: '1-1', icon: 'dot-chart', label: '显示边栏' },
      { key: '1-2', icon: 'date', disabled: true, label: '添加日期' },
      { key: '1-3', icon: 'tags-o', label: '标签名称' },
    ],
  },
  { key: '2', icon: 'map', label: '谷歌地图' },
  {
    icon: 'bar-chart',
    label: '每年2019年统计报表导出',
    childrend: [
      { key: '2-1', label: '统计添加文件' },
      { key: '2-2', label: '统计添加文件夹' },
      { key: '2-3', icon: 'tags-o', label: '类别', divider: true },
      {
        icon: 'folder-add',
        label: '添加文件夹',
        childrend: [
          { key: '2-3-1', label: '添加文件夹' },
          { key: '2-3-2', label: '添加文件' },
          { key: '2-3-3', label: '添加文件夹' },
        ],
      },
    ],
  },
];

const Demo = () => {
  const [theme, setTheme] = useState('dark');
  const [collapse, setCollapse] = useState(false);
  const menuRef = useRef();
  function onClickItem() {
    console.log(';;;;>>>')
  }
  function renderMenu(menus) {
    const items = [];
    menus.forEach((item, key) => {
      if (item.childrend) {
        items.push(
          <Menu.SubMenu key={key} icon={item.icon} text={item.label}
            collapse={collapse}
          >
            {renderMenu(item.childrend)}
          </Menu.SubMenu>
        );
      } else if (item.divider) {
        items.push(<Menu.Divider key={key} title={item.label} />);
      } else {
        items.push(
          <Menu.Item
            onClick={onClickItem.bind(this, item.key)}
            key={key}
            icon={item.icon}
            text={item.label}
          />
        );
      }
    });
    return items;
  }
  return (
    <div style={{ maxWidth: 200}}>
      <Button type="primary" size="small" onClick={() => setCollapse(!collapse)} style={{ marginBottom: 10 }}>
        <Icon type={collapse ? 'menu-fold' : 'menu-unfold' } />
      </Button>
      <Switch
        size="large"
        data-checked="light"
        data-unchecked="dark"
        checked={theme === 'dark'}
        style={{ marginLeft: 10, marginBottom: 10, display: 'inline-block' }}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <Menu
        theme={theme}
        ref={menuRef}
        inlineCollapsed={collapse}
        inlineIndent={13}
        bordered
        // style={{ maxWidth: 200 }}
      >
        {renderMenu(menusData)}
      </Menu>
    </div>
  )
}

ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## Menu.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 设置类的名称 | String | - |
| style | 元素的行内样式 | Object | - |
| inlineIndent | 菜单缩进宽度 | Number | `10` |
| theme | 主题颜色 | Enum{`light`, `dark`} | - |
| bordered | 是否有边框 | Boolean | `false` |


## Menu.Item.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| icon | 菜单图标 [`<Icon />`](#/components/icon) 的 `type` 属性 | ReactNode/String | - |
| text | 菜单标题内容 | ReactNode | - |
| addonAfter | 菜单标题后面插入内容 | ReactNode | - |
| ~~isSubMenuItem~~ | 不可用，SubMenu 组件传递给 Item 组件的**标记**属性，这是一个内部参数。 | Boolean | - |
| tagName | 设置子节点标签名，默认 `<a />` 标签，也可以指定路由 [`<Link />`](https://reacttraining.com/react-router/web/api/Link) | String | `a` |
| active | 激活选中状态 | Boolean | `false` |
| inlineCollapsed | 菜单是否收起状态 | Boolean | `false` |
| disabled | 禁用状态 | Boolean | `false` |

其它参数可根据 `tagName` 来设置，默认 `<a />` 标签时，可设置 `href="https://wwww.google.com"` 或者 `target="_blank"` 等参数，你可以设置 [react-router-dom](https://github.com/ReactTraining/react-router) 路由 `<Link>`，例如：

```jsx
import { Menu } from 'uiw';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <Menu style={{ maxWidth: 200 }}>
      <Menu.Item tagName={Link} to="/home" icon="reload" text="跳转首页" />
      <Menu.Item icon="map" text="百度地图" href="https://map.baidu.com" target="_blank" />
    </Menu>
  )
}
```

## Menu.SubMenu.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| icon | 菜单图标 [`<Icon />`](#/components/icon) 的 `type` 属性 | String | - |
| text | 菜单标题内容 | ReactNode | - |
| disabled | 禁用状态 | Boolean | `false` |
| collapse | 默认子菜单是 OverlayTrigger 的弹出层，通过设置 `collapse={true}` 变为~~折叠~~(弹出框式 `@v4.2.0+`)菜单  | Boolean | `false` |
| overlayProps | 对象将传递到 `OverlayTrigger` 组件，修改部分参数，相关参数参考 [`OverlayTrigger`](#/components/overlay-trigger) | Object | - |

## Menu.Divider.Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 设置类的名称 | String | - |
| style | 元素的行内样式 | Object | - |
| title | 标题 | String | - |
