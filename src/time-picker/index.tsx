import React from 'react';
import classnames from 'classnames';
import Popover, { IPopoverProps } from '../popover';
import PickerTime, { ITimePickerPanelProps } from './PickerTime';
import Input, { IInputProps } from '../input';
import Button from '../button';
import { formatter } from '../';
import { IProps } from '../utils/props';
import './style/index.less';

export interface ITimePickerProps<T> extends IProps, Omit<IInputProps<T>, 'onChange' | 'value'> {
  value?: Date;
  format?: string;
  popoverProps?: IPopoverProps;
  disabledHours?: ITimePickerPanelProps['disabledHours'];
  precision?: ITimePickerPanelProps['precision'];
  disabledMinutes?: ITimePickerPanelProps['disabledMinutes'];
  disabledSeconds?: ITimePickerPanelProps['disabledSeconds'];
  hideDisabled?: ITimePickerPanelProps['hideDisabled'];
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (dataStr?: string, date?: Date | '', type?: ITimePickerPanelProps['type'], num?: number, disableds?: number[]) => void;
}

export interface ITimePickerState {
  date: Date | '';
}

export default class TimePicker<T> extends React.Component<ITimePickerProps<T>, ITimePickerState> {
  public state: ITimePickerState;
  public static defaultProps: ITimePickerProps<{}> = {
    prefixCls: 'w-timepicker',
    format: 'HH:mm:ss',
    allowClear: true,
  }
  constructor(props: ITimePickerProps<T>) {
    super(props);
    this.state = {
      date: (props.value || '') as Date,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: ITimePickerProps<T>) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: (nextProps.value) as Date });
    }
  }
  onClear = () => {
    const { onChange } = this.props;
    this.setState({ date: '' }, () => onChange && onChange());
  }
  onSelected(type: ITimePickerPanelProps['type'], num?: number, disableds?: number[], date?: ITimePickerState['date']) {
    const { onChange, format } = this.props;
    this.setState({ date: date || '' });
    const dataStr = date ? formatter(format!, date) : '';
    onChange && onChange(dataStr, date, type, num, disableds);
  }
  render() {
    const {
      prefixCls, className, disabled, value, format, popoverProps, allowClear, onChange,
      disabledHours, disabledMinutes, disabledSeconds, hideDisabled, precision,
      ...inputProps
    } = this.props;
    const { date } = this.state;
    const timeProps = { disabledHours, disabledMinutes, disabledSeconds, hideDisabled, precision };
    const inputValue = date ? formatter(format as string, date) : '';
    const props: IInputProps<T> = { ...inputProps, value: inputValue };
    const datePickerTime = date || new Date();
    if (allowClear && inputValue !== '' && !!inputValue) {
      props.addonAfter = <Button className={`${prefixCls}-close-btn`} icon="close" disabled={props.disabled} onClick={this.onClear} size={props.size} basic type="light" />;
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
          className={classnames(`${prefixCls}-input`, className)}
        />
      </Popover>
    );
  }
}
