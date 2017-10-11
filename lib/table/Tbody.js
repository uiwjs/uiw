var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Checkbox from '../checkbox/';

var Tbody = function (_Component) {
  _inherits(Tbody, _Component);

  function Tbody(props) {
    _classCallCheck(this, Tbody);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.selectedAll = function (checked, cb) {
      var data = _this.props.data;
      var _disabled = _this.state._disabled;

      var _checked_cur = {},
          _selectedData = [];
      for (var i = 0; i < data.length; i++) {
        if (!_disabled[i]) {
          _checked_cur[i] = checked;
          _checked_cur[i] && _selectedData.push(data[i]);
        } else {
          _checked_cur[i] = data[i]._checked_cur ? true : false;
        }
      }
      _this.setState({ _checked: _checked_cur });
      cb && cb(_selectedData);
    };

    _this.state = {
      _checked: {
        // 0:true     // 是否选中，第一行选中
      },
      _disabled: {} // 与_checked 一样的格式处理方式
    };
    _this.renderTbodyTd = _this.renderTbodyTd.bind(_this);
    return _this;
  }

  Tbody.prototype.componentDidMount = function componentDidMount() {
    var data = this.props.data;
    // 初始化选择

    var _checked = {},
        _disabled = {};
    for (var i = 0; i < data.length; i++) {
      if (data[i]._checked) _checked[i] = data[i]._checked;
      if (data[i]._disabled) _disabled[i] = data[i]._disabled;
    }
    this.setState({ _checked: _checked, _disabled: _disabled });
  };

  Tbody.prototype.getRenders = function getRenders(columns) {
    var headelm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var i = 0; i < columns.length; i++) {
      if (columns[i] && columns[i].key && (!columns[i].children || columns[i].children.length < 1)) {
        headelm[columns[i].key] = {};
        var method = ['render', 'onCellClick', 'className'];
        for (var a in method) {
          if (method[a] in columns[i]) {
            headelm[columns[i].key][method[a]] = columns[i][method[a]];
          }
        }
      }
      if (columns[i].children && columns[i].children.length) {
        this.getRenders(columns[i].children, headelm);
      }
    }
    return headelm;
  };

  Tbody.prototype.renderTbodyTd = function renderTbodyTd(item, rownum) {
    var _this2 = this;

    var _props = this.props,
        columns = _props.columns,
        cloneElement = _props.cloneElement;

    var renders = this.getRenders(columns);
    var items = [],
        fixedItems = [],
        key = 0;
    for (var a in item) {
      var attri = {};
      if (renders[a] && renders[a].onCellClick) {
        attri.onClick = renders[a].onCellClick.bind(this, item[a]);
      }
      if (renders[a] && renders[a].className) {
        attri.className = renders[a].className;
      }
      if (a === '_checked' || a === '_disabled') {
        continue;
      }

      var tdelm = item['_select'] && a === "_select" ? React.createElement(
        'td',
        _extends({ key: '' + key }, attri),
        React.createElement(Checkbox, {
          checked: this.state._checked[rownum],
          disabled: this.state._disabled[rownum],
          onChange: function onChange(e, checked) {
            var _checked = _this2.state._checked;
            _checked[rownum] = checked;
            _this2.setState({ _checked: _checked });
            _this2.props.onRowSelection(item, rownum, checked, e);
          } })
      ) : React.createElement(
        'td',
        _extends({ key: key }, attri),
        renders[a] && renders[a].render ? renders[a].render(item[a], item, key) : item[a]
      );
      if (cloneElement === "left") {
        if (a === '_select' || columns[key] && columns[key].fixed === "left") {
          fixedItems.push(tdelm);
        }
      } else if (cloneElement === "right") {
        if (columns[key] && columns[key].fixed === "right") {
          fixedItems.push(tdelm);
        }
      } else {
        items.push(tdelm);
      }
      ++key;
    }
    if (cloneElement === "left" || cloneElement === "right") {
      return fixedItems;
    } else {
      return items;
    }
  };

  Tbody.prototype.onMouseOver = function onMouseOver(ty, idx) {
    this.props.onTrHover(ty, idx);
  };
  // 添加一列 Checkbox


  Tbody.prototype.addSelectDateColumn = function addSelectDateColumn(data) {
    var temp = { _select: '_select' };
    for (var a in data) {
      temp[a] = data[a];
    }return temp;
  };

  Tbody.prototype.renderTbody = function renderTbody(data) {
    var _this3 = this;

    var _props2 = this.props,
        rowSelection = _props2.rowSelection,
        trHoverClassName = _props2.trHoverClassName,
        prefixCls = _props2.prefixCls;

    var items = [];

    var _loop = function _loop(i) {
      var _this3$classNames;

      var rowdata = data[i];
      if (rowSelection) {
        // 添加一列 Checkbox
        rowdata = _this3.addSelectDateColumn(data[i]);
      }
      items.push(React.createElement(
        'tr',
        {
          className: _this3.classNames((_this3$classNames = {}, _this3$classNames[prefixCls + '-tr-hover'] = trHoverClassName[0] === i, _this3$classNames)),
          onMouseEnter: function onMouseEnter() {
            return _this3.onMouseOver('enter', i);
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.onMouseOver('leave', i);
          },
          key: i },
        _this3.renderTbodyTd(rowdata, i)
      ));
    };

    for (var i = 0; i < data.length; i++) {
      _loop(i);
    }
    return items;
  };

  Tbody.prototype.render = function render() {
    var data = this.props.data;

    return React.createElement(
      'tbody',
      null,
      this.renderTbody.bind(this)(data)
    );
  };

  return Tbody;
}(Component);

export default Tbody;


Tbody.defaultProps = {
  prefixCls: 'w-table',
  columns: []
};
Tbody.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  data: PropTypes.array
};