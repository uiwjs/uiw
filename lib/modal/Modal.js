var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';
import Button from '../button';
import Icon from '../icon';
var ButtonGroup = Button.Group;

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onCancel = function (ismask, e) {
      // 禁止遮罩层关闭
      if (ismask === "mask" && !_this.props.maskClosable) return;
      _this.setState({ leave: false }, function () {
        _this.modalHide();
      });
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      onOk && onOk(e);
    };

    _this.state = {
      leave: true,
      visible: _this.props.visible
    };
    return _this;
  }

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    var _this2 = this;

    if (this.props.visible !== nextProps.visible) {
      if (nextProps.visible) {
        this.setState({
          visible: true,
          leave: true
        });
      } else {
        this.setState({ leave: false }, function () {
          setTimeout(function () {
            if (_this2.state.visible !== false) {
              _this2.setState({
                visible: false,
                leave: true
              });
            }
          }, 250);
        });
      }
    }
  };

  Modal.prototype.modalHide = function modalHide(e) {
    var _this3 = this;

    var onCancel = this.props.onCancel;

    if (!this.state) return;
    this.modalHideTimeout = setTimeout(function () {
      _this3.setState({
        visible: false,
        leave: true
      });
      clearTimeout(_this3.modalHideTimeout);
      onCancel(e);
    }, 250);
  };

  Modal.prototype.render = function render() {
    var _classNames,
        _this4 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        title = _props.title,
        footer = _props.footer,
        horizontal = _props.horizontal,
        styleMask = _props.styleMask,
        children = _props.children,
        confirmLoading = _props.confirmLoading,
        onCancel = _props.onCancel,
        cancelText = _props.cancelText,
        okText = _props.okText,
        width = _props.width,
        maskClosable = _props.maskClosable,
        other = _objectWithoutProperties(_props, ['prefixCls', 'className', 'title', 'footer', 'horizontal', 'styleMask', 'children', 'confirmLoading', 'onCancel', 'cancelText', 'okText', 'width', 'maskClosable']);

    var _state = this.state,
        leave = _state.leave,
        visible = _state.visible;


    if (!visible) return null;

    var defaultFooter = !footer ? React.createElement(
      ButtonGroup,
      null,
      React.createElement(
        Button,
        { key: 'cancel', size: 'small', onClick: this.onCancel },
        cancelText || '取消'
      ),
      React.createElement(
        Button,
        { key: 'confirm', size: 'small', loading: confirmLoading, onClick: this.handleOk },
        okText || '确定'
      )
    ) : footer;

    var cls = this.classNames(prefixCls, (_classNames = {}, _classNames[prefixCls + '-wrap'] = true, _classNames[prefixCls + '-horizontal-left'] = horizontal === 'left', _classNames[prefixCls + '-horizontal-right'] = horizontal === 'right', _classNames[className] = className, _classNames));

    var AnimateType = '';
    switch (horizontal) {
      case 'left':
        AnimateType = 'fadeIn left';break;
      case 'right':
        AnimateType = 'fadeIn right';break;
      default:
        AnimateType = 'fadeIn down';break;
    }
    defaultFooter = footer === null ? null : React.createElement(
      'div',
      { className: prefixCls + '-footer' },
      defaultFooter
    );
    console.log("leave::", AnimateType, leave);
    return React.createElement(
      'div',
      { className: cls },
      React.createElement(
        Transition,
        { 'in': leave, sequence: 'fadeIn' },
        React.createElement('div', { className: prefixCls + '-mask', style: styleMask, onClick: function onClick() {
            return _this4.onCancel('mask');
          } })
      ),
      React.createElement(
        Transition,
        { 'in': leave, sequence: AnimateType },
        React.createElement(
          'div',
          { className: prefixCls + '-content', style: _extends({ width: width }, other.style) },
          React.createElement(
            'div',
            { className: prefixCls + '-header' },
            React.createElement(
              'div',
              { className: prefixCls + '-title', id: 'rcDialogTitle9' },
              title
            ),
            React.createElement(
              'a',
              { onClick: function onClick() {
                  return _this4.onCancel();
                }, className: prefixCls + '-close-icon' },
              React.createElement(Icon, { type: 'close' })
            )
          ),
          React.createElement(
            'div',
            { className: prefixCls + '-body' },
            children
          ),
          defaultFooter
        )
      )
    );
  };

  return Modal;
}(Component);

export default Modal;


Modal.defaultProps = {
  prefixCls: "w-modal",
  width: 520,
  visible: false,
  maskClosable: true,
  confirmLoading: false,
  onCancel: function onCancel(v) {
    return v;
  }
};
Modal.propTypes = {
  visible: PropTypes.bool,
  horizontal: PropTypes.oneOf(['left', 'right']),
  maskClosable: PropTypes.bool,
  styleMask: PropTypes.object,
  style: PropTypes.object,
  confirmLoading: PropTypes.bool,
  title: PropTypes.node,
  footer: PropTypes.node,
  onCancel: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};