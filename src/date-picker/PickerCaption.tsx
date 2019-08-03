import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/caption.less';

export type CaptionType = 'prev' | 'month' | 'year' | 'today' | 'next';

export interface IPickerCationProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  monthLabel?: React.ReactNode[];
  todayButton?: string;
  onSelected?: (captionType: CaptionType) => void;
}

export default class PickerCaption extends React.Component<IPickerCationProps> {
  public static defaultProps: IPickerCationProps = {
    prefixCls: 'w-datepicker',
    panelDate: new Date(),
    onSelected() { },
  }
  renderMonth() {
    const { panelDate, monthLabel } = this.props;
    const month = (panelDate as Date).getMonth();
    return (monthLabel && monthLabel[month]) || month + 1;
  }
  render() {
    const { prefixCls, className, panelDate, monthLabel, onSelected, todayButton, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-caption`, className)} {...other}>
        <div className={classnames(`${prefixCls}-caption-pane`, 'prev')} onClick={onSelected!.bind(this, 'prev')} />
        <div className={classnames(`${prefixCls}-caption-pane`, 'month')} onClick={onSelected!.bind(this, 'month')}>{this.renderMonth()}</div>
        <div className={classnames(`${prefixCls}-caption-pane`, 'year')} onClick={onSelected!.bind(this, 'year')}>{panelDate!.getFullYear()}</div>
        {todayButton && <div className={`${prefixCls}-caption-today`} onClick={onSelected!.bind(this, 'today')} title={todayButton} />}
        <div className={classnames(`${prefixCls}-caption-pane`, 'next')} onClick={onSelected!.bind(this, 'next')} />
      </div>
    );
  }
}
