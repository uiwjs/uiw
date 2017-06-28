import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Input from '../input';
import Popper from '../popper/';
import { isDate, parseTime } from './utils';

export default class BasePicker extends Component {
  constructor(props, _type, state) {
    super(props);
    this.type = _type
    this.state = Object.assign({}, state, {
      icon: 'time',
      value: props.value,
      visible: false,             // 菜单是否显示
      inputWidth: 0,
    }, this.propsToState(props))
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
    this.setState({ dateValue: '', icon: 'time' })
  }
  onIconMouseOver() {
    if (this.state.dateValue !== '') {
      this.setState({ icon: 'close' })
    }
  }
  onIconMouseOut() {
    this.setState({ icon: 'time' })
  }
  dateToStr(date) {
    if (this.type === 'timeselect') {
      date = parseTime(date);
      if (!date) return '';
      return (date.hours < 10 ? '0' + date.hours : date.hours) + ':' + (date.minutes < 10 ? '0' + date.minutes : date.minutes);
    }
    return ''
  }
  parseDate(date) {
    let { value } = this.state;
    date = parseTime(date)
    value = new Date(value)
    value.setHours(date.hours)
    value.setMinutes(date.minutes)
    return value;
  }
  onPicked(date, visible) {
    const { onChange } = this.props;
    this.setState({
      visible,
      text: date,
      value: this.parseDate(date)
    })
    onChange && onChange(date, this.parseDate(date))
  }
  render() {
    const { className, disabled, name, placeholder, readOnly, prefixCls } = this.props;
    const { text, visible, inputWidth } = this.state;

    const createPickerPanel = () => {
      if (!visible) return null;
      return this.pickerPanel(
        this.state,
        Object.assign({}, this.props)
      )
    }
    return (
      <span className={this.classNames(className, 'w-date-base', {

      })}>
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
        <Popper ref="popper" visible={visible}
          className={this.classNames(`${prefixCls}-popper`)}
          onChange={(visible) => this.setState({ visible })}
          clickOutside={this.handleClickOutside.bind(this)}
          style={{
            minWidth: inputWidth,
          }}
        >
          {createPickerPanel()}
        </Popper>
      </span>
    );
  }
}


BasePicker.propTypes = {
  prefixCls: PropTypes.string,
  // placeholder: PropTypes.string,
  // disabled: PropTypes.bool,
  // readOnly: PropTypes.bool,
  // // value: PropTypes.oneOfType([
  // //   PropTypes.instanceOf(Date),
  // //   PropTypes.arrayOf(PropTypes.instanceOf(Date))
  // // ]),
  // value: (props, propName, componentName) => {
  //   console.log("--233223>", new Date(props[propName]))
  //   if (new Date(props[propName]) === 'Invalid Date') {
  //     return new Error(
  //       'Invalid prop `' + propName + '` supplied to' +
  //       ' `' + componentName + '`. Validation failed.'
  //     );
  //   }
  // },
}

BasePicker.defaultProps = {
  prefixCls: 'w-timeselect',
  placeholder: '选择时间',
  readOnly: false,
  start: '09:00',
  end: '18:00',
  step: '00:30',
}
