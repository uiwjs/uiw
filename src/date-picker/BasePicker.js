import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes, isDate } from '../utils/';
import Input from '../input';
import { parseTime, dateTimeToStr } from './utils';

export default class BasePicker extends Component {
  constructor(props, _type, state) {
    super(props);
    this.type = _type;
    const defaultValue = props.value;
    // 合并初始化过来的数据
    this.state = Object.assign(
      {}, state,
      {
        icon: _type === 'datepicker' ? 'date' : 'time-o',
        value: new Date(),
        visible: false, // 菜单是否显示
        defaultValue,
        inputWidth: 0,
        placeholder: props.placeholder,
      },
      { ...this.propsToState(props) }
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.propsToState(nextProps) });
  }
  // props与当前state合并
  propsToState(props) {
    return {
      text: isDate(props.value) ? this.dateToStr(props.value) : '',
      value: isDate(props.value) ? props.value : new Date(),
    };
  }
  // 展示隐藏菜单
  toggleMenu() {
    const { disabled, children } = this.props;
    const { visible } = this.state;
    if (children && children.length === 0) return;
    if (!disabled) {
      this.setState({ visible: !visible });
    }
  }
  onMouseDown(e) {
    const { visible } = this.state;
    if (!visible) {
      // 单选展开菜单
      this.toggleMenu(e);
    }
  }
  handleClickOutside(e) {
    // Ignore clicks on the component it self
    // https://codepen.io/graubnla/pen/EgdgZm
    // Detect a click outside of a React Component
    // https://www.dhariri.com/posts/57c724e4d1befa66e5b8e056
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(e.target))) {
      this.setState({ visible: false });
    }
  }
  onIconClick() {
    const { onChange } = this.props;
    this.setState({ text: '', value: '', icon: this.type === 'datepicker' ? 'date' : 'time-o' });
    onChange && onChange();
  }
  onIconMouseOver() {
    if (this.state.text !== '') {
      this.setState({ icon: 'close' });
    }
  }
  onIconMouseOut() {
    this.setState({ icon: this.type === 'datepicker' ? 'date' : 'time-o' });
  }
  dateToStr(date) {
    const { format } = this.props;
    if (this.type === 'timepicker') {
      return dateTimeToStr(date, format);
    }

    if (this.type === 'timeselect') {
      date = parseTime(date);
      if (!date) return '';
      return `${date.hours < 10 ? `0${date.hours}` : date.hours}:${date.minutes < 10 ? `0${date.minutes}` : date.minutes}`;
    }
  }
  parseDate(date) {
    let { value } = this.state;
    const { defaultValue } = this.state;
    if (!value) value = defaultValue;
    date = parseTime(date);
    value = new Date(value);
    date.hours > -1 && value.setHours(date.hours);
    date.minutes > -1 && value.setMinutes(date.minutes);
    date.seconds > -1 && value.setSeconds(date.seconds);
    return value;
  }
  // 选择事件
  onPicked(date, visible) {
    const { onChange } = this.props;
    this.setState({
      visible,
      text: date,
      value: this.type === 'datepicker' ? new Date(date) : this.parseDate(date),
    });
    onChange && onChange(date, this.parseDate(date));
  }
  createPickerPanel() {
    return this.pickerPanel(this.state);
  }
  render() {
    const { className, style,
      disabledHours, placeholder, disabledMinutes, disabledSeconds, hideDisabled,
      minTime, maxTime,
      ...props } = this.props;
    const { text, ...states } = this.state;
    return (
      <span style={style} className={this.classNames(states.className, className, 'w-date-base')}>
        <Input
          type="text"
          {...props}
          value={text}
          placeholder={states.placeholder}
          onMouseDown={this.onMouseDown.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          onIconMouseOver={this.onIconMouseOver.bind(this)}
          onIconMouseOut={this.onIconMouseOut.bind(this)}
          onChange={(e, value) => this.setState({ value })}
          icon={this.state.icon}
        />
        {this.createPickerPanel()}
      </span>
    );
  }
}

BasePicker.propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  hideDisabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([
    // PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),
};
BasePicker.defaultProps = {
  placeholder: '选择时间',
  readOnly: false,
  disabled: false,
};
