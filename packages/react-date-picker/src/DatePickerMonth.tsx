import React from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import { DatePickerYearMonthWarp, DatePickerYearMonthSelect } from './style/year-month';
export * from './style/year-month';

export interface DatePickerMonthProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  onSelected?: (month: number, paging?: boolean) => void;
  monthLabel?: React.ReactNode[];
}

export function DatePickerMonth(props: DatePickerMonthProps) {
  const {
    prefixCls = 'w-datepicker',
    className,
    panelDate = new Date(),
    monthLabel,
    onSelected = noop,
    ...other
  } = props;
  return (
    <DatePickerYearMonthWarp
      className={[prefixCls ? `${prefixCls}-month` : null, className].filter(Boolean).join(' ').trim()}
      {...other}
      isYear={false}
    >
      {[...Array(12)].map((_, idx) => {
        const selectedMonth = panelDate!.getMonth();
        return (
          <DatePickerYearMonthSelect
            selected={selectedMonth === idx}
            paging={false}
            key={idx}
            className={[selectedMonth === idx ? 'selected' : null].filter(Boolean).join(' ').trim()}
          >
            <span onClick={() => onSelected(idx, false)}>{(monthLabel && monthLabel[idx]) || idx}</span>
          </DatePickerYearMonthSelect>
        );
      })}
    </DatePickerYearMonthWarp>
  );
}
