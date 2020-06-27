import React from 'react';
import classnames from 'classnames';
import formatter from '@uiw/formatter';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { TimePickerTime, TimePickerPanelProps } from '@uiw/react-time-picker';
import {
  DatePickerDay,
  DatePickerDayProps,
  DatePickerDayDateSource,
} from './DatePickerDay';
import { DatePickerMonth } from './DatePickerMonth';
import { DatePickerYear } from './DatePickerYear';
import { DatePickerCaption, DatePickerCaptionType } from './DatePickerCaption';
import './style/index.less';

export * from './DatePickerDay';
export * from './DatePickerMonth';
export * from './DatePickerYear';
export * from './DatePickerCaption';

export interface DatePickerShowTimeProps extends TimePickerPanelProps {
  format?: string;
}
export interface DatePickerProps
  extends IProps,
    Omit<HTMLDivProps, 'onChange'> {
  onChange?: (
    selectedDate?: Date,
    dateSource?: DatePickerDayDateSource,
  ) => void;
  renderDay?: DatePickerDayProps['renderDay'];
  disabledDate?: DatePickerDayProps['disabledDate'];
  showTime?: DatePickerShowTimeProps | boolean;
  monthLabel?: React.ReactNode[];
  weekday?: string[];
  weekTitle?: string[];
  date?: Date;
  panelDate?: Date;
  today?: Date;
  todayButton?: string;
}
export interface DatePickerState {
  panelDate?: Date;
  date?: Date;
  type?: 'day' | 'time' | DatePickerCaptionType;
}

export default class DatePicker extends React.Component<
  DatePickerProps,
  DatePickerState
> {
  public static defaultProps: DatePickerProps = {
    prefixCls: 'w-datepicker',
    onChange() {},
    monthLabel: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    today: new Date(),
  };
  public state: DatePickerState;
  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      panelDate: props.panelDate || new Date(),
      date: props.date,
      type: 'day',
    } as DatePickerState;
  }
  UNSAFE_componentWillReceiveProps(nextProps: DatePickerProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({
        date: nextProps.date,
        panelDate: nextProps.date ? new Date(nextProps.date) : new Date(),
      });
    }
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  onChange = (date?: Date, dateSource?: DatePickerDayDateSource) => {
    this.props.onChange!(date, dateSource);
  };
  onSelected = (type: DatePickerState['type']) => {
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
      const data: DatePickerState = {};
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
  };
  onSelectedTime(type: TimePickerPanelProps['type'], num: number) {
    const { date, panelDate } = this.state;
    const currentDate = (date || panelDate) as Date;
    currentDate[`set${type}` as 'setMonth'](num);
    this.setState(
      {
        date: currentDate,
      },
      () => {
        this.onChange(currentDate);
      },
    );
  }
  onSelectedDate(
    type: 'setMonth' | 'setFullYear',
    month: number,
    paging?: boolean,
  ) {
    const { panelDate, date } = this.state;
    (panelDate as Date)[type](month);
    if (date) {
      date[type](month);
    }
    const props = { type: 'day' as DatePickerState['type'], panelDate, date };
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
    const {
      prefixCls,
      className,
      weekday,
      weekTitle,
      monthLabel,
      date,
      today,
      todayButton,
      panelDate,
      disabledDate,
      renderDay,
      onChange,
      showTime,
      ...other
    } = this.props;
    const { type } = this.state;
    const format =
      showTime && (showTime as DatePickerShowTimeProps).format
        ? (showTime as DatePickerShowTimeProps).format
        : 'HH:mm:ss';
    return (
      <div className={classnames(prefixCls, className)} {...other}>
        <DatePickerCaption
          todayButton={todayButton}
          panelDate={this.state.panelDate}
          monthLabel={monthLabel}
          onSelected={this.onSelected}
        />
        {type === 'day' && (
          <DatePickerDay
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
          <DatePickerMonth
            panelDate={this.state.panelDate}
            monthLabel={monthLabel}
            prefixCls={prefixCls}
            onSelected={this.onSelectedDate.bind(this, 'setMonth')}
          />
        )}
        {type === 'year' && (
          <DatePickerYear
            prefixCls={prefixCls}
            panelDate={this.state.panelDate}
            onSelected={this.onSelectedDate.bind(this, 'setFullYear')}
          />
        )}
        {type === 'time' && (
          <TimePickerTime
            date={date || this.state.panelDate}
            {...showTime}
            className={`${prefixCls}-timepicker`}
            onSelected={this.onSelectedTime.bind(this)}
          />
        )}
        {showTime && (
          <div
            className={`${prefixCls}-time-btn`}
            onClick={this.onSelected.bind(this, 'time')}
          >
            {formatter(format as string, (date || panelDate) as Date)}
          </div>
        )}
      </div>
    );
  }
}
