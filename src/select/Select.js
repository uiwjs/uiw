import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes, randomid } from '../utils/';
import Input from '../input/';
import Tag from '../tag';
import Popper from '../popper/';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder || '请选择',
      inputHovering: false,
      selected: props.multiple ? [] : undefined,
      selectedLabel: props.value,      // 默认选中的值 多选为数组
      value: props.value, // 多选或单选值
      visible: false,                  // 菜单是否显示
      icon: "arrow-down",
      inputWidth: 0,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  getChildContext() {
    return { component: this }
  }
  componentWillReceiveProps(props) {
    if (props.placeholder !== this.props.placeholder) {
      this.setState({
        placeholder: props.placeholder
      });
    }
    if (props.value !== this.state.value) {
      this.setState({
        value: props.value,
      }, () => {
        this.selectedData()
      });
    }
  }
  componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    })
    this.selectedData(true);
    // this.handleValueChange();
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
  showLabelText(props) {
    return props.label ? props.label : props.value
  }
  // 初始化默认选中
  selectedData(init) {
    const { multiple, children } = this.props;
    let { selectedLabel, selected, value } = this.state;
    if (multiple && Array.isArray(value)) {

      selected = children.reduce((prev, curr) => {
        return value.indexOf(curr.props.value) > -1 ? prev.concat(curr) : prev;
      }, [])
      selectedLabel = selected.map(option => {
        return this.showLabelText(option.props);
      });
      this.setState({
        selected, selectedLabel
      }, () => {
        this.resetInputHeight(init)
      });
    } else {
      // 过滤改变 selectedLabel 的value对应的值
      selected = children.filter(option => {
        return option.props.value === value
      })[0];
      if (selected) {
        this.setState({
          selected,
          selectedLabel: this.showLabelText(selected.props)
        })
      }
    }
  }
  resetInputHeight(init) {
    const { input, tags } = this.refs;
    input.refs.input.style.height = tags.clientHeight + 'px';
    if (!init) {
      input.refs.input.focus();
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
    let { value } = this.state;
    if (multiple) {
      if (value.indexOf(option.props.value) > -1) {
        value.splice(value.indexOf(option.props.value), 1)
      } else {
        value.push(option.props.value)
      }
    } else {
      value = option.props.value
      this.setState({ visible: false })
    }
    this.setState({ value }, () => {
      this.selectedData()
    })
  }
  onTagClose(item) {
    this.onOptionClick(item)
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
  // 输入内容，回调事件
  onInputChange() {
    if (this.props.filterable && this.state.selectedLabel !== this.state.value) {
      this.setState({
        selectedLabel: this.state.selectedLabel
      });
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
  onPopperMouseEnter() {
    // console.log("this.input:", this.refs.input.refs.input)
    // this.refs.input.refs.input.focus()
    // this.input.focus()
  }
  onPopperMouseLeave() {

  }
  render() {
    const { prefixCls, style, size, name, multiple, filterable, disabled, children } = this.props;
    const { visible, inputWidth, selected, selectedLabel } = this.state;
    return (
      <div
        style={style}
        className={this.classNames(`${prefixCls}`, {
          "unfold": this.state.visible, // 是否展开
          "w-multiple": multiple
        })}
      >
        {
          multiple && (
            <div ref="tags" className={`${prefixCls}-tags`}>
              {
                selected.map((item, idx) => {
                  return (
                    <Tag
                      key={`${idx}${randomid()}`}
                      onClose={this.onTagClose.bind(this, item)}
                    >{this.showLabelText(item.props)}</Tag>
                  )
                })
              }
            </div>
          )
        }
        <Input
          type="text"
          ref="input"
          name={name}
          size={size}
          disabled={disabled}
          value={selectedLabel && multiple ? (selectedLabel.length > 0 ? " " : '') : selectedLabel}
          icon={this.state.icon}
          readOnly={!filterable || multiple}
          placeholder={this.state.placeholder}
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          onIconMouseOut={this.onIconMouseOut.bind(this)}
          onIconMouseOver={this.onIconMouseOver.bind(this)}
          onChange={(e, value) => this.setState({ selectedLabel: value })}
          onKeyUp={this.onInputChange.bind(this)}
        />
        <Popper ref="popper" visible={visible && children && children.length > 0} className={this.classNames(`${prefixCls}-popper`)}
          clickOutside={this.handleClickOutside.bind(this)}
          style={{
            minWidth: inputWidth,
          }}
          onMouseEnter={this.onPopperMouseEnter.bind(this)}
          onMouseLeave={this.onPopperMouseLeave.bind(this)}
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
  value: PropTypes.oneOfType([// 是否可多选
    PropTypes.string,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['large', 'small', 'default', 'mini']),
}

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false,
}
