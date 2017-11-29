import React from 'react';
import { Component, PropTypes, formatDate, isDate } from '../utils/';
import { fillUpDays } from './utils';
import DatePanelHead from './DatePanelHead';
import DatePanelMode from './DatePanelMode';

export default class DatePanelBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: isDate(props.value) ? new Date(props.value) : props.value,
      labelToday: '今天',
      selectDate: isDate(props.value) ? props.value : null,
      selectYear: false,
      selectMonth: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value || new Date(),
        selectDate: nextProps.value,
      });
    }
  }
  handleClick(item) {
    const { onPicked } = this.props;
    onPicked(item.date);
  }
  onClickPageBtn(date) {
    this.setState({
      value: date,
    });
  }
  renderTodayLabel = () => {
    const { prefixCls, showToday, format, onPicked } = this.props;
    const { labelToday } = this.state;
    if (!showToday) return null;
    return (
      <a className={`${prefixCls}-today-btn`} onClick={() => { onPicked(formatDate(new Date(), format)); }}>
        {showToday && showToday === true ? labelToday : showToday}
      </a>
    );
  }
  onPickerYear(year, isShow) {
    this.setState({
      selectYear: isShow,
      selectMonth: !isShow,
    });
  }
  onPickerMonth(month, isShow) {
    this.setState({
      selectYear: !isShow,
      selectMonth: isShow,
    });
  }
  renderPanelBody() {

  }
  render() {
    const { prefixCls, weekLabel, format } = this.props;
    const { value, labelToday, selectDate, selectYear, selectMonth } = this.state;
    const datePanel = isDate(value) ? new Date(value) : new Date();
    const headerProps = {
      prefixCls, value: datePanel, selectYear, selectMonth,

    };

    const DatePanelHeadLabel = (
      <DatePanelHead {...headerProps}
        onClickPageBtn={this.onClickPageBtn.bind(this)}
        onPickerYear={this.onPickerYear.bind(this)}
        onPickerMonth={this.onPickerMonth.bind(this)}
      />
    );

    const LabelFooter = (
      <div className={`${prefixCls}-footer`}>
        {this.renderTodayLabel()}
      </div>
    );

    if (selectYear || selectMonth) {
      return (
        <div className={`${prefixCls}`}>
          {DatePanelHeadLabel}
          <DatePanelMode onClickPageBtn={this.onClickPageBtn.bind(this)} {...headerProps} />
        </div>
      );
    }
    return (
      <div className={`${prefixCls}`}>
        {DatePanelHeadLabel}
        <div className={`${prefixCls}-week`}>
          {weekLabel.map((label, idx) => {
            return (
              <span key={idx} className={this.classNames({ end: idx === 0 || idx === 6 })} >
                {label}
              </span>
            );
          })}
        </div>
        <div className={`${prefixCls}-days`}>
          {fillUpDays(datePanel, format, new Date(selectDate)).map((item, idx) => {
            return (
              <span key={idx}
                title={item.today ? labelToday : item.format}
                className={this.classNames(item.className, {
                  [`${prefixCls}-today`]: item.today,
                  [`${prefixCls}-select-day`]: item.selectDay && selectDate,
                  [`${prefixCls}-sun`]: item.week === 0,
                  [`${prefixCls}-sat`]: item.week === 6,
                })}
                onClick={() => this.handleClick(item)}
              >
                {item.day}
              </span>
            );
          })}
        </div>
        {LabelFooter}
      </div>
    );
  }
}

DatePanelBody.propTypes = {
  prefixCls: PropTypes.string,
  format: PropTypes.string,
  allowClear: PropTypes.bool,
  onPicked: PropTypes.func,
  showToday: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
  ]),
  weekLabel: PropTypes.arrayOf(PropTypes.string),
};

DatePanelBody.defaultProps = {
  allowClear: false,
  format: 'yyyy-MM-dd',
  showToday: false, // 是否展示“今天”按钮
  prefixCls: 'w-datepicker',
  weekLabel: ['日', '一', '二', '三', '四', '五', '六'],
  onPicked() { },
};
