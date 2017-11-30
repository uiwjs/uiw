import React from 'react';
import { Component } from '../utils/';
import { solarMonthDays } from './utils';

export default class DatePanelMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onClickMonth(month) {
    const { value, onClicPanelkMode } = this.props;
    const time = value.setMonth(month);
    // console.log('item::', value.setMonth(month), month, onPicked);
    // onPicked(value.setMonth(month).getTime());
    // console.log('time', time);
    // onPicked(new Date(time));
    if (onClicPanelkMode) onClicPanelkMode(new Date(time));
  }
  render() {
    const { prefixCls, selectMonth, defaultValue, value } = this.props;
    console.log('value', value, '==>', defaultValue);
    return (
      <div className={`${prefixCls}-mode-select-year`}>
        {selectMonth && solarMonthDays().map((item, idx) => {
          return (
            <div key={idx}
              className={this.classNames({
                select: idx === value.getMonth(),
              })}
              onClick={this.onClickMonth.bind(this, idx, item)}
            >
              <span>{idx + 1}月</span>
            </div>
          );
        })}
      </div>
    );
  }
}
