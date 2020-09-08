import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/year-month.less';

export interface DatePickerMonthProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  onSelected?: (month: number, paging?: boolean) => void;
  monthLabel?: React.ReactNode[];
}

export class DatePickerMonth extends React.Component<DatePickerMonthProps> {
  public static defaultProps: DatePickerMonthProps = {
    prefixCls: 'w-datepicker',
    panelDate: new Date(),
    onSelected() {},
  };
  render() {
    const {
      prefixCls,
      className,
      panelDate,
      monthLabel,
      onSelected,
      ...other
    } = this.props;
    return (
      <div
        className={[prefixCls ? `${prefixCls}-month` : null, className]
          .filter(Boolean)
          .join(' ')
          .trim()}
        {...other}
      >
        {[...Array(12)].map((_, idx) => {
          const selectedMonth = panelDate!.getMonth();
          return (
            <div
              key={idx}
              className={[selectedMonth === idx ? 'selected' : null]
                .filter(Boolean)
                .join(' ')
                .trim()}
            >
              <span onClick={onSelected!.bind(this, idx, false)}>
                {(monthLabel && monthLabel[idx]) || idx}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
