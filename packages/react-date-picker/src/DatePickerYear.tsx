import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/year-month.less';

export interface DatePickerYearProps extends IProps, HTMLDivProps {
  panelDate?: Date;
  panelNum?: number[];
  onSelected?: (year: number, paging?: boolean) => void;
}

export interface DatePickerYearState {
  activeYear: Date;
}

export class DatePickerYear extends React.Component<
  DatePickerYearProps,
  DatePickerYearState
> {
  public static defaultProps: DatePickerYearProps = {
    prefixCls: 'w-datepicker',
    panelNum: [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    onSelected() {},
  };
  constructor(props: DatePickerYearProps) {
    super(props);
    this.state = {
      activeYear: props.panelDate as Date,
    };
  }
  onSelected(year: number, idx: number) {
    const { onSelected, panelNum } = this.props;
    const { activeYear } = this.state;
    if (idx === 0 || idx === panelNum!.length - 1) {
      activeYear.setFullYear(year);
      this.setState({ activeYear });
      onSelected!(year, true);
    } else {
      onSelected!(year);
    }
  }
  render() {
    const {
      prefixCls,
      className,
      panelDate,
      onSelected,
      panelNum,
      ...other
    } = this.props;
    return (
      <div
        className={[prefixCls ? `${prefixCls}-year` : null, className]
          .filter(Boolean)
          .join(' ')
          .trim()}
        {...other}
      >
        {panelNum &&
          panelNum.map((_, idx) => {
            const selectedYear = this.state.activeYear.getFullYear();
            const year = selectedYear + panelNum[idx];
            return (
              <div
                key={idx}
                className={[
                  selectedYear === year ? 'selected' : null,
                  idx === 0 || idx === panelNum.length - 1 ? 'paging' : null,
                ]
                  .filter(Boolean)
                  .join(' ')
                  .trim()}
              >
                <span onClick={this.onSelected.bind(this, year, idx)}>
                  {year}
                </span>
              </div>
            );
          })}
      </div>
    );
  }
}
