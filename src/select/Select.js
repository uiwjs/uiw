import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Input from '../input/'
import Popper from '../popper/'

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      placeholder: props.placeholder || '请选择',
      inputHovering: false,
      selected: undefined,
      selectedLabel: props.value, //默认选中的值 多选为数组
      visible: false,             // 菜单是否显示
      icon: "arrow-down",
      inputWidth: 0,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  getChildContext() {
    return { component: this }
  }
  componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    })
    this.selectedData();
    this.handleValueChange();
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
  // 初始化默认选中
  selectedData() {
    const { value, children } = this.props;
    const selected = children.filter(option => {
      return option.props.value === value
    })[0];
    if (selected) {
      this.setState({
        selectedLabel: selected.props.label
      })
    }
  }

  componentWillReceiveProps(props) {
    if (props.placeholder !== this.props.placeholder) {
      this.setState({
        placeholder: props.placeholder
      });
    }
    if (props.value !== this.props.value) {
      const { selectedLabel } = this.state;
      this.setState({
        value: props.value,
        selectedLabel: props.value === "" || props.value.length === 0 ? props.value : selectedLabel
      }, () => {
        this.selectedData()
        this.handleValueChange();
      });
    }
  }
  onOptionCreate(option) {
    // 添加选中的组件
    // this.state.options.push(option);
    // console.log("option:::", option)
    // this.setState(this.state);
  }
  // 改变选中的值
  handleValueChange() {
    const { value, options } = this.state;
    const selected = options.filter(option => {
      return option.props.value === value
    })[0];
    if (selected) {
      this.setState({
        selectedLabel: selected.props.label
      })
    }
  }
  // 触发onChange事件
  onSelectedChange(val) {
    const { multiple, onChange } = this.props;
    if (!multiple) {
      onChange && onChange(val, val.props.value);
    }
  }
  // 点击选中事件, 选中设置Select值
  onOptionClick(option) {
    let { multiple } = this.props;
    let { visible, selected, selectedLabel } = this.state;

    if (!multiple) {
      selected = option;
      selectedLabel = option.currentLabel();
      visible = false;
    }

    this.setState({
      selected,
      selectedLabel
    }, () => {
      if (!multiple) {
        this.onSelectedChange(this.state.selected);
      }
      this.setState({ visible: visible })
    })
  }
  // 展示隐藏菜单
  toggleMenu(e) {
    const { disabled, children } = this.props;
    const { visible } = this.state;

    if (children.length === 0) return;
    if (!disabled) {
      this.setState({ visible: !visible });
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    if (this.refs.input) {
      this.refs.input.focus();
    }
    // 单选展开菜单
    this.toggleMenu(e)
  }
  onIconClick(e) {
    if (this.state.icon === 'close') {
      this.setState({
        selectedLabel: '',
        icon: 'arrow-down'
      })
      return;
    }
    if (this.refs.input) {
      this.refs.input.focus();
    }
    this.toggleMenu(e)
  }
  showCloseIcon(type) {
    if (this.state.selectedLabel && this.props.clearable) {
      this.setState({
        icon: type
      })
    }
  }
  onIconMouseOver(e) {
    this.showCloseIcon("close")
  }
  onIconMouseOut(e) {
    this.showCloseIcon("arrow-down")
  }
  onMouseEnter(e) {
    this.showCloseIcon("close")
  }
  onMouseLeave(e) {
    this.showCloseIcon("arrow-down")
  }
  render() {
    const { prefixCls, style, size, name, multiple, filterable, disabled, children } = this.props;
    const { visible, inputWidth, selectedLabel } = this.state;
    return (
      <div
        style={style}
        className={this.classNames(`${prefixCls}`, {
          unfold: this.state.visible, // 是否展开
        })}
      >
        <Input
          type="text"
          ref="input"
          name={name}
          size={size}
          disabled={disabled}
          value={selectedLabel}
          readOnly={!filterable || multiple}
          placeholder={this.state.placeholder}
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          onIconMouseOut={this.onIconMouseOut.bind(this)}
          onIconMouseOver={this.onIconMouseOver.bind(this)}
          onChange={(e, value) => this.setState({ selectedLabel: value })}
          icon={this.state.icon}
        />
        <Popper ref="popper" visible={visible && children && children.length > 0} className={this.classNames(`${prefixCls}-popper`)}
          clickOutside={this.handleClickOutside.bind(this)}
          style={{
            minWidth: inputWidth,
          }}
        >
          <ul className={`${prefixCls}-warp`}>
            {children}
          </ul>
        </Popper>
      </div >
    );
  }
}

Select.childContextTypes = {
  component: PropTypes.any
};

Select.propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,   // 是否禁用
  filterable: PropTypes.bool, // 是否可搜索
  multiple: PropTypes.bool,   // 是否可多选
  clearable: PropTypes.bool,  // 清空单选
  value: PropTypes.string,    // 是否可多选
  size: PropTypes.oneOf(['large', 'small', 'default', 'mini']),
}

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false,
}
