Notify 消息通知
===

全局展示通知提醒信息。

```jsx
import { Notify } from 'uiw';
```

### 基本用法

<!--DemoStart,bgWhite-->
```js
const Demo = () => {
  return (
    <div>
      <Button
        onClick={() => {
          Notify.open({ title: '打开通知', description: '最简单的用法，4.5 秒后自动关闭，没有状态颜色图标。' });
        }}
      >
        打开通知
      </Button>
      <Button
        type="success"
        onClick={() => {
          Notify.success({ title: '成功通知', description: '最简单的用法，4.5 秒后自动关闭。' });
        }}
      >
        成功通知
      </Button>
      <Button
        type="warning"
        onClick={() => {
          Notify.warning({
            title: '警告通知',
            description: '这是一个警告通知，最简单的用法，4.5 秒后自动关闭。'
          });
        }}
      >
        警告通知
      </Button>
      <Button
        type="primary"
        onClick={() => {
          Notify.info({ title: '说明通知', description: '最简单的用法，4.5 秒后自动关闭。' });
        }}
      >
        说明通知
      </Button>
      <Button
        type="danger"
        onClick={() => {
          Notify.error({ title: '错误通知', description: '最简单的用法，4.5 秒后自动关闭。' });
        }}
      >
        错误通知
      </Button>
    </div>
  );
}
```
<!--End-->


### 弹出位置

<!--DemoStart,bgWhite-->
```js
const Demo = () => {
  return (
    <div>
      <Button
        onClick={() => {
          Notify.success({ placement: 'topLeft', title: '成功通知', description: '最简单的用法，4.5 秒后自动关闭。' });
        }}
      >
        ↖上左弹出通知
      </Button>
      <Button
        onClick={() => {
          Notify.warning({
            placement: 'topRight',
            title: '警告通知',
            description: '最简单的用法，4.5 秒后自动关闭。',
            onClose: () => {
              console.log('~~~~>')
            }
          });
        }}
      >
        ↗上右弹出通知
      </Button>
      <Button
        onClick={() => {
          Notify.info({ placement: 'bottomLeft', title: '说明通知', description: '最简单的用法，4.5 秒后自动关闭。' });
        }}
      >
        ↙下左弹出通知
      </Button>
      <Button
        onClick={() => {
          Notify.error({ placement: 'bottomRight', title: '错误通知', description: '最简单的用法，4.5 秒后自动关闭。' });
        }}
      >
        ↘下右通知
      </Button>
    </div>
  );
}
```
<!--End-->


### 弹出通知不消失

<!--DemoStart,bgWhite-->
```js
const Demo = () => {
  return (
    <div>
      <Button
        onClick={() => {
          Notify.warning({
            placement: 'topRight',
            title: '警告通知',
            duration: null,
            description: '最简单的用法，4.5 秒后自动关闭。'
          });
        }}
      >
        ↗上右弹出通知
      </Button>
    </div>
  );
}
```
<!--End-->

## Notify

```js
Notify.open(config);
Notify.success(config);
Notify.warning(config);
Notify.info(config);
Notify.error(config);
```

参数 `config` 如下：

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 通知提醒标题，必选 | String/ReactNode | ReactNode |
| description | 通知提醒内容，必选 | String/ReactNode | ReactNode |
| duration | 默认 `4.5` 秒后自动关闭，配置为 `null` 则不自动关闭 | Number | `4.5` |
| placement | 弹出位置，可选 | Enum{`topLeft`, `topRight`, `bottomLeft`, `bottomRight`} | `topRight` |

更多属性文档请参考 [`<Alert>`](#/components/alert)。
