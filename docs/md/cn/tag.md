## Tag 标签

进行标记和分类的小标签。

### 多彩标签

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tag color="white">white</Tag>
        <Tag color="pink">pink</Tag>
        <Tag color="red">red</Tag>
        <Tag color="yellow">yellow</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="purple">purple</Tag>
    </div>
  )
}
```
<!--End-->

### 多彩英文标签

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tag color="default">default</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warn">warn</Tag>
        <Tag color="success">success</Tag>
        <Tag color="info">info</Tag>
    </div>
  )
}
```
<!--End-->

### 多彩中文标签

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tag color="default">默认</Tag>
        <Tag color="error">错误</Tag>
        <Tag color="warn">警告</Tag>
        <Tag color="success">完成</Tag>
        <Tag color="info">信息</Tag>
    </div>
  )
}
```
<!--End-->

### 自定义颜色值

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tag color="#0080f2">#0080f2</Tag>
        <Tag color="rgba(0, 0, 0, 0.65)">rgba(0, 0, 0, 0.65)</Tag>
        <Tag color="hsla(214, 100%, 29%, 0.65)">hsla(214, 100%, 29%, 0.65)</Tag>
    </div>
  )
}
```
<!--End-->

### 标签组动可选择

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    plainOptions:[
      {
        checked:true,
        color:"white",
        value:'Apple'
      }, {
        checked:true,
        color:"orange",
        value:'Pear'
      }, {
        color:"green",
        checked:false,
        value:'Orange'
      }
    ],
  }
}
render() {
  const TagGroup = Tag.Group;
  return (
    <TagGroup 
      options={this.state.plainOptions}
      checked={true}
      onChange={(e,value)=>{
        console.log("value::",value)
      }}
    />
  )
}
```
<!--End-->

### 标签组动态删除

<!--DemoStart--> 
```js
constructor(props) {
  super(props);

  this.state = {
    plainOptions:['Apple', 'Pear', 'Orange'],
  }
}
render() {
  const TagGroup = Tag.Group;
  return (
    <TagGroup 
      options={this.state.plainOptions}
      onChange={(e,value)=>{
        console.log("value::",value)
      }}
    >
      <Buttons size="mini" onClick={()=>{
        console.log(this.state.plainOptions)
        let addTag = this.state.plainOptions
        addTag.push("test")
        console.log("addTag::",addTag)
        this.setState({plainOptions:addTag})
      }}>Set</Buttons>
    </TagGroup>
  )
}
```
<!--End-->

### 标签组动态编辑

<!--DemoStart--> 
```js
constructor(props) {
  super(props);

  this.state = {
    inputVisible: false,
    plainOptions:['Apple', 'Pear', 'Orange'],
  }
}

onKeyUp(e) {
  if (e.keyCode&&e.keyCode === 13) {
    this.handleInputConfirm();
  }
}

handleChange(e) {
  this.setState({ inputValue: e.target.value });
}

handleClose(index) {
  this.state.plainOptions.splice(index, 1);
  this.forceUpdate();
}

showInput() {
  this.setState({ inputVisible: true }, () => {
    this.refs.saveTagInput.focus();
  });
}

handleInputConfirm() {
  let inputValue = this.state.inputValue;
  if (inputValue) {
    this.state.plainOptions.push(inputValue);
  }
  this.state.inputVisible = false;
  this.state.inputValue = '';
  this.forceUpdate();
}
render() {
  const TagGroup = Tag.Group;
  const styl = {display:"inline-block",width:50}
  return (
    <TagGroup 
      options={this.state.plainOptions}
      onChange={(e,value)=>{
        console.log("Change::",value)
      }}
    >
    {
      this.state.inputVisible ? (
        <Input
          className="input-new-tag"
          value={this.state.inputValue}
          ref="saveTagInput"
          size="mini"
          style={styl}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          onBlur={this.handleInputConfirm.bind(this)}
        />
      ) : <Buttons size="mini" onClick={this.showInput.bind(this)}>+ New Tag</Buttons>
    }
    </TagGroup>
  )
}
```
<!--End-->

### 禁止删除

<!--DemoStart--> 
```js
log(e){
    console.log("--->",e) 
}
render() {
  return (
    <div>
        <Tag color="default" onClose={this.log}>默认</Tag>
        <Tag color="error" onClose={this.log}>错误</Tag>
        <Tag color="warn" onClose={this.log}>警告</Tag>
        <Tag color="success" onClose={this.log}>完成</Tag>
        <Tag color="info" onClose={this.log}>信息</Tag>
        <Tag><a href="https://github.com/jaywcjlove">连接</a></Tag>
        <Tag color="info" onClose={(e)=>{
          e.preventDefault();
          console.log('Clicked! But prevent default.');
        }}>代码禁止删除的Tags方法</Tag>
    </div>
  )
}
```
<!--End-->


### 动态编辑标签

<!--DemoStart--> 
```js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['标签一', '标签二', '标签三'],
    inputVisible: false,
    inputValue: ''
  }
}

onKeyUp(e) {
  if (e.keyCode&&e.keyCode === 13) {
    this.handleInputConfirm();
  }
}

onChange(e) {
  this.setState({ inputValue: e.target.value });
}

handleClose(index) {
  this.state.dynamicTags.splice(index, 1);
  this.forceUpdate();
}

showInput() {
  this.setState({ inputVisible: true }, () => {
    this.refs.saveTagInput.focus();
  });
}

handleInputConfirm() {
  let inputValue = this.state.inputValue;

  if (inputValue) {
    this.state.dynamicTags.push(inputValue);
  }

  this.state.inputVisible = false;
  this.state.inputValue = '';

  this.forceUpdate();
}

render() {
  const styl = {display:"inline-block",width:50}
  return (
    <div>
      {
        this.state.dynamicTags.map((tag, index) => {
          return (
            <Tag
              key={Math.random()}
              onClose={this.handleClose.bind(this, index)}>{tag}</Tag>
          )
        })
      }
      {
        this.state.inputVisible ? (
          <Input
            className="input-new-tag"
            value={this.state.inputValue}
            ref="saveTagInput"
            size="mini"
            style={styl}
            onChange={this.onChange.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            onBlur={this.handleInputConfirm.bind(this)}
          />
        ) : <Buttons size="mini" onClick={this.showInput.bind(this)}>+ New Tag</Buttons>
      }
    </div>
  )
}
```
<!--End-->

### 可选择

<!--DemoStart--> 
```js
constructor(props) {
  super(props);

  this.state = {
    checked1:true,
    checked2:true,
    checked3:true,
  }
  this.handleClick = this.handleClick.bind(this);
}
handleClick(num){
  console.log("num::",num,this.state[`checked${num}`])
  this.setState({
    [`checked${num}`]:!this.state[`checked${num}`]
  })
}
render() {
  return (
    <div>
        <Tag color="white" checked={this.state.checked1} onClick={()=>this.handleClick('1')}>white</Tag>
        <Tag color="orange" checked={this.state.checked2} onClick={()=>this.handleClick('2')}>white</Tag>
        <Tag color="green" checked={this.state.checked3} onClick={()=>this.handleClick('3')}>white</Tag>
    </div>
  )
}
```
<!--End-->

## API

### Tag 

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| color | 支持颜色自定义，也提供选择`white`、 `pink`、 `red`、 `yellow`、 `orange`、 `cyan`、 `green`、 `blue`、 `purple` | string | `white` |
| ~~type~~⚠️ | 废弃直接在color里面填写后面面值，`white`、`red`、`orange`、`green`、`blue` | string | - |
| onClose | 关闭时的回调，设置关闭事件，标签是否显示关闭按钮 | (e) => void | - |
| checked | 选中效果，紧紧是效果而已 | Boolean | - |


### Tag.Group

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| options | 设置每个标签的值例如：`['Apple', 'Pear', 'Orange']` | Array | - |
| checked | 标签组动可选择 | Boolean | `false` |
| onChange | 标签组发生变化触发事件 | Function(e:Event,options:Array) | - |

### Tag.Group options

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| color | 定义颜色 | String | - |
| checked | `Tag.Group` 的属性`checked`为 `true`，表示标签组动可选择，`option`这里是默认选中状态 | Boolean | - |
| value | 标签上面显示的文字 | String | - |
