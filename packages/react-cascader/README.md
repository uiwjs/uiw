Cascader 级联选择
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-cascader/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-cascader.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-cascader)
[![npm version](https://img.shields.io/npm/v/@uiw/react-cascader.svg?label=@uiw/react-cascader)](https://npmjs.com/@uiw/react-cascader)

级联选择框。v4.16.0中添加

```jsx
import { Cascader  } from 'uiw';
// or
import Cascader from '@uiw/react-cascader';
```

## 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Cascader } from 'uiw';

const Demo = () => {

  const options = [
    {
      label: '上海市',
      value: 1,
      children: [
        {
          label: '徐汇区',
          value: 4,
          children: [
            { label: '半淞园路街道', value: 6 },
            { label: '南京东路街道', value: 7 },
            { label: '外滩街道', value: 8 },
          ]
        },
      ]
    },
    {
      label: '北京市',
      value: 9,
      children: [
        {
          label: '崇文区',
          value: 12,
          children: [
            { label: '东花市街道', value: 13 },
            { label: '体育馆路街道', value: 14 },
            { label: '前门街道', value: 15 },
          ]
        },
      ]
    },
  ];

  return (
    <div style={{ width: 200 }}>
      <Cascader allowClear={true} placeholder="请选择" value={[1, 4, 7]} option={options} onChange={(value, seleteds) => console.log(value, seleteds)} />
    </div>
  )
};
ReactDOM.render(<Demo />, _mount_);
```

### 在表单中使用

在 [`<Form />`](#/components/form) 表单中应用 `<Cascader />` 组件。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true-->
```jsx
import ReactDOM from 'react-dom';
import { Form, Row, Col, Cascader, Button } from 'uiw';

const Demo = () => {
const options = [
    {
      label: '上海市',
      value: 1,
      children: [
        {
          label: '徐汇区',
          value: 4,
          children: [
            { label: '半淞园路街道', value: 6 },
            { label: '南京东路街道', value: 7 },
            { label: '外滩街道', value: 8 },
          ]
        },
      ]
    },
    {
      label: '北京市',
      value: 9,
      children: [
        {
          label: '崇文区',
          value: 12,
          children: [
            { label: '东花市街道', value: 13 },
            { label: '体育馆路街道', value: 14 },
            { label: '前门街道', value: 15 },
          ]
        },
      ]
    },
  ];

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
          cascader: {
            initialValue:[1, 4, 7],
            children: (
              <Cascader
                allowClear={true}
                placeholder="请选择"
                option={options}
                onChange={(value, seleteds) => console.log(value, seleteds)}
              />
            )
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          return (
            <div>
              <Row >
                <Col fixed style={{width:200}}>{fields.cascader}</Col>
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
| placeholder | 选择框默认文字 | String | - | - |
| option | 选项菜单 | { value: String \| Number, label: React.ReactNode, children: Array<String \| Number>} | - | - |
| value | 指定当前选中的条目，多选时为一个数组 | String[] \| Number[] | - | - |
| onChange | 选中选项调用此函数 | function( isSeleted, value, selectedOptions) | - | - |
