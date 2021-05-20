Layout 布局
===

协助进行页面级整体布局。

> ⚠️ 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

```jsx
import { Layout } from 'uiw';
// or
import Layout from '@uiw/react-layout';
const { Header, Footer, Sider, Content } = Layout;
```

## 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Divider } from 'uiw';
const { Header, Footer, Sider, Content } = Layout;

const stylHeader = { color: '#fff' }
const stylSider = { background: '#484a4e', color: '#fff', lineHeight: `120px`, textAlign: 'center' }
const stylConten = { textAlign: 'center', background: 'rgba(16, 142, 233, 1)', minHeight: 120, lineHeight: '120px', color: '#fff' }

function Demo() {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <div>
      <Layout>
        <Sider collapsed={collapsed} style={stylSider}>Sider</Sider>
        <Layout>
          <Header style={stylHeader}>
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? '展开 Sider' : '缩进 Sider'}</button>
          </Header>
          <Content style={stylConten}>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>

      <Divider />

      <Layout>
        <Header style={stylHeader}>Header</Header>
        <Content style={stylConten}>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Divider />
      
      <Layout>
        <Header style={stylHeader}>Header</Header>
        <Layout>
          <Sider style={stylSider}>Sider</Sider>
          <Content style={stylConten}>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Divider />

      <Layout>
        <Header style={stylHeader}>Header</Header>
        <Layout>
          <Content style={stylConten}>Content</Content>
          <Sider style={stylSider}>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

ReactDOM.render(<Demo />, _mount_);
```

## Layout

布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

* `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 容器 className | string | - |
| style | 指定样式 | CSSProperties | - |
| theme | 主题颜色 | `light`、`dark` | `dark` |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - |

## Layout.Sider

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 容器 className | string | - |
| style | 指定样式 | CSSProperties | - |
| collapsed | 当前收起状态 | boolean | - |
| collapsedWidth | 收缩宽度，设置为 `0` | boolean | `80` |
| width | 宽度 | number/string | 200 |

