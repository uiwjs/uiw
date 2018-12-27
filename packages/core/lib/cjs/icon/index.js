"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var Icon =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Icon, _React$PureComponent);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderSvgPaths", function () {
      var pathStrings = ['M18.7057591,8.2278237 C19.0026259,7.92324538 19.4830346,7.92418003 19.7787819,8.2299113 C20.0745292,8.53564256 20.0736216,9.03039624 19.7767548,9.33497457 L12.5278529,16.7721763 C12.2315575,17.0761685 11.7522737,17.0759079 11.45629,16.7715938 L4.22267799,9.33439203 C3.92612357,9.0294911 3.92572321,8.53473671 4.22178376,8.22932717 C4.51784431,7.92391763 4.99825366,7.92350531 5.29480807,8.22840624 L11.9929207,15.115037 L18.7057591,8.2278237 Z'];

      if (pathStrings == null) {
        return null;
      }

      return pathStrings.map(function (d, i) {
        return _react.default.createElement("path", {
          key: i,
          d: d,
          fillRule: "evenodd"
        });
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          type = _this$props.type,
          _this$props$tagName = _this$props.tagName,
          TagName = _this$props$tagName === void 0 ? 'span' : _this$props$tagName;
      var paths = this.renderSvgPaths();
      return _react.default.createElement(TagName, null, _react.default.createElement("svg", {
        fill: color,
        dataIcon: type,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, paths));
    }
  }]);
  return Icon;
}(_react.default.PureComponent);

exports.Icon = Icon;
//# sourceMappingURL=index.js.map