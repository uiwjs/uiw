## Paging 分页

当数据量较多时，使用分页可以快速进行数据切换，每次只加载一个页面。

### 基本用法

基础分页。

<!--DemoStart--> 
简单的Checkboxs，使用`checked`切换选中状态。
```js
render() {
  return (
    <div>
        <Paging activePage={5} total={250} onChange={(pageNumber)=>{
          console.log('Page: ', pageNumber);
          }}/>
          <br /><br />
        <Paging total={60} onChange={(pageNumber)=>{
          console.log('Page: ', pageNumber);
          }}/>
    </div>
  )
}
```
<!--End-->

## API

### Paging Attributes

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| total | 数据总数 | number | 0 |
| activePage | 当前页数，选中的页数 | number | 0 |
| pageSize | 每页条数 | number | 10 |
| onChange | 页码改变的回调，返回改变后的页码 | Function(activePage,total,pageSize) | - |