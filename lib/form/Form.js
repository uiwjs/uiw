var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      fields: []
    };
    return _this;
  }

  // https://facebook.github.io/react/docs/context.html
  // 通过添加 childContextTypes 和 getChildContext()
  // 自动向下传递数据然后在组件树中的任意组件
  // 都能通过定义 contextTypes 访问


  Form.prototype.getChildContext = function getChildContext() {
    return {
      component: this
    };
  };
  // 验证数据


  Form.prototype.validate = function validate(callback) {
    var fields = this.state.fields;
    var model = this.props.model;

    var valid = true;

    // 如果需要验证的fields为空，调用验证时立刻返回callback
    if (fields.length === 0 && callback) callback(true);

    fields.forEach(function (field, idx) {
      field.validate('', function (errors) {
        if (errors) {
          valid = false;
        }
        if (typeof callback === 'function' && idx + 1 === fields.length) {
          callback(valid, model);
        }
      });
    });
  };

  Form.prototype.addField = function addField(field) {
    this.state.fields.push(field);
  };

  // 重置字段方法


  Form.prototype.resetFields = function resetFields(callback) {
    this.state.fields.forEach(function (field) {
      field.resetField();
    });
    callback && callback(this.props.model);
  };

  Form.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        layout = _props.layout,
        model = _props.model,
        rules = _props.rules,
        other = _objectWithoutProperties(_props, ['prefixCls', 'layout', 'model', 'rules']);

    return React.createElement(
      'form',
      _extends({}, other, { className: this.classNames('' + prefixCls, (_classNames = {}, _classNames[prefixCls + '-' + layout] = layout, _classNames)) }),
      this.props.children
    );
  };

  return Form;
}(Component);

export default Form;


Form.childContextTypes = {
  component: PropTypes.any
};

Form.propTypes = {
  prefixCls: PropTypes.string,
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  model: PropTypes.object,
  rules: PropTypes.object
};

Form.defaultProps = {
  prefixCls: 'w-form',
  layout: 'horizontal'
};