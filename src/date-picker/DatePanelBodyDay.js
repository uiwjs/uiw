import React from 'react';
import { Component, PropTypes } from '../utils/';
import { fillUpDays } from './utils';

export default class DatePanelBodyDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { prefixCls, format, selectDate, disabledDate, date, renderDate, labelToday, onClick } = this.props;
    return (
      <div className={`${prefixCls}-days`}>
        {fillUpDays(date, format, selectDate).map((item, idx) => {
          const dayProps = { key: idx };
          if (!disabledDate || (disabledDate && !disabledDate(item))) {
            dayProps.onClick = () => onClick(item);
          }
          if (renderDate) {
            const child = renderDate(item, item.selectDay && selectDate);
            return React.cloneElement(child, { ...dayProps });
          }
          return (
            <span
              title={item.today ? labelToday : item.format}
              className={this.classNames(item.className, {
                [`${prefixCls}-today`]: item.today,
                [`${prefixCls}-disable`]: disabledDate && disabledDate(item),
                [`${prefixCls}-select-day`]: item.selectDay && selectDate,
                [`${prefixCls}-sun`]: item.week === 0,
                [`${prefixCls}-sat`]: item.week === 6,
              })}
              { ...dayProps }
            >
              {item.day}
            </span>
          );
        })}
      </div>
    );
  }
}

DatePanelBodyDay.propTypes = {
  prefixCls: PropTypes.string,
  disabledDate: PropTypes.func,
  format: PropTypes.string,
  selectDate: PropTypes.instanceOf(Date),
  date: PropTypes.instanceOf(Date),
};

DatePanelBodyDay.defaultProps = {
  prefixCls: 'w-datepicker',
  format: 'Y/m/d',
  date: new Date(),
  selectDate: null,
  onClick() { },
};
