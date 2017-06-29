import React from 'react';
import { Component, PropTypes } from '../utils/';

// 时间滚动内容调整时间
export default class TimeSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hoursList: this.rangeTime(24, 'minutes'),
      minutesLisit: this.rangeTime(60, 'minutes'),
      secondsList: this.rangeTime(60, 'seconds'),
    }
    this.renderItem = this.renderItem.bind(this)
  }
  // 生成时间
  rangeTime(end, ty) {
    const { disabledMinutes, disabledSeconds } = this.props;
    let r = [];
    for (let i = 0; i < end; i++) {
      let time = i < 10 ? `0${i}` : i + '';
      let disabled = false;
      if (ty === 'minutes') {
        disabled = disabledMinutes.indexOf(time) > -1 ? true : false
      }
      if (ty === 'seconds') {
        disabled = disabledSeconds.indexOf(time) > -1 ? true : false
      }
      r.push({
        value: time,
        disabled: disabled
      });
    }
    return r;
  }
  renderItem(arr) {
    const { prefixCls } = this.props;
    return (
      <div className={this.classNames(`${prefixCls}-select`)}>
        <ul>
          {
            arr.map((item, idx) => {
              return (
                <li className={this.classNames({
                  disabled: item.disabled
                })} key={`${idx}`}>{item.value}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  render() {
    const { prefixCls } = this.props;
    const { secondsList, minutesLisit, hoursList } = this.state;

    return (
      <div className={this.classNames(`${prefixCls}`)}>
        {this.renderItem(hoursList)}
        {this.renderItem(secondsList)}
        {this.renderItem(minutesLisit)}
      </div>
    );
  }
}

TimeSpinner.propTypes = {
  // start: PropTypes.string,
  // end: PropTypes.string,
  // step: PropTypes.string,
  // minTime: PropTypes.string,
  // maxTime: PropTypes.string,
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
