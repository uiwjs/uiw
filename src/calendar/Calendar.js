import React from 'react';
import { Component, PropTypes } from '../utils/';
import DatePanelBodyDay from '../date-picker/DatePanelBodyDay';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { prefixCls, className, style, ...resetProps } = this.props;
    const warpperProps = {
      className: this.classNames(`${prefixCls}`, className),
      style,
    };
    return (
      <div {...warpperProps}>
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
