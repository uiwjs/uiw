function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var MenuItemGroup = function (_Component) {
  _inherits(MenuItemGroup, _Component);

  function MenuItemGroup(props) {
    _classCallCheck(this, MenuItemGroup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.instanceType = 'SubMenu';
    _this.state = {
      active: false
    };
    return _this;
  }

  MenuItemGroup.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        others = _objectWithoutProperties(_props, ['prefixCls', 'className']);

    return React.createElement('li', { className: this.classNames('' + prefixCls, {
        // 'is-active': this.state.active,
        // 'is-opened': this.opened()
      }) });
  };

  return MenuItemGroup;
}(Component);

export default MenuItemGroup;


MenuItemGroup.propTypes = {
  prefixCls: PropTypes.string
};

MenuItemGroup.defaultProps = {
  prefixCls: "w-menu-item-group"
};