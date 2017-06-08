## Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

### 表单集合

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    form: {
      name: {
        value:"wui", // 初始值
        //help:"用户名称输入会员/邮箱/手机号码",
        rules:[
          { required: true, message: '请输入活动名称'},
          { min: 5, message: '长度不够！'}
        ]
      },
      password: {
        value:"",
        help:"长度为6~14个字符/支持数字,字母和标点符号",
        rules:[
          { required: true, message: '不能为空！'},
          { min: 6, message: '长度不够！'},
          //{ max: 14, message: '长度超出！'}
        ]
      },
      email: {
        value:"",
      },
      online: {
        value:true,
      },
    }
  };
}

onChange(key,e, value) {
  const {form} = this.state;
  form[key].value = value;
  this.setState({form});
}

handleSubmit(e) {
  e.preventDefault();
  this.refs.form.validate((valid) => {
    console.log("form:",this.state.form,valid)
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}

handleReset(e) {
  e.preventDefault();
  this.refs.form.resetFields((model)=>{
    this.setState({form:model})
  });
}

render() {
  const {form} = this.state;
  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
      className:"colspanlab"
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
      className:"colspan"
    },
  };
  const wrapperCol = {
    wrapperCol: {
      xs: {span: 24, offset: 0, },
      sm: {span: 14, offset: 4, },
    },
  }
  return (
    <Form style={{width:500}} ref="form" model={form}>
      <FormItem label={<span>用户名</span>} field="name" {...formItemLayout} >
        <Input 
          value={form.name.value} 
          placeholder="请输入用户名"
          onChange={this.onChange.bind(this, 'name')} />
      </FormItem>
      <FormItem label="密码" field="password" {...formItemLayout} >
        <Input 
          // 注意字段 password
          value={form.password.value} 
          type="password"
          placeholder="请输入密码"
          onChange={this.onChange.bind(this, 'password')} />
      </FormItem>
      <FormItem label="是否在线" field="online" {...formItemLayout} >
        <Switch checked={form.online.value} 
         onChange={this.onChange.bind(this, 'online')}/>
      </FormItem>
      <FormItem label="邮箱" field="email" {...formItemLayout} >
        <Input 
          value={form.email.value}
          placeholder="请输入邮箱"
          onChange={this.onChange.bind(this, 'email')} />
      </FormItem>
      <FormItem {...wrapperCol}>
        <Buttons size="small" type="primary" onClick={this.handleSubmit.bind(this)}>提交</Buttons>
        <Buttons size="small" onClick={this.handleReset.bind(this)}>重置</Buttons>
      </FormItem>
    </Form>
  )
}
```
<!--End-->



### 基础用法

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    form: {
      name: {
        value:"wui", // 初始值
        //help:"用户名称输入会员/邮箱/手机号码",
        rules:[
          { required: true, message: '请输入活动名称'},
          { min: 5, message: '长度不够！'}
        ]
      },
      password: {
        value:"",
        help:"长度为6~14个字符/支持数字,字母和标点符号",
        rules:[
          { required: true, message: '不能为空！'},
          { min: 6, message: '长度不够！'},
          //{ max: 14, message: '长度超出！'}
        ]
      },
      email: {
        value:"",
      },
    }
  };
}

onChange(key, value) {
  const {form} = this.state;
  form[key].value = value;
  this.setState({form});
}

handleSubmit(e) {
  e.preventDefault();
  this.refs.form.validate((valid) => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}

handleReset(e) {
  e.preventDefault();
  this.refs.form.resetFields((model)=>{
    this.setState({form:model})
  });
}

render() {
  const {form} = this.state;
  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const wrapperCol = {
    wrapperCol: {
      xs: {span: 24, offset: 0, },
      sm: {span: 14, offset: 4, },
    },
  }
  return (
    <Form style={{width:500}} ref="form" model={form}>
      <FormItem label="用户名" field="name" {...formItemLayout} >
        <Input 
          value={form.name.value} 
          placeholder="请输入用户名"
          onChange={this.onChange.bind(this, 'name')} />
      </FormItem>
      <FormItem label="密码" field="password" {...formItemLayout} >
        <Input 
          // 注意字段 password
          value={form.password.value} 
          type="password"
          placeholder="请输入密码"
          onChange={this.onChange.bind(this, 'password')} />
      </FormItem>
      <FormItem label="邮箱" field="email" {...formItemLayout} >
        <Input 
          value={form.email.value}
          placeholder="请输入邮箱"
          onChange={this.onChange.bind(this, 'email')} />
      </FormItem>
      <FormItem {...wrapperCol}>
        <Buttons size="small" type="primary" onClick={this.handleSubmit.bind(this)}>提交</Buttons>
        <Buttons size="small" onClick={this.handleReset.bind(this)}>重置</Buttons>
      </FormItem>
    </Form>
  )
}
```
<!--End-->



## API

### Form

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| ref | React方法，提供Form组件内部方法调用 | String | - |
| model | 表单数据对象，以及验证规则 | Object | - |

### Form refs

```html
<Form ref="form"></Form>
```

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| validate | 对整个表单进行校验的方法 | String | - |
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | Function(model:Object) | - |

### Form model

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | React方法，提供Form组件内部方法调用 | String | - |
| rules | 校验规则，参考下方文档 | Object[] | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | String、ReactNode | - |


### Form.Item 

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| label | `label` 标签的文本 | String、ReactNode | - |
| field | `field` 域的名称 | String、ReactNode | - |
| labelCol | `label` 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | Object | - |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol` | Object | - |

### 校验规则

```js
{
    rules:[
      { required: true, message: "请输入活动名称"},
      { min: 12, message: "长度不够！"}
    ]    
}
```

`rules` 校验规则实例，校验使用的包[async-validator](https://github.com/yiminghe/async-validator)

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| message | 校验文案，错误提示信息  |  string | - |
| type    | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | `string` |
| required | 是否必选  |  boolean | `false` |
| whitespace | 必选时，空格是否会被视为错误 | boolean | false |
| len | 字段长度  |  number | - |
| min | 最小长度  |  number | - |
| max | 最大长度  |  number | - |
| enum | 枚举类型  |  string | - |
| pattern | 正则表达式校验 RegExp | - |
| validator | 自定义校验（注意，callback 必须被调用） | Function(rule, value,callback) | - |
