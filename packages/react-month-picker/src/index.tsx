import React, { useEffect, useMemo, useState } from 'react';
import Input, { InputProps } from '@uiw/react-input';
import Popover, { PopoverProps } from '@uiw/react-popover';
import { IProps } from '@uiw/utils';
import Button from '@uiw/react-button';
import formatter from '@uiw/formatter';
import { DatePickerMonth, DatePickerYear, DatePickerCaption, DatePickerCaptionProps } from '@uiw/react-date-picker';
import './style/index.less';

export interface MonthPickerProps<T> extends IProps, Omit<InputProps<T>, 'value' | 'onChange'> {
  popoverProps?: PopoverProps;
  pickerCaptionProps?: DatePickerCaptionProps;
  value?: Date | string;
  format?: string;
  monthLabel?: string[];
  allowClear?: boolean;
  onChange?: (date?: Date, formatDate?: string) => void;
}

const MONTH_LABEL = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

export default function MonthPicker<T>(props: MonthPickerProps<T>) {
  const {
    prefixCls = 'w-monthpicker',
    format = 'YYYY/MM',
    onChange = () => {},
    className,
    popoverProps,
    pickerCaptionProps = {},
    allowClear = true,
    monthLabel = MONTH_LABEL,
    ...inputProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [panelDate, setPanelDate] = useState(new Date());
  const [type, setType] = useState('month');
  const [date, setDate] = useState(props.value);

  useEffect(() => setDate(props.value), [props.value]);

  inputProps.value = useMemo(
    () => (typeof date === 'string' ? date : date ? formatter(format, date) : ''),
    [format, date],
  );

  if (allowClear && inputProps.value) {
    inputProps.addonAfter = (
      <Button
        className={`${prefixCls}-close-btn`}
        icon="close"
        onClick={() => {
          setDate('');
          onChange && onChange();
        }}
        size={inputProps.size}
        basic
        type="light"
      />
    );
  }

  function handleSelectedDate(type: 'setMonth' | 'setFullYear', num: number, paging?: boolean) {
    const curPanelDate = new Date(new Date(panelDate)[type](num));
    if (!paging) {
      setType('month');
    }
    const curDate = formatter(format, new Date(curPanelDate));
    setDate(curDate);
    setPanelDate(curPanelDate);
    onChange && onChange(curPanelDate, curDate);
    if (type === 'setMonth') {
      setIsOpen(false);
    }
  }

  return (
    <Popover
      trigger="focus"
      placement="bottomLeft"
      autoAdjustOverflow
      isOpen={isOpen}
      {...popoverProps}
      onVisibleChange={(open) => setIsOpen(open)}
      content={
        <div className={`${prefixCls}-popover`}>
          <DatePickerCaption
            panelDate={panelDate}
            monthLabel={monthLabel}
            {...pickerCaptionProps}
            onSelected={(captionType) => {
              if (/^(month|year)$/.test(captionType as string)) {
                setType(captionType);
              } else {
                const year = new Date(panelDate).getFullYear();
                const curPanelDate = new Date(new Date(panelDate).setFullYear(type === 'next' ? year + 1 : year - 1));
                setPanelDate(curPanelDate);
              }
            }}
          />
          {type === 'month' && (
            <DatePickerMonth
              panelDate={panelDate}
              monthLabel={monthLabel}
              onSelected={(month, paging) => handleSelectedDate('setMonth', month, paging)}
            />
          )}
          {type === 'year' && (
            <DatePickerYear
              panelDate={panelDate}
              onSelected={(year, paging) => handleSelectedDate('setFullYear', year, paging)}
            />
          )}
        </div>
      }
    >
      <Input
        placeholder="请输入日期"
        readOnly
        {...(inputProps as any)}
        className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      />
    </Popover>
  );
}
