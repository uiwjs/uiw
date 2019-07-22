import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/year-month.less';

export interface IPickerYearProps extends IProps {
  panelDate?: Date;
  panelNum?: number[];
  onSelected?: (year: number, paging?: boolean) => void;
}

export interface IPickerYearState {
  activeYear: Date;
}

export default class PickerYear extends React.Component<IPickerYearProps & HTMLDivProps, IPickerYearState> {
  public static defaultProps: IPickerYearProps = {
    prefixCls: 'w-datepicker',
    panelNum: [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    onSelected() { },
  }
  constructor(props: IPickerYearProps) {
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
    const { prefixCls, className, panelDate, onSelected, panelNum, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-year`, className)} {...other}>
        {panelNum && panelNum.map((_, idx) => {
          const selectedYear = this.state.activeYear.getFullYear();
          const year = selectedYear + panelNum[idx];
          return (
            <div
              key={idx}
              className={classnames({
                selected: selectedYear === year,
                paging: idx === 0 || idx === panelNum.length - 1,
              })}
            >
              <span onClick={this.onSelected.bind(this, year, idx)}>{year}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
