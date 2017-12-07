import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes, randomid } from '../utils/';
import Input from '../input/';
import Tag from '../tag';
import Transition from '../transition';
import Popper from '../popper/';

function getChildrensComponent(_children) {
  if (!_children) _children = [];
  let items = [];
  if (_children.length > 0) {
    _children.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach((_item) => {
          items = items.concat(getChildrensComponent(_item.props.children));
        });
      } else if (item.type.names === 'option') {
        items.push(item);
      } else {
        items = items.concat(getChildrensComponent(item.props.children));
      }
    });
  }
  return items;
}

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder || '请选择',
      inputHovering: false,
      selected: props.multiple ? [] : undefined,
      selectedLabel: props.value, // 默认选中的值 多选为数组
      value: props.value, // 多选或单选值
      visible: false, // 菜单是否显示
      options: [], // 在可搜索的时候，需要调用option里面的方法
      query: '', // 多标签使用
      icon: 'arrow-down',
      inputWidth: 0,
      filterItems: [], // 搜索到的内容暂存
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
  }
  getChildContext() {
    return { component: this };
  }
  componentWillReceiveProps(props) {
    if (props.placeholder !== this.props.placeholder) {
      this.setState({
        placeholder: props.placeholder,
      });
    }
    if (props.value !== this.state.value) {
      this.setState({
        value: props.value,
      }, () => {
        this.selectedData();
      });
    }
  }
  componentWillUpdate(props, state) {
    if (state.query !== this.state.query) {
      this.onQueryChange(state.query);
    }
  }
  componentDidMount() {
    if (this.input.input) {
      const input = ReactDOM.findDOMNode(this.input.input);
      this.setState({
        inputWidth: input.getBoundingClientRect().width,
      });
    }
    this.selectedData(true);
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
  // 将所有渲染后的组件，寄存在当前state option上面
  onOptionCreate(option) {
    this.state.options.push(option);
    this.setState(this.state);
  }
  showLabelText(props) {
    return props.label ? props.label : props.value;
  }
  // 初始化默认选中
  selectedData(init) {
    const { multiple, children } = this.props;
    let { selectedLabel, selected } = this.state;
    const { value } = this.state;
    if (multiple && Array.isArray(value)) {
      selected = getChildrensComponent(children).reduce((prev, curr) => {
        return value.indexOf(curr.props.value) > -1 ? prev.concat(curr) : prev;
      }, []);
      selectedLabel = selected.map((option) => {
        return this.showLabelText(option.props);
      });
      this.setState({
        selected, selectedLabel,
      }, () => {
        this.resetInputHeight(init);
      });
    } else {
      // 过滤改变 selectedLabel 的value对应的值
      selected = getChildrensComponent(children).filter((option) => {
        return option.props.value === value;
      })[0];
      if (selected) {
        this.setState({
          selected,
          selectedLabel: this.showLabelText(selected.props),
        });
      }
    }
  }
  resetInputHeight(init) {
    const { filterable } = this.props;
    this.input.input.style.height = `${this.tags.clientHeight}px`;
    if (!init) {
      if (filterable) {
        this.inputMultipleFocus();
      } else {
        this.input.focus();
      }
    }
  }
  onQueryChange(query) {
    const { options } = this.state;
    const { filterable } = this.props;
    const filterItems = [];
    filterable && options.forEach((option) => {
      const visible = option.queryChange(query);
      if (visible) filterItems.push(option);
    });
    this.setState({ filterItems });
  }
  // 触发onChange事件
  onSelectedChange(option) {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange && onChange(option, value, option.props.value);
  }
  // 点击选中事件, 选中设置Select值
  onOptionClick(option) {
    const { multiple } = this.props;
    let { value } = this.state;
    if (multiple) {
      if (value.indexOf(option.props.value) > -1) {
        value.splice(value.indexOf(option.props.value), 1);
      } else {
        value.push(option.props.value);
      }
    } else {
      value = option.props.value;
      this.setState({ visible: false });
    }
    this.setState({ value, query: '' }, () => {
      this.selectedData();
      this.onSelectedChange(option);
      this.onQueryChange();
    });
  }
  onTagClose(item) {
    this.onOptionClick(item);
  }
  // 展示隐藏菜单
  toggleMenu(e) {
    const { disabled, children } = this.props;
    const { visible } = this.state;
    const domNode = ReactDOM.findDOMNode(this);

    if (children.length === 0) return;
    if (!disabled) {
      this.inputMultipleFocus();
      // 展开点击控件不消失
      if (visible && domNode && domNode.contains(e.target)) return;
      this.setState({ visible: !visible }, () => {
      });
    }
  }
  inputMultipleFocus() {
    const { multiple, filterable } = this.props;
    // 多标签输入过滤获得焦点
    if (multiple && filterable) {
      this.filterInput.input.focus();
    }
  }
  // 输入内容，回调事件
  onInputChange() {
    if (this.props.filterable && this.state.selectedLabel !== this.state.value) {
      this.setState({ visible: true }, () => {
        this.setState({
          selectedLabel: this.state.selectedLabel,
        });
      });
    }
  }
  // 多标签搜索方法
  onInputFilterChange(e, value) {
    this.setState({ query: value, selectedLabel: ' ' }, () => {
      if (this.filterInput && this.filterInputWidth) {
        let width = this.filterInputWidth.offsetWidth + 10;
        if (this.filterInputWidth.offsetWidth + 20 > this.rootNode.offsetWidth) {
          width = this.rootNode.offsetWidth - 20;
        }
        ReactDOM.findDOMNode(this.filterInput.input).style.width = `${width + 10}px`;
        this.resetInputHeight(true);
      }
    });
  }
  onInputChangeValue(e) {
    this.setState({ selectedLabel: e.target.value, query: e.target.value });
  }
  onMouseDown(e) {
    e.preventDefault();
    if (this.input) {
      this.input.focus();
    }
    // 单选展开菜单
    this.toggleMenu(e);
  }
  // 清空选中内容
  onIconClick(e) {
    const { multiple } = this.props;
    if (this.state.icon === 'close') {
      this.setState({
        selectedLabel: multiple ? [] : '',
        selected: multiple ? [] : '',
        value: multiple ? [] : '',
        icon: 'arrow-down',
      });
      return;
    }
    if (this.input) this.input.focus();
    this.toggleMenu(e);
  }
  showCloseIcon(type) {
    if (this.state.selectedLabel && this.props.clearable) {
      this.setState({
        icon: type,
      });
    }
  }
  onIconMouseOver() {
    this.showCloseIcon('close');
  }
  onIconMouseOut() {
    this.showCloseIcon('arrow-down');
  }
  onMouseEnter() {
    this.showCloseIcon('close');
  }
  onMouseLeave() {
    this.showCloseIcon('arrow-down');
  }
  renderMultipleTags() {
    const { multiple, filterable, prefixCls } = this.props;
    const { selected } = this.state;
    if (!multiple) return null;
    return (
      <div ref={(elm) => { this.tags = elm; }} className={`${prefixCls}-tags`} onClick={this.toggleMenu.bind(this)}>
        {
          selected.map((item, idx) => {
            return (
              <Tag
                key={`${idx}${randomid()}`}
                onClose={this.onTagClose.bind(this, item)}
              >{this.showLabelText(item.props)}
              </Tag>
            );
          })
        }
        {filterable && (
          <div className={`${prefixCls}-tags-filter`}>
            <div
              className="cal"
              ref={(elm) => { this.filterInputWidth = elm; }}
            >{this.state.query}
            </div>
            <Input
              ref={(component) => { this.filterInput = component; }}
              style={{ width: 21 }}
              value={this.state.query}
              onChange={this.onInputFilterChange.bind(this)}
              size="mini"
            />
          </div>
        )}
      </div>
    );
  }
  render() {
    const { prefixCls, size, name, clearable, multiple, filterable, disabled, children, ...resetProps } = this.props;
    const { visible, inputWidth, selectedLabel, filterItems, query } = this.state;
    const inputValue = () => {
      if (selectedLabel && multiple) {
        if (selectedLabel.length > 0) {
          return ' ';
        }
        return '';
      }
      return selectedLabel;
    };
    return (
      <div
        {...resetProps}
        ref={(elm) => { this.rootNode = elm; }}
        className={this.classNames(`${prefixCls}`, {
          unfold: this.state.visible, // 是否展开
          [`${prefixCls}-multiple`]: multiple,
        })}
      >
        {this.renderMultipleTags()}
        <Input
          type="text"
          ref={(component) => { this.input = component; }}
          name={name}
          size={size}
          disabled={disabled}
          value={inputValue()}
          icon={multiple ? null : this.state.icon}
          readOnly={!filterable || multiple}
          placeholder={this.state.placeholder}
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onIconClick={this.onIconClick.bind(this)}
          onIconMouseOut={this.onIconMouseOut.bind(this)}
          onIconMouseOver={this.onIconMouseOver.bind(this)}
          onChange={this.onInputChangeValue.bind(this)}
          onKeyUp={this.onInputChange.bind(this)}
        />
        <Transition in={!!(visible && children)} sequence="fadeIn">
          <Popper
            className={this.classNames(`${prefixCls}-popper`)}
            clickOutside={this.handleClickOutside.bind(this)}
            style={{
              minWidth: inputWidth,
            }}
          >
            <ul className={`${prefixCls}-warp`}>
              {filterable && query && filterItems && filterItems.length === 0 ? <li>Not Fount</li> : children}
            </ul>
          </Popper>
        </Transition>
      </div>
    );
  }
}


Select.childContextTypes = {
  component: PropTypes.any,
};

Select.propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool, // 是否禁用
  filterable: PropTypes.bool, // 是否可过滤搜索
  multiple: PropTypes.bool, // 是否可多选
  clearable: PropTypes.bool, // 清空单选
  value: PropTypes.oneOfType([// 是否可多选
    PropTypes.string,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['large', 'small', 'default', 'mini']),
};

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false,
};
