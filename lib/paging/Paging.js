function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Paging = function (_Component) {
  _inherits(Paging, _Component);

  function Paging(props) {
    _classCallCheck(this, Paging);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      activePage: props.activePage
    };
    _this.onPrevOrNext = _this.onPrevOrNext.bind(_this);
    return _this;
  }

  Paging.prototype.onPrevOrNext = function onPrevOrNext(ty) {
    var _props = this.props,
        total = _props.total,
        pageSize = _props.pageSize,
        onChange = _props.onChange;
    var activePage = this.state.activePage;

    var totalPage = total / pageSize;
    if (ty === 'prev' && activePage === 1 || ty === 'next' && (activePage === totalPage || activePage > totalPage)) {
      return;
    }
    var num = ty === "prev" ? activePage - 1 : activePage + 1;

    switch (ty) {
      case "prev":
        num = activePage - 1;break;
      case "next":
        num = activePage + 1;break;
      case "jump-prev":
        num = activePage - 3;break;
      case "jump-next":
        num = activePage + 3;break;
      default:
        break;
    }
    if (num) {
      this.setState({ activePage: num });
      onChange && onChange(num, total, pageSize);
    }
  };

  Paging.prototype.render = function render() {
    var _this2 = this,
        _classNames,
        _classNames2;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        className = _props2.className,
        style = _props2.style,
        total = _props2.total,
        pageSize = _props2.pageSize,
        onChange = _props2.onChange;
    var activePage = this.state.activePage;


    var items = [];
    var totalPage = total / pageSize; // 总页数

    items.push(React.createElement(
      'li',
      { key: 'prev', onClick: function onClick() {
          return _this2.onPrevOrNext('prev');
        }, className: this.classNames(prefixCls + '-prev', (_classNames = {}, _classNames[prefixCls + '-disable'] = activePage === 1, _classNames)) },
      React.createElement(
        'a',
        null,
        '\xA0'
      )
    ));

    var curActvePage = activePage;
    var itemsJump = function itemsJump(ty) {
      return React.createElement(
        'li',
        { key: ty, onClick: function onClick() {
            return _this2.onPrevOrNext(ty);
          }, className: _this2.classNames(prefixCls + '-' + ty) },
        React.createElement(
          'a',
          null,
          '...'
        )
      );
    };

    var _loop = function _loop(i) {
      if (i + 1 === curActvePage - 3 && curActvePage - 3 !== 1 && totalPage > 5) {
        items.push(itemsJump('jump-prev'));
      }
      if (i + 1 === curActvePage + 3 && curActvePage + 3 !== totalPage && totalPage > 5) {
        items.push(itemsJump('jump-next'));
      }

      if (curActvePage === i + 1 || i + 1 === 1 || i + 1 === totalPage || i + 1 < 6 && totalPage < 6 || i + 1 > curActvePage - 3 && i + 1 < curActvePage || i + 1 < curActvePage + 3 && i + 1 > curActvePage) {
        items.push(React.createElement(
          'li',
          { key: i + 1,
            className: activePage === i + 1 ? prefixCls + '-active' : prefixCls + '-item',
            onClick: function onClick() {
              _this2.setState({ activePage: i + 1 });
              onChange && onChange(i + 1, total, pageSize);
            }
          },
          React.createElement(
            'a',
            null,
            i + 1
          )
        ));
      }
    };

    for (var i = 0; i < totalPage; i++) {
      _loop(i);
    }
    items.push(React.createElement(
      'li',
      { key: 'next', onClick: function onClick() {
          return _this2.onPrevOrNext('next');
        }, className: this.classNames(prefixCls + '-next', (_classNames2 = {}, _classNames2[prefixCls + '-disable'] = activePage === totalPage || activePage > totalPage, _classNames2)) },
      React.createElement(
        'a',
        null,
        '\xA0'
      )
    ));
    return React.createElement(
      'ul',
      { style: style, className: this.classNames(prefixCls, className) },
      items
    );
  };

  return Paging;
}(Component);

export default Paging;


Paging.defaultProps = {
  prefixCls: 'w-paging',
  total: 0, // 数据总数
  pageSize: 10, // 每页条数
  activePage: 1, // 当前页数，选中的页数
  onChange: function onChange(e) {
    return e;
  }
};
Paging.propTypes = {
  prefixCls: PropTypes.string,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  activePage: PropTypes.number,
  onChange: PropTypes.func
};