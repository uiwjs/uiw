var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon/';

var Rate = function (_Component) {
  _inherits(Rate, _Component);

  function Rate(props) {
    _classCallCheck(this, Rate);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      value: props.value,
      hoverIndex: 0
    };
    return _this;
  }

  Rate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(_extends({}, nextProps));
  };

  Rate.prototype.onClick = function onClick(e) {
    var _props = this.props,
        disabled = _props.disabled,
        onChange = _props.onChange;
    var hoverIndex = this.state.hoverIndex;

    if (disabled) return;
    this.setState({
      value: hoverIndex
    }, function () {
      onChange(e, hoverIndex);
    });
  };

  Rate.prototype.onMouseMove = function onMouseMove(e, k) {
    var _props2 = this.props,
        disabled = _props2.disabled,
        onHoverChange = _props2.onHoverChange,
        allowHalf = _props2.allowHalf;

    var value = k;
    if (disabled) return;
    if (allowHalf) {
      e.persist();
      var isLeft = (e.clientX - e.target.getBoundingClientRect().left) * 2 <= e.target.parentNode.clientWidth;
      if (isLeft) {
        value = k + 0.5;
      } else {
        value = k + 1;
      }
    } else {
      value = k + 1;
    }
    this.setState({
      hoverIndex: value
    }, function () {
      onHoverChange(e, value);
    });
  };

  Rate.prototype.onMouseLeave = function onMouseLeave(e) {
    var _props3 = this.props,
        disabled = _props3.disabled,
        onHoverChange = _props3.onHoverChange;

    if (disabled) return;
    this.setState({
      hoverIndex: 0
    }, function () {
      onHoverChange(e, 0);
    });
  };

  Rate.prototype.starHalfOn = function starHalfOn(k) {
    var _state = this.state,
        value = _state.value,
        hoverIndex = _state.hoverIndex;

    if (hoverIndex > 0) {
      return k < hoverIndex && k + 1 > hoverIndex ? true : false;
    } else {
      return k < value && k + 1 > value ? true : false;
    }
  };

  Rate.prototype.starOn = function starOn(k) {
    var _state2 = this.state,
        value = _state2.value,
        hoverIndex = _state2.hoverIndex;

    return hoverIndex === 0 ? k < value : k < hoverIndex;
  };

  Rate.prototype.tempArray = function tempArray(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push(i);
    }return arr;
  };

  Rate.prototype.render = function render() {
    var _this2 = this;

    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        count = _props4.count,
        className = _props4.className,
        allowHalf = _props4.allowHalf,
        disabled = _props4.disabled,
        onHoverChange = _props4.onHoverChange,
        color = _props4.color,
        other = _objectWithoutProperties(_props4, ['prefixCls', 'count', 'className', 'allowHalf', 'disabled', 'onHoverChange', 'color']);

    return React.createElement(
      'ul',
      _extends({}, other, { className: this.classNames(className, '' + prefixCls),
        onMouseLeave: function onMouseLeave(e) {
          return _this2.onMouseLeave(e);
        }
      }),
      this.tempArray(count).map(function (v, k) {
        return React.createElement(
          'li',
          {
            key: k,
            className: _this2.classNames({
              'star-on': _this2.starOn(k),
              'star-half-on': _this2.starHalfOn(k),
              'w-disabled': disabled
            }),
            onClick: function onClick(e) {
              return _this2.onClick(e, k);
            },
            onMouseMove: function onMouseMove(e) {
              return _this2.onMouseMove(e, k);
            }
          },
          React.createElement(
            Icon,
            { type: 'star-on' },
            React.createElement(Icon, { style: { color: _this2.starOn(k) || _this2.starHalfOn(k) ? color : '' }, type: 'star-on' })
          )
        );
      })
    );
  };

  return Rate;
}(Component);

export default Rate;


Rate.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
  character: PropTypes.node,
  disabled: PropTypes.bool,
  allowHalf: PropTypes.bool,
  onHoverChange: PropTypes.func,
  onChange: PropTypes.func
};

Rate.defaultProps = {
  prefixCls: 'w-rate',
  value: 0,
  count: 5,
  // color: '#f5a623',
  disabled: false,
  allowHalf: false,
  onHoverChange: function onHoverChange() {},
  onChange: function onChange() {}
};