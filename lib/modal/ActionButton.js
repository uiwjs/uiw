function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, findDOMNode } from '../utils/';
import Button from '../button';

var ActionButton = function (_Component) {
  _inherits(ActionButton, _Component);

  function ActionButton(props) {
    _classCallCheck(this, ActionButton);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      loading: false
    };
    return _this;
  }

  ActionButton.prototype.componentDidMount = function componentDidMount() {
    // 焦点自动定位到按钮上面
    if (this.props.autoFocus) {
      var $this = findDOMNode(this);
      this.timeoutId = setTimeout(function () {
        return $this.focus();
      });
    }
  };

  ActionButton.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  };

  ActionButton.prototype.onClick = function onClick() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _props = this.props,
        onOk = _props.onOk,
        closeModals = _props.closeModals;

    if (!onOk) return closeModals.apply(undefined, ["ok"].concat(args));

    var ret = void 0;
    if (onOk.length) ret = onOk(closeModals);

    ret = onOk();
    if (!ret) closeModals();

    if (ret && ret.then) {
      this.setState({ loading: true });
      ret.then(function () {
        closeModals.apply(undefined, arguments);
      });
    }
  };

  ActionButton.prototype.render = function render() {
    var _props2 = this.props,
        type = _props2.type,
        size = _props2.size,
        children = _props2.children;

    var loading = this.state.loading;
    return React.createElement(
      Button,
      { type: type, size: size, onClick: this.onClick.bind(this), loading: loading },
      children
    );
  };

  return ActionButton;
}(Component);

export default ActionButton;