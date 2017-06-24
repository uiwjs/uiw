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
      options: [],
      placeholder: props.placeholder || '请选择',
      inputHovering: false,
      selected: undefined,
      selectedLabel: props.value, //默认选中的值 多选为数组
      visible: false,             // 菜单是否显示
      icon: "arrow-down",
      inputWidth: 0,
    }
  }
  getChildContext() {
    return { component: this }
  }
  componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    })
    this.selectedData()
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
  onSelectedChange(val) {
    const { multiple, onChange } = this.props;
    if (!multiple) {
      onChange && onChange(val, val.props.value);
    }
  }
  // 点击选中事件
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
  toggleMenu() {
    const { disabled } = this.props;
    const { visible } = this.state;
    if (visible) { return; }

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
    const { prefixCls, style, multiple, filterable, disabled, children } = this.props;
    const { visible, inputWidth, selectedLabel } = this.state;
    console.log("this.props.children::", this.props.children)
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
          onChange={(e, value) => this.setState({ selectedLabel: value })}
          icon={this.state.icon}
        />
        <Transition type="fade-in">
          {visible && children && children.length > 0 &&
            <Popper className={this.classNames(`${prefixCls}-popper`)}
              style={{
                minWidth: inputWidth,
              }}
            >
              <ul ref="popper" className={`${prefixCls}-warp`}>
                {children}
              </ul>
            </Popper>
          }
        </Transition>
      </div>
    );
  }
}

Select.childContextTypes = {
  component: PropTypes.any
};

Select.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,   // 是否禁用
  filterable: PropTypes.bool, // 是否可搜索
  multiple: PropTypes.bool,   // 是否可多选
  value: PropTypes.string,   // 是否可多选
}

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false,
}
