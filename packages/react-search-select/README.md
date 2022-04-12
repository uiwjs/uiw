SearchSelect 搜索选择器
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-search-select/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-search-select.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-search-select)
[![npm version](https://img.shields.io/npm/v/@uiw/react-search-select.svg?label=@uiw/react-search-select)](https://npmjs.com/@uiw/react-search-select)

搜索选择器

```jsx
import { SearchSelect, Row ,Col } from 'uiw';
// or
import SearchSelect from '@uiw/react-search-select';
```

## 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect,Row,Col } from 'uiw';

const Demo = () => {
  const option=[
    { label: 'a1', value: 1 },
    { label: 'a2', value: 2 },
    { label: 'a3', value: 3 },
    { label: 'a4', value: 4 },
    { label: 'a5', value: 5 },
    { label: 'a6', value: 6 },
    { label: 'a7', value: 7 },
    { label: 'a8', value: 8 },
  ]

  return(
    <Row gutter={20}>
     <label>单选</label>
     <Row>
       <SearchSelect
         mode="single"
         style={{ width: 200 }}
         placeholder="请选择选项"
         option={option}
       />
     </Row>
     <label>多选</label>
     <Row>
       <SearchSelect
         mode="multiple"
         style={{ width: 200 }}
         allowClear={true}
         placeholder="请选择选项"
         option={option}
       />
     </Row>
     <label>禁用</label>
     <Row>
       <SearchSelect
         mode="single"
         style={{ width: 200 }}
         allowClear={true}
         placeholder="请选择选项"
         option={option}
         disabled={true}
       />
     </Row>
    </Row>
  );
};
ReactDOM.render(<Demo />, _mount_);
```

## 尺寸

通过 size 属性设置选择器的尺寸，提供三个尺寸参数设置。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect,Row,Col } from 'uiw';

const Demo = () => {
  const option=[
    { label: '小尺寸', value: 1 },
    { label: '默认尺寸', value: 2 },
    { label: '大尺寸', value: 3 },
  ]

  return(
    <Row style={{ flexDirection: 'column' }}>
      <Col>
        <Row>
          <SearchSelect
            mode="multiple"
            style={{ width: 150 }}
            option={option}
            value={[1]}
            allowClear={true}
            placeholder="请选择选项"
            size={'small'}
          />
        </Row>
      </Col>
      <Col style={{ margin:'10px 0px' }}>
        <Row>
          <SearchSelect
            mode="multiple"
            style={{ width: 175 }}
            option={option}
            value={[2]}
            allowClear={true}
            placeholder="请选择选项"
          />
        </Row>
      </Col>
      <Col  >
        <Row>
          <SearchSelect
            mode="multiple"
            style={{ width: 200 }}
            option={option}
            value={[3]}
            allowClear={true}
            placeholder="请选择选项"
            size={'large'}
          />
        </Row>
      </Col>
    </Row>
  );
};
ReactDOM.render(<Demo />, _mount_);
```

## 不同的value类型

通`labelInValue`参数控制value类型和onChange时间返回参数的类型，设置为`true`时，`value`和`onChange`回调返回的值类型从[..., value]变成[..., { label, value}]

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect,Row,Col } from 'uiw';

const Demo = () => {
  const option=[
    { label: 'a1', value: 1 },
    { label: 'a2', value: 2 },
    { label: 'a3', value: 3 },
    { label: 'a4', value: 4 },
    { label: 'a5', value: 5 },
    { label: 'a6', value: 6 },
    { label: 'a7', value: 7 },
    { label: 'a8', value: 8 },
  ]


  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState([1 ,7]);
  const [labelValue, setLabelValue] = React.useState([{ label: 'a1', value: 1 }, { label: 'a7', value: 7 }]);

  return(
    <Row gutter={20}>
     <Row>
       <SearchSelect
         mode="multiple"
         style={{ width: 200 }}
         value={value}
         option={option}
         onChange={(value)=> {
           console.log('value', value)
           setValue(value)
         }}
         placeholder="请选择选项"
       />
     </Row>
     <Row>
       <SearchSelect
         mode="multiple"
         labelInValue={true}
         style={{ width: 200 }}
         option={option}
         value={labelValue}
         onChange={(value)=> {
           console.log('value', value)
           setLabelValue(value)
         }}
         plac
         placeholder="请选择选项"
       />
     </Row>
    </Row>
  );
};
ReactDOM.render(<Demo />, _mount_);
```

## 限制选项个数

限制最多只能选择两个选项，达到最大后如果继续选择，会替换最后一个

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect,Row,Col } from 'uiw';

const Demo = () => {
  const selectOption=[
    { label: 'a1', value: 1 },
    { label: 'a2', value: 2 },
    { label: 'a3', value: 3 },
    { label: 'a4', value: 4 },
    { label: 'a5', value: 5 },
    { label: 'a6', value: 6 },
    { label: 'a7', value: 7 },
    { label: 'a8', value: 8 },
  ]

  const valueAmount = 2
  const [option, setOption] = React.useState(selectOption);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState([ 1, 2, 7]);

  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
     const filterOpion= selectOption.filter(item=>!!item.label.includes(e.trim()))
      setOption([...filterOpion]);
      setLoading(false);
    }, 500);
  }

  return(
    <Row style={{ marginLeft: 10 }}>
        <SearchSelect
          mode="multiple"
          style={{ width: 200 }}
          valueAmount={valueAmount}
          allowClear
          value={values}
          placeholder="请选择选项"
          onSearch={handleSearch}
          // onSelect={(value)=>console.log('onSelect',value)}
          loading={loading}
          option={option}
          onChange={(value) => {
            setValues(value)
          }}
        />
    </Row>
  );
};
ReactDOM.render(<Demo />, _mount_);
```

## 显示最大数量

使用`maxTagCount`限制显示tag的数量，超过后使用省略tag显示

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect,Row,Col } from 'uiw';

const Demo = () => {
  const selectOption=[
    { label: 'a1', value: 1 },
    { label: 'a2', value: 2 },
    { label: 'a3', value: 3 },
    { label: 'a4', value: 4 },
    { label: 'a5', value: 5 },
    { label: 'a6', value: 6 },
    { label: 'a7', value: 7 },
    { label: 'a8', value: 8 },
  ]

  const maxTagCount = 4
  const [option, setOption] = React.useState(selectOption);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState([
      { label: 'a1', value: 1 },
      { label: 'a2', value: 2 },
      { label: 'a5', value: 5 },
      { label: 'a7', value: 7 },
      { label: 'a8', value: 8 },
    ]);

  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
     const filterOpion= selectOption.filter(item=>!!item.label.includes(e.trim()))
      setOption([...filterOpion]);
      setLoading(false);
    }, 500);
  }

  return(
    <Row style={{ marginLeft: 10 }}>
        <SearchSelect
          mode="multiple"
          style={{ width: 200 }}
          labelInValue={true}
          maxTagCount={maxTagCount}
          allowClear
          value={values}
          placeholder="请选择选项"
          onSearch={handleSearch}
          loading={loading}
          option={option}
          onChange={(value) => {
            setValues(value)
          }}
        />
    </Row>
  );
};
ReactDOM.render(<Demo />, _mount_);
```

## 启用搜索

将`showSearch`设置为`true`启用搜索功能，组件没有内置搜索功能，但`option`是监听变化的，可以通过配合`onSearch`实现

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect,Row,Col } from 'uiw';

const Demo = () => {
  const selectOption=[
    { label: 'a1', value: 1 },
    { label: 'a2', value: 2 },
    { label: 'a3', value: 3 },
    { label: 'a4', value: 4 },
    { label: 'a5', value: 5 },
    { label: 'a6', value: 6 },
    { label: 'a7', value: 7 },
    { label: 'a8', value: 8 },
  ]

  const [value, setValue] = React.useState([1,7]);
  const [values, setValues] = React.useState([1,7]);
  const [option, setOption] = React.useState(selectOption);
  const [loading, setLoading] = React.useState(false);

  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
     const filterOpion= selectOption.filter(item=>!!item.label.includes(e.trim()))
      setOption([...filterOpion]);
      setLoading(false);
    }, 500);
  }

  return(
    <Row style={{ marginLeft: 10 }}>
      <Col fixed style={{width:200}}>
        <SearchSelect
          mode="singe"
          showSearch={true}
          value={value}
          option={option}
          loading={loading}
          onSearch={handleSearch}
          placeholder="请选择选项"
          style={{ width: 200 }}
          onChange={(value) => {
            setValue(value)
          }}
        />
      </Col>
      <Col fixed style={{width:200, marginLeft: 20}}>
        <SearchSelect
          mode="multiple"
          showSearch={true}
          value={values}
          option={option}
          loading={loading}
          onSearch={handleSearch}
          placeholder="请选择选项"
          style={{ width: 200 }}
          onChange={(value) => {
            setValues(value)
          }}
        />
      </Col>
    </Row>
  );
};
ReactDOM.render(<Demo />, _mount_);
```

### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 `<SearchSelect />` 组件。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```jsx
import ReactDOM from 'react-dom';
import { Form, Row, Col, SearchSelect, Button, Notify } from 'uiw';

const Demo = () => {
  const selectOption =[
        { label: 'a1', value: 1 },
        { label: 'a2', value: 2 },
        { label: 'a3', value: 3 },
        { label: 'a4', value: 4 },
        { label: 'a5', value: 5 },
        { label: 'a6', value: 6 },
        { label: 'a7', value: 7 },
        { label: 'a8', value: 8 },
      ];
  const [option, setOption] = React.useState(selectOption);
  const [loading, setLoading] = React.useState(false);
  const refForm = React.useRef()

  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
     const filterOpion= selectOption.filter(item=>!!item.label.includes(e.trim()))
      setOption([...filterOpion]);
      setLoading(false);
    }, 500);
  }

  const reSetForm = () => {
    console.log('form', refForm.current.resetForm())
  }

  return (
    <div>
      <Form
        ref={refForm}
        onSubmitError={(error) => {
          if (error.filed) {
            return { ...error.filed };
          }
          return null;
        }}
        onSubmit={({initial, current}) => {
          const errorObj = {};
          if (!current.selectField) {
            errorObj.selectField = '默认需要选择内容，选择入内容';
          }
          if(Object.keys(errorObj).length > 0) {
            const err = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
            throw err;
          }
          Notify.success({
            title: '提交成功！',
            description: `表单提交成功，选择值为：${current.selectField}，将自动填充初始化值！`,
          });
        }}
        fields={{
          selectField: {
            initialValue:[{label: 'a7', value: 7},{label: 'a8', value: 8}],
            children: (
              <SearchSelect
                allowClear
                labelInValue={true}
                showSearch={true}
                mode="multiple"
                disabled={false}
                placeholder="请选择选项"
                onSearch={handleSearch}
                onChange={(v)=>{
                  console.log('onChange',v)
                }}
                option={option}
                loading={loading}
              />
            )
          },
          selectSingle: {
            initialValue:[{label: 'a7', value: 7}],
            children: (
              <SearchSelect
                mode="single"
                labelInValue={true}
                showSearch={true}
                allowClear
                disabled={false}
                placeholder="请选择选项"
                onSearch={handleSearch}
                onChange={(v)=>{
                  console.log('onChange',v)
                }}
                option={option}
                loading={loading}
              />
            )
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          return (
            <div style={{ marginLeft:10}}>
              <Row >
                <Col fixed style={{width:200}}>{fields.selectField}</Col>
              </Row>
              <Row>
                <Col fixed style={{width:200}}>{fields.selectSingle}</Col>
              </Row>
              <Row>
                <Col fixed>
                  <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                </Col>
                <Col fixed>
                  <Button onClick={reSetForm}>重置</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <pre style={{ padding: 10, marginTop: 10 }}>
                    {JSON.stringify(state.current, null, 2)}
                  </pre>
                </Col>
              </Row>
            </div>
          )
        }}
      </Form>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ---- | ---- |
| allowClear | 支持清除 | Boolean | `false` | - |
| disabled | 禁用选择器 | Boolean | `false` | - |
| mode | 选择模式: `multiple`  `single` | String | `single` | - |
| defaultValue | 指定默认选中的条目 | String/Number | - | - |
| value | 指定当前选中的条目，多选时为一个数组 | String \| Number \| String[] \| Number[] \| LabeledValue \| LabeledValue[] | - | - |
| placeholder | 选择框默认文字 | String | - | - |
| maxTagCount | 多选模式下展示tag的个数,默认所有 | number | - | - |
| labelInValue | 开启会把 Select 的 value 类型从 `string/number` 变为 `{ value: string/number, label: string }` | Boolean | `false` | - |
| showSearch | 是否可搜索 | Boolean | - | - |
| size | 选择框尺寸 | Enum{large, default, small } | `default` | - |
| tagProps | 将参数传递给 [`<Tag>`](#/components/tag) 组件 | `TagProps` | `{}` | `4.13.0` |
| onChange | 选中 option，或 input 的 value，调用此函数 | function(value:String \| Number \| String[] \| Number[] \| LabeledValue \| LabeledValue[]) | - | - |
| onSearch | 文本框值变化时回调 | function(value: String) | - | - |
| onSelect | 被选中时调用，参数为选中项的 value | function(value: String/Number ) | - | - |
| loading | 加载中状态 | Boolean | `false` | - |
| valueAmount | 多选模式下,限制最多选择多少个(value的长度) | number | - | - |
