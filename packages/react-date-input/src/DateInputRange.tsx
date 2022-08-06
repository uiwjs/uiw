import React, { useEffect, useState } from 'react';
import Input, { InputProps } from '@uiw/react-input';
import Popover, { PopoverProps } from '@uiw/react-popover';
import DatePicker, { DatePickerProps } from '@uiw/react-date-picker';
import { IProps } from '@uiw/utils';
import formatter from '@uiw/formatter';
import {
  DateInputIcon,
  DateInputIconStyleWarp,
  DateInputRangeStyleWarp,
  DateInputDatePickerPopover,
} from './style/index';
import { SwapRight } from '@uiw/icons/lib/SwapRight';
import { Close } from '@uiw/icons/lib/Close';

export interface DateInputRangeProps<V> extends IProps, Omit<InputProps, 'onChange' | 'value'> {
  popoverProps?: PopoverProps;
  datePickerProps?: DatePickerProps;
  value?: Array<V>;
  format?: string;
  allowClear?: boolean;
  bodyStyle?: object;
  onChange?: (selectedDate?: Date, dateRange?: Array<Date | undefined>) => void;
}

export function DateInputRange<V extends string | Date>(props: DateInputRangeProps<V>) {
  const {
    prefixCls = 'w-dateinputrange',
    bodyStyle = undefined,
    className,
    popoverProps,
    datePickerProps,
    allowClear = true,
    format = 'YYYY/MM/DD',
    onChange,
    value,
    ...inputProps
  } = props;

  const [dateRange, setDateRange] = useState<Array<Date | undefined>>([]);
  useEffect(() => {
    let valueTemp: Array<Date> = [];
    const propsValue = value;
    if (Array.isArray(propsValue) && !!propsValue?.length) {
      propsValue.forEach((date, index) => {
        valueTemp[index] = typeof propsValue[index] === 'string' ? new Date(date) : (date as Date);
      });
    }
    setDateRange(valueTemp);
  }, [JSON.stringify(value)]);

  function handleChange(cdate: Date | undefined, idx?: number) {
    const changeValue = [...dateRange];
    changeValue[idx!] = cdate;
    setDateRange(changeValue);
    onChange && onChange(cdate, changeValue);
  }

  return (
    <DateInputRangeStyleWarp
      className={[`${prefixCls}-contents`, `${prefixCls}-inner`].filter(Boolean).join(' ').trim()}
      style={{ width: 300, ...bodyStyle }}
    >
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        {...popoverProps}
        content={
          <DateInputDatePickerPopover
            as={DatePicker}
            date={dateRange[0]}
            className={`${prefixCls}-popover`}
            {...datePickerProps}
            onChange={(selectedDate: Date | undefined) => handleChange(selectedDate, 0)}
          />
        }
      >
        <Input
          placeholder="请选择日期"
          readOnly
          {...(inputProps as InputProps)}
          // onChange={(v) => console.log('v', v)}
          value={dateRange[0] ? formatter(format, dateRange[0]) : ''}
          className={[prefixCls, className].filter(Boolean).join(' ').trim()}
        />
      </Popover>
      <DateInputIconStyleWarp baseline style={{ fontSize: 21, top: -1, margin: '0px 8px 0px 5px' }}>
        <DateInputIcon as={SwapRight} />
      </DateInputIconStyleWarp>
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        {...popoverProps}
        content={
          <DateInputDatePickerPopover
            as={DatePicker}
            date={dateRange[1]}
            className={`${prefixCls}-popover`}
            {...datePickerProps}
            onChange={(selectedDate: Date | undefined) => handleChange(selectedDate, 1)}
          />
        }
      >
        <Input
          placeholder="请选择日期"
          readOnly
          {...(inputProps as InputProps)}
          value={dateRange[1] ? formatter(format, dateRange[1]) : ''}
          // onChange={(v) => console.log('v2', v)}
          className={[prefixCls, className].filter(Boolean).join(' ').trim()}
        />
      </Popover>

      {allowClear && dateRange.length > 0 && (
        <DateInputIconStyleWarp closebtn onClick={() => setDateRange([])} className={`${prefixCls}-close-btn`}>
          <DateInputIcon as={Close} />
        </DateInputIconStyleWarp>
      )}
    </DateInputRangeStyleWarp>
  );
}
