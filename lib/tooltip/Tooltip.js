var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      showTooltip: props.visible,
      popupwidth: 0,
      content: props.content,
      stylesPopup: {}
    };
    _this.hideTooltip = _this.hideTooltip.bind(_this);
    _this.showTooltip = _this.showTooltip.bind(_this);
    _this.styles = _this.styles.bind(_this);
    return _this;
  }

  Tooltip.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      stylesPopup: this.styles()
    });
  };

  Tooltip.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    var _this2 = this;

    if (this.props.content !== nextProps.content) {
      this.setState({
        content: nextProps.content
      }, function () {
        // console
        _this2.setState({
          stylesPopup: _this2.styles()
        });
      });
    }
    if (this.props.visible !== nextProps.visible) {
      var _props = this.props,
          enterDelay = _props.enterDelay,
          onVisibleChange = _props.onVisibleChange;

      this.setState({ showTooltip: !this.state.showTooltip });
      // 解决无法获取节点样式
      setTimeout(function () {
        _this2.setState({
          stylesPopup: _this2.styles()
        });
        onVisibleChange(true);
      }, enterDelay || 0);
    }
  };

  Tooltip.prototype.showTooltip = function showTooltip() {
    var _this3 = this;

    var _props2 = this.props,
        enterDelay = _props2.enterDelay,
        onVisibleChange = _props2.onVisibleChange;

    clearTimeout(this.leaveTime);
    clearTimeout(this.styleTime);
    if (enterDelay) {
      this.leaveTime = setTimeout(function () {
        _this3.setState({
          showTooltip: true,
          stylesPopup: _this3.styles()
        }, function () {
          onVisibleChange(true);
        });
      }, enterDelay);
    } else {
      this.setState({
        showTooltip: true,
        stylesPopup: this.styles()
      }, function () {
        onVisibleChange(true);
      });
    }
    // 解决无法获取节点样式
    this.styleTime = setTimeout(function () {
      _this3.setState({
        stylesPopup: _this3.styles()
      });
    }, enterDelay || 0);
  };

  Tooltip.prototype.hideTooltip = function hideTooltip(e, isDelay) {
    var _this4 = this;

    var _props3 = this.props,
        leaveDelay = _props3.leaveDelay,
        onVisibleChange = _props3.onVisibleChange;
    var showTooltip = this.state.showTooltip;

    clearTimeout(this.leaveTime);

    if (isDelay === true) {
      this.setState({
        showTooltip: !showTooltip
      }, function () {
        _this4.setState({
          stylesPopup: _this4.styles()
        });
      });

      onVisibleChange && onVisibleChange(false);
    } else {
      this.leaveTime = setTimeout(function () {
        _this4.setState({
          showTooltip: false
        });
        onVisibleChange && onVisibleChange(false);
      }, leaveDelay || 0);
    }
  };
  // 弹出的位置


  Tooltip.prototype.styles = function styles() {
    var placement = this.props.placement;
    var _refs = this.refs,
        reference = _refs.reference,
        popup = _refs.popup;

    var top = 0,
        left = 0;

    var popwidth = popup.offsetWidth;
    var popheight = popup.offsetHeight;

    var refwidth = reference.offsetWidth;
    var refheight = reference.offsetHeight;

    var diffwidth = popwidth - refwidth;
    var diffheight = popheight - refheight;

    switch (placement) {
      case "top":
        top = -(refheight > popheight ? refheight : popheight);
        left = diffwidth > 0 ? -(diffwidth / 2) : Math.abs(diffwidth / 2);
        break;
      case "topLeft":
        top = -(refheight > popheight ? refheight : popheight);
        left = 0;
        break;
      case "topRight":
        top = -(refheight > popheight ? refheight : popheight);
        left = -(refwidth > popwidth ? refwidth - popwidth : popwidth - refwidth);
        break;
      case "left":
        top = diffheight > 0 ? -(diffheight / 2) : Math.abs(diffheight / 2);
        left = -popwidth;
        break;
      case "leftTop":
        top = 0;
        left = -popwidth;
        break;
      case "leftBottom":
        top = refheight > popheight ? refheight - popheight : -(popheight - refheight);
        left = -popwidth;
        break;
      case "right":
        top = diffheight > 0 ? -(diffheight / 2) : Math.abs(diffheight / 2);
        left = refwidth;
        break;
      case "rightTop":
        top = 0;
        left = refwidth;
        break;
      case "rightBottom":
        top = refheight > popheight ? refheight - popheight : -(popheight - refheight);
        left = refwidth;
        break;
      case "bottom":
        top = refheight;
        left = diffwidth > 0 ? -(diffwidth / 2) : Math.abs(diffwidth / 2);
        break;
      case "bottomLeft":
        top = refheight;
        left = 0;
        break;
      case "bottomRight":
        top = refheight;
        left = -(refwidth > popwidth ? refwidth - popwidth : popwidth - refwidth);
        break;
      default:
        break;
    }
    var sty = {};
    if (top || top === 0) sty.top = top + 'px';
    if (left) sty.left = left + 'px';
    return sty;
  };

  Tooltip.prototype.render = function render() {
    var _classNames,
        _this5 = this;

    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        className = _props4.className,
        disabled = _props4.disabled,
        children = _props4.children,
        visibleArrow = _props4.visibleArrow,
        placement = _props4.placement,
        trigger = _props4.trigger,
        style = _props4.style,
        effect = _props4.effect,
        leaveDelay = _props4.leaveDelay;
    var _state = this.state,
        stylesPopup = _state.stylesPopup,
        content = _state.content,
        showTooltip = _state.showTooltip;

    var cls = this.classNames(prefixCls, className, (_classNames = {}, _classNames[prefixCls + '-placement-' + placement] = placement, _classNames[prefixCls + '-' + effect] = effect, _classNames));

    var props = {};
    if (trigger === 'hover') {
      props.onMouseEnter = this.showTooltip;
      props.onMouseLeave = this.hideTooltip;
    } else {
      props.onClick = function (e) {
        if (leaveDelay) {
          _this5.setState({
            showTooltip: true
          }, function () {
            _this5.setState({
              stylesPopup: _this5.styles()
            });
          });
        }
        clearTimeout(_this5.clickLeaveTimeout);
        _this5.clickLeaveTimeout = setTimeout(function (f) {
          return _this5.hideTooltip(f, true);
        }, leaveDelay || 0);
      };
    }

    return React.createElement(
      'div',
      _extends({ className: cls, style: style || {} }, props),
      React.createElement(
        'div',
        { ref: 'reference', className: prefixCls + '-children' },
        ' ',
        children,
        ' '
      ),
      React.createElement(
        'div',
        { ref: 'popup', style: stylesPopup, className: prefixCls + '-popup' },
        React.createElement(
          Transition,
          { 'in': showTooltip, sequence: 'fadeIn' },
          React.createElement(
            'div',
            null,
            !disabled && React.createElement(
              'div',
              { className: prefixCls + '-content' },
              visibleArrow && React.createElement('div', { className: prefixCls + '-arrow' }),
              React.createElement(
                'div',
                { className: prefixCls + '-inner' },
                content
              )
            )
          )
        )
      )
    );
  };

  return Tooltip;
}(Component);

export default Tooltip;


Tooltip.propTypes = {
  prefixCls: PropTypes.string,
  // 显示的内容，也可以通过 slot#content 传入 DOM
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  // Tooltip 的出现位置
  placement: PropTypes.oneOf(['top', 'topLeft', 'topRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom', 'bottom', 'bottomLeft', 'bottomRight']),
  // 默认提供的主题: dark, light
  effect: PropTypes.oneOf(['dark', 'light']),
  // 触发行为
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  // 状态是否可用
  disabled: PropTypes.bool,
  // 手动控制状态的展示
  visible: PropTypes.bool,
  // 是否显示 Tooltips 箭头
  visibleArrow: PropTypes.bool,
  // 鼠标离开或者点击之后延时多少才隐藏 Tooltips，单位：秒
  leaveDelay: PropTypes.number,
  // 显示隐藏的回调
  onVisibleChange: PropTypes.func,
  style: PropTypes.object
};

Tooltip.defaultProps = {
  prefixCls: "w-tooltip",
  effect: "dark",
  placement: "top",
  disabled: false,
  visible: false,
  visibleArrow: true,
  trigger: "hover",
  onVisibleChange: function onVisibleChange(e) {
    return e;
  }
};