import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from '../input';
import Popover from '../popover';
import DatePicker from '../date-picker';
import Timestamp from '../timestamp';
import './style/index.less';

export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: nextProps.value });
    }
  }
  onChange(date) {
    const { format } = this.props;
    this.setState({ date });
    this.props.onChange(Timestamp(format, new Date(date)));
  }
  render() {
    const { prefixCls, className, popoverProps, datePickerProps, format, ...inputProps } = this.props;
    const { date } = this.state;
    const value = date || '';
    inputProps.value = typeof value === 'string' ? value : Timestamp(format, value);
    return (
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        {...popoverProps}
        content={
          <DatePicker
            date={value && new Date(value)}
            className={`${prefixCls}-popover`}
            {...datePickerProps}
            onChange={this.onChange.bind(this)}
          />
        }
      >
        <Input
          placeholder="请输入日期"
          readOnly
          {...inputProps}
          className={classnames(`${prefixCls}`, className)}
        />
      </Popover>
    );
  }
}

DateInput.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  format: PropTypes.string,
  onChange: PropTypes.func,
};

DateInput.defaultProps = {
  prefixCls: 'w-dateinput',
  format: 'YYYY/MM/DD',
  onChange() { },
};
