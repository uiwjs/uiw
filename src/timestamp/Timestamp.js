import React from 'react';
import { Component, PropTypes } from '../utils/';

function formatDate(date, formatStr) {
  const timeFormat = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // millisecond
  };
  let formatString = formatStr;
  if (/(y+)/.test(formatStr)) formatString = formatString.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  for (const k in timeFormat) {
    if (new RegExp(`(${k})`).test(formatString)) {
      formatString = formatString.replace(RegExp.$1, RegExp.$1.length === 1
        ? timeFormat[k]
        : (`00${timeFormat[k]}`).substr((`${timeFormat[k]}`).length));
    }
  }
  return formatString;
}

function timeZoneConverter(date, timeZone) {
  const oldDate = new Date(date);
  const newDate = new Date();
  const stamp = oldDate.getTime();
  if (!timeZone) return oldDate;
  return (isNaN(timeZone) && !timeZone)
    ? oldDate :
    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));
}

export default class Timestamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    const { value, format, tzc } = this.props;
    this.setState({
      date: formatDate(timeZoneConverter(value, tzc), format),
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value || nextProps.format !== this.props.format) {
      this.setState({
        date: formatDate(timeZoneConverter(nextProps.value, nextProps.tzc), nextProps.format),
      });
    }
  }
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    const { date } = this.state;
    return (
      <span className={this.classNames(`${prefixCls}`, className)} {...resetProps}>
        {date}
      </span>
    );
  }
}

Timestamp.propTypes = {
  prefixCls: PropTypes.string,
  tzc: PropTypes.number, // time Zone Converter
  value: PropTypes.oneOfType([
    PropTypes.string, // ISO-8601 string
    PropTypes.object, // Date object
  ]).isRequired,
  format: PropTypes.string,
};

Timestamp.defaultProps = {
  prefixCls: 'w-timestamp',
  format: 'yyyy-MM-dd hh:mm:ss',
};
