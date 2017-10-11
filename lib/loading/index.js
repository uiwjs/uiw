function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import "./style/index.less";

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Loading.prototype.render = function render() {
    var _classNames, _classNames2;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        size = _props.size,
        children = _props.children,
        tip = _props.tip,
        loading = _props.loading;

    var icon_content = React.createElement('div', { className: prefixCls + '-icon' });
    var loadingElm = React.createElement(
      'div',
      { className: prefixCls + '-tips-nested' },
      icon_content,
      tip
    );
    var cls = this.classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + '-small'] = size === 'small', _classNames[prefixCls + '-large'] = size === 'large', _classNames[className] = className, _classNames));

    return React.createElement(
      'div',
      { className: cls },
      loading && React.createElement(
        'div',
        { className: prefixCls + '-tips' },
        loadingElm
      ),
      children && React.createElement(
        'div',
        { className: this.classNames(prefixCls + '-warp', (_classNames2 = {}, _classNames2[prefixCls + '-blur'] = loading === true, _classNames2)) },
        this.props.children
      )
    );
  };

  return Loading;
}(Component);

export default Loading;


Loading.defaultProps = {
  prefixCls: 'w-loading',
  loading: true,
  size: 'default'
};
Loading.propTypes = {
  prefixCls: PropTypes.string,
  tip: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large'])
};