import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Input from '../input/'
import Popper from '../popper/'
import Transition from '../transition/'

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder || '请选择',
      inputHovering: false,
      selected: undefined,
      selectedLabel: props.value, //默认选中的值
      visible: false,   // 菜单是否显示
      icon: "arrow-down",
      inputWidth: 0,
    }
  }
  componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    })
  }
  componentDidUpdate() {
    // let { inputWidth } = this.state;
    console.log("===>", this.input.getBoundingClientRect().width)
  }
  // 展示隐藏菜单
  toggleMenu() {
    const { disabled } = this.props;
    const { visible } = this.state;
    console.log("visible::", visible)
    // if (visible) {
    //   return;
    // }

    if (!disabled) {
      this.setState({
        visible: !visible
      });
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    if (this.refs.input) {
      this.refs.input.focus();
    }
  }
  onIconClick() {
    if (this.refs.input) {
      this.refs.input.focus();
    }
  }
  onMouseEnter() {
    // this.setState({
    //   inputHovering: true
    // })
  }
  onMouseLeave() {
    // this.setState({
    //   inputHovering: false
    // })
  }
  render() {
    const { prefixCls, style, multiple, filterable, disabled } = this.props;
    const { visible, inputWidth, selectedLabel } = this.state;
    console.log("visible:ss:", visible)
    return (
      <div
        style={style}
        className={this.classNames(`${prefixCls}`, {
          unfold: this.state.visible, // 是否展开
        })}
        onClick={this.toggleMenu.bind(this)}
      >
        <Input
          type="text"
          ref="input"
          disabled={disabled}
          value={selectedLabel}
          readOnly={!filterable || multiple}
          placeholder={this.state.placeholder}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onMouseDown={this.onMouseDown.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          icon={this.state.icon}
        />
        <Transition type="fade-in">
          {visible &&
            <Popper className={this.classNames(`${prefixCls}-popper`)}
              style={{
                minWidth: inputWidth,
              }}
            >
              <ul className={`${prefixCls}-warp`}>
                {this.props.children}
              </ul>
            </Popper>}
        </Transition>
      </div>
    );
  }
}

Select.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,   // 是否禁用
  filterable: PropTypes.bool, // 是否可搜索
  multiple: PropTypes.bool,   // 是否可多选
}

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false,
}
