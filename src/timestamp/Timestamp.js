import React from 'react';
import { Component, PropTypes, formatDate, isDate } from '../utils/';

const fillZero = num => (num < 10 ? `0${num}` : num);
const hours = 60 * 60 * 1000;
const minutes = 60 * 1000;

function timeZoneConverter(date, timeZone) {
  const oldDate = new Date(date);
  const newDate = new Date();
  const stamp = oldDate.getTime();
  if (!timeZone) return oldDate;
  return (isNaN(timeZone) && !timeZone)
    ? oldDate :
    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));
}

function formatCountDown(timeleft, renderTime) {
  if (renderTime) return renderTime(timeleft);
  const h = fillZero(Math.floor(timeleft / hours));
  const m = fillZero(Math.floor((timeleft - (h * hours)) / minutes));
  const s = fillZero(Math.floor((timeleft - (h * hours) - (m * minutes)) / 1000));
  return `${h}:${m}:${s}`;
}
export default class Timestamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    const { value, format, startTime, tzc, countDown, renderTime } = this.props;
    let date = formatDate(format, timeZoneConverter(value, tzc));
    if (countDown && (isDate(value) && isDate(startTime))) {
      this.timeleft = (new Date(value)).getTime() - (new Date(startTime)).getTime();
      date = formatCountDown(this.timeleft, renderTime);
      this.tick();
    }
    this.setState({ date });
  }
  tick() {
    const { interval } = this.props;
    this.timer = setInterval(() => this.count(), interval);
  }
  clear() {
    this.timer && clearInterval(this.timer);
  }
  count() {
    const { interval, renderTime, onCountEnd, onCountChange } = this.props;
    if (this.timeleft > interval) {
      this.timeleft = this.timeleft - interval;
      this.setState({ date: formatCountDown(this.timeleft, renderTime) }, () => {
        onCountChange(this.timeleft);
      });
    } else {
      this.timeleft = 0;
      this.setState({ date: 0 }, () => {
        this.clear();
        onCountEnd(this.timeleft);
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value || nextProps.format !== this.props.format) {
      this.setState({
        date: formatDate(nextProps.format, timeZoneConverter(nextProps.value, nextProps.tzc)),
      });
    }
  }
  render() {
    const { prefixCls, className, format, renderTime, tzc, value, countDown, onCountEnd, onCountChange, startTime, ...resetProps } = this.props;
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
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  format: PropTypes.string,
  renderTime: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  countDown: PropTypes.bool,
  interval: PropTypes.number,
  startTime: PropTypes.oneOfType([
    PropTypes.string, // ISO-8601 string
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]),
  onCountEnd: PropTypes.func,
  onCountChange: PropTypes.func,
};

Timestamp.defaultProps = {
  prefixCls: 'w-timestamp',
  value: new Date(),
  format: 'Y-m-d h:i:s',
  renderTime: null,
  interval: 1000,
  countDown: false,
  startTime: new Date(),
  onCountEnd() { },
  onCountChange() { },
};
