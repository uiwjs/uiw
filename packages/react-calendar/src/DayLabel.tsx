import React, { useMemo } from 'react';
import { CalendarProps } from './';

export type RenderDayProps = {
  prefixCls?: string;
  day?: number;
  data?: CalendarProps['data'];
  currentDate?: Date;
};

export default function RenderDay(props: RenderDayProps) {
  const { prefixCls, day, data, currentDate } = props;

  const dayData = useMemo(
    () =>
      (data || []).filter((item) => {
        let arr: number[] = ((item.date && item.date.split('/')) || []).map((num) => Number(num));
        if (arr.length === 1) {
          return day === arr[0];
        }
        if (currentDate && arr.length === 2) {
          return currentDate.getMonth() + 1 === arr[0] && day === arr[1];
        }
        if (currentDate && arr.length === 3) {
          return currentDate.getFullYear() === arr[0] && currentDate.getMonth() + 1 === arr[1] && day === arr[2];
        }
        return false;
      }),
    [currentDate, day, data],
  );

  return useMemo(
    () => (
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-day`}>{day}</div>
        <div className={`${prefixCls}-panel`}>
          {dayData &&
            dayData.length > 0 &&
            dayData.map((item, idx) => {
              const { date, label, ...other } = item;
              return (
                <div key={idx} {...other}>
                  {label}
                </div>
              );
            })}
        </div>
      </div>
    ),
    [dayData, day],
  );
}
