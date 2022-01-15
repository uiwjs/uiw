import React, { useEffect, useMemo, useState } from 'react';
import formatter from '@uiw/formatter';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import { TimePickerTime, TimePickerPanelProps } from '@uiw/react-time-picker';
import {
  DatePickerDay,
  DatePickerDayProps,
  DatePickerDayDateSource,
} from './DatePickerDay';
import { DatePickerMonth } from './DatePickerMonth';
import { DatePickerYear } from './DatePickerYear';
import { DatePickerCaption, DatePickerCaptionType } from './DatePickerCaption';
import './style/index.less';

export * from './DatePickerDay';
export * from './DatePickerMonth';
export * from './DatePickerYear';
export * from './DatePickerCaption';

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

export interface DatePickerShowTimeProps extends TimePickerPanelProps {
  format?: string;
}
export interface DatePickerProps
  extends IProps,
    Omit<HTMLDivProps, 'onChange'> {
  onChange?: (
    selectedDate?: Date,
    dateSource?: DatePickerDayDateSource,
  ) => void;
  renderDay?: DatePickerDayProps['renderDay'];
  disabledDate?: DatePickerDayProps['disabledDate'];
  showTime?: DatePickerShowTimeProps | boolean;
  monthLabel?: React.ReactNode[];
  weekday?: string[];
  weekTitle?: string[];
  date?: Date;
  panelDate?: Date;
  today?: Date;
  todayButton?: string;
}
export interface DatePickerState {
  panelDate?: Date;
  date?: Date;
  type?: 'day' | 'time' | DatePickerCaptionType;
}

export default function DatePicker(props: DatePickerProps) {
  const {
    prefixCls = 'w-datepicker',
    className,
    weekday,
    weekTitle,
    monthLabel = MONTH_LABEL,
    date,
    today = new Date(),
    todayButton,
    panelDate = new Date(),
    disabledDate,
    renderDay,
    onChange = noop,
    showTime,
    ...other
  } = props;
  const [type, setType] = useState<DatePickerState['type']>('day');
  const [selectDate, setSelectDate] = useState(date);
  const [selectPanelDate, setSelectPanelDate] = useState(panelDate);

  useEffect(() => {
    if (date) {
      setSelectDate(date);
      setSelectPanelDate(date);
    }
  }, [date]);

  const format = useMemo(
    () =>
      showTime && (showTime as DatePickerShowTimeProps).format
        ? (showTime as DatePickerShowTimeProps).format
        : 'HH:mm:ss',
    [showTime],
  );
  function handleSelected(curType: DatePickerState['type']) {
    if (curType && /^(year|month|time)$/.test(curType)) {
      if (type === 'time') {
        curType = 'day';
      }
      setType(curType);
    } else {
      let currentDate = new Date(selectDate || selectPanelDate);
      let month = currentDate.getMonth();
      if (curType === 'prev') {
        month -= 1;
      }
      if (curType === 'next') {
        month += 1;
      }
      currentDate.setMonth(month);
      setSelectPanelDate(curType === 'today' ? today : currentDate);
      setSelectDate(curType === 'today' ? today : currentDate);

      setType('day');
    }
  }

  function onSelectedTime(type: TimePickerPanelProps['type'], num: number) {
    (selectPanelDate || new Date())[`set${type}` as 'setHours'](num);
    setSelectPanelDate(new Date(selectPanelDate));
    onChange && onChange(new Date(selectPanelDate));
  }

  function onSelectedDate(
    type: 'setMonth' | 'setFullYear',
    month: number,
    paging?: boolean,
  ) {
    (selectPanelDate || new Date())[type](month);
    setSelectPanelDate(new Date(selectPanelDate));
    setType('day');
    onChange && onChange(new Date(selectPanelDate));
  }
  return (
    <div
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...other}
    >
      <DatePickerCaption
        todayButton={todayButton}
        panelDate={selectPanelDate}
        monthLabel={monthLabel}
        onSelected={handleSelected}
      />
      {type === 'day' && (
        <DatePickerDay
          prefixCls={prefixCls}
          disabledDate={disabledDate}
          onSelectDay={(selectedDate, dateSource) => {
            setSelectPanelDate(selectedDate!);
            onChange(selectedDate, dateSource);
          }}
          renderDay={renderDay}
          date={selectDate}
          today={today || new Date()}
          panelDate={selectPanelDate}
          weekday={weekday}
          weekTitle={weekTitle}
        />
      )}
      {type === 'month' && (
        <DatePickerMonth
          panelDate={selectPanelDate}
          monthLabel={monthLabel}
          prefixCls={prefixCls}
          onSelected={(num) => onSelectedDate('setMonth', num)}
        />
      )}
      {type === 'year' && (
        <DatePickerYear
          prefixCls={prefixCls}
          panelDate={selectDate || selectPanelDate}
          onSelected={(num) => onSelectedDate('setFullYear', num)}
        />
      )}
      {type === 'time' && (
        <TimePickerTime
          date={selectPanelDate}
          {...showTime}
          className={`${prefixCls}-timepicker`}
          onSelected={onSelectedTime}
        />
      )}
      {showTime && format && (
        <div
          className={`${prefixCls}-time-btn`}
          onClick={() => handleSelected('time')}
        >
          {formatter(format!, selectDate || selectPanelDate)}
        </div>
      )}
    </div>
  );
}
