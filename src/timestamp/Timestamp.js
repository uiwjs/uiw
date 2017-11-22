import React from 'react';
import { Component, PropTypes } from '../utils/';

function formatDate(date, formatStr) {
  // date = new Date(date)
  let timeFormat = {
    "M+": date.getMonth() + 1, //month
    "d+": date.getDate(), //day
    "h+": date.getHours(), //hour
    "m+": date.getMinutes(), //minute
    "s+": date.getSeconds(), //second
    "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
    "S": date.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(formatStr)) formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in timeFormat) {
    if (new RegExp("(" + k + ")").test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length === 1 ? timeFormat[k] : ("00" + timeFormat[k]).substr(("" + timeFormat[k]).length));
    }
  }
  return formatStr;
}

function timeZoneConverter(date, timeZone) {
  let old_date = new Date(date), new_date = new Date(), stamp = old_date.getTime();
  if (!timeZone) return old_date
  return (isNaN(timeZone) && !timeZone) ? old_date : new Date(stamp + new_date.getTimezoneOffset() * 60 * 1000 + timeZone * 60 * 60 * 1000);
}

export default class Timestamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    }
  }
  componentDidMount() {
    const { value, format, TZC } = this.props
    this.setState({
      date: formatDate(timeZoneConverter(value, TZC), format)
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value || nextProps.format !== this.props.format) {
      this.setState({
        date: formatDate(timeZoneConverter(nextProps.value, nextProps.TZC), nextProps.format)
      })
    }
  }
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    const { date } = this.state;
    return (
      <span className={this.classNames(`${prefixCls}`, className)} {...resetProps}>
        {date}
      </span>
    )
  }
}

Timestamp.propTypes = {
  prefixCls: PropTypes.string,
  TZC: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string, // ISO-8601 string
    PropTypes.object  // Date object
  ]).isRequired,
  format: PropTypes.string,
}

Timestamp.defaultProps = {
  prefixCls: 'w-timestamp',
  format: 'yyyy-MM-dd hh:mm:ss',
}
