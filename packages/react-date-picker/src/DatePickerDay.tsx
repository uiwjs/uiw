import React from 'react';
import {
  IProps,
  HTMLDivProps,
  getFirstDayOfWeek,
  solarMonthDays,
  isSameDate,
} from '@uiw/utils';
import './style/day.less';

export interface DatePickerDayDateSource {
  day?: number;
  month?: number;
  year?: number;
}

function classnames(obj: Record<string, boolean>) {
  return Object.keys(obj || {})
    .map((keyName) => (obj[keyName] ? keyName : null))
    .filter(Boolean)
    .join(' ')
    .trim();
}

export interface DatePickerDayProps extends IProps, HTMLDivProps {
  weekday?: string[];
  weekTitle?: string[];
  panelDate?: Date;
  date?: Date;
  today?: Date;
  prefixCls?: string;
  onSelectDay?: (
    selectedDate?: Date,
    dateSource?: DatePickerDayDateSource,
  ) => void;
  renderDay?: (
    day: number,
    props: DatePickerDayRenderDay & DatePickerDayRenderDayProps,
  ) => React.ReactNode;
  disabledDate?: (
    cellDate: Date,
    props: DatePickerDayRenderDay & DatePickerDayRenderDayProps,
  ) => boolean;
}

export interface PickerDayState {
  selected?: Date;
  panelDate?: Date;
}

export type DatePickerDayRenderDay = {
  end: boolean;
  prev: boolean;
  today: boolean;
  selected: boolean;
  next: boolean;
  disabled: boolean;
};

export type DatePickerDayRenderDayProps = {
  key?: number;
  date?: Date;
  onClick?: (cellDate: Date, event: React.MouseEvent<HTMLDivProps>) => void;
};

function initSameDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function setTimeDate(selDate: Date, curDate: Date) {
  if (!selDate) {
    return curDate;
  }
  return new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate(),
    selDate.getHours(),
    selDate.getMinutes(),
    selDate.getSeconds(),
  );
}

export class DatePickerDay extends React.Component<
  DatePickerDayProps,
  PickerDayState
> {
  public state: PickerDayState;
  public static defaultProps: DatePickerDayProps = {
    prefixCls: 'w-datepicker',
    weekday: ['日', '一', '二', '三', '四', '五', '六'],
    weekTitle: [
      '星期天',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    onSelectDay() {},
  };
  constructor(props: DatePickerDayProps & HTMLDivProps) {
    super(props);
    this.state = {
      selected: props.date,
      panelDate: props.panelDate,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: DatePickerDayProps) {
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
    if (nextProps.date !== this.props.date) {
      this.setState({ selected: nextProps.date });
    }
  }
  handleClick(selectedDate?: Date, dateSource?: DatePickerDayDateSource) {
    const { date } = this.props;
    if (
      date &&
      isSameDate(initSameDate(selectedDate as Date), initSameDate(date))
    ) {
      this.setState({ selected: selectedDate });
      selectedDate = undefined;
    }
    this.setState({ panelDate: selectedDate });
    this.props.onSelectDay!(selectedDate, dateSource);
  }
  renderDay(num: number, row: number) {
    const { date: selectedDate, disabledDate, renderDay } = this.props;
    const today = initSameDate(this.props.today as Date);
    const date = initSameDate(this.state.panelDate as Date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfWeek = getFirstDayOfWeek(year, month + 1);
    let day = row * 7 + num - firstDayOfWeek + 1;
    const cls: DatePickerDayRenderDay = {
      end: num === 0 || num === 6,
      prev: false,
      today: false,
      selected: false,
      next: false,
      disabled: false,
    };
    // Prev Month
    const preDate = new Date(new Date(date).setMonth(month - 1));
    // Next Month
    const nextDate = new Date(new Date(date).setMonth(month + 1));
    const prevDays = solarMonthDays(
      preDate.getFullYear(),
      preDate.getMonth() + 1,
    );
    const days = solarMonthDays(year, month + 1);
    let cellDate = null;
    if (day <= 0) {
      // Prev Month
      day = prevDays + day;
      cls.prev = true;
      cellDate = new Date(preDate).setDate(day);
    } else if (day > days) {
      // Next Month
      day -= days;
      cls.next = true;
      cellDate = new Date(nextDate).setDate(day);
    } else {
      cellDate = new Date(this.state.panelDate as Date).setDate(day);
    }
    cellDate = setTimeDate(selectedDate as Date, new Date(cellDate));
    if (isSameDate(initSameDate(new Date(cellDate)), today)) {
      cls.today = true;
    }
    if (
      selectedDate &&
      isSameDate(initSameDate(cellDate), initSameDate(selectedDate))
    ) {
      cls.selected = true;
    }
    const props: { key: number; onClick?: () => void } = {
      key: num,
      onClick: this.handleClick.bind(this, cellDate, { day, month, year }),
    };
    if (disabledDate && disabledDate(cellDate, { ...props, ...cls })) {
      cls.disabled = true;
      delete props.onClick;
    }
    return (
      <div {...props} className={classnames(cls)}>
        {renderDay ? (
          renderDay(day, { ...props, ...cls, date: cellDate })
        ) : (
          <div>{day}</div>
        )}
      </div>
    );
  }
  renderWeek(num: number) {
    const { prefixCls } = this.props;
    return (
      <div key={num} className={`${prefixCls}-week`}>
        {[...Array(7)].map((_, idx) => this.renderDay(idx, num))}
      </div>
    );
  }
  render() {
    const {
      prefixCls,
      className,
      weekday,
      weekTitle,
      date,
      today,
      panelDate,
      disabledDate,
      renderDay,
      onSelectDay,
      ...other
    } = this.props;
    return (
      <div
        {...other}
        className={[prefixCls ? `${prefixCls}-body` : null, className]
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        <div className={`${prefixCls}-weekday`}>
          {weekday &&
            weekday.map((week, idx) => {
              return (
                <div
                  key={idx}
                  className={classnames({ end: idx === 0 || idx === 6 })}
                  title={weekTitle && weekTitle[idx]}
                >
                  {week}
                </div>
              );
            })}
        </div>
        <div
          className={[prefixCls ? `${prefixCls}-day-body` : null]
            .filter(Boolean)
            .join(' ')
            .trim()}
        >
          {[...Array(6)].map((_, idx) => this.renderWeek(idx))}
        </div>
      </div>
    );
  }
}
