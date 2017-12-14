import React from 'react';
import { Component, PropTypes, formatDate, isDate } from '../utils/';
import { fillUpDays } from './utils';
import DatePanelHead from './DatePanelHead';
import DatePanelMode from './DatePanelMode';
import TimePickerSpinner from './TimePickerSpinner';

export default class DatePanelBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: isDate(props.value) && props.value ? new Date(props.value) : new Date(),
      labelToday: '今天',
      labelTimeVisible: false,
      selectTime: false,
      selectDate: isDate(props.value) ? new Date(props.value) : null,
      selectYear: false,
      selectMonth: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value || new Date(),
        selectDate: nextProps.value || null,
        selectTime: !!nextProps.value,
      });
    }
  }
  handleClick(item) {
    const { onPicked } = this.props;
    onPicked(item.date);
  }
  onClickPageBtn(date) {
    const { selectDate } = this.state;
    const { onPicked } = this.props;
    const data = { value: date };
    if (selectDate) {
      data.selectDate = date;
    }
    this.setState({ ...data }, () => {
      if (selectDate) onPicked(date);
    });
  }
  renderTodayLabel = () => {
    const { prefixCls, showToday, onPicked } = this.props;
    const { labelToday } = this.state;
    if (!showToday) return null;
    return (
      <a className={`${prefixCls}-today-btn`} onClick={() => { onPicked(new Date()); }}>
        {showToday && showToday === true ? labelToday : showToday}
      </a>
    );
  }
  renderTimeLabel = () => {
    const { prefixCls, showTime } = this.props;
    const { labelTimeVisible } = this.state;
    if (!showTime) return null;
    const timeLabel = labelTimeVisible ? '选择日期' : '选择时间';
    return (
      <a className={`${prefixCls}-time-btn`} onClick={this.onSelectTime}>
        {showTime ? timeLabel : ''}
      </a>
    );
  }
  onSelectTime = () => {
    const { labelTimeVisible } = this.state;
    this.setState({
      labelTimeVisible: !labelTimeVisible,
    });
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
  onClicPanelkMode(date) {
    const { selectDate } = this.state;
    const { onPicked } = this.props;
    this.setState({
      selectYear: false,
      selectMonth: false,
      value: date,
    }, () => {
      if (selectDate) {
        onPicked(date);
      }
    });
  }
  onPickedSelectTime(date) {
    // date = 09:34:30
    const { value } = this.state;
    const { onPicked } = this.props;
    date.split(':').forEach((time, index) => {
      if (index === 0) value.setHours(parseInt(time, 10));
      if (index === 1) value.setMinutes(parseInt(time, 10));
      if (index === 2) value.setSeconds(parseInt(time, 10));
    });
    this.setState({
      value, selectDate: value,
    }, () => {
      onPicked(value);
    });
  }
  handleShortcutClick(shortcut) {
    shortcut.onClick();
  }
  render() {
    const { prefixCls, weekLabel, format, onPicked, shortcutinline, showTime, renderDate, shortcutClassName, shortcuts } = this.props;
    const { value, labelToday, selectDate, selectTime, selectYear, selectMonth, labelTimeVisible } = this.state;
    const datePanel = isDate(value) ? new Date(value) : new Date();
    const headerProps = {
      prefixCls, value: datePanel, defaultValue: this.props.value, selectYear, selectMonth, selectDate, onPicked,
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
        {this.renderTimeLabel()}
      </div>
    );

    if (selectYear || selectMonth) {
      headerProps.onClicPanelkMode = this.onClicPanelkMode.bind(this);
      return (
        <div className={`${prefixCls}`}>
          {DatePanelHeadLabel}
          <DatePanelMode onClickPageBtn={this.onClickPageBtn.bind(this)}
            { ...headerProps }
          />
        </div>
      );
    }
    let timeProps = {
      className: `${prefixCls}-select-time-panel`,
      format: 'H:i:s',
      isDatePicker: true,
      value: selectTime ? formatDate('H:i:s', value) : '',
      onPicked: this.onPickedSelectTime.bind(this),
    };
    if (showTime) {
      timeProps = { ...showTime, ...timeProps };
    }
    return (
      <div className={`${prefixCls}`}>
        {labelTimeVisible && (
          <TimePickerSpinner {...timeProps} />
        )}
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
            if (renderDate) {
              const child = renderDate(item, item.selectDay && selectDate);
              return React.cloneElement(child, {
                key: idx,
                onClick: () => this.handleClick(item),
              });
            }
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
        {
          shortcuts && Array.isArray(shortcuts) && (
            <div className={
              this.classNames(`${prefixCls}-shortcut`, {
                inline: shortcutinline,
                block: !shortcutinline,
                [shortcutClassName]: shortcutClassName,
              })
            }
            >
              {
                shortcuts.map((e, idx) => {
                  return (
                    <span
                      key={idx}
                      className={`${prefixCls}-shortcut-item`}
                      onClick={() => this.handleShortcutClick(e)}
                    >{e.text}
                    </span>
                  );
                })
              }
            </div>
          )
        }
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
  renderDate: PropTypes.func,
  showToday: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
  ]),
  showTime: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  weekLabel: PropTypes.arrayOf(PropTypes.string),
};

DatePanelBody.defaultProps = {
  allowClear: false,
  format: 'Y/m/d',
  showToday: false, // 是否展示“今天”按钮
  showTime: false, // 是否展示“选择时间”按钮
  prefixCls: 'w-datepicker',
  weekLabel: ['日', '一', '二', '三', '四', '五', '六'],
  onPicked() { },
};
