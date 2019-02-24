import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TimePanel from './TimePanel';
import { PropTypesDate } from '../utils';
import './style/time-picker.less';

export default class TimePicker extends React.Component {
  onChange(type, num) {
    const { date, onChange } = this.props;
    let dt = date || new Date();
    dt = dt[`set${type}`](num);
    dt = new Date(dt);
    onChange && onChange(dt);
  }
  render() {
    const { prefixCls, className, precision, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}`, className)}>
        {/^(second|minute|hour)$/.test(precision) && <TimePanel type="Hours" count={24} {...other} onChange={this.onChange.bind(this)} />}
        {/^(second|minute)$/.test(precision) && <TimePanel type="Minutes" count={60} {...other} onChange={this.onChange.bind(this)} />}
        {/^(second)$/.test(precision) && <TimePanel type="Seconds" count={60} {...other} onChange={this.onChange.bind(this)} />}
      </div>
    );
  }
}

TimePicker.propTypes = {
  prefixCls: PropTypes.string,
  onChange: PropTypes.func,
  hideDisabled: PropTypes.bool,
  precision: PropTypes.oneOf(['hour', 'minute', 'second']),
  date: PropTypesDate,
};

TimePicker.defaultProps = {
  prefixCls: 'w-timepicker',
  hideDisabled: false,
  precision: 'second',
};
