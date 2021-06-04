Dropdown 下拉菜单
===

向下弹出的列表。

```jsx
import { Dropdown } from 'uiw';
// or
import Dropdown from '@uiw/react-dropdown';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Menu, ButtonGroup, Button, Divider, Icon } from 'uiw';

const menu = (
  <Menu bordered style={{ minWidth: 120 }}>
    <Menu.Item icon="reload" text="重新加载" />
    <Menu.Item icon="heart-on" text="另存为" active />
    <Menu.Item icon="appstore" text="应用商城" />
    <Menu.Item icon="bar-chart" text="月统计报表" />
    <Menu.Item icon="setting" text="偏好设置" />
  </Menu>
);

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Dropdown menu={menu}>
          <a href='#' onClick={e => e.preventDefault()}>
            鼠标经过出现菜单 <Icon type="down" />
          </a>
        </Dropdown>
        <Dropdown trigger="click" menu={menu}>
          <a href='#' onClick={e => e.preventDefault()}>
            点击我出现下拉菜单 <Icon type="down" />
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
ReactDOM.render(<Demo />, _mount_);
```

### 被禁用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Dropdown, Menu, ButtonGroup, Button } from 'uiw';

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

ReactDOM.render(
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
  </div>,
  _mount_
);
```

### 弹出位置

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Dropdown, Menu, ButtonGroup, Button } from 'uiw';

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

ReactDOM.render(
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
  </div>,
  _mount_
);
```

### 选择器

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Menu, Button, Icon } from 'uiw';

function Select(props) {
  const { option, onChange } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.value);
  const label = option.find(item => value === item.value);

  React.useEffect(() => {
    if (props.value !== value) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <Dropdown
      trigger="click"
      onVisibleChange={(isOpen) => setOpen(isOpen)}
      isOpen={open}
      menu={
        <Menu bordered style={{ minWidth: 120 }}>
          {option.map((item, idx) => {
            const active = value === item.value;
            return (
              <Menu.Item
                key={idx}
                active={active}
                text={item.label}
                onClick={(e) => {
                  setValue(item.value)
                  setOpen(false)
                  onChange && onChange(item.value, e)
                }}
              />
            );
          })}
        </Menu>
      }
    >
      <Button type="link">{label.label}<Icon type={open ? 'up' : 'down'} /></Button>
    </Dropdown>
  )
}

const option = [
  { label: '往返', value: 1 },
  { label: '单程', value: 2 },
  { label: '联程', value: 3 },
  { label: 'Nomad', value: 4 },
];

const option2 = [
  { label: '经济舱', value: 1 },
  { label: '豪华经济舱', value: 2 },
  { label: '商务舱', value: 3 },
  { label: '头等舱', value: 4 },
];

ReactDOM.render(
  <div>
    <Select option={option} value={1} onChange={(item) => { console.log('item', item); }} />
    <Select option={option2} value={2} onChange={(item) => { console.log('item', item); }} />
  </div>,
  _mount_
);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| menu | 菜单 | [`<Menu>`](#/components/menu) | - |
| disabled | 菜单是否禁用 | Boolean | - |
| trigger[`<OverlayTrigger>`](#/components/overlay-trigger) | 悬停/点击弹出窗口 | Enum{`hover`, `click`, `focus`} | `hover` |
| placement[`<OverlayTrigger>`](#/components/overlay-trigger) | 指定弹出框位置，支持 12 个访问展示菜单。 | Enum{} | `bottomLeft` |

更多属性文档请参考 [OverlayTrigger](#/components/overlay-trigger)。