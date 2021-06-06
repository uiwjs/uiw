import React, { useMemo } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/caption.less';

function classnames(...arg: (string | null | undefined)[]) {
  return [...arg].filter(Boolean).join(' ').trim();
}

export type DatePickerCaptionType =
  | 'prev'
  | 'month'
  | 'year'
  | 'today'
  | 'next';

function noop() {}

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
    <div
      className={classnames(
        prefixCls ? `${prefixCls}-caption` : null,
        className,
      )}
      {...other}
    >
      <div
        className={classnames(
          prefixCls ? `${prefixCls}-caption-pane` : null,
          'prev',
        )}
        onClick={() => onSelected('prev')}
      />
      <div
        className={classnames(
          prefixCls ? `${prefixCls}-caption-pane` : null,
          'month',
        )}
        onClick={() => onSelected('month')}
      >
        {renderMonth}
      </div>
      <div
        className={classnames(
          prefixCls ? `${prefixCls}-caption-pane` : null,
          'year',
        )}
        onClick={() => onSelected('year')}
      >
        {panelDate!.getFullYear()}
      </div>
      {todayButton && (
        <div
          className={classnames(
            prefixCls ? `${prefixCls}-caption-today` : null,
          )}
          onClick={() => onSelected('today')}
          title={todayButton}
        />
      )}
      <div
        className={classnames(
          prefixCls ? `${prefixCls}-caption-pane` : null,
          'next',
        )}
        onClick={() => onSelected('next')}
      />
    </div>
  );
}
