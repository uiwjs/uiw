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
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

  return(
    <div style={{ width: 200 }}>
      <Cascader placeholder="请选择" option={options} onChange={(value,seleteds)=>console.log(value,seleteds)}/>
    </div>
  )
};
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ---- | ---- |
| allowClear | 支持清除 | Boolean | `false` | - |
| placeholder | 选择框默认文字 | String | - | - |
| option | 选项菜单 | { value: String \| Number, label: React.ReactNode, children: Array<String \| Number>} | - | - |
| value | 指定当前选中的条目，多选时为一个数组 | String[] \| Number[] | - | - |
| onChange | 选中选项调用此函数 | function(value, selectedOptions) | - | - |
