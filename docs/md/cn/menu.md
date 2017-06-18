## Menu 菜单

为页面和功能提供导航的菜单列表。

### 基本用法

<!--DemoStart--> 
```js
onSelect(index, menuItem) {
    console.log("index::",index)
}
render() {
  return (
    <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
        <Menu.Item index="1">聚划算</Menu.Item>
        <Menu.Item index="2">天猫超市</Menu.Item>
        <Menu.Item disabled index="3">淘抢购</Menu.Item>
        <Menu.Item index="4">电器城</Menu.Item>
        <Menu.Item index="5">
            <a href="https://github.com/jaywcjlove" target="_blank" rel="noopener noreferrer">电器城- Link</a>
        </Menu.Item>
    </Menu>
  )
}
```
<!--End-->

### 展开当前父级菜单

<!--DemoStart--> 
```js
onSelect() {}
onClose(index) {
    console.log("index::",index)
}
render() {
  return (
    <Menu 
      defaultActive="1" 
      defaultOpened={['5']}
      onClose={this.onClose.bind(this)}
      onSelect={this.onSelect.bind(this)}>
        <Menu.Item index="1"><Icon type="date" />聚划算</Menu.Item>
        <Menu.SubMenu index="2" title={<span><Icon type="menu" /><span>天猫超市</span></span>}>
          <Menu.Item index="2-1">进口食品</Menu.Item>
          <Menu.Item index="2-2">食品饮料</Menu.Item>
          <Menu.Item index="2-3">美容洗护</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item disabled index="3"><Icon type="upload1" />淘抢购</Menu.Item>
        <Menu.Item index="4"><Icon type="star-on" />电器城</Menu.Item>
        <Menu.SubMenu index="5" title={<span><Icon type="verification" /><span>折叠菜单</span></span>}>
          <Menu.Item index="5-1">生活电器</Menu.Item>
          <Menu.Item index="5-2">厨房电器</Menu.Item>
          <Menu.Item index="5-3">健康电器</Menu.Item>
          <Menu.Item index="5-4">手机配件</Menu.Item>
        </Menu.SubMenu>
    </Menu>
  )
}
```
<!--End-->

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| mode | 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直） 默认垂直所以参数`vertical`   | String | vertical |
| defaultActive | 当前默认选中的菜单项 `index` | String | - |
| defaultOpened | 当前默认打开的菜单项 `index` | String[] | - |
| onClose | 折叠菜单关闭事件 | Function(index) | - |
| onOpen | 折叠菜单展开事件 | Function(index) | - |
| onSelect | 当前默认打开的菜单项 | Function(index) | - |

### Menu.Item

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| disabled | 是否禁用 | Boolean | false |
| index | `item` 的唯一标志 | String | vertical |

### Menu.SubMenu

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 折叠菜单标题 | String,React.ReactNode | vertical |
| index | `SubMenu` 的唯一标志 | String | vertical |


