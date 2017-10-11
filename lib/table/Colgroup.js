var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Colgroup = function (_Component) {
  _inherits(Colgroup, _Component);

  function Colgroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, Colgroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Colgroup.prototype.getColCount = function getColCount(columns, arrs) {
    var arr = arrs || [];
    for (var i = 0; i < columns.length; i++) {
      if (columns[i].children) {
        arr = this.getColCount(columns[i].children, arr);
      } else {
        arr.push({ key: columns[i].key, width: columns[i].width });
      }
    }
    return arr;
  };

  Colgroup.prototype.renderCol = function renderCol(columns) {
    var arrs = this.getColCount(columns);
    var colelm = [];
    for (var i = 0; i < arrs.length; i++) {
      var attri = {};
      if (arrs[i].width) attri.width = arrs[i].width;
      colelm.push(React.createElement('col', _extends({ key: i }, attri)));
    }
    return colelm;
  };

  Colgroup.prototype.render = function render() {
    var columns = this.props.columns;

    return React.createElement(
      'colgroup',
      null,
      this.renderCol(columns)
    );
  };

  return Colgroup;
}(Component);

export default Colgroup;


Colgroup.defaultProps = {};
Colgroup.propTypes = {
  columns: PropTypes.array
};