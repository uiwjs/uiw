import React from 'react';
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

export interface DatePickerCaptionProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  monthLabel?: React.ReactNode[];
  todayButton?: string;
  onSelected?: (captionType: DatePickerCaptionType) => void;
}

export class DatePickerCaption extends React.Component<DatePickerCaptionProps> {
  public static defaultProps: DatePickerCaptionProps = {
    prefixCls: 'w-datepicker',
    panelDate: new Date(),
    onSelected() {},
  };
  renderMonth() {
    const { panelDate, monthLabel } = this.props;
    const month = (panelDate as Date).getMonth();
    return (monthLabel && monthLabel[month]) || month + 1;
  }
  render() {
    const {
      prefixCls,
      className,
      panelDate,
      monthLabel,
      onSelected,
      todayButton,
      ...other
    } = this.props;

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
          onClick={onSelected!.bind(this, 'prev')}
        />
        <div
          className={classnames(
            prefixCls ? `${prefixCls}-caption-pane` : null,
            'month',
          )}
          onClick={onSelected!.bind(this, 'month')}
        >
          {this.renderMonth()}
        </div>
        <div
          className={classnames(
            prefixCls ? `${prefixCls}-caption-pane` : null,
            'year',
          )}
          onClick={onSelected!.bind(this, 'year')}
        >
          {panelDate!.getFullYear()}
        </div>
        {todayButton && (
          <div
            className={classnames(
              prefixCls ? `${prefixCls}-caption-today` : null,
            )}
            onClick={onSelected!.bind(this, 'today')}
            title={todayButton}
          />
        )}
        <div
          className={classnames(
            prefixCls ? `${prefixCls}-caption-pane` : null,
            'next',
          )}
          onClick={onSelected!.bind(this, 'next')}
        />
      </div>
    );
  }
}
