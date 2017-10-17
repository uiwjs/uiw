var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
// import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition/';

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper(props) {
    _classCallCheck(this, Popper);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  Popper.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true);
  };

  Popper.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true);
  };

  Popper.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    var onChange = this.props.onChange;

    if (this.props.visible !== nextProps.visible) {
      onChange(nextProps.visible);
    }
  };

  Popper.prototype.handleClickOutside = function handleClickOutside(e) {
    var clickOutside = this.props.clickOutside;

    clickOutside && clickOutside(e);
  };

  Popper.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        className = _props.className,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        tag = _props.tag,
        clickOutside = _props.clickOutside,
        children = _props.children,
        other = _objectWithoutProperties(_props, ['style', 'className', 'visible', 'prefixCls', 'tag', 'clickOutside', 'children']);

    var wrapStyle = Object.assign.apply(null, [style, {}]);
    return React.createElement(
      Transition,
      { 'in': visible, sequence: 'fadeIn down' },
      React.createElement(
        'div',
        null,
        React.createElement(tag, _extends({ style: wrapStyle, className: this.classNames(prefixCls, className) }, other), children)
      )
    );
  };

  return Popper;
}(Component);

export default Popper;


Popper.propTypes = {
  prefixCls: PropTypes.string,
  tag: PropTypes.string,
  visible: PropTypes.bool,
  onChange: PropTypes.func
};

Popper.defaultProps = {
  prefixCls: 'w-popper',
  tag: 'div',
  style: {},
  visible: false,
  onChange: function onChange() {}
};