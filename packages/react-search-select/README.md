SearchSelect 搜索选择器
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-search-select/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-search-select.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-search-select)
[![npm version](https://img.shields.io/npm/v/@uiw/react-search-select.svg?label=@uiw/react-search-select)](https://npmjs.com/@uiw/react-search-select)

搜索选择器

```jsx
import { SearchSelect } from 'uiw';
// or
import SearchSelect from '@uiw/react-search-select';
```

## 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { SearchSelect } from 'uiw';

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

  const [option, setOption] = React.useState(selectOption);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState([{label: 'a8', value: 8}]);
  function handleSearch(e) {
    setLoading(true)
    setTimeout(() =>  {
      setOption();
      setLoading(false);
    }, 2000);
  }
  return(
    <SearchSelect
      mode="multiple"
      style={{ width: 176 }}
      showSearch={true}
      labelInValue={true}
      maxTagCount={6}
      allowClear
      value={value}
      disabled={false}
      placeholder="请输入选择"
      onSearch={handleSearch}
      // onSelect={(value)=>console.log('onSelect',value)}
      loading={loading}
      option={option}
      onChange={(value) => {
        console.log('value',value)
        setValue(value)
      }}
    />
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
  const [option, setOption] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  function handleSearch(e) {
    console.log('handleSearch',e)
    setLoading(true)
    setTimeout(() =>  {
      setOption([
        { label: 'a', value: 2 },
        { label: 'aa', value: 3 },
        { label: 'aaa', value: 4 },
      ]);
      setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <Form
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
            children: (
              <SearchSelect
                showSearch={true}
                allowClear
                disabled={false}
                placeholder="请输入选择"
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
            <div>
              <Row>
                <Col fixed>{fields.selectField}</Col>
              </Row>
              <Row>
                <Col fixed>
                  <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
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
| showSearch | 使单选模式可搜索 | Boolean | - | - |
| size | 选择框尺寸 | Enum{large, default, small } | `default` | - |
| tagProps | 将参数传递给 [`<Tag>`](https://uiwjs.github.io/#/components/tag) 组件 | `TagProps` | `{}` | `4.13.0` |
| onChange | 选中 option，或 input 的 value，调用此函数 | function(value:String \| Number \| String[] \| Number[] \| LabeledValue \| LabeledValue[]) | - | - |
| onSearch | 文本框值变化时回调 | function(value: String) | - | - |
| onSelect | 被选中时调用，参数为选中项的 value | function(value: String/Number ) | - | - |
| loading | 加载中状态 | Boolean | `false` | - |
