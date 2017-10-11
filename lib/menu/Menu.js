function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    // 用户判断组件
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.instanceType = 'Menu';
    _this.state = {
      defaultActive: props.defaultActive,
      // dd
      openedMenu: props.defaultOpened ? props.defaultOpened.slice(0) : [],
      // 子菜单
      submenus: {}
    };
    return _this;
  }

  Menu.prototype.getChildContext = function getChildContext() {
    return { component: this };
  };
  // 菜单选择事件


  Menu.prototype.handleSelect = function handleSelect(index, menuItem) {
    var defaultActive = this.state.defaultActive;

    defaultActive = index;
    if (this.props.onSelect) {
      this.props.onSelect(index, menuItem);
    }
    this.setState({ defaultActive: defaultActive });
  };
  // 打开子菜单


  Menu.prototype.openMenu = function openMenu(index, indexPath) {
    var openedMenu = this.state.openedMenu;

    if (openedMenu.indexOf(index) !== -1) return;
    openedMenu.push(index);
    this.setState({ openedMenu: openedMenu });
  };
  // 关闭子菜单


  Menu.prototype.closeMenu = function closeMenu(index) {
    var openedMenu = this.state.openedMenu;

    openedMenu.splice(openedMenu.indexOf(index), 1);
    this.setState({ openedMenu: openedMenu });
  };
  // 点击子菜单的标题事件


  Menu.prototype.handleSubmenuClick = function handleSubmenuClick(index) {
    var isOpened = this.state.openedMenu.indexOf(index) !== -1;

    if (isOpened) {
      this.closeMenu(index);
      if (this.props.onClose) {
        this.props.onClose(index);
      }
    } else {
      this.openMenu(index);
      if (this.props.onOpen) {
        this.props.onOpen(index);
      }
    }
  };

  Menu.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        style = _props.style,
        mode = _props.mode;

    return React.createElement(
      'ul',
      { style: style, className: this.classNames(className, '' + prefixCls, (_classNames = {}, _classNames[prefixCls + '-' + mode] = mode, _classNames)) },
      this.props.children
    );
  };

  return Menu;
}(Component);

export default Menu;


Menu.childContextTypes = {
  component: PropTypes.any
};

Menu.propTypes = {
  prefixCls: PropTypes.string,
  mode: PropTypes.string,
  defaultActive: PropTypes.string,
  onSelect: PropTypes.func
};

Menu.defaultProps = {
  prefixCls: "w-menu",
  mode: 'vertical'
};