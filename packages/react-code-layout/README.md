代码块与预览效果布局
============

简化示例代码块与示例预览布局

## 基本用法

```tsx
import React from "react"
import CodeLayout from "@uiw/react-code-layout"
const Demo = ()=>{
  return <CodeLayout
  code={<code style={{color:"red"}} >import React from "react"</code>}
  copyNodes={`import React from "react"`}
  >
    <div>示例内容</div>
  </CodeLayout>
}
export default Demo;
```

## Props

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| code | 代码块内容展示 | `React.ReactNode` | - |
| copyNodes | 复制按钮复制的内容  | `string` | false |
| customButton | 自定义操作按钮 | `React.ReactNode` | - |
| codePadding |代码块内容展示内边距 | number | `16` |
| noCode | 不展示代码块内容 |  `boolean`  | `false` |
| bordered | 是否设置边框 | `boolean` | `true` |
| className |  | `string` | - |

