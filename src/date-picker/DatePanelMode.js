import React from 'react';
import { Component } from '../utils/';
import { solarMonthDays } from './utils';

const rangesYear = (year) => {
  year = parseInt(year, 10) || 0;
  const arr = [];
  const panelNum = 12;
  for (let i = 0; i < panelNum; i += 1) {
    arr.push(year - ((panelNum / 2) - i));
  }
  return arr;
};

export default class DatePanelMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onClickMonth(num) {
    const { value, selectYear, selectMonth, onClicPanelkMode } = this.props;
    const time = value;
    if (selectMonth) {
      time.setMonth(num);
    }
    if (selectYear) {
      time.setFullYear(num);
    }
    if (onClicPanelkMode) onClicPanelkMode(new Date(time));
  }
  render() {
    const { prefixCls, selectMonth, selectYear, value } = this.props;
    const rangesYearArr = rangesYear(value.getFullYear());
    return (
      <div className={this.classNames(`${prefixCls}-mode-select`, {
        [`${prefixCls}-mode-select-year`]: selectYear,
      })}
      >
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
        {selectYear && <div className={`${prefixCls}-panel-range`}>{rangesYearArr[0]} ~ {rangesYearArr[rangesYearArr.length - 1]}</div>}
        {selectYear && rangesYearArr.map((item, idx) => {
          return (
            <div key={idx}
              className={this.classNames({
                select: item === value.getFullYear(),
              })}
              onClick={this.onClickMonth.bind(this, item, idx)}
            >
              <span>{item}年</span>
            </div>
          );
        })}
      </div>
    );
  }
}
