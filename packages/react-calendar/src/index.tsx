import React from 'react';
import classnames from 'classnames';
import { DatePickerDay, DatePickerDayProps, DatePickerDayRenderDay, DatePickerDayDateSource } from '@uiw/react-date-picker';
import Icon from '@uiw/react-icon';
import formatter from '@uiw/formatter';
import { IProps } from '@uiw/utils';
import './style/index.less';

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
}

export interface ICalendarState {
  panelDate?: Date;
  date?: Date;
}

export interface ICalendarData {
  label?: React.ReactNode;
  date?: string;
  [key: string]: any;
}

export default class Calendar extends React.Component<CalendarProps, ICalendarState> {
  static state: ICalendarState;
  public static defaultProps: CalendarProps = {
    prefixCls: 'w-calendar',
    titleFormat: 'YYYY/MM',
    todayLabel: '今天',
    monthLabel: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  }
  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      panelDate: props.panelDate || new Date(),
      date: props.date,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: CalendarProps) {
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  onSelectDay = (date?: Date, dateSource?: DatePickerDayDateSource) => {
    const { onSelectDay } = this.props;
    this.setState({ panelDate: date });
    onSelectDay && onSelectDay(date, dateSource);
  }
  onPaging(type: 'prev' | 'next' | 'today') {
    const { panelDate } = this.state;
    const { today } = this.props;
    if (type === 'today') {
      this.setState({ panelDate: today || new Date() });
      return;
    }
    const month = (panelDate as Date).getMonth();
    if (panelDate && type === 'prev') {
      panelDate.setMonth(month - 1);
    }
    if (panelDate && type === 'next') {
      panelDate.setMonth(month + 1);
    }
    this.setState({ panelDate });
  }
  renderDay = (day: number, props: DatePickerDayRenderDay) => {
    const { prefixCls, data } = this.props;
    const dayData = (data || []).filter((item) => {
      let arr: number[] = ((item.date && item.date.split('/')) || []).map(num => Number(num));
      if (arr.length === 1) {
        return day === arr[0];
      }
      if (props.date && arr.length === 2) {
        return props.date.getMonth() + 1 === arr[0] && day === arr[1];
      }
      if (props.date && arr.length === 3) {
        return props.date.getFullYear() === arr[0] && props.date.getMonth() + 1 === arr[1] && day === arr[2];
      }
      return false;
    });
    return (
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-day`}>{day}</div>
        <div className={`${prefixCls}-panel`}>
          {dayData && dayData.length > 0 && dayData.map((item, idx) => {
            const { date, label, ...other } = item;
            return (
              <div key={idx} {...other}>{label}</div>
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    const { prefixCls, className, style, today, todayLabel, panelDate, titleFormat, monthLabel, onSelectDay, ...otherProps } = this.props;
    return (
      <div className={classnames(prefixCls, className)} style={style}>
        <div className={`${prefixCls}-caption`}>
          <div className={`${prefixCls}-title`}>{formatter(titleFormat as string, (this.state.panelDate as Date))}</div>
          <div className={`${prefixCls}-btn-group`}>
            <Icon type="down" onClick={this.onPaging.bind(this, 'prev')} />
            <span className={`${prefixCls}-btn`} onClick={this.onPaging.bind(this, 'today')} >{todayLabel}</span>
            <Icon type="down" onClick={this.onPaging.bind(this, 'next')} />
          </div>
        </div>
        <DatePickerDay
          onSelectDay={this.onSelectDay}
          renderDay={this.renderDay}
          date={this.state.date}
          today={today || new Date()}
          panelDate={this.state.panelDate || new Date()}
          {...otherProps}
        />
      </div>
    );
  }
}
