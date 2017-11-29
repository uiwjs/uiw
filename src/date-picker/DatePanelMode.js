import React from 'react';
import { Component } from '../utils/';
import { solarMonthDays } from './utils';

export default class DatePanelMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onClickMonth(item) {
    console.log('item::', item);
  }
  render() {
    const { prefixCls, selectYear, selectMonth } = this.props;
    // if (selectYear) {
    //   return (
    //     <div className={`${prefixCls}-select-month`}>
    //       test year
    //     </div>
    //   );
    // }
    // console.log('solarMonthDays:', solarMonthDays);
    // value, selectYear, selectMonth
    console.log('selectYear,::', selectYear, selectMonth);
    return (
      <div className={`${prefixCls}-mode-select-year`}>
        {selectMonth && solarMonthDays().map((item, idx) => {
          return (<div key={idx} onClick={this.onClickMonth.bind(this, item)}>{idx + 1}月</div>);
        })}
      </div>
    );
  }
}
