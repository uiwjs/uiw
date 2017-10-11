var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon';
import "./style/index.less";

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.close = function (e) {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          children = _this$props.children;

      if (onClose) onClose(e, children);
      if (e.isDefaultPrevented()) return;
      _this.setState({
        visible: false
      });
    };

    _this.state = {
      visible: true
    };
    return _this;
  }

  Tag.prototype.isColorValue = function isColorValue(color) {
    var span = document.createElement("span");
    span.style.color = color;
    if (span.style.color !== "") return true;else {
      span = null;
      return false;
    }
  };

  Tag.prototype.isPresetColor = function isPresetColor(color) {
    return (/^(white|pink|red|yellow|orange|cyan|green|blue|purple)?$/.test(color)
    );
  };

  Tag.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        color = _props.color,
        onClose = _props.onClose,
        className = _props.className,
        checked = _props.checked,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['prefixCls', 'color', 'onClose', 'className', 'checked', 'children']);

    var visible = this.state.visible;

    var colors = '';
    switch (color) {
      case 'default':
        colors = 'white';break;
      case 'error':
        colors = 'red';break;
      case 'warn':
        colors = 'orange';break;
      case 'success':
        colors = 'green';break;
      case 'info':
        colors = 'blue';break;
      default:
        colors = color;break;
    }
    var cls = this.classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + '-' + colors] = this.isPresetColor(colors), _classNames['checkable'] = checked === false, _classNames['checked'] = checked, _classNames['className'] = className, _classNames));

    // 自定义颜色值
    var styles = {};
    if (!this.isPresetColor(colors) && this.isColorValue(colors)) {
      styles.backgroundColor = colors;
    }

    return visible ? React.createElement(
      'span',
      _extends({}, others, { style: styles, className: cls }),
      children,
      onClose && checked !== true && checked !== false && React.createElement(
        'i',
        { onClick: this.close, ref: 'iconclose' },
        React.createElement(Icon, { type: 'close' })
      )
    ) : null;
  };

  return Tag;
}(Component);

export default Tag;


Tag.propTypes = {
  prefixCls: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  onClose: PropTypes.func
};
Tag.defaultProps = {
  color: 'default',
  prefixCls: "w-tag"
};