import React, { useEffect, useState } from 'react';
import Popover, { PopoverProps } from '@uiw/react-popover';
import Input, { InputProps } from '@uiw/react-input';
import Button from '@uiw/react-button';
import { IProps } from '@uiw/utils';
import formatter from '@uiw/formatter';
import { TimePickerTime, TimePickerTimeProps } from './Time';
import './style/index.less';

export * from './Panel';
export * from './Time';

export interface TimePickerProps extends IProps, Omit<InputProps, 'onChange' | 'value'> {
  value?: Date;
  format?: string;
  popoverProps?: PopoverProps;
  disabledHours?: TimePickerTimeProps['disabledHours'];
  precision?: TimePickerTimeProps['precision'];
  disabledMinutes?: TimePickerTimeProps['disabledMinutes'];
  disabledSeconds?: TimePickerTimeProps['disabledSeconds'];
  hideDisabled?: TimePickerTimeProps['hideDisabled'];
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (
    dataStr?: string,
    date?: Date | '',
    type?: TimePickerTimeProps['type'],
    num?: number,
    disableds?: number[],
  ) => void;
}

export default function TimePicker(props: TimePickerProps) {
  const {
    prefixCls = 'w-timepicker',
    className,
    disabled,
    value,
    format = 'HH:mm:ss',
    popoverProps,
    allowClear = true,
    onChange,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabled,
    precision,
    ...inputProps
  } = props;
  const [date, setDate] = useState(props.value);
  useEffect(() => setDate(props.value), [props.value]);
  const timeProps = {
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabled,
    precision,
  };
  const inputValue = date ? formatter(format, date) : '';
  const datePickerTime = date || new Date();
  const _props: InputProps = { ...inputProps, value: inputValue };
  if (allowClear && inputValue !== '' && !!inputValue) {
    _props.addonAfter = (
      <Button
        className={`${prefixCls}-close-btn`}
        icon="close"
        disabled={props.disabled}
        onClick={() => {
          setDate(undefined);
          onChange && onChange();
        }}
        size={props.size}
        basic
        type="light"
      />
    );
  }
  return (
    <Popover
      trigger="focus"
      placement="bottomLeft"
      autoAdjustOverflow
      visibleArrow={false}
      {...popoverProps}
      content={
        <TimePickerTime
          className={`${prefixCls}-popover`}
          {...timeProps}
          date={datePickerTime}
          onSelected={(type, num, disableds, currentDate) => {
            setDate(new Date(currentDate!));
            const dataStr = currentDate ? formatter(format, currentDate) : '';
            onChange && onChange(dataStr, currentDate, type, num, disableds);
          }}
        />
      }
    >
      <Input
        placeholder="请选择时间"
        readOnly
        disabled={disabled}
        {..._props}
        className={[`${prefixCls}-input`, className].filter(Boolean).join(' ').trim()}
      />
    </Popover>
  );
}
