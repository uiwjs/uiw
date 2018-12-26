Color 色彩
===

## 主要颜色

主色以象征广阔海洋的湖蓝色作为主色调，它给人以年轻、鲜明、清爽的形象多展现出来，湖蓝色是一种纯洁的颜色，象征着大海。
（ 取色含义：我们致力于创新，积极并且不断努力，这正是我们团队的精神追求。）

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      color: [
        {
          name: 'Light Blue',
          cn: '主要-浅蓝色',
          color: '#5BB5F4',
          des: '通常用于按钮、及任何修饰元素',
        },
        {
          name: 'Blue',
          cn: '主要-蓝色',
          color: '#2EA3F4',
          des: '通常用于按钮、及任何修饰元素',
        },
        {
          name: 'Dark Blue',
          cn: '主要-深蓝色',
          color: '#008EF0',
          des: '通常用于按钮、及任何修饰元素',
        },
      ],
    };
  }
  render() {
    const styles = {
      flex: 1, height: 63, color: '#fff', textAlign: 'center',
      display: 'flex', justifyContent: 'center', flexDirection: 'column',
    }
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {this.state.color.map((item, idx) => {
          return (
            <div key={idx} style={{ background: item.color, ...styles }}>
              <div>{item.name}</div>
              <div>{item.color}</div>
            </div>
          );
        })}
      </div>
    )
  }
}
```
<!--End-->

## 辅助颜色

这些亮丽的辅助色多用于按钮，提示，警告等修饰元素，以及一些侧边修饰的元素上。

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      color: [
        {
          name: 'Green', cn: '成功-绿色', color: '#07C32A',
        },
        {
          name: 'Cyan', cn: '信息-青色', color: '#1EABCD',
        },
        {
          name: 'Navy', cn: '导航-藏青', color: '#393E48',
        },
        {
          name: 'Yellow', cn: '成功-绿色', color: '#EEB719',
        },
        {
          name: 'Orange', cn: '信息-青色', color: '#F95C2B',
        },
        {
          name: 'Red', cn: '导航-藏青', color: '#E23028',
        },
      ],
    };
  }
  render() {
    const styles = {
      flex: 1, height: 63, color: '#fff', textAlign: 'center',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {this.state.color.map((item, idx) => {
          return (
            <div key={idx} style={{ background: item.color, ...styles }}>
              <div>{item.name}</div>
              <div>{item.color}</div>
            </div>
          );
        })}
      </div>
    )
  }
}
```
<!--End-->

## 极简中性色

极简中性色是白色从灰色再到深灰色的一个过渡颜色，可以搭配文字以及任何元素，以这种色调来缓解视觉疲劳，低调内敛！

<!--DemoStart--> 
```js
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      color: [
        {
          name: '白色', color: '#FFFFFF', fontColor: '#6F6F6F',
        },
        {
          name: '背景', color: '#F6F6F6', fontColor: '#6F6F6F',
        },
        {
          name: '分割线', color: '#F2F2F2', fontColor: '#6F6F6F',
        },
        {
          name: '边框', color: '#EEEEEE', fontColor: '#6F6F6F',
        },
        {
          name: '失效', color: '#EAEAEA', fontColor: '#6F6F6F',
        },
        {
          name: '辅助', color: '#DDDDDD', fontColor: '#6F6F6F',
        },
        {
          name: '正文', color: '#C2C2C2',
        },
        {
          name: '图标', color: '#B9B9B9',
        },
        {
          name: '文本', color: '#A5A5A5',
        },
        {
          name: '标题', color: '#6E6E6E',
        },
      ],
    };
  }
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {this.state.color.map((item, idx) => {
          const styles = {
            flex: 1, height: 63, color: '#fff', textAlign: 'center',
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
    )
  }
}
```
<!--End-->


## 背景色

这内置的几种颜色可以用于各种元素中，比如：导航，按钮，徽章等背景中。


<!--DemoStart--> 
```js
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      color: [
        {
          name: '警告-黄色', backgroundColor: '#EEB719', des: 'warning',
        },
        {
          name: '提醒-橙色', backgroundColor: '#F95C2B', des: 'remind',
        },
        {
          name: '危险-红色', backgroundColor: '#E23028', des: 'danger',
        },
        {
          name: '导航-藏青', backgroundColor: '#393E48', des: 'NavMenu',
        },
        {
          name: '主要-蓝色', backgroundColor: '#2EA3F4', des: 'Primary',
        },
        {
          name: '成功-绿色', backgroundColor: '#09C62C', des: 'success',
        },
        {
          name: '背景-中灰', backgroundColor: '#EAEAEA', des: 'background', color: '#6F6F6F'
        },
      ],
    };
  }
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {this.state.color.map((item, idx) => {
          const styles = {
            flex: 1, height: 63, color: '#fff', textAlign: 'center',
            flexDirection: 'column', display: 'flex', justifyContent: 'center',
          }
          if (item.color) {
            styles.color = item.color;
          }
          return (
            <div key={idx} style={{ background: item.backgroundColor, ...styles }}>
              <div>{item.name}</div>
              <div>{item.des}</div>
            </div>
          );
        })}
      </div>
    )
  }
}
```
<!--End-->
