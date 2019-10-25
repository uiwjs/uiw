import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { IProps, HTMLDivProps, HTMLLiProps } from '../utils/props';
import './style/time-picker.less';

export interface TimePanelProps extends IProps, HTMLDivProps {
  onSelected?: (type: TimePanelProps['type'], num: number, disableds: number[], date: TimePanelProps['date']) => void;
  count?: number;
  hideDisabled?: boolean;
  disabledHours?: (num: number, type: TimePanelProps['type'], date: TimePanelProps['date']) => void;
  disabledMinutes?: (num: number, type: TimePanelProps['type'], date: TimePanelProps['date']) => void;
  disabledSeconds?: (num: number, type: TimePanelProps['type'], date: TimePanelProps['date']) => void;
  type?: 'Hours' | 'Minutes' | 'Seconds';
  date?: Date;
}

// http://easings.net/zh-cn
// https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L451
// 缓动函数
// 比方说我们要从位置0的地方运动到100，时间是10秒钟，此时，b, c, d三个参数就已经确认了
// b=0
// c=100 变化值c就是100-0就是100
// d=10 只要给一个小于最终时间10的值
// 假设 当前进入到第五秒 easeInQuad(5,0,100,10)
const easeInQuad = (t: number, b: number, c: number, d: number): number => {
  // parseInt()
  return (c * (t /= d) * t) + b;
};
export default class TimePanel extends React.Component<TimePanelProps> {
  private disableds: number[] = [];
  public static defaultProps: TimePanelProps = {
    prefixCls: 'w-timepicker',
    count: 24,
    type: 'Hours',
  }
  scrollTopNow(elm: HTMLLIElement, idx: number) {
    const currentDom = ReactDOM.findDOMNode(elm) as HTMLLIElement;
    if (currentDom && currentDom.parentNode && currentDom.parentNode.parentNode) {
      const rootTop = (currentDom.parentNode.parentNode as HTMLDivElement).scrollTop;
      const offsetTop = idx === 0 ? currentDom.clientHeight : idx * currentDom.clientHeight;
      const startTime = Date.now();
      const frameFunc = () => {
        const scrollDom = (currentDom!.parentNode!.parentNode) as HTMLDivElement;
        const timestamp = Date.now();
        const time = timestamp - startTime;
        const offsetTopMove = easeInQuad(time, rootTop, offsetTop, offsetTop);
        if (scrollDom) {
          scrollDom.scrollTop = offsetTopMove > offsetTop ? offsetTop : offsetTopMove;
        }
        if (scrollDom && scrollDom.scrollTop < offsetTop) {
          window.requestAnimationFrame(frameFunc);
        }
      };
      window.requestAnimationFrame(frameFunc);
    }
  }
  onClick(num: number, e: React.MouseEvent<HTMLLIElement>) {
    const { onSelected, type, date } = this.props;
    (date as Date)[(`set${type}`) as 'setHours' | 'setMinutes' | 'setSeconds'](num);
    onSelected && onSelected(type, num, this.disableds, date);
    this.scrollTopNow(e.target as HTMLLIElement, num);
  }
  getMaybeNumber() {
    const { date, type } = this.props;
    if (date && type) {
      return date[(`get${type}`) as 'getHours' | 'getMinutes' | 'getSeconds']();
    }
    return 0;
  }
  getItemInstance = (idx: number, tag: HTMLLIElement) => {
    if (tag && this.getMaybeNumber() === idx) {
      const currentDom = ReactDOM.findDOMNode(tag);
      if (currentDom && currentDom.parentNode) {
        const offsetTop = idx * (currentDom as HTMLLIElement).clientHeight;
        if (currentDom.parentNode.parentNode) {
          (currentDom.parentNode.parentNode as HTMLDivElement).scrollTop = offsetTop;
        }
      }
    }
  }
  getDisabledItem(num: number) {
    const { type, date } = this.props;
    const disabled = this.props[(`disabled${type}`) as 'disabledHours' | 'disabledMinutes' | 'disabledSeconds'];
    if (disabled) {
      return disabled(num, type, date);
    }
    return false;
  }
  render() {
    const { prefixCls, className, count, date, disabledHours, disabledMinutes, disabledSeconds, hideDisabled, onSelected, ...other } = this.props;
    this.disableds = [];
    return (
      <div className={classnames(`${prefixCls}-spinner`)} {...other}>
        <ul>
          {[...Array(count)].map((_, idx: number) => {
            const disabled = this.getDisabledItem(idx);
            const props = {} as HTMLLiProps;
            if (!disabled) {
              props.onClick = this.onClick.bind(this, idx);
            } else {
              this.disableds.push(idx);
            }
            return (
              <li
                key={idx}
                ref={this.getItemInstance.bind(this, idx)}
                {...props}
                className={classnames({
                  disabled,
                  selected: this.getMaybeNumber() === idx,
                  hide: hideDisabled && disabled,
                })}
              >
                {idx < 10 ? `0${idx}` : idx}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
