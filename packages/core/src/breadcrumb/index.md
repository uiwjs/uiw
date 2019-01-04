Breadcrumb 面包屑
===

显示当前页面的路径，快速返回之前的任意页面。

```jsx
import { Breadcrumb } from '@uiw/core';
```

### 基础用法

适用广泛的基础用法，在 `Breadcrumb` 中使用 `Breadcrumb.Item` 标签表示从首页开始的每一级。

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Breadcrumb>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item data-separator=">">活动管理</Breadcrumb.Item>
      <Breadcrumb.Item>活动列表</Breadcrumb.Item>
      <Breadcrumb.Item active>活动详情</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)
```
<!--End-->

### 自定义分隔符

使用 `separator=">"` 可以自定义分隔符，分隔符也可以是图标。

<!--DemoStart--> 
```js
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Breadcrumb>
      <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
      <Breadcrumb.Item data-separator=">"><a href="#">Library</a></Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)
```
<!--End-->

### 带有图标和连接的

图标放在文字前面。注意文字要使用 `span` 包裹起来，图标 `<Icon />` 需要跟 `span` 同级。`Breadcrumb.Item` 定义 `href` 参数的话，`Item` 上的参数就全部是超链原始属性。

<!--DemoStart--> 
```js
const stylIcon = { marginRight: 3, top: 2, display: 'inline-flex' }
const Demo = () => (
  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="#"><Icon style={stylIcon} type="home"/></a>
      </Breadcrumb.Item>
      <Breadcrumb.Item data-separator=">">
        <a href="#"><Icon style={stylIcon} type="apple"/>Library</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item data-separator=">">
        <a href="#"><Icon style={stylIcon} type="pie-chart"/>Chart</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item data-separator="">
        <a href="#"><Icon style={{...stylIcon, marginRight: 0}} type="star-on"/> Chart</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item data-separator="" active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)
```
<!--End-->

## Breadcrumb

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| style | 样式 | String | - |
| className | 样式名称 | String | `w-breadcrumb` |

## Breadcrumb.Item

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| className | 样式名称 | String | `w-breadcrumb-itme` |
| separator | 分隔符自定义，子组件可以单独定义不同的分隔符。 | String | `/` |

