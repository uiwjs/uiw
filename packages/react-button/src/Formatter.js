'use strict';
exports.__esModule = true;
exports.Formatter = void 0;
var tsdoc_1 = require('@microsoft/tsdoc');
/**
 * This is a simplistic solution until we implement proper DocNode rendering APIs.
 */
var Formatter = /** @class */ (function () {
  function Formatter() {}
  Formatter.renderDocNode = function (docNode) {
    var result = '';
    if (docNode) {
      if (docNode instanceof tsdoc_1.DocExcerpt) {
        result += docNode.content.toString();
      }
      for (var _i = 0, _a = docNode.getChildNodes(); _i < _a.length; _i++) {
        var childNode = _a[_i];
        result += Formatter.renderDocNode(childNode);
      }
    }
    return result;
  };
  Formatter.renderDocNodes = function (docNodes) {
    var result = '';
    for (var _i = 0, docNodes_1 = docNodes; _i < docNodes_1.length; _i++) {
      var docNode = docNodes_1[_i];
      result += Formatter.renderDocNode(docNode);
    }
    return result;
  };
  return Formatter;
})();
exports.Formatter = Formatter;
