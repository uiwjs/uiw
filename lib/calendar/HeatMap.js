function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tooltip from '../tooltip';
import HeatMapSVG from './HeatMapSVG';
import "./style/index.less";

var HeatMap = function (_Component) {
  _inherits(HeatMap, _Component);

  function HeatMap(props) {
    _classCallCheck(this, HeatMap);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      tooltipShow: true
    };
    return _this;
  }

  HeatMap.prototype.getChildContext = function getChildContext() {
    return { component: this };
  };

  HeatMap.prototype.componentDidMount = function componentDidMount() {
    this.hideTooltip();
  };

  HeatMap.prototype.hideTooltip = function hideTooltip() {
    var _refs = this.refs,
        tooltipRefs = _refs.tooltipRefs,
        tooltipConRefs = _refs.tooltipConRefs;

    tooltipConRefs.hideTooltip();
    tooltipRefs.style.display = 'none';
  };

  HeatMap.prototype.onMouseOver = function onMouseOver(e, datestr, date) {
    var _props = this.props,
        onMouseOver = _props.onMouseOver,
        emptyMessage = _props.emptyMessage,
        message = _props.message;
    var _refs2 = this.refs,
        tooltipRefs = _refs2.tooltipRefs,
        tooltipConRefs = _refs2.tooltipConRefs;
    // 空消息不提示

    if (!emptyMessage && !date.count) {
      tooltipConRefs.hideTooltip();
      tooltipRefs.style.display = 'none';
      return;
    };

    var tooltipConten = '';
    var content = date.content;
    if (message) {
      tooltipConten = message(content, date);
    } else if (content) {
      tooltipConten = content.map(function (item, idx) {
        return React.createElement(
          'div',
          { key: idx },
          item
        );
      });
    } else {
      tooltipConten = emptyMessage;
    }

    if (tooltipRefs && e && e.target) {
      tooltipRefs.style.marginLeft = e.target.x.animVal.value + "px";
      tooltipRefs.style.marginTop = e.target.y.animVal.value - 5 + "px";
      tooltipConRefs.setState({
        content: tooltipConten
      }, function () {
        tooltipRefs.style.display = 'block';
        onMouseOver(e, datestr, date);
        tooltipConRefs.showTooltip();
      });
    }
  };

  HeatMap.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        tooltip = _props2.tooltip,
        className = _props2.className;
    var tooltipShow = this.state.tooltipShow;


    return React.createElement(
      'div',
      { className: this.classNames(prefixCls + '-wrapper', className) },
      tooltip && React.createElement(
        'div',
        { ref: 'tooltipRefs', className: prefixCls + '-popup' },
        React.createElement(
          Tooltip,
          { trigger: 'click', ref: 'tooltipConRefs', visible: tooltipShow },
          ' '
        )
      ),
      React.createElement(HeatMapSVG, null)
    );
  };

  return HeatMap;
}(Component);

export default HeatMap;


HeatMap.childContextTypes = {
  component: PropTypes.any
};
HeatMap.propTypes = {
  weekLables: PropTypes.object,
  monthLables: PropTypes.array,
  values: PropTypes.array,
  tooltip: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  days: PropTypes.number,
  emptyMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.bool]),
  message: PropTypes.func,
  endDate: PropTypes.object,
  panelColors: PropTypes.object,
  rectWidth: PropTypes.number,
  rectHeight: PropTypes.number
};

HeatMap.defaultProps = {
  prefixCls: "w-heatmap",
  tooltip: true,
  values: [],
  onClick: function onClick() {},
  onMouseOver: function onMouseOver() {},

  endDate: new Date(),
  // 默认选填选项  周标签显示
  weekLables: { 1: 'M', 3: 'W', 5: 'F' },
  // 默认选填选项  月份标签显示
  monthLables: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  rectWidth: 14,
  rectHeight: 14,
  // 颜色标记显示
  panelColors: {
    0: "#EBEDF0",
    4: "#C6E48B",
    8: "#7BC96F",
    12: "#239A3B",
    32: "#196127"
  }
};