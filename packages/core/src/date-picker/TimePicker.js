import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/year-month.less';

export default class TimePicker extends React.Component {
  render() {
    const { prefixCls, className, date, panelDate, monthLabel, onSelected, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-timer`, className)} {...other}>
        test
      </div>
    );
  }
}

TimePicker.propTypes = {
  prefixCls: PropTypes.string,
  onSelected: PropTypes.func,
};

TimePicker.defaultProps = {
  prefixCls: 'w-datepicker',
  onSelected() { },
};
