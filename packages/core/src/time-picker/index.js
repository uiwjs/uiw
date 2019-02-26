import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popover from '../popover';
import PickerTime from './PickerTime';
import Input from '../input';
import Icon from '../icon';
import timestamp from '../timestamp';
import './style/index.less';

export default class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.value || '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: nextProps.value });
    }
  }
  onSelected(type, num, disableds, date) {
    const { onChange, format } = this.props;
    this.setState({ date });
    onChange && onChange(date && timestamp(format, date), date, type, num, disableds);
  }
  render() {
    const { prefixCls, className, disabled, value, format, popoverProps, inputProps, allowClear, ...timeProps } = this.props;
    const { date } = this.state;
    const inputValue = date && timestamp(format, date);
    const props = { ...inputProps, value: inputValue };
    const datePickerTime = date || new Date();
    if (allowClear && inputValue !== '' && !!inputValue) {
      props.addonAfter = <Icon className={`${prefixCls}-close-btn`} onClick={this.onSelected.bind(this, null, null, null, '')} type="close" />;
    }
    return (
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        visibleArrow={false}
        {...popoverProps}
        content={
          <PickerTime
            className={`${prefixCls}-popover`}
            {...timeProps}
            date={datePickerTime}
            onSelected={this.onSelected.bind(this)}
          />
        }
      >
        <Input
          placeholder="请选择时间"
          readOnly
          disabled={disabled}
          {...props}
          className={classnames(`${prefixCls}`, className)}
        />
      </Popover>
    );
  }
}

TimePicker.propTypes = {
  prefixCls: PropTypes.string,
  format: PropTypes.string,
  inputProps: PropTypes.object,
  allowClear: PropTypes.bool,
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  prefixCls: 'w-timepicker',
  format: 'HH:mm:ss',
  inputProps: {},
  allowClear: true,
};
