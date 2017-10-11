function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Hotkeys from 'hotkeys-js';
import { Component, PropTypes } from '../utils/';

Hotkeys.filter = function (event) {
  var tagName = (event.target || event.srcElement).tagName;
  Hotkeys.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
  return true;
};

var ReactHotkeys = function (_Component) {
  _inherits(ReactHotkeys, _Component);

  function ReactHotkeys(props) {
    _classCallCheck(this, ReactHotkeys);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onKeyUp = _this.onKeyUp.bind(_this);
    _this.handleKeyUpEvent = _this.handleKeyUpEvent.bind(_this);
    _this.isKeyDown = false;
    _this.handle = {};
    return _this;
  }

  ReactHotkeys.prototype.componentDidMount = function componentDidMount() {
    Hotkeys.unbind(this.props.keyName);
    Hotkeys(this.props.keyName, this.onKeyDown);
    document.addEventListener('keyup', this.handleKeyUpEvent);
  };

  ReactHotkeys.prototype.componentWillUnmount = function componentWillUnmount() {
    Hotkeys.unbind(this.props.keyName);
    this.isKeyDown = false;
    this.handle = {};
    document.removeEventListener('keyup', this.handleKeyUpEvent);
  };

  ReactHotkeys.prototype.onKeyUp = function onKeyUp(e, handle) {
    var onKeyUp = this.props.onKeyUp;

    onKeyUp(handle.shortcut, e, handle);
  };

  ReactHotkeys.prototype.onKeyDown = function onKeyDown(e, handle) {
    var onKeyDown = this.props.onKeyDown;

    if (this.isKeyDown) return;
    this.isKeyDown = true;
    this.handle = handle;
    onKeyDown(handle.shortcut, e, handle);
  };

  ReactHotkeys.prototype.handleKeyUpEvent = function handleKeyUpEvent(e) {
    if (!this.isKeyDown) return;
    this.isKeyDown = false;
    if (this.props.keyName.indexOf(this.handle.shortcut) < 0) return;
    this.onKeyUp(e, this.handle);
    this.handle = {};
  };

  ReactHotkeys.prototype.render = function render() {
    return this.props.children || null;
  };

  return ReactHotkeys;
}(Component);

export default ReactHotkeys;


ReactHotkeys.propTypes = {
  keyName: PropTypes.string,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
};

ReactHotkeys.defaultProps = {
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {}
};