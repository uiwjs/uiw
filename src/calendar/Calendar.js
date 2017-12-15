import React from 'react';
import { Component, PropTypes } from '../utils/';
import DatePanelBodyDay from '../date-picker/DatePanelBodyDay';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
    };
  }
  render() {
    const { prefixCls, className, style, ...resetProps } = this.props;
    const { date } = this.state;
    const warpperProps = {
      className: this.classNames(`${prefixCls}`, className),
      style,
    };
    return (
      <div {...warpperProps}>
        <div className={`${prefixCls}-caption`}>
          <div className={`${prefixCls}-caption-year`}>{date.getFullYear()}年</div>
          <div className={`${prefixCls}-caption-month`}>{date.getMonth() + 1}月</div>
        </div>
        <DatePanelBodyDay {...resetProps} />
      </div>
    );
  }
}


Calendar.propTypes = {
  prefixCls: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  dateCellRender: PropTypes.func,
};

Calendar.defaultProps = {
  prefixCls: 'w-calendar',
  date: new Date(),
  dateCellRender: () => { },
};
