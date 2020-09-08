import React from 'react';
import Input, { InputProps } from '@uiw/react-input';
import Popover, { PopoverProps } from '@uiw/react-popover';
import DatePicker, { DatePickerProps } from '@uiw/react-date-picker';
import Icon from '@uiw/react-icon';
import { IProps } from '@uiw/utils';
import formatter from '@uiw/formatter';
import './style/index.less';

export interface IDateInputProps<T>
  extends IProps,
    Omit<InputProps<T>, 'onChange' | 'value'> {
  popoverProps?: PopoverProps;
  datePickerProps?: DatePickerProps;
  value?: Date | string;
  format?: string;
  allowClear?: boolean;
  onChange?: (selectedDate?: Date) => void;
}

export interface IDateInputState {
  date?: Date | string;
}

export default class DateInput<T> extends React.Component<
  IDateInputProps<T>,
  IDateInputState
> {
  public static defaultProps: IDateInputProps<{}> = {
    prefixCls: 'w-dateinput',
    format: 'YYYY/MM/DD',
    allowClear: true,
  };
  constructor(props: IDateInputProps<T>) {
    super(props);
    this.state = {
      date: props.value,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: IDateInputProps<T>) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: nextProps.value });
    }
  }
  onChange(date?: Date) {
    const { format, onChange } = this.props;
    this.setState({ date });
    if (date) {
      (date as any) = formatter(format as string, new Date(date));
    }
    onChange && onChange(date);
  }
  render() {
    const {
      prefixCls,
      className,
      popoverProps,
      datePickerProps,
      allowClear,
      format,
      onChange,
      ...inputProps
    } = this.props;
    const { date } = this.state;
    const value = date || '';
    inputProps.value =
      typeof value === 'string' ? value : formatter(format as string, value);
    if (allowClear && inputProps.value) {
      inputProps.addonAfter = (
        <Icon
          className={`${prefixCls}-close-btn`}
          onClick={this.onChange.bind(this, undefined)}
          type="close"
        />
      );
    }
    return (
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        {...popoverProps}
        content={
          <DatePicker
            date={(value && new Date(value)) || undefined}
            className={`${prefixCls}-popover`}
            {...datePickerProps}
            onChange={this.onChange.bind(this) as any}
          />
        }
      >
        <Input
          placeholder="请选择日期"
          readOnly
          {...(inputProps as any)}
          className={[prefixCls, className].filter(Boolean).join(' ').trim()}
        />
      </Popover>
    );
  }
}
