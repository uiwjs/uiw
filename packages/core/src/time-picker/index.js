import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../popover';
import PickerTime from './PickerTime';
import Input from '../input';
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
  onSelected(type, num, date) {
    const { onSelected, format } = this.props;
    this.setState({ date });
    onSelected && onSelected(timestamp(format, date), date, type, num);
  }
  render() {
    const { prefixCls, disabled, value, format, popoverProps, inputProps, ...timeProps } = this.props;
    const { date } = this.state;
    const inputValue = date && timestamp(format, date);
    const datePickerTime = date || new Date();
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
          {...inputProps}
          value={inputValue}
        />
      </Popover>
    );
  }
}

TimePicker.propTypes = {
  prefixCls: PropTypes.string,
  format: PropTypes.string,
  onSelected: PropTypes.func,
};

TimePicker.defaultProps = {
  prefixCls: 'w-timepicker',
  format: 'HH:mm:ss',
};
