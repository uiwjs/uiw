Tag 标签
===

进行标记和分类的小标签。

```jsx
import { Tag } from 'uiw';
```

### 基础用法

<!--DemoStart,bgWhite-->
```js
const Demo = () => (
  <div>
    <Tag title="成功-绿色" color="#28a745" />
    <Tag title="主要-蓝色" color="#008EF0" />
    <Tag title="信息-青色" color="#1EABCD" />
    <Tag title="导航-藏青" color="#393E48" />
    <Divider />
    <Tag color="#ffc107">警告-黄色</Tag>
    <Tag color="#F95C2B">提醒-橙色</Tag>
    <Tag color="#dc3545">危险-红色</Tag>
    <Tag>默认颜色</Tag>
    <Divider />
    <Tag light color="#28a745">成功-绿色</Tag>
    <Tag light color="#008EF0">主要-蓝色</Tag>
    <Tag light color="#1EABCD">信息-青色</Tag>
    <Tag light color="#393E48">导航-藏青</Tag>
    <Divider />
    <Tag light color="#ffc107">警告-黄色</Tag>
    <Tag light color="#F95C2B">提醒-橙色</Tag>
    <Tag light color="#dc3545">危险-红色</Tag>
    <Tag light>默认颜色</Tag>
  </div>
)
```
<!--End-->

### 标签禁用

<!--DemoStart,bgWhite-->
```js
const Demo = () => (
  <div>
    <Tag disabled title="成功-绿色" color="#28a745" />
    <Tag disabled title="主要-蓝色" color="#008EF0" />
    <Tag disabled title="信息-青色" color="#1EABCD" />
    <Tag disabled title="导航-藏青" color="#393E48" />
    <Tag disabled color="#ffc107">警告-黄色</Tag>
    <Tag disabled color="#F95C2B">提醒-橙色</Tag>
    <Tag disabled color="#dc3545">危险-红色</Tag>
    <Tag disabled>默认颜色</Tag>
    <Divider />
    <Tag light disabled color="#28a745">成功-绿色</Tag>
    <Tag light disabled color="#008EF0">主要-蓝色</Tag>
    <Tag light disabled color="#1EABCD">信息-青色</Tag>
    <Tag light disabled color="#393E48">导航-藏青</Tag>
    <Tag light disabled color="#ffc107">警告-黄色</Tag>
    <Tag light disabled color="#F95C2B">提醒-橙色</Tag>
    <Tag light disabled color="#dc3545">危险-红色</Tag>
    <Tag light disabled>默认颜色</Tag>
  </div>
)
```
<!--End-->

### 添加图标

<!--DemoStart,bgWhite-->
```js
const Demo = () => (
  <div>
    <Tag title={(
      <>
        <Icon type="heart-on" verticalAlign="baseline" /> 成功-绿色
      </>
    )} color="#28a745" />·
    <Tag color="#1C7CEB"><Icon type="heart-on" verticalAlign="baseline" /> 限购一份</Tag>
    <Tag color="red"><Icon type="heart-on" verticalAlign="baseline" /> 胶囊</Tag>
    <Divider />
    <Tag light color="#28a745"><Icon type="heart-on" verticalAlign="baseline" /> 成功-绿色</Tag>
    <Tag light color="#008EF0"><Icon type="heart-on" verticalAlign="baseline" /> 主要-蓝色</Tag>
    <Tag light color="#dc3545"><Icon type="heart-on" verticalAlign="baseline" /> 信息-红色</Tag>
  </div>
)
```
<!--End-->

### 控制关闭标签

<!--DemoStart,bgWhite-->
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      visible1: true,
    }
  }
  onClose(type) {
    this.setState({
      [type]: !this.state[type],
    });
  }
  render() { 
    return (
      <div>
        <Tag
          closable
          onClose={this.onClose.bind(this, 'visible')}
          visible={this.state.visible}
          color="#F95C2B">提醒-橙色</Tag>
        <Tag
          closable
          light
          visible={this.state.visible1}
          color="#dc3545"
          onClose={this.onClose.bind(this, 'visible1')}
        >
            <Icon type="heart-on" verticalAlign="baseline" /> 信息-红色
        </Tag>
      </div>
    );
  }
}
```
<!--End-->

### 标签组动态删除

<!--DemoStart,bgWhite-->
```js
let num = 3;
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTags: [
        { label: '橘子', value: 1, color: '#28a745' },
        { label: '苹果', value: 2, color: '#F95C2B' },
        { label: '橘子', value: 3, color: '#008EF0' },
      ]
    }
  }
  onClose(data) {
    const dataTags = this.state.dataTags.filter(item => item.value !== data.value);
    this.setState({ dataTags });
  }
  addTag() {
    const { dataTags } = this.state;
    num += 1;
    dataTags.push({
      label: `橘子${num}`, value: num, color: '#28a745'
    });
    this.setState({ dataTags });
  }
  render() { 
    const { dataTags } = this.state;
    return (
      <div>
        {dataTags.map((item, idx) => {
          return (
            <Tag
              key={idx}
              closable
              onClose={this.onClose.bind(this, item)}
              visible={this.state.visible}
              color={item.color}>
              {item.label}
            </Tag>
          )
        })}
        <Button style={{ marginLeft: 5 }} size="small" onClick={this.addTag.bind(this)}> <Icon type="plus" /> </Button>
      </div>
    );
  }
}
```
<!--End-->

### 热门标签

选择你感兴趣的话题，下面实例类似 CheckBox 多选。

<!--DemoStart,bgWhite-->
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTags: [
        { label: '橘子', value: 1, color: '#008EF0' },
        { label: '苹果', value: 2, color: '#008EF0' },
        { label: '橘子', value: 3, color: '#008EF0' },
        { label: '川菜', value: 4, color: '#008EF0' },
      ],
      values: [1, 2, 3],
    }
  }
  onTagChecked(data) {
    let { values } = this.state;
    const isChecked = values.indexOf(data.value) === -1;
    if(isChecked) {
      values.push(data.value);
    } else {
      values = values.filter(item => item !== data.value);
    }
    this.setState({ values });
  }
  render() { 
    const { dataTags, values } = this.state;
    return (
      <div>
        {dataTags.map((item, idx) => {
          const isChecked = values.indexOf(item.value) === -1;
          return (
            <Tag
              onClick={this.onTagChecked.bind(this, item)}
              key={idx}
              light={isChecked}
              bordered={false}
              color="#008EF0"
            >
              {item.label}
            </Tag>
          )
        })}
      </div>
    );
  }
}
```
<!--End-->

## Tag

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 标题，和 `children` 几乎是一样的 | String/ReactNode | - |
| color | 颜色 | String | `#1C7CEB` |
| disabled | 禁用 | Boolean | `false` |
| light | 有边框的标签 | Boolean | `false` |
| bordered | 当设置 `light={ture}` 时，起作用，设置为 `false` 不展示边框样式 | Boolean | `true` |
| closable | 显示关闭按钮 | Boolean | `false` |
| visible | 是否显示标签 | Boolean | `true` |
| onClose | 关闭时的回调 | Function | - |
