import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PickerDay from '../date-picker/PickerDay';
import Icon from '../icon';
import { PropTypesDate } from '../utils';
import timestamp from '../timestamp';
import './style/index.less';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelDate: props.panelDate || new Date(),
      date: props.date,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  onChange = (date) => {
    this.setState({ panelDate: date });
  }
  onPaging(type) {
    const { panelDate } = this.state;
    const { today } = this.props;
    if (type === 'today') {
      this.setState({ panelDate: today || new Date() });
      return;
    }
    const month = panelDate.getMonth();
    if (type === 'prev') {
      panelDate.setMonth(month - 1);
    }
    if (type === 'next') {
      panelDate.setMonth(month + 1);
    }
    this.setState({ panelDate });
  }
  renderDay = (day, props, cellDate) => {
    const { prefixCls, data } = this.props;
    const dayData = data.filter((item) => {
      let arr = item.date && item.date.split('/');
      arr = (arr || []).map(num => Number(num));
      if (arr.length === 1) {
        return day === arr[0];
      }
      if (arr.length === 2) {
        return cellDate.getMonth() + 1 === arr[0] && day === arr[1];
      }
      if (arr.length === 3) {
        return cellDate.getFullYear() === arr[0] && cellDate.getMonth() + 1 === arr[1] && day === arr[2];
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
    const { prefixCls, className, renderDay, disabledDate, today, todayLabel, panelDate, todayButton, weekday, weekTitle, titleFormat, monthLabel, ...other } = this.props;
    return (
      <div className={classnames(prefixCls, className)} {...other}>
        <div className={`${prefixCls}-caption`}>
          <div className={`${prefixCls}-title`}>{timestamp(titleFormat, this.state.panelDate)}</div>
          <div className={`${prefixCls}-btn-group`}>
            <Icon type="arrow-down" onClick={this.onPaging.bind(this, 'prev')} />
            <span className={`${prefixCls}-btn`} onClick={this.onPaging.bind(this, 'today')} >{todayLabel}</span>
            <Icon type="arrow-down" onClick={this.onPaging.bind(this, 'next')} />
          </div>
        </div>
        <PickerDay
          disabledDate={disabledDate}
          onChange={this.onChange}
          renderDay={this.renderDay}
          date={this.state.date}
          today={today || new Date()}
          panelDate={this.state.panelDate || new Date()}
          weekday={weekday}
          weekTitle={weekTitle}
        />
      </div>
    );
  }
}

Calendar.propTypes = {
  prefixCls: PropTypes.string,
  titleFormat: PropTypes.string,
  disabledDate: PropTypes.func,
  renderDay: PropTypes.func,
  panelDate: PropTypesDate,
  today: PropTypesDate,
  data: PropTypes.array,
  todayLabel: PropTypes.string,
  weekday: PropTypes.arrayOf(PropTypes.string),
  weekTitle: PropTypes.arrayOf(PropTypes.string),
  monthLabel: PropTypes.arrayOf(PropTypes.string),
};

Calendar.defaultProps = {
  prefixCls: 'w-calendar',
  titleFormat: 'YYYY年MM月',
  todayLabel: '今天',
  monthLabel: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  disabledDate() { },
};
