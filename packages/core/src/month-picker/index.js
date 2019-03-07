import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from '../input';
import Popover from '../popover';
import formatter from '../formatter';
import Icon from '../icon';
import PickerMonth from '../date-picker/PickerMonth';
import PickerYear from '../date-picker/PickerYear';
import PickerCaption from '../date-picker/PickerCaption';
import './style/index.less';

export default class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.value,
      panelDate: new Date(),
      type: 'month',
      isOpen: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: nextProps.value });
    }
  }
  onSelectedDate(type, num, paging) {
    const { format } = this.props;
    let { panelDate, date } = this.state;

    date = panelDate;
    date = date[type](num);
    panelDate = new Date(date);

    date = formatter(format, new Date(date));
    const state = { panelDate, date, isOpen: false };
    if (type === 'setFullYear') {
      delete state.isOpen;
      state.type = 'month';
    }
    if (paging) {
      delete state.type;
    }
    this.setState({ ...state }, () => {
      if (this.state.date) {
        this.props.onChange(panelDate, date);
      }
    });
  }
  onSelected = (type) => {
    this.setState({ type });
  }
  handleVisibleChange(isOpen) {
    this.setState({ isOpen });
  }
  onAllowClear(date) {
    this.setState({ date }, () => {
      this.props.onChange(date);
    });
  }
  render() {
    const { prefixCls, className, popoverProps, datePickerProps, allowClear, format, monthLabel, ...inputProps } = this.props;
    const { date, type } = this.state;
    const value = date || '';
    inputProps.value = typeof value === 'string' ? value : formatter(format, value);
    if (allowClear && inputProps.value) {
      inputProps.addonAfter = <Icon className={`${prefixCls}-close-btn`} onClick={this.onAllowClear.bind(this, null)} type="close" />;
    }
    return (
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        isOpen={this.state.isOpen}
        {...popoverProps}
        onVisibleChange={this.handleVisibleChange.bind(this)}
        content={
          <div className={classnames(`${prefixCls}-popover`)}>
            <PickerCaption
              panelDate={this.state.panelDate}
              monthLabel={monthLabel}
              onSelected={this.onSelected}
            />
            {type === 'month' && (
              <PickerMonth
                panelDate={this.state.panelDate}
                monthLabel={monthLabel}
                onSelected={this.onSelectedDate.bind(this, 'setMonth')}
              />
            )}
            {type === 'year' && (
              <PickerYear
                panelDate={this.state.panelDate}
                onSelected={this.onSelectedDate.bind(this, 'setFullYear')}
              />
            )}
          </div>
        }
      >
        <Input
          placeholder="请输入日期"
          readOnly
          {...inputProps}
          className={classnames(`${prefixCls}`, className)}
        />
      </Popover>
    );
  }
}

MonthPicker.propTypes = {
  prefixCls: PropTypes.string,
  format: PropTypes.string,
  monthLabel: PropTypes.arrayOf(PropTypes.string),
  allowClear: PropTypes.bool,
  onChange: PropTypes.func,
};

MonthPicker.defaultProps = {
  prefixCls: 'w-monthpicker',
  format: 'YYYY/MM',
  monthLabel: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  allowClear: true,
  onChange() { },
};
