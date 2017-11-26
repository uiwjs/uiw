import React from 'react';
import { Component, PropTypes, formatDate } from '../utils/';
import { fillUpDays } from './utils';
import DatePanelHead from './DatePanelHead';

export default class DatePanelBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || new Date(),
      labelToday: '今天',
      isInputEmpty: !!props.value, // Input 是否为空
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        isInputEmpty: !nextProps.value,
        value: nextProps.value || new Date(),
      });
    }
  }
  handleClick(item) {
    const { onPicked } = this.props;
    onPicked(item.format);
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
      <a className={`${prefixCls}-today-btn`}
        onClick={() => {
          onPicked(formatDate(new Date(), format));
          console.log(showToday);
        }}
      >
        {showToday && showToday === true ? labelToday : showToday}
      </a>
    );
  }
  render() {
    const { prefixCls, weekLabel, format } = this.props;
    const { value, labelToday, isInputEmpty } = this.state;
    const headerProps = {
      prefixCls, value,
    };
    return (
      <div className={`${prefixCls}`}>
        <DatePanelHead {...headerProps} onClickPageBtn={this.onClickPageBtn.bind(this)} />
        <div className={`${prefixCls}-week`}>
          {weekLabel.map((label, idx) => {
            return (
              <span key={idx}
                className={this.classNames({
                  end: idx === 0 || idx === 6,
                })}
              >
                {label}
              </span>
            );
          })}
        </div>
        <div className={`${prefixCls}-days`}>
          {fillUpDays(value, format, this.props.value).map((item, idx) => {
            return (
              <span key={idx}
                title={item.today ? labelToday : item.format}
                className={this.classNames(item.className, {
                  [`${prefixCls}-today`]: item.today,
                  [`${prefixCls}-select-day`]: item.selectDay && !isInputEmpty,
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
        <div className={`${prefixCls}-footer`}>
          {this.renderTodayLabel()}
        </div>
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
