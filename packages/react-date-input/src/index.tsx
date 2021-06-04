import React, { useEffect, useState } from 'react';
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

export default function DateInput<T>(props: IDateInputProps<T>) {
  const {
    prefixCls = 'w-dateinput',
    className,
    popoverProps,
    datePickerProps,
    allowClear = true,
    format = 'YYYY/MM/DD',
    onChange,
    ...inputProps
  } = props;
  const [date, setDate] = useState(props.value);

  const value = date || '';
  inputProps.value =
    typeof value === 'string' ? value : formatter(format, value);

  useEffect(() => {
    if (props.value !== date) {
      setDate(props.value);
    }
  }, [props.value]);

  function handleChange(cdate?: Date) {
    setDate(cdate);
    onChange && onChange(cdate);
  }
  if (allowClear && inputProps.value) {
    inputProps.addonAfter = (
      <Icon
        className={`${prefixCls}-close-btn`}
        onClick={() => handleChange(undefined)}
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
          onChange={(selectedDate) => handleChange(selectedDate!)}
        />
      }
    >
      <Input
        placeholder="请选择日期"
        readOnly
        {...(inputProps as InputProps<string>)}
        className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      />
    </Popover>
  );
}
