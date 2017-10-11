function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component, PropTypes } from '../utils/';

var MixinComponent = function (_Component) {
  _inherits(MixinComponent, _Component);

  function MixinComponent() {
    _classCallCheck(this, MixinComponent);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MixinComponent.prototype.parent = function parent() {
    return this.context.component;
  };

  MixinComponent.prototype.menu = function menu() {
    var parent = this.parent();
    while (parent.instanceType !== 'Menu') {
      parent = parent.parent();
    }
    return parent;
  };

  return MixinComponent;
}(Component);

export default MixinComponent;


MixinComponent.contextTypes = {
  component: PropTypes.any
};