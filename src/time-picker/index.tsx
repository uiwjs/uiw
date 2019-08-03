import React from 'react';
import classnames from 'classnames';
import Popover, { IPopoverProps } from '../popover';
import PickerTime, { ITimePickerPanelProps } from './PickerTime';
import Input, { IInputProps } from '../input';
import Icon from '../icon';
import { formatter } from '../';
import { IProps, HTMLInputProps } from '../utils/props';
import './style/index.less';

export interface ITimePickerProps extends IProps, Omit<ITimePickerPanelProps, 'onChange'> {
  value?: Date;
  format?: string;
  popoverProps?: IPopoverProps;
  inputProps?: IInputProps & HTMLInputProps;
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (dataStr?: string, date?: Date | '', type?: ITimePickerPanelProps['type'], num?: number, disableds?: number[]) => void;
}

export interface ITimePickerState {
  date: Date | '';
}

export default class TimePicker extends React.Component<ITimePickerProps, ITimePickerState> {
  public state: ITimePickerState;
  public static defaultProps: ITimePickerProps = {
    prefixCls: 'w-timepicker',
    format: 'HH:mm:ss',
    inputProps: {},
    allowClear: true,
  }
  constructor(props: ITimePickerProps) {
    super(props);
    this.state = {
      date: (props.value || '') as Date,
    };
  }
  componentWillReceiveProps(nextProps: ITimePickerProps) {
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
    const { prefixCls, className, disabled, value, format, popoverProps, inputProps, allowClear, onChange, ...timeProps } = this.props;
    const { date } = this.state;
    const inputValue = date ? formatter(format as string, date) : '';
    const props: IInputProps & HTMLInputProps = { ...inputProps, value: inputValue };
    const datePickerTime = date || new Date();
    if (allowClear && inputValue !== '' && !!inputValue) {
      props.addonAfter = <Icon className={`${prefixCls}-close-btn`} onClick={this.onClear} type="close" />;
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
