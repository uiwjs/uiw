import React, { useState } from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import './style/year-month.less';

export interface DatePickerYearProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  panelNum?: number[];
  onSelected?: (year: number, paging?: boolean) => void;
}

export function DatePickerYear(props: DatePickerYearProps) {
  const {
    prefixCls = 'w-datepicker',
    panelNum = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    className,
    panelDate,
    onSelected = noop,
    ...other
  } = props;
  const [activeYear, setActiveYear] = useState(props.panelDate);
  function handleSelected(year: number, idx: number) {
    if (idx === 0 || idx === panelNum!.length - 1) {
      const date = new Date(activeYear!);
      date.setFullYear(year);
      setActiveYear(date);
      onSelected!(year, true);
    } else {
      onSelected!(year);
    }
  }
  return (
    <div className={[prefixCls ? `${prefixCls}-year` : null, className].filter(Boolean).join(' ').trim()} {...other}>
      {panelNum &&
        panelNum.map((_, idx) => {
          const selectedYear = activeYear!.getFullYear();
          const year = selectedYear + panelNum[idx];
          return (
            <div
              key={idx}
              className={[
                selectedYear === year ? 'selected' : null,
                idx === 0 || idx === panelNum.length - 1 ? 'paging' : null,
              ]
                .filter(Boolean)
                .join(' ')
                .trim()}
            >
              <span onClick={() => handleSelected(year, idx)}>{year}</span>
            </div>
          );
        })}
    </div>
  );
}
