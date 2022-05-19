import React, { useMemo } from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import {
  DatePickerCaptionPane,
  DatePickerCaptionToday,
  DatePickerCaptionBase,
  DatePickerCaptionPaneYear,
  DatePickerCaptionPaneMonth,
} from './style/caption';
export * from './style/caption';
function classnames(...arg: (string | null | undefined)[]) {
  return [...arg].filter(Boolean).join(' ').trim();
}

export type DatePickerCaptionType = 'prev' | 'month' | 'year' | 'today' | 'next';

export interface DatePickerCaptionProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  monthLabel?: React.ReactNode[];
  todayButton?: string;
  onSelected?: (captionType: DatePickerCaptionType) => void;
}

export function DatePickerCaption(props: DatePickerCaptionProps) {
  const {
    prefixCls = 'w-datepicker',
    className,
    panelDate = new Date(),
    monthLabel,
    onSelected = noop,
    todayButton,
    ...other
  } = props;

  const renderMonth = useMemo(() => {
    const month = panelDate.getMonth();
    return (monthLabel && monthLabel[month]) || month + 1;
  }, [panelDate.toDateString(), monthLabel]);
  return (
    <DatePickerCaptionBase className={classnames(prefixCls ? `${prefixCls}-caption` : null, className)} {...other}>
      <DatePickerCaptionPane
        className={classnames(prefixCls ? `${prefixCls}-caption-pane` : null, 'prev')}
        onClick={() => onSelected('prev')}
        prev
      />
      <DatePickerCaptionPaneMonth
        className={classnames(prefixCls ? `${prefixCls}-caption-pane` : null, 'month')}
        onClick={() => onSelected('month')}
      >
        {renderMonth}
      </DatePickerCaptionPaneMonth>
      <DatePickerCaptionPaneYear
        className={classnames(prefixCls ? `${prefixCls}-caption-pane` : null, 'year')}
        onClick={() => onSelected('year')}
      >
        {panelDate!.getFullYear()}
      </DatePickerCaptionPaneYear>
      {todayButton && (
        <DatePickerCaptionToday
          className={classnames(prefixCls ? `${prefixCls}-caption-today` : null)}
          onClick={() => onSelected('today')}
          title={todayButton}
        />
      )}
      <DatePickerCaptionPane
        className={classnames(prefixCls ? `${prefixCls}-caption-pane` : null, 'next')}
        onClick={() => onSelected('next')}
        next
      />
    </DatePickerCaptionBase>
  );
}
