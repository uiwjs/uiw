## Checkbox 多选框

一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换。

:::demo 简单的Checkbox，使用`checked`切换选中状态。
```js
render() {
  return <Checkboxs indeterminate onChange={(e)=>{
              console.log(`checked = ${e.target.checked}`);
            }}>半选中禁用</Checkboxs>
}
```
:::
