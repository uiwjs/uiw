import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from '../input';
import Popover from '../popover';
import DatePicker from '../date-picker';
import './style/index.less';

export default class DatePickerInput extends React.Component {
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
    this.setState({ date });
    this.props.onChange(date);
  }
  render() {
    const { prefixCls, className, popoverProps, datePickerProps, ...inputProps } = this.props;
    return (
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        {...popoverProps}
        content={
          <DatePicker
            date={this.state.date}
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
          value={this.state.date || ''}
          className={classnames(`${prefixCls}`, className)}
        />
      </Popover>
    );
  }
}

const PropTypesDate = (props, propName, componentName) => {
  if (props[propName] && !(props[propName] instanceof Date)) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`);
  }
};

DatePickerInput.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypesDate,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  prefixCls: 'w-datepickerinput',
  onChange() { },
};
