import React from 'react';
import { Component, PropTypes, formatDate } from '../utils/';

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
