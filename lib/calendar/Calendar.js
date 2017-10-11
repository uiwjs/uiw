function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component } from '../utils/';
import "./style/index.less";

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    _classCallCheck(this, Calendar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Calendar.prototype.render = function render() {
    // const { prefixCls } = this.props;
    return React.createElement('div', null);
  };

  return Calendar;
}(Component);

Calendar.defaultProps = {
  prefixCls: "w-btn"
};
Calendar.propTypes = {};
export default Calendar;