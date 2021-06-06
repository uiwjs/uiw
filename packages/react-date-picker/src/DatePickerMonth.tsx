import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/year-month.less';

export interface DatePickerMonthProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  onSelected?: (month: number, paging?: boolean) => void;
  monthLabel?: React.ReactNode[];
}

function noop() {}

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
    <div
      className={[prefixCls ? `${prefixCls}-month` : null, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...other}
    >
      {[...Array(12)].map((_, idx) => {
        const selectedMonth = panelDate!.getMonth();
        return (
          <div
            key={idx}
            className={[selectedMonth === idx ? 'selected' : null]
              .filter(Boolean)
              .join(' ')
              .trim()}
          >
            <span onClick={() => onSelected(idx, false)}>
              {(monthLabel && monthLabel[idx]) || idx}
            </span>
          </div>
        );
      })}
    </div>
  );
}
