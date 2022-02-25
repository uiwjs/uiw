List 列表
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-list/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-list.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-list)
[![npm version](https://img.shields.io/npm/v/@uiw/react-list.svg?label=@uiw/react-list)](https://npmjs.com/@uiw/react-list)

列表组件

```jsx
import { List } from 'uiw';
import { ListItem } from 'uiw'; // @ v4.10.0+
// or
import List from '@uiw/react-list';
import List, { ListItem } from '@uiw/react-list'; // @ v4.10.0+

// List.Item === ListItem
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const data = [
  '"X战警新变种人"首曝海报特写诡异人脸',
  '六大变五大？传迪士尼600亿收购福斯',
  '快跑!《侏罗纪世界2》正式预告要来了',
];
const Demo = () => (
  <div>
    <List header={<div>列表头部</div>} footer={<div>列表尾部</div>}>
      <List.Item>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
      <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
      <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
    </List>
    <h4 style={{ margin: '16px 10px' }}>默认尺寸，没有头部和尾部</h4>
    <List
      dataSource={data}
      noHover
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
    <h4 style={{ margin: '16px 10px' }}>小尺寸</h4>
    <List
      size="small"
      header={<div>列表头部</div>} 
      footer={<div>列表尾部</div>}
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
    <h4 style={{ margin: '16px 10px' }}>大尺寸</h4>
    <List
      size="large"
      header={<div>列表头部</div>} 
      footer={<div>列表尾部</div>}
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```


### 特殊方法

通过`dataSource`和`renderItem`来创建列表，这两个属性是一起使用。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const data = [
  '"X战警新变种人"首曝海报特写诡异人脸',
  '六大变五大？传迪士尼600亿收购福斯',
  <span>快跑!《侏罗纪世界2》正式预告要来了</span>,
];
const Demo = () => (
  <List
    header={<div>列表头部</div>}
    footer={<div>列表尾部</div>}
    dataSource={data}
    renderItem={item => {
      return (<List.Item>{item}</List.Item>);
    }}
  />
)
ReactDOM.render(<Demo />, _mount_);
```

### 禁用行

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const data = [
  {
    'content': '"X战警新变种人"首曝海报特写诡异人脸'
  },
  {
    'content': '六大变五大？传迪士尼600亿收购福斯'
  },
  {
    'disabled': true,
    'content': '快跑!《侏罗纪世界2》正式预告要来了'
  },
];
class Demo extends React.Component {
  onClick(item,index,e){
    e.stopPropagation();
    console.log('item',item,e);
  }
  render() {
    return (
      <List
        header={<div>列表头部</div>}
        footer={<div>列表尾部</div>}
        dataSource={data}
        renderItem={(item,index) => {
          return (
            <List.Item onClick={this.onClick.bind(this, item, index)} disabled={item.disabled}>
              {item.content}
            </List.Item>
          );
        }}
      />
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```


### 行激活

`List.Item` 设置 `active` 属性即可设置这张被激活的样式。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const Demo = () => (
  <List size="small" header={<div>列表头部</div>} footer={<div>列表尾部</div>}>
    <List.Item active>"X战警新变种人"首曝海报特写诡异人脸</List.Item>
    <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
    <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>
  </List>
)
ReactDOM.render(<Demo />, _mount_);
```

### 斑马线

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const data = [
  '人总是在接近幸福时倍感幸福，在幸福进行时却患得患失。',
  '因为爱过，所以慈悲；因为懂得，所以宽容。',
  '你如果认识从前的我，也许你会原谅现在的我。',
  <span>你还不来，我怎敢老去。</span>,
];
const Demo = () => (
  <List
    dataSource={data}
    striped={true}
    size="small"
    renderItem={item => {
      return (<List.Item>{item}</List.Item>);
    }}
  />
)
ReactDOM.render(<Demo />, _mount_);
```

### 列表为超链接

`List.Item` 设置了 `href`，`List.Item`就可以设置标签`<a>`的所有属性了。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const data = [
  {
    'href':'#/components',
    'content': '"X战警新变种人"首曝海报特写诡异人脸'
  },
  {
    'target':'_blank',
    'href':'https://uiwjs.github.io/icons/',
    'content': '从uiw组件库中抽离出来的，图标字体 uiw-iconfont 发布'
  },
  {
    'href':'#/components',
    'disabled': true,
    'content': '快跑!《侏罗纪世界2》正式预告要来了'
  },
];
const Demo = () => (
  <List
    header={<div>列表头部</div>}
    footer={<div>列表尾部</div>}
    dataSource={data}
    renderItem={(item, index) => {
      return (
        <List.Item {...item}>
          {item.content}
        </List.Item>
      );
    }}
  />
)
ReactDOM.render(<Demo />, _mount_);
```


### 展示额外内容

`List.Item` 设置了 `extra`，`List.Item` 就可以设置右侧内容。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { List } from 'uiw';

const data = [
  {
    'extra': '内容',
    'content': '"X战警新变种人"首曝海报特写诡异人脸'
  },
  {
    'extra': '内容',
    'content': '从uiw组件库中抽离出来的，图标字体 uiw-iconfont 发布'
  },
  {
    'href':'#/components',
    'disabled': true,
    'extra': '内容',
    'content': '快跑!《侏罗纪世界2》正式预告要来了'
  },
];
const Demo = () => (
  <List
    header={<div>列表头部</div>}
    footer={<div>列表尾部</div>}
    dataSource={data}
    renderItem={(item, index) => {
      return (
        <List.Item {...item}>
          {item.content}
        </List.Item>
      );
    }}
  />
)
ReactDOM.render(<Demo />, _mount_);
```

## List

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| size | 设置行尺寸，分别大、中、小三种尺寸 | Enum{`small`,`default`,`large`} | `default` |
| bordered | 是否展示边框 | Boolean | `true` |
| noHover | 取消鼠标移过时边框阴影 | Boolean | `false` |
| active | 激活列表，鼠标经过边框阴影效果 | Boolean | `false` |
| striped | 斑马线效果 | Boolean | `false` |
| footer | 列表底部 | String/ReactNode | - |
| header | 列表头部 | String/ReactNode | - |
| dataSource | 是否展示边框 | Boolean | - |
| renderItem | 通过毁掉函数返回Dome，渲染列表每个行 | Function(item,index) | - |

## List.Item

| 参数 | 说明 | 类型 | 默认值 |
| --------- | -------- | --------- | -------- |
| active | 激活 | Boolean | `false` |
| extra | 额外内容，展示右侧内容 | React.ReactNode | - |
| disabled | 禁用 | Boolean | `false` |
| tagName | 设置子节点标签名，默认 `<div />` 标签，也可以指定路由 [`<Link />`](https://reacttraining.com/react-router/web/api/Link) | String/Link | `div` |
| href | 规定链接的目标，值存在并且 `tagName` 为 `String` 时候是个超链接，在超链接上加 `href` 的值就是你传进来的 `href`值，此时将可以设置标签`<a>`的所有属性。  | Boolean/String | `false` |

其它参数可根据 tagName 来设置，设置 `tagName="a"` 标签时，可设置 `href="https://github.com"` 或者 target="_blank" 等参数，你可以设置 react-router-dom 路由 `<Link>`，例如：

```jsx
import { List } from 'uiw';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <List>
      <List.Item tagName={Link} to="/home">"X战警新变种人"首曝海报特写诡异人脸</List.Item>
      <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>
    </List>
  )
}
```