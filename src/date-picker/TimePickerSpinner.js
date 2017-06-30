import React from 'react';
import { Component, PropTypes } from '../utils/';
import { parseTime, parseTimeStr } from './utils';

// 时间滚动内容调整时间
export default class TimeSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 显示几组数据
      several: (props.format || '').split(":"),
      hours: 0,
      minutes: 0,
      seconds: 0,
      // hoursList: this.rangeTime(24, 'hours'),
      // minutesLisit: this.rangeTime(60, 'minutes'),
      // secondsList: this.rangeTime(60, 'seconds'),
    }
    this.renderItem = this.renderItem.bind(this)
  }
  componentDidMount() {
    const { several } = this.state;
    let { spinner } = this.refs;
    if (spinner.children && spinner.children[0]) {
      spinner.style.width = spinner.children[0].offsetWidth * several.length + 'px'
    }
  }
  // 生成时间
  rangeTime(end, ty) {
    return TimeSpinner.items(end, ty, this.props);
  }
  handleClick(item) {
    const { onPicked, value } = this.props
    if (!item.disabled) {
      let time = parseTime(value);
      time[`${item.ty}`] = Number(item.value);
      onPicked(parseTimeStr(time), true);
    }
  }
  renderItem(arr) {
    const { prefixCls, hideDisabled } = this.props;
    return (
      <div className={this.classNames(`${prefixCls}-select`)}>
        <ul>
          {
            arr.map((item, idx) => {
              if (hideDisabled && item.disabled) return null;
              return (
                <li
                  key={`${idx}`}
                  className={this.classNames({
                    'w-disabled': item.disabled,
                    'w-checked': item.checked
                  })}
                  onClick={() => this.handleClick(item)}
                >
                  {item.value}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  render() {
    const { prefixCls } = this.props;
    const { several } = this.state;

    return (
      <div ref="spinner" className={this.classNames(`${prefixCls}`)}>
        {several.indexOf('HH') > -1 && this.renderItem(this.rangeTime(24, 'hours'))}
        {several.indexOf('mm') > -1 && this.renderItem(this.rangeTime(60, 'minutes'))}
        {several.indexOf('ss') > -1 && this.renderItem(this.rangeTime(66, 'seconds'))}
      </div>
    );
  }
}
TimeSpinner.formatToJSON = (time) => {
  return parseTime(time)
}

TimeSpinner.items = (end, ty, { disabledHours, disabledMinutes, disabledSeconds, value }) => {
  let currentTime = parseTime(value);
  let r = [];
  for (let i = 0; i < end; i++) {
    let time = i < 10 ? `0${i}` : i + '';
    let disabledArr = [];
    let checked = false;
    switch (ty) {
      case 'hours': disabledArr = disabledHours; if (value && i === currentTime.hours) checked = true; break;
      case 'minutes': disabledArr = disabledMinutes; if (value && i === currentTime.minutes) checked = true; break;
      case 'seconds': disabledArr = disabledSeconds; if (value && i === currentTime.seconds) checked = true; break;
      default: break;
    }
    r.push({
      value: time,
      ty,
      disabled: disabledArr.indexOf(time) > -1 ? true : false,
      checked
    });
  }
  return r;
}
TimeSpinner.propTypes = {
  hours: PropTypes.number,   // 时
  minutes: PropTypes.number, // 分
  seconds: PropTypes.number, // 秒
  isShowSeconds: PropTypes.bool, // 是否显示秒
}

TimeSpinner.defaultProps = {
  prefixCls: 'w-time-spinner',
  hours: 0,   // 时
  minutes: 0, // 分
  seconds: 0, // 秒
}
