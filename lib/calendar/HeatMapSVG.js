function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes, findDOMNode } from '../utils/';

var HeatMapSVG = function (_Component) {
  _inherits(HeatMapSVG, _Component);

  function HeatMapSVG(props) {
    _classCallCheck(this, HeatMapSVG);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      days: 0
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    return _this;
  }

  HeatMapSVG.prototype.componentDidMount = function componentDidMount() {
    // 根据宽度来生成多少天的图形
    var _parent$props = this.parent().props,
        days = _parent$props.days,
        rectWidth = _parent$props.rectWidth;

    var $this = findDOMNode(this);
    var width = $this.parentNode.offsetWidth;
    var col = parseInt(width / (rectWidth + 2), 10);
    var daycount = col * 7 - 14;
    this.setState({
      days: days || daycount
    });
  };
  // 返回不同深浅的颜色


  HeatMapSVG.prototype.isExistColor = function isExistColor(num) {
    var panelColors = this.parent().props.panelColors;

    var color = '',
        keys = [],
        nums = Object.keys(panelColors);
    // 转换成数字
    for (var a = 0; a < nums.length; a++) {
      keys.push(parseInt(nums[a], 10));
    }
    // 排序
    keys = this.numberSort(keys);
    // 判断使用什么颜色
    for (var _a = 0; _a < keys.length; _a++) {
      if (keys[_a] > num) {
        color = panelColors[keys[_a]];
        break;
      }
      color = panelColors[keys[_a]];
    }
    return color;
  };

  HeatMapSVG.prototype.onClick = function onClick(e, curdate, curdt) {
    var onClick = this.parent().props.onClick;

    onClick(e, curdate, curdt);
  };

  HeatMapSVG.prototype.isCurrentData = function isCurrentData(date) {
    // 判断传进来的数据，并返回颜色
    var _parent$props2 = this.parent().props,
        values = _parent$props2.values,
        panelColors = _parent$props2.panelColors;

    var curdt = {};
    for (var i = 0; i < values.length; i++) {
      var curdate = new Date(values[i]['date']);
      curdate = curdate.getFullYear() + '/' + (curdate.getMonth() + 1) + '/' + curdate.getDate();
      if (curdate === date) {
        curdt = values[i];
        break;
      }
    }
    curdt['date'] = date;
    if (curdt.count && curdt.count > 0) {
      curdt.color = this.isExistColor(curdt.count);
    } else {
      curdt.color = panelColors[0] || '#EBEDF0';
    }
    return curdt;
  };

  HeatMapSVG.prototype.onMouseLeave = function onMouseLeave(e) {
    this.rect = null;
    this.parent().hideTooltip();
  };

  HeatMapSVG.prototype.onMouseMove = function onMouseMove(e, curdatestr, curdt) {
    if (e.target.tagName === 'rect' && e.target.dataset && e.target.dataset.date) {
      if (this.rect !== e.target) {
        this.rect = e.target;
        this.parent().onMouseOver(e, e.target.dataset.date, curdt);
      }
    }
  };

  HeatMapSVG.prototype.renderPanelColors = function renderPanelColors() {
    var _parent$props3 = this.parent().props,
        panelColors = _parent$props3.panelColors,
        rectWidth = _parent$props3.rectWidth,
        rectHeight = _parent$props3.rectHeight;

    var col = rectWidth + 2,
        rectPanelColors = [];
    // 颜色说明栏
    var nums = Object.keys(panelColors);
    for (var i = 0; i < nums.length; i++) {
      var xl = i * col;
      rectPanelColors.push(React.createElement('rect', { key: i, width: rectWidth, height: rectHeight, x: xl, y: '0', fill: panelColors[nums[i]] }));
    }
    return rectPanelColors;
  };

  HeatMapSVG.prototype.parent = function parent() {
    return this.context.component;
  };
  // 排序 比较函数


  HeatMapSVG.prototype.numberSort = function numberSort(keys) {
    return keys.sort(function (x, y) {
      //比较函数
      if (x < y) return -1;else if (x > y) return 1;else return 0;
    });
  };

  HeatMapSVG.prototype.renderPanelHeader = function renderPanelHeader(ty) {
    var _this2 = this;

    var _parent$props4 = this.parent().props,
        endDate = _parent$props4.endDate,
        weekLables = _parent$props4.weekLables,
        rectWidth = _parent$props4.rectWidth,
        rectHeight = _parent$props4.rectHeight,
        monthLables = _parent$props4.monthLables;
    var days = this.state.days;

    var dayDate = [],
        oneday = 86400000;
    var timestamp = endDate.getTime();
    var curweek = new Date(timestamp).getDay();
    days = days + curweek + 1;

    for (var i = 0; i < days; i++) {
      dayDate.push(timestamp - oneday * i);
    }
    dayDate = this.numberSort(dayDate);
    // 日历
    var rectdays = [],
        rectweeks = [],
        rectMonth = [],
        col = rectWidth + 2;

    var _loop = function _loop(_i) {
      var xl = parseInt(_i / 7, 10) * col;
      var yl = 21 + parseInt(_i % 7, 10) * col;
      var curdate = new Date(dayDate[_i]);
      var curdatestr = curdate.getFullYear() + '/' + (curdate.getMonth() + 1) + '/' + curdate.getDate();
      var curdt = _this2.isCurrentData(curdatestr);
      // 日方块
      rectdays.push(React.createElement('rect', {
        'data-date': curdatestr,
        key: _i,
        fill: curdt.color,
        x: col + xl,
        y: yl,
        onClick: function onClick(e) {
          return _this2.onClick(e, curdatestr, curdt);
        },
        onMouseMove: function onMouseMove(e) {
          return _this2.onMouseMove(e, curdatestr, curdt);
        }
        // onMouseMove={this.onMouseMove.bind(this)}
        , width: rectWidth, height: rectHeight }));
      // 周标题
      if (Object.keys(weekLables).indexOf(_i.toString()) > -1 && _i < 7) {
        rectweeks.push(React.createElement(
          'text',
          { key: _i, x: xl + 7, y: yl, width: rectWidth + 10, height: rectHeight },
          weekLables[_i]
        ));
      }
      // 月标题
      if (parseInt(curdate.getDate(), 10) === 1) {
        rectMonth.push(React.createElement(
          'text',
          { key: _i, x: xl + 12 },
          ' ',
          monthLables[parseInt(curdate.getMonth(), 10)],
          ' '
        ));
      }
    };

    for (var _i = 0; _i < days; _i++) {
      _loop(_i);
    }
    if (ty === 'week') {
      return rectweeks;
    } else if (ty === 'month') {
      return rectMonth;
    } else if (ty === 'day') {
      return rectdays;
    }
  };

  HeatMapSVG.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className;
    var _parent$props5 = this.parent().props,
        rectWidth = _parent$props5.rectWidth,
        rectHeight = _parent$props5.rectHeight;

    var cls = this.classNames(prefixCls, className);
    return React.createElement(
      'svg',
      { ref: 'svg', className: cls, width: '100%', height: rectHeight * 7 + 60 + 'px' },
      React.createElement(
        'g',
        { className: prefixCls + '-week', transform: 'translate(0, 10)' },
        this.renderPanelHeader('week')
      ),
      React.createElement(
        'g',
        { className: prefixCls + '-month', transform: 'translate(' + rectWidth + ', ' + 16 + ')' },
        this.renderPanelHeader('month')
      ),
      React.createElement(
        'g',
        { transform: 'translate(' + (rectWidth + 2) + ', ' + (rectHeight * 7 + 40) + ')' },
        ' ',
        this.renderPanelColors(),
        ' '
      ),
      React.createElement(
        'g',
        { onMouseLeave: this.onMouseLeave.bind(this) },
        this.renderPanelHeader('day')
      )
    );
  };

  return HeatMapSVG;
}(Component);

export default HeatMapSVG;


HeatMapSVG.propTypes = {
  prefixCls: PropTypes.string
};

HeatMapSVG.defaultProps = {
  prefixCls: "w-heatmap"
};

HeatMapSVG.contextTypes = {
  component: PropTypes.any
};