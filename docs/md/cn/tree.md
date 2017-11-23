Tree 树形控件
===

使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 基本用法

最简单的用法，默认不展开。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label:"湖北省",
          key:"0-0-0",
          children:[
            {
              label:"武汉市",
              key:"0-1-0",
              children:[
                {label:"新洲区",key:"0-1-1"},
                {label:"武昌区",key:"0-1-2"},
                {label:"汉南区",key:"0-1-3"},
              ]
            },
            {label:"黄冈市",key:"0-2-0"},
            {
              label:"黄石市",
              key:"0-3-0",
              children:[
                {label:"青山区",key:"0-3-1"},
                {label:"黄陂区",key:"0-3-2"},
                {label:"青山区",key:"0-3-2"},
              ]
            },
          ]
        },{
          label:"上海市",
          key:"1-0-0",
          children:[
            {label:"黄浦区",key:"1-0-1"},
            {label:"卢湾区",key:"1-0-2"},
            {
              label:"徐汇区",
              key:"1-0-3",
              children:[
                {label:"半淞园路街道",key:"1-1-0"},
                {label:"南京东路街道",key:"1-2-0"},
                {label:"外滩街道",key:"1-3-0"},
              ]
            },
          ]
        },{
          label:"北京市",
          key:"2-0-0",
          children:[
            {label:"东城区",key:"2-1-0"},
            {label:"西城区",key:"2-2-0"},
            {
              label:"崇文区",
              key:"2-3-0",
              children:[
                {label:"东花市街道",key:"2-3-1"},
                {label:"体育馆路街道",key:"2-3-2"},
                {label:"前门街道",key:"2-3-3"},
              ]
            },
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Tree 
        data={this.state.data}
        onExpand={(key,expanded,data,node)=>{
          console.log("item:",key,expanded,data,node)
        }}
      />
    )
  }
}
```
<!--End-->

## 指定字段渲染

默认每个节点通过`label`显示标题，通过`children`来设置展开的子节点数据，下面这个实例是通过设置option，将默认渲染标题的`label`改成`name`，默认的`children`改成`info`。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name:"湖北省",
          key:"0-0-0",
          info:[
            {name:"武汉市",key:"0-1-0",},
            {name:"黄冈市",key:"0-2-0"},
            {name:"黄石市",key:"0-3-0",},
          ]
        },{
          name:"上海市",
          key:"1-0-0",
          info:[
            {name:"黄浦区",key:"1-0-1"},
            {name:"卢湾区",key:"1-0-2"},
            {name:"徐汇区",key:"1-0-3",},
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Tree 
        data={this.state.data}
        option={{
          children: 'info',
          label: 'name'
        }}
        onExpand={(key,expanded,data,node)=>{
          console.log("item:",key,expanded,data,node)
        }}
      />
    )
  }
}
```
<!--End-->

## 连接线

带连接线的树，通过设置`showLine`。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label:"湖北省",
          label:"湖北省",
          key:"0-0-0",
          renderTitle:(title)=>`${title} - 标题`,
          children:[
            {
              label:"武汉市",
              key:"0-1-0",
              children:[
                {label:"新洲区",key:"0-1-1"},
                {label:"武昌区",key:"0-1-2"},
                {label:"汉南区",key:"0-1-3"},
              ]
            },
            {label:"黄冈市",key:"0-2-0"},
            {
              label:"黄石市",
              key:"0-3-0",
              children:[
                {label:"青山区",key:"0-3-1"},
                {label:"黄陂区",key:"0-3-2"},
                {label:"青山区",key:"0-3-2"},
              ]
            }
          ]
        },{
          label:"上海市",
          key:"1-0-0",
          children:[
            {label:"黄浦区",key:"1-0-1"},
            {label:"卢湾区",key:"1-0-2"},
            {label:"徐汇区",key:"1-0-3",},
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Tree 
        data={this.state.data}
        showLine
        onSelect={(key,data,e)=>{
          console.log("onSelect",key,data,e)
        }}
        onExpand={(key,expanded,data,node)=>{
          console.log("item:",key,expanded,data,node)
        }}
      />
    )
  }
}
```
<!--End-->

## 默认选中

添加默认选中，可以通过设置 `selectedKeys=['key']` 默认选中菜单。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label:"湖北省",
          key:"0-0-0",
          children:[
            {
              label:"武汉市",
              key:"0-1-0",
              children:[
                {label:"新洲区",key:"0-1-1"},
                {label:"武昌区",key:"0-1-2"},
                {label:"汉南区",key:"0-1-3"},
              ]
            },
            {label:"黄冈市",key:"0-2-0"},
          ]
        },{
          label:"上海市",
          key:"1-0-0",
          children:[
            {label:"黄浦区",key:"1-0-1"},
            {label:"卢湾区",key:"1-0-2"},
            {
              label:"徐汇区",
              key:"1-0-3",
              children:[
                {label:"半淞园路街道",key:"1-1-0"},
                {label:"南京东路街道",key:"1-2-0"},
                {label:"外滩街道",key:"1-3-0"},
              ]
            },
          ]
        }
      ],
      selectedKeys:['0-0-0']
    }
  }
  render() {
    return (
      <div>
        <Button style={{margin:"0 0 10px 0"}} onClick={()=>{
          this.setState({
            selectedKeys:this.state.selectedKeys[0]?[]:['0-0-0']
          })
        }} size="mini">点击取消选中或者选中“湖北省”</Button>
        <Tree 
          selectedKeys={this.state.selectedKeys}
          data={this.state.data}
        />
      </div>
    )
  }
}
```
<!--End-->

## 默认展开菜单

可以通过设置 `defaultExpandAll={true}` 默认展开菜单


<!--DemoStart--> 
```js
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label:"湖北省",
          key:"0-0-0",
          children:[
            {
              label:"武汉市",
              key:"0-1-0",
              children:[
                {label:"新洲区",key:"0-1-1"},
                {label:"武昌区",key:"0-1-2"},
                {label:"汉南区",key:"0-1-3"},
              ]
            },
            {label:"黄冈市",key:"0-2-0"},
            {
              label:"黄石市",
              key:"0-3-0",
              children:[
                {label:"青山区",key:"0-3-1"},
                {label:"黄陂区",key:"0-3-2"},
                {label:"青山区",key:"0-3-2"},
              ]
            },
          ]
        },{
          label:"上海市",
          key:"1-0-0",
          children:[
            {label:"黄浦区",key:"1-0-1"},
            {label:"卢湾区",key:"1-0-2"},
            {
              label:"徐汇区",
              key:"1-0-3",
              children:[
                {label:"半淞园路街道",key:"1-1-0"},
                {label:"南京东路街道",key:"1-2-0"},
                {label:"外滩街道",key:"1-3-0"},
              ]
            },
          ]
        },
      ]
    }
  }
  render() {
    return (
      <Tree 
        defaultExpandAll={true}
        data={this.state.data}
        onExpand={(key,expanded,data,node)=>{
          console.log("item:",key,expanded,data,node)
        }}
      />
    )
  }
}
```
<!--End-->

## Tree

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| data | 展示数据 | Array | `[]` |
| selectedKeys | 设置选中的树节点 | String[] | `[]` |
| option | 配置选项，具体看 `option` | Object | `-` |
| defaultExpandAll | 是否默认展开所有节点 | Boolean | `false` |
| showLine | 是否展示连接线 | Boolean | `false` |
| onSelect | 点击树节点触发 | Function(key,data,e) | - |
| onExpand | 展开/收起节点时触发 | Function(key,expanded:bool,data,node) | - |

## data

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| key | 每个树节点用来作为唯一标识的属性，整颗树应该是唯一的。注意：整个树范围内的所有节点的 key 值不能重复！ | String | `-` |
| children | 指定子树的数据对象，可以根据`option`来指定 | Array | - |
| label | 指定节点标题，可以根据`option`来指定 | String | `label` |

## option

| 参数 | 说明 | 类型 | 默认值 |
| ----- |----- | ----- |----- |
| children | 指定子树的数据对象 | String | `children` |
| label | 指定节点标题 | String | `label` |
