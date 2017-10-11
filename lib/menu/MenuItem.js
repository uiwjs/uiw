function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { PropTypes } from '../utils/';
import MixinComponent from './MixinComponent';

var MenuItem = function (_MixinComponent) {
  _inherits(MenuItem, _MixinComponent);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, _MixinComponent.apply(this, arguments));
  }

  MenuItem.prototype.active = function active() {
    return this.props.index === this.menu().state.defaultActive;
  };

  MenuItem.prototype.handleClick = function handleClick() {
    if (!this.props.disabled) {
      this.menu().handleSelect(this.props.index, this);
    }
  };

  MenuItem.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        style = _props.style;

    return React.createElement(
      'li',
      { style: style, className: this.classNames(className, '' + prefixCls, {
          'active': this.active(),
          'disabled': this.props.disabled
        }), onClick: this.handleClick.bind(this) },
      this.props.children
    );
  };

  return MenuItem;
}(MixinComponent);

export default MenuItem;


MenuItem.propTypes = {
  prefixCls: PropTypes.string,
  index: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
  prefixCls: "w-menu-item"
};