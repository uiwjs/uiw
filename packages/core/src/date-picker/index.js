import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PickerDay from './PickerDay';
import PickerMonth from './PickerMonth';
import PickerYear from './PickerYear';
import PickerDayCaption from './PickerCaption';
import './style/index.less';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelDate: props.panelDate || new Date(),
      date: props.date,
      type: 'day',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({ date: nextProps.date, panelDate: new Date(nextProps.date) });
    }
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  onChange = (date) => {
    this.props.onChange(date);
  }
  onSelected = (type) => {
    const { today } = this.props;
    const { date, panelDate } = this.state;
    if (/^(year|month)$/.test(type)) {
      this.setState({ type });
    } else {
      let currentDate = date || panelDate;
      let month = currentDate.getMonth();
      const data = {};
      if (type === 'prev') {
        month -= 1;
      }
      if (type === 'next') {
        month += 1;
      }
      currentDate.setMonth(month);
      if (type === 'today') {
        currentDate = new Date(today);
      }
      data.panelDate = currentDate;
      if (date) {
        data.date = currentDate;
      }
      this.setState({ ...data });
    }
  }
  onSelectedDate(type, month, paging) {
    const { panelDate, date } = this.state;
    panelDate[type](month);
    if (date) {
      date[type](month);
    }
    const props = { type: 'day', panelDate, date };
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
    const { prefixCls, className, weekday, weekTitle, monthLabel, date, today, todayButton, panelDate, disabledDate, onChange, ...other } = this.props;
    const { type } = this.state;
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
            onChange={this.onChange}
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
      </div>
    );
  }
}

const PropTypesDate = (props, propName, componentName) => {
  if (props[propName] && !(props[propName] instanceof Date)) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`);
  }
};

DatePicker.propTypes = {
  prefixCls: PropTypes.string,
  onChange: PropTypes.func,
  disabledDate: PropTypes.func,
  weekday: PropTypes.arrayOf(PropTypes.string),
  weekTitle: PropTypes.arrayOf(PropTypes.string),
  monthLabel: PropTypes.arrayOf(PropTypes.string),
  date: PropTypesDate,
  panelDate: PropTypesDate,
  today: PropTypesDate,
  todayButton: PropTypes.string,
};

DatePicker.defaultProps = {
  prefixCls: 'w-datepicker',
  onChange() { },
  disabledDate() { },
  weekday: ['日', '一', '二', '三', '四', '五', '六'],
  weekTitle: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  monthLabel: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  today: new Date(),
};
