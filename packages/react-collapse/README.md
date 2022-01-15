Collapse 折叠面板
===

可以折叠/展开的内容区域。

```jsx
import { Collapse } from 'uiw';
// or
import Collapse from '@uiw/react-collapse';
```

## 基本用法

可以同时展开多个面板，这个例子默认展开了第一个。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse } from 'uiw';

const genExtra = () => (
  <div
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  >设置</div>
);

ReactDOM.render(
  <div>
    <Collapse activeKey={['1']} onChange={key=>console.log('key::1:', key)}>
      <Collapse.Panel header="大话西游" key="1" extra={genExtra()}>
        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
        <div>一万年</div>
      </Collapse.Panel>
      <Collapse.Panel header="西游·降魔篇" key="2" extra={genExtra()}>
        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
        <div>曾经牵挂，才能了无牵挂。</div>
      </Collapse.Panel>
      <Collapse.Panel header="国产零零漆" key="3" extra={genExtra()}>
        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
      </Collapse.Panel>
    </Collapse>
  </div>,
  _mount_
);
```

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse } from 'uiw';

ReactDOM.render(
  <div>
    <Collapse activeKey={['1']} onChange={key=>console.log('key::1:', key)}>
      <Collapse.Panel header="大话西游" key="1">
        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
        <div>一万年</div>
      </Collapse.Panel>
      <Collapse.Panel header="西游·降魔篇" key="2">
        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
        <div>曾经牵挂，才能了无牵挂。</div>
      </Collapse.Panel>
      <Collapse.Panel header="国产零零漆" key="3" disabled >
        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
      </Collapse.Panel>
    </Collapse>
  </div>,
  _mount_
);
```

## 手风琴折叠面板

手风琴，每次只打开一个tab。默认打开第一个。`Panel` 的 `key` 属性并非必须。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse, Button } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeName: '0'
    }
  }
  render() {
    const Panel = Collapse.Panel
    return (
      <div>
        <Button
          type="primary"
          style={{marginBottom: '15px'}}
          onClick={() => this.setState({ activeName: this.state.activeName === '2'?'':'2' })}
        >
          打开或关闭第三个
        </Button>
        <Collapse accordion activeKey={[this.state.activeName]} onChange={key=>console.log('key::2:', key)}>
          <Panel header="大话西游">
            <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
            <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
            <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
            <div>一万年</div>
          </Panel>
          <Panel header="西游·降魔篇">
            <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
            <div>曾经牵挂，才能了无牵挂。</div>
          </Panel>
          <Panel header="国产零零漆" showArrow={false}>
            <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
          </Panel>
        </Collapse>
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```

## 简洁风格无边框

通过设置`bordered={true}`没有边框的简洁样式。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse } from 'uiw';

const Panel = Collapse.Panel;

ReactDOM.render(
  <div>
    <Collapse accordion bordered={true} activeKey={[]} onChange={key=>console.log('key::3:', key)}>
      <Panel header="大话西游">
        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
        <div>一万年</div>
      </Panel>
      <Panel header="西游·降魔篇">
        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
        <div>曾经牵挂，才能了无牵挂。</div>
      </Panel>
      <Panel header="国产零零漆">
        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
      </Panel>
    </Collapse>
  </div>,
  _mount_
);
```

## 自定义面板

自定义各个面板的背景色、圆角、边距和图标。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse } from 'uiw';

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const Panel = Collapse.Panel;

ReactDOM.render(
  <div>
    <Collapse accordion bordered={true} activeKey={[]} onChange={key=>console.log('key::4:', key)}>
      <Panel header="大话西游" style={customPanelStyle}>
        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
        <div>一万年</div>
      </Panel>
      <Panel header="西游·降魔篇" style={customPanelStyle}>
        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
        <div>曾经牵挂，才能了无牵挂。</div>
      </Panel>
      <Panel header="国产零零漆" style={customPanelStyle}>
        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
      </Panel>
    </Collapse>
  </div>,
  _mount_
);
```

## 自定义面板标题

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse, Icon } from 'uiw';

const Panel = Collapse.Panel;

ReactDOM.render(
  <div>
    <Collapse showArrow={false} activeKey={['1']} onChange={key=>console.log('key::5:', key)}>
      <Panel header={<span>大话西游 <Icon type="smile-o"/></span>} key="1">
        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
        <div>一万年</div>
      </Panel>
      <Panel header={<span>西游·降魔篇 <Icon type="smile-o"/></span>} key="2">
        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
        <div>曾经牵挂，才能了无牵挂。</div>
      </Panel>
      <Panel header="国产零零漆" key="3">
        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
      </Panel>
    </Collapse>
  </div>,
  _mount_
);
```

## 指定折叠图标

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Collapse, Icon } from 'uiw';

const Panel = Collapse.Panel;

ReactDOM.render(
  <div>
    <Collapse activeKey={['1']} onChange={key=>console.log('key::6:', key)}>
      <Panel icon="caret-down" header={<span>大话西游 <Icon type="smile-o"/></span>} key="1">
        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>
        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>
        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>
        <div>一万年</div>
      </Panel>
      <Panel icon={<Icon type="down-circle" />} header={<span>西游·降魔篇 <Icon type="smile-o"/></span>} key="2">
        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>
        <div>曾经牵挂，才能了无牵挂。</div>
      </Panel>
      <Panel icon={<span>折叠-</span>} header="国产零零漆" key="3">
        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
      </Panel>
    </Collapse>
  </div>,
  _mount_
);
```

## Props

### Collapse

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| accordion | 手风琴效果 | Boolean | false |
| activeKey | 当前激活 tab 面板的 key, accordion 模式下默认第一个元素 | String[]/String | false |
| showArrow | 在这里使用，表示控制所有的面板图标是否展示 | Boolean | true |
| bordered | 设置没有边框的简洁样式 | Boolean | false |
| onChange | 切换面板的回调 | (activeKey: string[]) => void | - |

### Collapse.Panel

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | Boolean | false |
| header | 面板头内容 | String/ReactNode | - |
| icon | 指定图标 | String/ReactNode | - |
| isActive | 是否展开 | Boolean | - |
| extra | 自定义渲染每个面板右上角的内容 | ReactNode | - |
| showArrow | 是否显示展开图标 | Boolean | true |
| key | 对应 `activeKey`，非必填 |  | - |
