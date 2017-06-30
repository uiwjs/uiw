import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Input from '../input';
import { isDate, parseTime, dateTimeToStr } from './utils';

function isTimeValid(props, propName, componentName) {
  let dt = props[propName];
  let _isDate = true;
  if (!dt) return;
  if (dt !== '') {
    if (dt instanceof Array) {
      for (let i = 0; i < dt.length; i++) {
        if (!isDate(dt[i])) {
          _isDate = false; break;
        }
      }
    } else if (!isDate(dt)) {
      _isDate = false;
    }
    if (_isDate === false) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to  `' + componentName + '`. Validation failed.'
      );
    }
  }
}

export default class BasePicker extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    hideDisabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: (props, propName, componentName) => isTimeValid(props, propName, componentName),
  }
  static defaultProps = {
    placeholder: '选择时间',
    readOnly: false,
    disabled: false,
  }
  constructor(props, _type, state) {
    super(props);
    this.type = _type;
    let defaultValue = props.value;
    this.state = Object.assign({}, state, {
      icon: 'time',
      value: new Date(),
      visible: false,             // 菜单是否显示
      defaultValue,
      inputWidth: 0,
    }, this.propsToState(props)
    )
    console.log("this.state::", this.state)
  }
  componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState(this.propsToState(nextProps))
  }
  // props与当前state合并
  propsToState(props) {
    return {
      text: isDate(props.value) ? this.dateToStr(props.value) : '',
      value: isDate(props.value) ? props.value : new Date()
    };
  }
  // 展示隐藏菜单
  toggleMenu(e) {
    const { disabled, children } = this.props;
    const { visible } = this.state;
    if (children && children.length === 0) return;
    if (!disabled) {
      this.setState({ visible: !visible });
    }
  }
  onMouseDown(e) {
    const { visible } = this.state;
    if (this.refs.input) {
      this.refs.input.focus();
    }
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
    this.setState({ text: '', value: '', icon: 'time' })
    onChange && onChange('', '')
  }
  onIconMouseOver() {
    if (this.state.text !== '') {
      this.setState({ icon: 'close' })
    }
  }
  onIconMouseOut() {
    this.setState({ icon: 'time' })
  }
  dateToStr(date) {
    const { format } = this.props;
    if (this.type === 'timepicker') {
      return dateTimeToStr(date, format);
    }

    if (this.type === 'timeselect') {
      date = parseTime(date);
      if (!date) return '';
      return (date.hours < 10 ? '0' + date.hours : date.hours) + ':' + (date.minutes < 10 ? '0' + date.minutes : date.minutes);
    }
  }
  parseDate(date) {
    let { value, defaultValue } = this.state;
    if (!value) value = defaultValue;
    date = parseTime(date)
    value = new Date(value)
    value.setHours(date.hours)
    value.setMinutes(date.minutes)
    console.log("date4:", date, value)
    return value;
  }
  onPicked(date, visible) {
    const { onChange } = this.props;
    console.log("date2--->:", date, this.parseDate(date))
    this.setState({
      visible,
      text: date,
      value: this.parseDate(date),
    })

    onChange && onChange(date, this.parseDate(date))
  }
  createPickerPanel() {
    return this.pickerPanel(
      this.state,
      Object.assign({}, { ...this.props })
    )
  }
  render() {
    const { className, style, disabled, name, placeholder, readOnly } = this.props;
    const { text } = this.state;
    return (
      <span style={style} className={this.classNames(className, 'w-date-base')}>
        <Input
          type="text"
          ref="input"
          name={name}
          disabled={disabled}
          value={text}
          readOnly={readOnly}
          placeholder={placeholder}
          onMouseDown={this.onMouseDown.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          onIconMouseOver={this.onIconMouseOver.bind(this)}
          onIconMouseOut={this.onIconMouseOut.bind(this)}
          onChange={(e, value) => this.setState({ value: value })}
          icon={this.state.icon}
        />
        {this.createPickerPanel()}
      </span>
    );
  }
}