function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes, randomid } from '../utils/';
import Input from '../input/';
import Tag from '../tag';
import Popper from '../popper/';

function getChildrensComponent(_children) {
  if (!_children) _children = [];
  var items = [];
  if (_children.length > 0) {
    _children.forEach(function (item, idx) {
      if (Array.isArray(item)) {
        item.forEach(function (_item) {
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

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      placeholder: props.placeholder || '请选择',
      inputHovering: false,
      selected: props.multiple ? [] : undefined,
      selectedLabel: props.value, // 默认选中的值 多选为数组
      value: props.value, // 多选或单选值
      visible: false, // 菜单是否显示
      options: [], // 在可搜索的时候，需要调用option里面的方法
      query: "", // 多标签使用
      icon: "arrow-down",
      inputWidth: 0
    };
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.onQueryChange = _this.onQueryChange.bind(_this);
    return _this;
  }

  Select.prototype.getChildContext = function getChildContext() {
    return { component: this };
  };

  Select.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    var _this2 = this;

    if (props.placeholder !== this.props.placeholder) {
      this.setState({
        placeholder: props.placeholder
      });
    }
    if (props.value !== this.state.value) {
      this.setState({
        value: props.value
      }, function () {
        _this2.selectedData();
      });
    }
  };

  Select.prototype.componentWillUpdate = function componentWillUpdate(props, state) {
    if (state.query !== this.state.query) {
      this.onQueryChange(state.query);
    }
  };

  Select.prototype.componentDidMount = function componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
    this.setState({
      inputWidth: this.input.getBoundingClientRect().width
    });
    this.selectedData(true);
  };

  Select.prototype.handleClickOutside = function handleClickOutside(e) {
    // Ignore clicks on the component it self
    // https://codepen.io/graubnla/pen/EgdgZm
    // Detect a click outside of a React Component
    // https://www.dhariri.com/posts/57c724e4d1befa66e5b8e056
    var domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(e.target)) {
      this.setState({ visible: false });
    }
  };
  // 将所有渲染后的组件，寄存在当前state option上面


  Select.prototype.onOptionCreate = function onOptionCreate(option) {
    this.state.options.push(option);
    this.setState(this.state);
  };

  Select.prototype.showLabelText = function showLabelText(props) {
    return props.label ? props.label : props.value;
  };
  // 初始化默认选中


  Select.prototype.selectedData = function selectedData(init) {
    var _this3 = this;

    var _props = this.props,
        multiple = _props.multiple,
        children = _props.children;
    var _state = this.state,
        selectedLabel = _state.selectedLabel,
        selected = _state.selected,
        value = _state.value;

    if (multiple && Array.isArray(value)) {
      selected = getChildrensComponent(children).reduce(function (prev, curr) {
        return value.indexOf(curr.props.value) > -1 ? prev.concat(curr) : prev;
      }, []);
      selectedLabel = selected.map(function (option) {
        return _this3.showLabelText(option.props);
      });
      this.setState({
        selected: selected, selectedLabel: selectedLabel
      }, function () {
        _this3.resetInputHeight(init);
      });
    } else {
      // 过滤改变 selectedLabel 的value对应的值
      selected = getChildrensComponent(children).filter(function (option) {
        return option.props.value === value;
      })[0];
      if (selected) {
        this.setState({
          selected: selected,
          selectedLabel: this.showLabelText(selected.props)
        });
      }
    }
  };

  Select.prototype.resetInputHeight = function resetInputHeight(init) {
    var _refs = this.refs,
        input = _refs.input,
        tags = _refs.tags;
    var filterable = this.props.filterable;

    input.refs.input.style.height = tags.clientHeight + 'px';
    if (!init) {
      if (filterable) {
        this.inputMultipleFocus();
      } else {
        input.refs.input.focus();
      }
    }
  };

  Select.prototype.onQueryChange = function onQueryChange(query) {
    var options = this.state.options;
    var filterable = this.props.filterable;

    filterable && options.forEach(function (option) {
      return option.queryChange(query);
    });
  };
  // 触发onChange事件


  Select.prototype.onSelectedChange = function onSelectedChange(option) {
    var onChange = this.props.onChange;
    var value = this.state.value;

    onChange && onChange(option, option.props.value, value);
  };
  // 点击选中事件, 选中设置Select值


  Select.prototype.onOptionClick = function onOptionClick(option) {
    var _this4 = this;

    var multiple = this.props.multiple;
    var value = this.state.value;

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
    this.setState({ value: value, query: "" }, function () {
      _this4.selectedData();
      _this4.onSelectedChange(option);
      _this4.onQueryChange();
    });
  };

  Select.prototype.onTagClose = function onTagClose(item) {
    this.onOptionClick(item);
  };
  // 展示隐藏菜单


  Select.prototype.toggleMenu = function toggleMenu(e) {
    var _props2 = this.props,
        disabled = _props2.disabled,
        children = _props2.children;
    var visible = this.state.visible;

    var domNode = ReactDOM.findDOMNode(this);

    if (children.length === 0) return;
    if (!disabled) {
      this.inputMultipleFocus();
      // 展开点击控件不消失
      if (visible && domNode && domNode.contains(e.target)) return;
      this.setState({ visible: !visible }, function () {});
    }
  };

  Select.prototype.inputMultipleFocus = function inputMultipleFocus() {
    var _props3 = this.props,
        multiple = _props3.multiple,
        filterable = _props3.filterable;
    var filterInput = this.refs.filterInput;
    // 多标签输入过滤获得焦点

    if (multiple && filterable) {
      filterInput.refs.input.focus();
    }
  };
  // 输入内容，回调事件


  Select.prototype.onInputChange = function onInputChange() {
    var _this5 = this;

    if (this.props.filterable && this.state.selectedLabel !== this.state.value) {
      this.setState({ visible: true }, function () {
        _this5.setState({
          selectedLabel: _this5.state.selectedLabel
        });
      });
    }
  };
  // 多标签搜索方法


  Select.prototype.onInputFilterChange = function onInputFilterChange(e, value) {
    var _this6 = this;

    var _refs2 = this.refs,
        filterInput = _refs2.filterInput,
        filterInputWidth = _refs2.filterInputWidth;

    this.setState({ query: value, selectedLabel: " " }, function () {
      if (filterInput && filterInputWidth) {
        var width = filterInputWidth.offsetWidth + 10;
        if (filterInputWidth.offsetWidth + 20 > _this6.refs.root.offsetWidth) {
          width = _this6.refs.root.offsetWidth - 20;
        };
        ReactDOM.findDOMNode(filterInput).style.width = width + 10 + 'px';
        _this6.resetInputHeight(true);
      }
    });
  };

  Select.prototype.onInputChangeValue = function onInputChangeValue(e) {
    this.setState({ selectedLabel: e.target.value, query: e.target.value });
  };

  Select.prototype.onMouseDown = function onMouseDown(e) {
    e.preventDefault();
    if (this.refs.input) {
      this.refs.input.focus();
    }
    // 单选展开菜单
    this.toggleMenu(e);
  };
  //清空选中内容


  Select.prototype.onIconClick = function onIconClick(e) {
    var multiple = this.props.multiple;

    if (this.state.icon === 'close') {
      this.setState({
        selectedLabel: multiple ? [] : '',
        selected: multiple ? [] : '',
        value: multiple ? [] : '',
        icon: 'arrow-down'
      });
      return;
    }
    if (this.input) this.input.focus();
    this.toggleMenu(e);
  };

  Select.prototype.showCloseIcon = function showCloseIcon(type) {
    if (this.state.selectedLabel && this.props.clearable) {
      this.setState({
        icon: type
      });
    }
  };

  Select.prototype.onIconMouseOver = function onIconMouseOver(e) {
    this.showCloseIcon("close");
  };

  Select.prototype.onIconMouseOut = function onIconMouseOut(e) {
    this.showCloseIcon("arrow-down");
  };

  Select.prototype.onMouseEnter = function onMouseEnter(e) {
    this.showCloseIcon("close");
  };

  Select.prototype.onMouseLeave = function onMouseLeave(e) {
    this.showCloseIcon("arrow-down");
  };

  Select.prototype.renderMultipleTags = function renderMultipleTags() {
    var _this7 = this;

    var _props4 = this.props,
        multiple = _props4.multiple,
        filterable = _props4.filterable,
        prefixCls = _props4.prefixCls;
    var selected = this.state.selected;

    if (!multiple) return null;
    return React.createElement(
      'div',
      { ref: 'tags', className: prefixCls + '-tags', onClick: this.toggleMenu.bind(this) },
      selected.map(function (item, idx) {
        return React.createElement(
          Tag,
          {
            key: '' + idx + randomid(),
            onClose: _this7.onTagClose.bind(_this7, item)
          },
          _this7.showLabelText(item.props)
        );
      }),
      filterable && React.createElement(
        'div',
        { className: prefixCls + '-tags-filter' },
        React.createElement(
          'div',
          { className: 'cal', ref: 'filterInputWidth' },
          this.state.query
        ),
        React.createElement(Input, {
          ref: 'filterInput',
          style: { width: 21 },
          value: this.state.query,
          onChange: this.onInputFilterChange.bind(this),
          size: 'mini'
        })
      )
    );
  };

  Select.prototype.render = function render() {
    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        style = _props5.style,
        size = _props5.size,
        name = _props5.name,
        multiple = _props5.multiple,
        filterable = _props5.filterable,
        disabled = _props5.disabled,
        children = _props5.children;
    var _state2 = this.state,
        visible = _state2.visible,
        inputWidth = _state2.inputWidth,
        selectedLabel = _state2.selectedLabel;

    return React.createElement(
      'div',
      {
        ref: 'root',
        style: style,
        className: this.classNames('' + prefixCls, {
          "unfold": this.state.visible, // 是否展开
          "w-multiple": multiple
        })
      },
      this.renderMultipleTags(),
      React.createElement(Input, {
        type: 'text',
        ref: 'input',
        name: name,
        size: size,
        disabled: disabled,
        value: selectedLabel && multiple ? selectedLabel.length > 0 ? " " : '' : selectedLabel,
        icon: multiple ? null : this.state.icon,
        readOnly: !filterable || multiple,
        placeholder: this.state.placeholder,
        onMouseDown: this.onMouseDown.bind(this),
        onMouseEnter: this.onMouseEnter.bind(this),
        onMouseLeave: this.onMouseLeave.bind(this),
        onIconClick: this.onIconClick.bind(this),
        onIconMouseOut: this.onIconMouseOut.bind(this),
        onIconMouseOver: this.onIconMouseOver.bind(this),
        onChange: this.onInputChangeValue.bind(this),
        onKeyUp: this.onInputChange.bind(this)
      }),
      React.createElement(
        Popper,
        { ref: 'popper', visible: visible && children && children.length > 0, className: this.classNames(prefixCls + '-popper'),
          clickOutside: this.handleClickOutside.bind(this),
          style: {
            minWidth: inputWidth
          }
        },
        React.createElement(
          'ul',
          { className: prefixCls + '-warp' },
          children
        )
      )
    );
  };

  return Select;
}(Component);

export default Select;


Select.childContextTypes = {
  component: PropTypes.any
};

Select.propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool, // 是否禁用
  filterable: PropTypes.bool, // 是否可过滤搜索
  multiple: PropTypes.bool, // 是否可多选
  clearable: PropTypes.bool, // 清空单选
  value: PropTypes.oneOfType([// 是否可多选
  PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(['large', 'small', 'default', 'mini'])
};

Select.defaultProps = {
  prefixCls: 'w-select',
  disabled: false
};