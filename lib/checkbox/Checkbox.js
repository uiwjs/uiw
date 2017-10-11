function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Chackbox = function (_Component) {
  _inherits(Chackbox, _Component);

  function Chackbox(props) {
    _classCallCheck(this, Chackbox);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      checked: props.checked,
      indeterminate: props.indeterminate,
      value: props.children
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  Chackbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    if (this.props.indeterminate !== nextProps.indeterminate) {
      this.setState({ indeterminate: nextProps.indeterminate, checked: false });
    }
    if (this.props.checked !== nextProps.checked) {
      this.setState({ checked: nextProps.checked });
    }
  };

  Chackbox.prototype.handleChange = function handleChange(e) {
    var _props = this.props,
        onChange = _props.onChange,
        children = _props.children;

    var checked = !this.state.checked;
    this.setState({
      checked: checked,
      indeterminate: false,
      value: children
    });
    onChange(e, checked);
  };

  Chackbox.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        className = _props2.className,
        children = _props2.children,
        disabled = _props2.disabled;
    var _state = this.state,
        checked = _state.checked,
        indeterminate = _state.indeterminate;

    var cls = this.classNames(prefixCls, {
      'disabled': disabled, // 禁用状态
      'indeterminate': indeterminate, // 半选中
      'checked': checked // 选中
    });
    var lablestr = React.createElement(
      'span',
      null,
      children
    );
    return React.createElement(
      'label',
      { className: this.classNames(prefixCls + '-warpper', className) },
      React.createElement(
        'span',
        { className: cls },
        React.createElement('input', { type: 'checkbox', disabled: disabled, checked: checked, value: children, onChange: this.handleChange })
      ),
      children && lablestr
    );
  };

  return Chackbox;
}(Component);

export default Chackbox;


Chackbox.defaultProps = {
  prefixCls: 'w-chackbox',
  checked: false,
  indeterminate: false,
  onChange: function onChange(e) {
    return e;
  }
};
Chackbox.propTypes = {
  prefixCls: PropTypes.string,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};