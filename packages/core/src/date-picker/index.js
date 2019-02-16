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
      panelDate: props.panelDate,
      date: props.date,
      type: 'day',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({ date: nextProps.date });
    }
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  onSelected = (type) => {
    this.setState({ type });
  }
  onSelectedDate(type, month, paging) {
    const { onChange } = this.props;
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
        onChange(date);
      }
    });
  }
  render() {
    const { prefixCls, className, weekday, weekTitle, monthLabel, date, today, panelDate, onChange, ...other } = this.props;
    const { type } = this.state;
    return (
      <div className={classnames(prefixCls, className)} {...other}>
        <PickerDayCaption
          panelDate={panelDate}
          date={this.state.date}
          monthLabel={monthLabel}
          onSelected={this.onSelected}
        />
        {type === 'day' && (
          <PickerDay
            prefixCls={prefixCls}
            onChange={onChange}
            date={this.state.date}
            today={today || new Date()}
            panelDate={panelDate}
            weekday={weekday}
            weekTitle={weekTitle}
          />
        )}
        {type === 'month' && (
          <PickerMonth
            panelDate={panelDate}
            date={this.state.date}
            monthLabel={monthLabel}
            prefixCls={prefixCls}
            onSelected={this.onSelectedDate.bind(this, 'setMonth')}
          />
        )}
        {type === 'year' && (
          <PickerYear
            prefixCls={prefixCls}
            panelDate={panelDate}
            date={this.state.date}
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
  weekday: PropTypes.arrayOf(PropTypes.string),
  weekTitle: PropTypes.arrayOf(PropTypes.string),
  monthLabel: PropTypes.arrayOf(PropTypes.string),
  date: PropTypesDate,
  panelDate: PropTypesDate,
  today: PropTypesDate,
};

DatePicker.defaultProps = {
  prefixCls: 'w-datepicker',
  onChange() { },
  weekday: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  weekTitle: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthLabel: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  today: new Date(),
  panelDate: new Date(),
};
