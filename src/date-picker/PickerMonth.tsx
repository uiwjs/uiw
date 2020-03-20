import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/year-month.less';

export interface IPickerMonthProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  onSelected?: (month: number, paging?: boolean) => void;
  monthLabel?: React.ReactNode[];
}

export default class PickerMonth extends React.Component<IPickerMonthProps> {
  public static defaultProps: IPickerMonthProps = {
    prefixCls: 'w-datepicker',
    panelDate: new Date(),
    onSelected() { },
  }
  render() {
    const { prefixCls, className, panelDate, monthLabel, onSelected, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-month`, className)} {...other}>
        {[...Array(12)].map((_, idx) => {
          const selectedMonth = panelDate!.getMonth();
          return (
            <div key={idx} className={classnames({ selected: selectedMonth === idx })}>
              <span onClick={onSelected!.bind(this, idx, false)}>{(monthLabel && monthLabel[idx]) || idx}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
