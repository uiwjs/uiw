import React from 'react';
import { Component, PropTypes } from '../utils/';
import DatePanelBodyDay from '../date-picker/DatePanelBodyDay';
import Button from '../button/';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      mode: 'month',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.setState({ date: nextProps.date });
    }
    if (nextProps.mode !== this.props.mode) {
      this.setState({ mode: nextProps.mode });
    }
  }
  onClickBarBtn(mode) {
    if (mode !== 'today') {
      this.setState({ mode });
    } else {
      this.setState({ date: new Date() });
    }
  }
  onClickBarPageBtn(type) {
    const { mode, date } = this.state;
    let month = date.getMonth();
    let year = date.getFullYear();
    if (mode === 'month') {
      if (type === 'prev') {
        month = month === 0 ? 11 : month - 1;
        year = month === 0 ? year - 1 : year;
      }
      if (type === 'next') {
        month = month === 11 ? 0 : month + 1;
        year = month === 11 ? year + 1 : year;
      }
      date.setMonth(month);
      date.setFullYear(year);
    }
    if (mode === 'year') {
      year = type === 'prev' ? year - 1 : year + 1;
      date.setFullYear(year);
    }
    this.setState({ date: new Date(date) });
  }
  render() {
    const { prefixCls, className, style, ...resetProps } = this.props;
    const { date, mode } = this.state;
    const warpperProps = {
      className: this.classNames(`${prefixCls}`, className),
      style,
    };
    const buttonProps = { type: 'link', size: 'small' };
    return (
      <div {...warpperProps}>
        <div className={`${prefixCls}-caption`}>
          <div className={`${prefixCls}-caption-year`}>{date.getFullYear()}年</div>
          <div className={`${prefixCls}-caption-month`}>{date.getMonth() + 1}月</div>
          <div className={`${prefixCls}-caption-btn`}>
            <Button.Group>
              <Button {...buttonProps} icon="d-arrow-left" onClick={this.onClickBarPageBtn.bind(this, 'prev')} />
              <Button {...buttonProps} active={mode === 'year'} onClick={this.onClickBarBtn.bind(this, 'year')}>年份</Button>
              <Button {...buttonProps} active={mode === 'month'} onClick={this.onClickBarBtn.bind(this, 'month')}>月份</Button>
              <Button {...buttonProps} onClick={this.onClickBarBtn.bind(this, 'today')}>今天</Button>
              <Button {...buttonProps} icon="d-arrow-right" onClick={this.onClickBarPageBtn.bind(this, 'next')} />
            </Button.Group>
          </div>
        </div>
        <DatePanelBodyDay {...resetProps} date={date} />
      </div>
    );
  }
}


Calendar.propTypes = {
  prefixCls: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  dateCellRender: PropTypes.func,
  mode: PropTypes.oneOf(['year', 'month', 'week']),
};

Calendar.defaultProps = {
  prefixCls: 'w-calendar',
  date: new Date(),
  dateCellRender: () => { },
};
