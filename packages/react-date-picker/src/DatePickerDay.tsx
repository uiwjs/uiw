import React, { useMemo } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/day.less';

function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}

export interface DatePickerDayDateSource {
  day?: number;
  month?: number;
  year?: number;
}

function classnames(obj: Record<string, boolean>) {
  return Object.keys(obj || {})
    .map((keyName) => (obj[keyName] ? keyName : null))
    .filter(Boolean)
    .join(' ')
    .trim();
}

export interface DatePickerDayProps extends IProps, HTMLDivProps {
  weekday?: string[];
  weekTitle?: string[];
  panelDate?: Date;
  date?: Date;
  today?: Date;
  prefixCls?: string;
  onSelectDay?: (
    selectedDate?: Date,
    dateSource?: DatePickerDayDateSource,
  ) => void;
  renderDay?: (
    day: number,
    props: DatePickerDayRenderDay & DatePickerDayRenderDayProps,
  ) => React.ReactNode;
  disabledDate?: (
    cellDate: Date,
    props: DatePickerDayRenderDay & DatePickerDayRenderDayProps,
  ) => boolean;
}

export interface PickerDayState {
  selected?: Date;
  panelDate?: Date;
}

export type DatePickerDayRenderDay = {
  end: boolean;
  prev: boolean;
  today: boolean;
  selected: boolean;
  next: boolean;
  disabled: boolean;
  date?: Date;
};

export type DatePickerDayRenderDayProps = {
  key?: number;
  date?: Date;
  onClick?: (cellDate: Date, event: React.MouseEvent<HTMLDivProps>) => void;
};

export type DayRectProps = {
  col: number;
  row: number;
  index: number;
  date?: DatePickerDayProps['date'];
  today?: DatePickerDayProps['today'];
  disabledDate?: DatePickerDayProps['disabledDate'];
  renderDay?: DatePickerDayProps['renderDay'];
  panelDate?: DatePickerDayProps['panelDate'];
  onSelectDay?: DatePickerDayProps['onSelectDay'];
};

export function DayRect(props: DayRectProps) {
  const {
    date: selectedDate,
    row,
    col,
    index,
    today,
    panelDate,
    disabledDate,
    renderDay,
    onSelectDay,
    ...other
  } = props;
  const cls: Omit<DatePickerDayRenderDay, 'date'> = {
    end: col === 0 || col === 6,
    prev: false,
    today: false,
    selected: false,
    next: false,
    disabled: false,
  };
  let date = panelDate;
  if (!date || !isValidDate(date)) date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const week = useMemo(
    () => new Date(new Date(date!).setDate(1)).getDay(),
    [date.toDateString()],
  );
  const lastDay = useMemo(
    () => new Date(year, month === 0 ? 12 : month + 1, 0).getDate(),
    [date.toDateString()],
  );
  let day = index;
  if (date) {
    day = day - week + 1;
    if (day < 1) {
      cls.prev = true;
    }
    if (day > lastDay) {
      cls.next = true;
    }
  }
  let cellDate = useMemo(() => new Date(new Date(date!).setDate(day)), [day]);
  if (today && today.toDateString() === cellDate.toDateString()) {
    cls.today = true;
  }
  if (selectedDate && selectedDate.toDateString() === cellDate.toDateString()) {
    cls.selected = true;
  }
  const divProps: React.HTMLAttributes<HTMLDivElement> = {
    onClick: () => {
      const cellMonth = cellDate.getMonth();
      onSelectDay &&
        onSelectDay!(cellDate, {
          year: cellDate.getFullYear(),
          month: cellMonth === 0 ? 12 : cellMonth + 1,
          day: cellDate.getDate(),
        });
    },
  };
  if (disabledDate && disabledDate(cellDate, { ...props, ...cls })) {
    cls.disabled = true;
    delete divProps.onClick;
  }
  return (
    <div className={classnames(cls)} {...other} {...divProps}>
      {renderDay ? (
        renderDay(cellDate.getDate(), { ...props, ...cls, date: cellDate })
      ) : (
        <div>{cellDate.getDate()}</div>
      )}
    </div>
  );
}

const WEEKTITLE = [
  '星期天',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
];
const WEEKDAY = ['日', '一', '二', '三', '四', '五', '六'];

export function DatePickerDay(props: DatePickerDayProps) {
  const {
    prefixCls = 'w-datepicker',
    className,
    weekday = WEEKDAY,
    weekTitle = WEEKTITLE,
    date,
    today,
    panelDate,
    disabledDate,
    renderDay,
    onSelectDay,
    ...other
  } = props;

  const weekdayLabel = useMemo(
    () => (
      <div className={`${prefixCls}-weekday`}>
        {(weekday || []).map((week, idx) => (
          <div
            key={idx}
            className={classnames({ end: idx === 0 || idx === 6 })}
            title={weekTitle && weekTitle[idx]}
          >
            {week}
          </div>
        ))}
      </div>
    ),
    [prefixCls, weekday, weekTitle],
  );

  return (
    <div
      {...other}
      className={[prefixCls ? `${prefixCls}-body` : null, className]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      {weekdayLabel}
      <div
        className={[prefixCls ? `${prefixCls}-day-body` : null]
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className={`${props.prefixCls}-week`}>
            {[...Array(7)].map((_, col) => (
              <DayRect
                date={date}
                today={today}
                disabledDate={disabledDate}
                renderDay={renderDay}
                panelDate={panelDate}
                key={col}
                col={col}
                row={idx}
                onSelectDay={(curDate, data) => {
                  onSelectDay && onSelectDay(curDate, data);
                }}
                index={idx * 7 + col}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
