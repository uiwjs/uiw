## 快速上手

还未开源 `uiw` 没有任何作用


<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    form: {
      name:'wui',
      password: '',
      email: '',
    },
    rules:{
      name:[
        { required: true, message: '请输入活动名称'},
        { min: 5, message: '长度不够！'}
      ],
      password:[
        { required: true, message: '不能为空！'},
        { min: 6, message: '长度不够！'},
        { max: 14, message: '长度超出！'}
      ],
      email:[
        {type: 'email', message: '输入的不是E-mail!'}
      ]
    }
  }
}

onChange(key,e, value) {
  const {form} = this.state;
  form[key] = value;
  this.setState({form});
}

handleSubmit(e) {
  e.preventDefault();
  this.refs.form.validate((valid,dataValues) => {
    console.log("返回内容:",dataValues,valid)
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
  const {form,rules} = this.state;
  const FormItem = Form.Item;
  const TagGroup = Tag.Group;
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
    <Form style={{width:500}} ref="form" model={form} rules={rules}>
      <FormItem label={<span>用户名</span>} field="name" {...formItemLayout} >
        <Input 
          value={form.name} 
          placeholder="请输入用户名"
          onChange={this.onChange.bind(this, 'name')} />
      </FormItem>
      <FormItem label="密码" field="password" {...formItemLayout} >
        <Input 
          // 注意字段 password
          value={form.password} 
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


### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Buttons } from 'uiw';

ReactDOM.render(
  <Buttons type="primary">Hello</Buttons>, 
  document.getElementById('app')
);
```


### 组件冲突

重新取一个名字

```js
import { Buttons as ButtonsView } from 'uiw';
```
