var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Checkbox from '../checkbox/';

var rowSpanNum = 0;

var Thead = function (_Component) {
  _inherits(Thead, _Component);

  function Thead(props) {
    _classCallCheck(this, Thead);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      td: ''
    };
    return _this;
  }

  Thead.prototype.componentDidMount = function componentDidMount() {
    var cloneElement = this.props.cloneElement;

    if (!cloneElement) {
      this.props.setFixedWidth(this.getTableThwidth(this.refs.thead, 'left'), this.getTableThwidth(this.refs.thead, 'right'));
    }
  };

  Thead.prototype.getTableThwidth = function getTableThwidth($thead, type) {
    var columns = this.props.columns;

    var size = 0;
    if ($thead.children && $thead.children.length === 1) {
      var $th = $thead.children[0].children;

      for (var i = 0; i < $th.length; i++) {
        if (type === 'left' && columns[i] && (columns[i].key === '_select' || columns[i].fixed === 'left')) {
          size += $th[i].offsetWidth;
        }
        if (type === 'right' && columns[i].fixed === 'right') {
          size += $th[i].offsetWidth;
        }
      }
      return size;
    }
  };
  /**
   * [getRowSpan 获取行跨度数]
   * @param  {[type]} columns [某列的总数据]
   * @param  {[type]} subnum  [累计行跨度数]
   * @return {[type]}         [返回最终行跨度数]
   */


  Thead.prototype.getRowSpan = function getRowSpan(columns, subnum) {
    var num = subnum && subnum.num ? subnum.num : 1;
    for (var i = 0; i < columns.length; i++) {
      if (columns[i].children && columns[i].children.length > 0) {
        var curnum = this.getRowSpan(columns[i].children, { num: num + 1 });
        if (rowSpanNum < curnum.num) rowSpanNum = curnum.num;
      }
    }
    return { num: num, rowSpanNum: rowSpanNum };
  };
  /**
   * [getColSpan 获取列跨度数]
   * @param  {[type]} columns [某列的总数]
   * @param  {Number} num     [累计列跨度数]
   * @return {[type]}         [返回最终列的跨度数]
   */


  Thead.prototype.getColSpan = function getColSpan(columns) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var i = 0; i < columns.length; i++) {
      num += 1;
      if (columns[i].children && columns[i].children.length > 0) {
        num -= 1;
        num = this.getColSpan(columns[i].children, num);
      }
    }
    return num;
  };
  /**
   * 过滤，保留固定的单元格
   * @param  {[type]} columns  [所有单元格总数据]
   * @param  {String} ty       [左边|右边固定的单元]
   * @param  {[type]} childArr [子对象中的数据]
   * @return {[type]}          [description]
   */


  Thead.prototype.renderColumnsFixed = function renderColumnsFixed(columns) {
    var ty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "left";
    var childArr = arguments[2];

    var arr = childArr || [];
    for (var i = 0; i < columns.length; i++) {
      if (ty === "left" && (columns[i].key === "_select" || columns[i].fixed === "left")) {
        arr.push(columns[i]);
      }
      if (ty === "right" && columns[i] && columns[i].fixed === "right") {
        arr.push(columns[i]);
      }
    }
    return arr;
  };
  /**
   * [renderHead 返回tr节点]
   * @param  {[bool]}   indeterminate [是否全选状态]
   * @param  {[Array]}  columns [列的总数据]
   * @param  {[Number]} spanNum [行跨度数]
   * @param  {[Node]}   headelm [返回累计tr标签]
   * @return {[Node]}           [返回最终累计tr总标签]
   */


  Thead.prototype.renderHead = function renderHead(indeterminate, columns, spanNum) {
    var childrens = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var _this2 = this;

    var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var headelm = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

    var subitem = [];
    var cloneElement = this.props.cloneElement;


    if (cloneElement) {
      columns = this.renderColumnsFixed(columns, cloneElement);
    }

    for (var i = 0; i < columns.length; i++) {
      if (columns[i]) {
        var attr = {};
        if (columns[i].children && columns[i].children.length > 0) {
          attr.colSpan = this.getColSpan(columns[i].children);
          childrens = childrens.concat(columns[i].children);
        } else {
          attr.rowSpan = spanNum;
        }
        if (columns[i].key === "_select") attr.className = '_select';
        subitem.push(React.createElement(
          'th',
          _extends({ key: i }, attr),
          columns[i].key === "_select" ? React.createElement(Checkbox, {
            indeterminate: this.props.headindeterminate,
            checked: this.props.headchecked,
            onChange: function onChange(e, checked) {
              return _this2.props.selectedAll(e, checked);
            } }) : columns[i].title
        ));
      }
    }
    headelm.push(React.createElement(
      'tr',
      { key: 'level' + level },
      subitem
    ));
    if (childrens.length > 0) {
      this.renderHead(indeterminate, childrens, spanNum - 1, [], level + 1, headelm);
    }
    return headelm;
  };

  Thead.prototype.render = function render() {
    var _props = this.props,
        indeterminate = _props.indeterminate,
        columns = _props.columns;
    // 计算层级

    var rowLevel = this.getRowSpan(columns);
    return React.createElement(
      'thead',
      { ref: 'thead' },
      this.renderHead.bind(this)(indeterminate, columns, rowLevel.rowSpanNum)
    );
  };

  return Thead;
}(Component);

export default Thead;


Thead.defaultProps = {
  prefixCls: '',
  columns: []
};
Thead.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string
};