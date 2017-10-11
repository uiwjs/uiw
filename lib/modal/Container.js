var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, ReactDOM } from '../utils/';
import classNames from 'classnames';
import Modals from './Modal';
import ActionButton from './ActionButton';

var ContainerModel = function (_Component) {
  _inherits(ContainerModel, _Component);

  function ContainerModel(props) {
    _classCallCheck(this, ContainerModel);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.closeModals = _this.closeModals.bind(_this);
    _this.state = {
      visible: true
    };
    return _this;
  }

  ContainerModel.prototype.closeModals = function closeModals() {
    this.refs.modals.onCancel();
  };

  ContainerModel.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        icon = _props.icon,
        title = _props.title,
        content = _props.content,
        onOk = _props.onOk,
        className = _props.className,
        onCancel = _props.onCancel,
        cancelText = _props.cancelText,
        okText = _props.okText,
        _props$maskClosable = _props.maskClosable,
        maskClosable = _props$maskClosable === undefined ? false : _props$maskClosable,
        _props$width = _props.width,
        width = _props$width === undefined ? 416 : _props$width,
        _props$type = _props.type,
        type = _props$type === undefined ? "success" : _props$type,
        _props$prefixCls = _props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? "w-modals-confirm" : _props$prefixCls,
        others = _objectWithoutProperties(_props, ['icon', 'title', 'content', 'onOk', 'className', 'onCancel', 'cancelText', 'okText', 'maskClosable', 'width', 'type', 'prefixCls']);

    var footer = [];
    if (cancelText) {
      footer.push(React.createElement(
        ActionButton,
        { key: 'cancel', size: 'small', closeModals: this.closeModals, onOk: onCancel, autoFocus: true },
        cancelText
      ));
    }
    if (okText) {
      footer.push(React.createElement(
        ActionButton,
        { key: 'ok', type: type, size: 'small', closeModals: this.closeModals, onOk: onOk, autoFocus: true },
        okText
      ));
    }
    console.log("type:", type);
    return React.createElement(
      Modals,
      _extends({
        ref: 'modals'
      }, others, {
        className: classNames(prefixCls, className, (_classNames = {}, _classNames['' + type] = type, _classNames)),
        visible: this.state.visible,
        maskClosable: maskClosable,
        onOk: onOk // 点击确定提交按钮
        , width: width // 有默认值可以不传递
        , onCancel: this.closeModals,
        footer: footer
      }),
      React.createElement(
        'div',
        { className: prefixCls + '-icon' },
        icon
      ),
      React.createElement(
        'div',
        { className: prefixCls + '-title' },
        title
      ),
      React.createElement(
        'div',
        { className: prefixCls + '-content' },
        content
      )
    );
  };

  return ContainerModel;
}(Component);

export default function Container(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  function removeChild(e) {
    // 从 DOM 中移除已经挂载的 React 组件，清除相应的事件处理器和 state。
    // 如果在 container 内没有组件挂载，这个函数将什么都不做。
    // 如果组件成功移除，则返回 true；如果没有组件被移除，则返回 false。
    var unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  ReactDOM.render(React.createElement(ContainerModel, _extends({ removeChild: removeChild.bind(this, div) }, config)), div);
}