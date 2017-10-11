var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Children, cloneElement, createElement } from 'react';
import { Component, PropTypes } from '../utils/';
import assign from 'object-assign';

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        gutter = _props.gutter,
        children = _props.children,
        tag = _props.tag,
        type = _props.type,
        justify = _props.justify,
        align = _props.align,
        others = _objectWithoutProperties(_props, ['prefixCls', 'className', 'gutter', 'children', 'tag', 'type', 'justify', 'align']);

    var cols = Children.map(children, function (col) {
      if (!col) return null;

      if (col.props && gutter > 0) {
        return cloneElement(col, {
          style: assign({}, {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2
          }, col.props.style)
        });
      }
      return col;
    });

    return createElement(this.props.tag, _extends({
      className: this.classNames(className, (_classNames = {}, _classNames[prefixCls] = !type, _classNames[prefixCls + '-' + type] = type, _classNames[prefixCls + '-justify-' + justify] = type && justify, _classNames[prefixCls + '-align-' + align] = type && align, _classNames))
    }, others), cols);
  };

  return Row;
}(Component);

export default Row;


Row.childContextTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Row.propTypes = {
  prefixCls: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['flex']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
  align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline'])
};

Row.defaultProps = {
  prefixCls: "w-row",
  tag: 'div'
};