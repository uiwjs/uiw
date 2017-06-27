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
      this.setState({ visible });
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
    if (this.refs.input) {
      this.refs.input.focus();
    }
    this.toggleMenu(e)
  }
  render() {
    const { prefixCls, style, name, multiple, filterable, disabled, children } = this.props;
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
          disabled={disabled}
          value={selectedLabel}
          readOnly={!filterable || multiple}
          placeholder={this.state.placeholder}
          onMouseDown={this.onMouseDown.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          onChange={(e, value) => this.setState({ selectedLabel: value })}
          icon={this.state.icon}
        />
        <Popper visible={visible && children && children.length > 0} className={this.classNames(`${prefixCls}-popper`)}
          onChange={(visible) => this.setState({ visible })}
          style={{
            minWidth: inputWidth,
          }}
        >
          <ul className={`${prefixCls}-warp`}>
            {children}
          </ul>
        </Popper>
      </div>
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
}

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false,
}
