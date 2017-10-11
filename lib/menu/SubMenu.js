function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { PropTypes } from '../utils/';
import MixinComponent from './MixinComponent';
import Icon from '../icon';

var SubMenu = function (_MixinComponent) {
  _inherits(SubMenu, _MixinComponent);

  function SubMenu(props) {
    _classCallCheck(this, SubMenu);

    var _this = _possibleConstructorReturn(this, _MixinComponent.call(this, props));

    _this.instanceType = 'SubMenu';
    _this.state = {
      active: false
    };
    return _this;
  }

  SubMenu.prototype.componentDidMount = function componentDidMount() {
    // 记录 组件对象
    this.menu().state.submenus[this.props.index] = this;
    this.initEvents();
  };

  SubMenu.prototype.initEvents = function initEvents() {
    if (this.menu().props.mode === 'horizontal') {} else {
      this.refs.submenu.addEventListener('click', this.handleClick.bind(this));
    }
  };

  SubMenu.prototype.handleClick = function handleClick() {
    this.menu().handleSubmenuClick(this.props.index);
  };

  SubMenu.prototype.opened = function opened() {
    return this.menu().state.openedMenu.indexOf(this.props.index) !== -1;
  };

  SubMenu.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className;


    return React.createElement(
      'li',
      { className: this.classNames(className, '' + prefixCls, {
          // 'is-active': this.state.active,
          'opened': this.opened()
        }) },
      React.createElement(
        'div',
        { ref: 'submenu', className: prefixCls + '-title' },
        React.createElement(
          'span',
          null,
          this.props.title
        ),
        React.createElement(Icon, { type: 'arrow-down' })
      ),
      React.createElement(
        'ul',
        { className: this.classNames(prefixCls + '-con', {
            // 'is-active': this.state.active,
            'opened': this.opened()
          }) },
        this.props.children
      )
    );
  };

  return SubMenu;
}(MixinComponent);

export default SubMenu;


SubMenu.propTypes = {
  prefixCls: PropTypes.string
};

SubMenu.defaultProps = {
  prefixCls: "w-sub-menu"
};