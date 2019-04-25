import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PropTypesDate } from '../utils';
import './style/time-picker.less';

// http://easings.net/zh-cn
// https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L451
// 缓动函数
// 比方说我们要从位置0的地方运动到100，时间是10秒钟，此时，b, c, d三个参数就已经确认了
// b=0
// c=100 变化值c就是100-0就是100
// d=10 只要给一个小于最终时间10的值
// 假设 当前进入到第五秒 easeInQuad(5,0,100,10)
const easeInQuad = (t, b, c, d) => {
  return (c * (t /= d) * t) + b;
};
export default class TimePanel extends React.Component {
  scrollTopNow(elm, idx) {
    const currentDom = ReactDOM.findDOMNode(elm);
    const rootTop = currentDom.parentNode.parentNode.scrollTop;
    const offsetTop = idx === 0 ? currentDom.clientHeight : idx * currentDom.clientHeight;
    const startTime = Date.now();
    const frameFunc = () => {
      const scrollDom = currentDom.parentNode.parentNode;
      const timestamp = Date.now();
      const time = timestamp - startTime;
      const offsetTopMove = parseInt(easeInQuad(time, rootTop, offsetTop, offsetTop), 10);
      if (scrollDom) {
        scrollDom.scrollTop = offsetTopMove > offsetTop ? offsetTop : offsetTopMove;
      }
      if (scrollDom && scrollDom.scrollTop < offsetTop) {
        window.requestAnimationFrame(frameFunc);
      }
    };
    window.requestAnimationFrame(frameFunc);
  }
  onClick(num, e) {
    const { onSelected, type, date } = this.props;
    date[`set${type}`](num);
    onSelected && onSelected(type, num, this.disableds, date);
    this.scrollTopNow(e.target, num);
  }
  getMaybeNumber() {
    const { date, type } = this.props;
    if (date && type) {
      return date[`get${type}`]();
    }
    return 0;
  }
  getItemInstance = (idx, tag) => {
    if (tag && this.getMaybeNumber() === idx) {
      const currentDom = ReactDOM.findDOMNode(tag);
      if (currentDom.parentNode) {
        const offsetTop = idx * currentDom.clientHeight;
        currentDom.parentNode.parentNode.scrollTop = offsetTop;
      }
    }
  }
  getDisabledItem(num) {
    const { type, date } = this.props;
    if (this.props[`disabled${type}`]) {
      return this.props[`disabled${type}`](num, type, date);
    }
    return false;
  }
  render() {
    const { prefixCls, className, count, date, disabledHours, disabledMinutes, disabledSeconds, hideDisabled, onSelected, ...other } = this.props;
    this.disableds = [];
    return (
      <div className={classnames(`${prefixCls}-spinner`)} {...other}>
        <ul>
          {[...Array(count)].map((_, idx) => {
            const disabled = this.getDisabledItem(idx);
            const props = {};
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

TimePanel.propTypes = {
  prefixCls: PropTypes.string,
  onSelected: PropTypes.func,
  count: PropTypes.number,
  hideDisabled: PropTypes.bool,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  type: PropTypes.oneOf(['Hours', 'Minutes', 'Seconds']),
  date: PropTypesDate,
};

TimePanel.defaultProps = {
  prefixCls: 'w-timepicker',
  count: 24,
  type: 'Hours',
};
