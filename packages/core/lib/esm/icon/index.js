import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgPaths from 'uiw-iconfont/fonts/w-icon.json';
import './style/index.less';
export var Icon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSvgPaths", function (type) {
      var pathStrings = svgPaths[type];

      if (pathStrings == null) {
        return null;
      }

      return pathStrings.map(function (d, i) {
        return React.createElement("path", {
          key: i,
          d: d,
          fillRule: "evenodd"
        });
      });
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          color = _this$props.color,
          type = _this$props.type,
          spin = _this$props.spin,
          verticalAlign = _this$props.verticalAlign,
          _this$props$tagName = _this$props.tagName,
          TagName = _this$props$tagName === void 0 ? 'span' : _this$props$tagName,
          others = _objectWithoutProperties(_this$props, ["prefixCls", "color", "type", "spin", "verticalAlign", "tagName"]);

      var paths = this.renderSvgPaths(type);

      var propps = _objectSpread({}, others, {
        className: classnames(prefixCls, "".concat(prefixCls, "-").concat(verticalAlign), _defineProperty({}, "".concat(prefixCls, "-spin"), spin))
      });

      return React.createElement(TagName, propps, React.createElement("svg", {
        fill: color,
        viewBox: "0 0 24 24"
      }, paths));
    }
  }]);

  return Icon;
}(React.PureComponent);
Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  verticalAlign: PropTypes.oneOf(['middle', 'baseline']),
  spin: PropTypes.bool
};
Icon.defaultProps = {
  prefixCls: 'w-icon',
  style: {},
  verticalAlign: 'baseline',
  spin: false
};
//# sourceMappingURL=index.js.map