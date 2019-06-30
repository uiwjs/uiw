import React from 'react';
import classnames from 'classnames';
import PickerDay, { IPickerDayProps, IDateSource } from './PickerDay';
import PickerMonth from './PickerMonth';
import PickerYear from './PickerYear';
import PickerTime, { ITimePickerPanelProps } from '../time-picker/PickerTime';
import PickerDayCaption, { CaptionType } from './PickerCaption';
import { formatter } from '../';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface IDatePickerShowTimeProps extends ITimePickerPanelProps {
  format?: string;
}
export interface IDatePickerProps extends IProps {
  onChange?: (selectedDate?: Date, dateSource?: IDateSource) => void;
  renderDay?: IPickerDayProps['renderDay'];
  disabledDate?: IPickerDayProps['disabledDate'];
  showTime?: IDatePickerShowTimeProps | boolean;
  monthLabel?: React.ReactNode[];
  weekday?: string[];
  weekTitle?: string[];
  date?: Date;
  panelDate?: Date;
  today?: Date;
  todayButton?: string;
}
export interface IDatePickerState {
  panelDate?: Date;
  date?: Date;
  type?: 'day' | 'time' | CaptionType;
}

export default class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {
  public static defaultProps: IDatePickerProps = {
    prefixCls: 'w-datepicker',
    onChange() { },
    monthLabel: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    today: new Date(),
  }
  public state: IDatePickerState;
  constructor(props: IDatePickerProps) {
    super(props);
    this.state = {
      panelDate: props.panelDate || new Date(),
      date: props.date,
      type: 'day',
    } as IDatePickerState;
  }
  componentWillReceiveProps(nextProps: IDatePickerProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({ date: nextProps.date, panelDate: nextProps.date ? new Date(nextProps.date) : new Date() });
    }
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  onChange = (date?: Date, dateSource?: IDateSource) => {
    this.props.onChange!(date, dateSource);
  }
  onSelected = (type: IDatePickerState['type']) => {
    const { today } = this.props;
    const { date, panelDate } = this.state;
    if (/^(year|month|time)$/.test(type!)) {
      if (this.state.type === 'time') {
        type = 'day';
      }
      this.setState({ type });
    } else {
      let currentDate = (date || panelDate) as Date;
      let month = currentDate.getMonth();
      const data: IDatePickerState = {};
      if (type === 'prev') {
        month -= 1;
      }
      if (type === 'next') {
        month += 1;
      }
      currentDate.setMonth(month);
      if (type === 'today') {
        currentDate = new Date(today as Date);
      }
      data.panelDate = currentDate;
      if (date) {
        data.date = currentDate;
      }
      this.setState({ ...data }, () => {
        this.onChange(currentDate);
      });
    }
  }
  onSelectedTime(type: ITimePickerPanelProps['type'], num: number) {
    const { date, panelDate } = this.state;
    const currentDate = (date || panelDate) as Date;
    currentDate[(`set${type}`) as 'setMonth'](num);
    this.setState({
      date: currentDate,
    }, () => {
      this.onChange(currentDate);
    });
  }
  onSelectedDate(type: 'setMonth' | 'setFullYear', month: number, paging?: boolean) {
    const { panelDate, date } = this.state;
    (panelDate as Date)[type](month);
    if (date) {
      date[type](month);
    }
    const props = { type: 'day' as IDatePickerState['type'], panelDate, date };
    if (paging) {
      delete props.type;
    }
    this.setState({ ...props }, () => {
      if (date) {
        this.onChange(date);
      }
    });
  }
  render() {
    const { prefixCls, className, weekday, weekTitle, monthLabel, date, today, todayButton, panelDate, disabledDate, renderDay, onChange, showTime, ...other } = this.props;
    const { type } = this.state;
    const format = showTime && (showTime as IDatePickerShowTimeProps).format ? (showTime as IDatePickerShowTimeProps).format : 'HH:mm:ss';
    return (
      <div className={classnames(prefixCls, className)} {...other}>
        <PickerDayCaption
          todayButton={todayButton}
          panelDate={this.state.panelDate}
          monthLabel={monthLabel}
          onSelected={this.onSelected}
        />
        {type === 'day' && (
          <PickerDay
            prefixCls={prefixCls}
            disabledDate={disabledDate}
            onSelectDay={this.onChange}
            renderDay={renderDay}
            date={this.state.date}
            today={today || new Date()}
            panelDate={this.state.panelDate}
            weekday={weekday}
            weekTitle={weekTitle}
          />
        )}
        {type === 'month' && (
          <PickerMonth
            panelDate={this.state.panelDate}
            monthLabel={monthLabel}
            prefixCls={prefixCls}
            onSelected={this.onSelectedDate.bind(this, 'setMonth')}
          />
        )}
        {type === 'year' && (
          <PickerYear
            prefixCls={prefixCls}
            panelDate={this.state.panelDate}
            onSelected={this.onSelectedDate.bind(this, 'setFullYear')}
          />
        )}
        {type === 'time' && (
          <PickerTime
            date={date || this.state.panelDate}
            {...showTime}
            className={`${prefixCls}-timepicker`}
            onSelected={this.onSelectedTime.bind(this)}
          />
        )}
        {showTime && <div className={`${prefixCls}-time-btn`} onClick={this.onSelected.bind(this, 'time')}>{formatter(format as string, (date || panelDate) as Date)}</div>}
      </div>
    );
  }
}
