import React, { useEffect, useMemo, useState } from 'react';
import { DatePickerDay, DatePickerDayProps, DatePickerDayDateSource } from '@uiw/react-date-picker';
import { IconStyleBase } from '@uiw/react-icon';
import { Down } from '@uiw/icons/lib/Down';
import formatter from '@uiw/formatter';
import { IProps } from '@uiw/utils';
import RenderDay from './DayLabel';
import {
  CalendarBtnGroupStyleWrap,
  CalendarBtnStyleWrap,
  CalendarStyleWrap,
  CalendarCaptionStyleWrap,
  CalendarTitleWrap,
} from './style';

export interface CalendarProps extends IProps, DatePickerDayProps {
  /**
   * 设置日历面板上面的日期标题。
   */
  titleFormat?: string;
  /**
   * 点击选择日期回调
   */
  onSelectDay?: (selectDay?: Date, dateSource?: DatePickerDayDateSource) => void;
  /**
   * 日历面板默认展示哪一页
   */
  panelDate?: Date;
  /**
   * 默认高亮当天日期
   */
  today?: Date;
  /**
   * 在日历面板上面添加通知，数组中的对象可以设置 `ElementProps`，如：`style`, `onClick` 等属性。
   */
  data?: ICalendarData[];
  /**
   * 选中的日期
   */
  date?: Date;
  /**
   * `今天` 按钮的文本设置
   */
  todayLabel?: string;
  /**
   * 月份显示文本
   */
  monthLabel?: string[];
  /** 翻页触发事件 */
  onPaging?: (type: 'prev' | 'next' | 'today', month: number, panelDate?: Date) => void;
}

export interface ICalendarData {
  label?: React.ReactNode;
  date?: string;
  [key: string]: any;
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

export default function Calendar(props: CalendarProps) {
  const {
    prefixCls = 'w-calendar',
    className,
    style,
    today = new Date(),
    date,
    data,
    monthLabel = MONTH_LABEL,
    titleFormat = 'YYYY/MM',
    todayLabel = '今天',
    panelDate: _,
    onPaging,
    onSelectDay,
    ...otherProps
  } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  const [panelDate, setPanelDate] = useState<Date>(props.panelDate || new Date());

  useEffect(() => {
    if (props.panelDate !== panelDate) {
      setPanelDate(panelDate);
    }
  }, [props.panelDate]);

  function handlePaging(type: 'prev' | 'next' | 'today') {
    let currentDate = new Date();
    if (type === 'today') {
      currentDate = today || new Date();
    } else {
      const month = panelDate.getMonth();
      if (panelDate && type === 'prev') {
        panelDate.setMonth(month - 1);
      }
      if (panelDate && type === 'next') {
        panelDate.setMonth(month + 1);
      }
      currentDate = panelDate;
    }
    setPanelDate(new Date(currentDate));
    onPaging && onPaging(type, currentDate!.getMonth() + 1, currentDate);
  }

  const titleLable = useMemo(
    () => <CalendarTitleWrap className={`${prefixCls}-title`}>{formatter(titleFormat, panelDate)}</CalendarTitleWrap>,
    [prefixCls, titleFormat, panelDate],
  );

  const btngroup = useMemo(
    () => (
      <CalendarBtnGroupStyleWrap className={`${prefixCls}-btn-group`}>
        <IconStyleBase as={Down} onClick={() => handlePaging('prev')} style={{ width: 18 }} />
        <CalendarBtnStyleWrap className={`${prefixCls}-btn`} onClick={() => handlePaging('today')}>
          {todayLabel}
        </CalendarBtnStyleWrap>
        <IconStyleBase as={Down} onClick={() => handlePaging('next')} style={{ width: 18 }} />
      </CalendarBtnGroupStyleWrap>
    ),
    [prefixCls, todayLabel],
  );

  return (
    <CalendarStyleWrap className={cls} style={style}>
      <CalendarCaptionStyleWrap className={`${prefixCls}-caption`}>
        {titleLable}
        {btngroup}
      </CalendarCaptionStyleWrap>
      <DatePickerDay
        onSelectDay={(currentDate, dateSource) => {
          setPanelDate(currentDate!);
          onSelectDay && onSelectDay(currentDate, dateSource);
        }}
        renderDay={(day, propsNext) => (
          <RenderDay prefixCls={prefixCls} day={day} data={data} currentDate={propsNext.date} />
        )}
        date={date}
        today={today}
        panelDate={panelDate || new Date()}
        {...otherProps}
      />
    </CalendarStyleWrap>
  );
}
