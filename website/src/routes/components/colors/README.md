Color 色彩
===

## 主要颜色

主色以象征广阔海洋的湖蓝色作为主色调，它给人以年轻、鲜明、清爽的形象多展现出来，湖蓝色是一种纯洁的颜色，象征着大海。
（ 取色含义：我们致力于创新，积极并且不断努力，这正是我们团队的精神追求。）

<!--rehype:bgWhite=true&noCode=true&bordered=false-->
```js
const colors = [
  { name: 'Light Blue', cn: '主要-浅蓝色', color: '#5BB5F4', des: '通常用于按钮、及任何修饰元素', },
  { name: 'Blue', cn: '主要-蓝色', color: '#2EA3F4', des: '通常用于按钮、及任何修饰元素', },
  { name: 'Dark Blue', cn: '主要-深蓝色', color: '#008EF0', des: '通常用于按钮、及任何修饰元素', },
];
const styles = {
  flex: 1, height: 63, maxWidth: 120, color: '#fff', textAlign: 'center',
  display: 'flex', justifyContent: 'center', flexDirection: 'column',
};
const Demo = () => (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {colors.map((item, idx) => {
      return (
        <div key={idx} style={{ background: item.color, ...styles }}>
          <div>{item.name}</div>
          <div>{item.color}</div>
        </div>
      );
    })}
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

## 辅助颜色

这些亮丽的辅助色多用于按钮，提示，警告等修饰元素，以及一些侧边修饰的元素上。

<!--rehype:bgWhite=true&noCode=true&bordered=false-->
```js
const colors = [
  { name: 'Green', cn: '成功-绿色', color: '#28a745' },
  { name: 'Blue', cn: '主要-蓝色', color: '#008EF0' },
  { name: 'Cyan', cn: '信息-青色', color: '#1EABCD' },
  { name: 'Navy', cn: '导航-藏青', color: '#393E48' },
  { name: 'Yellow', cn: '警告-黄色', color: '#ffc107' },
  { name: 'Orange', cn: '提醒-橙色', color: '#F95C2B' },
  { name: 'Red', cn: '危险-红色', color: '#dc3545' },
];
const styles = {
  position: 'relative', minWidth: 80,
  flex: 1, height: 83, color: '#fff', textAlign: 'center',
  display: 'flex', flexDirection: 'column', justifyContent: 'center',
};
const Demo = () => (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {colors.map((item, idx) => {
      return (
        <div key={idx} style={{ background: item.color, ...styles }}>
          <div style={{position: 'absolute', top: 3, left: 5, fontSize: 12, color: 'rgba(255, 255, 255, 0.65)'}}>{item.color}</div>
          <div>{item.name}</div>
          <div>{item.cn}</div>
        </div>
      );
    })}
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

## 极简中性色

极简中性色是白色从灰色再到深灰色的一个过渡颜色，可以搭配文字以及任何元素，以这种色调来缓解视觉疲劳，低调内敛！

<!--rehype:bgWhite=true&noCode=true&bordered=false-->
```js
const colors = [
  { name: '白色', color: '#FFFFFF', fontColor: '#6F6F6F' },
  { name: '背景', color: '#F6F6F6', fontColor: '#6F6F6F' },
  { name: '分割线', color: '#F2F2F2', fontColor: '#6F6F6F' },
  { name: '边框', color: '#EEEEEE', fontColor: '#6F6F6F' },
  { name: '失效', color: '#EAEAEA', fontColor: '#6F6F6F' },
  { name: '辅助', color: '#DDDDDD', fontColor: '#6F6F6F' },
  { name: '正文', color: '#C2C2C2' },
  { name: '图标', color: '#B9B9B9' },
  { name: '文本', color: '#A5A5A5' },
  { name: '标题', color: '#6E6E6E' },
];
const Demo = () => (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {colors.map((item, idx) => {
      const styles = {
        flex: 1, height: 63, color: '#fff', textAlign: 'center', minWidth: 80,
        flexDirection: 'column', display: 'flex', justifyContent: 'center',
      }
      if (item.fontColor) {
        styles.color = item.fontColor;
      }
      return (
        <div key={idx} style={{ background: item.color, ...styles }}>
          <div>{item.name}</div>
          <div>{item.color}</div>
        </div>
      );
    })}
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

## 背景色

这内置的几种颜色可以用于各种元素中，比如：导航，按钮，徽章等背景中。

<!--rehype:bgWhite=true&noCode=true&bordered=false-->
```js
const colors = [
  { name: '警告-黄色', backgroundColor: '#ffc107', des: 'warning', },
  { name: '提醒-橙色', backgroundColor: '#F95C2B', des: 'remind', },
  { name: '危险-红色', backgroundColor: '#dc3545', des: 'danger', },
  { name: '导航-藏青', backgroundColor: '#393E48', des: 'NavMenu', },
  { name: '主要-蓝色', backgroundColor: '#2EA3F4', des: 'Primary', },
  { name: '成功-绿色', backgroundColor: '#09C62C', des: 'success', },
  { name: '背景-中灰', backgroundColor: '#EAEAEA', des: 'background', color: '#6F6F6F' },
];
const Demo = () => (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {colors.map((item, idx) => {
      const styles = {
        padding: '21px 0 7px 5px', minWidth: 100,
        position: 'relative', flex: 1, height: 63, color: '#fff',
        flexDirection: 'column', display: 'flex', justifyContent: 'center',
      }
      const colorFontSty = {position: 'absolute', top: 3, left: 5, fontSize: 12, color: 'rgba(255, 255, 255, 0.65)'};
      if (item.color) {
        styles.color = item.color;
        colorFontSty.color = item.color;
      }
      return (
        <div key={idx} style={{ background: item.backgroundColor, ...styles }}>
          <div style={colorFontSty}>{item.backgroundColor}</div>
          <div>{item.name}</div>
          <div style={{ fontSize: 12 }}>{item.des}</div>
        </div>
      );
    })}
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
