var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Transition, { ENTERED, ENTERING, EXITING, EXITED } from 'react-transition-group/Transition';
import { Component, PropTypes } from '../utils/';
import "./style/index.less";

/**
 * 老的文档
 * https://facebook.github.io/react/docs/animation.html
 * 新的文档
 * https://reactcommunity.org/react-transition-group/
 * 动画效果
 * https://daneden.github.io/animate.css/
 */

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  function Animate() {
    _classCallCheck(this, Animate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

    _this.state = { in: false, unmountOnExit: false };
    return _this;
  }

  Animate.prototype.componentDidMount = function componentDidMount() {
    if (this.props.animateOnMount || this.props.in === true) {
      this.setState({ in: true });
    }
  };

  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.animateOnMount) {
      this.setState({ in: false });
    }
  };

  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    /* istanbul ignore next */
    if (nextProps.in === undefined) return;
    this.setState({
      in: nextProps.in
    });
    if (this.props.unmountOnExit !== nextProps.unmountOnExit) {
      this.setState({
        unmountOnExit: nextProps.unmountOnExit
      });
    }
  };

  Animate.prototype.render = function render() {
    var _animationStyles,
        _this2 = this;

    // // 动画结束删除根节点
    // if (!this.props.visible) {
    //   return false;
    // }
    var _props = this.props,
        prefixCls = _props.prefixCls,
        sequence = _props.sequence,
        className = _props.className,
        wait = _props.wait,
        children = _props.children,
        duration = _props.duration,
        unmountOnExit = _props.unmountOnExit,
        onTransitionendEnter = _props.onTransitionendEnter,
        onTransitionendExit = _props.onTransitionendExit,
        other = _objectWithoutProperties(_props, ['prefixCls', 'sequence', 'className', 'wait', 'children', 'duration', 'unmountOnExit', 'onTransitionendEnter', 'onTransitionendExit']);

    var transitionIn = this.state.in;

    var timeout = {
      enter: wait,
      exit: wait
      // 样式动画
    };var sequenceClassNames = sequence ? sequence.split(' ').map(function (s) {
      return 'is-' + s;
    }).join(' ') : null;
    var animationStyles = (_animationStyles = {}, _animationStyles[ENTERING] = 'is-mounting', _animationStyles[ENTERED] = 'is-mounted', _animationStyles[EXITING] = 'is-unmounting', _animationStyles[EXITED] = 'is-unmounted', _animationStyles);
    var childStyle = function childStyle(child) {
      return Object.assign({}, child && child.props ? child.props.style : {}, {
        transitionDuration: duration + 'ms'
      });
    };
    var childClassName = function childClassName(child, transitionStatus) {
      var _this2$classNames;

      var clss = _this2.classNames(prefixCls, (_this2$classNames = {}, _this2$classNames['' + className] = className, _this2$classNames), sequenceClassNames, transitionStatus && animationStyles[transitionStatus], child && child.props && child.props.className);
      return clss;
    };
    return React.createElement(
      Transition,
      _extends({
        ref: 'tran'
      }, other, {
        unmountOnExit: this.state.unmountOnExit,
        addEndListener: function addEndListener(node, done) {
          // 使用css transitionend事件来标记动画转换的完成
          node.addEventListener('transitionend', function (a, b) {
            _this2.setState({ unmountOnExit: _this2.props.in ? false : true }, function () {
              _this2.props.in ? onTransitionendEnter(_this2.props) : onTransitionendExit(_this2.props);
            });
          }, false);
        },
        className: prefixCls,
        'in': transitionIn,
        timeout: timeout
      }),
      function (status) {
        return React.cloneElement(children, {
          className: childClassName(children, status),
          style: childStyle(children)
        });
      }
    );
  };

  return Animate;
}(Component);

export default Animate;


Animate.propTypes = {
  animateOnMount: PropTypes.bool,
  onTransitionendEnter: PropTypes.func,
  onTransitionendExit: PropTypes.func,
  unmountOnExit: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
  in: PropTypes.bool,
  sequence: PropTypes.string,
  wait: PropTypes.number
};
Animate.defaultProps = {
  onTransitionendEnter: function onTransitionendEnter() {},
  //
  onTransitionendExit: function onTransitionendExit() {},

  prefixCls: "w-animate",
  unmountOnExit: true, // 设置 true 销毁根节点
  animateOnMount: true, // 安装动画
  duration: 200, // 持续时间
  wait: 0
};