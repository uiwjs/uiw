var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Layout from '../layout/';
import AsyncValidator from 'async-validator';

var Row = Layout.Row,
    Col = Layout.Col;

var FormItem = function (_Component) {
  _inherits(FormItem, _Component);

  function FormItem(props) {
    _classCallCheck(this, FormItem);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      error: '', // 错误信息
      help: '', // 帮助信息
      isRequired: false, // 是否 【必填】
      validating: false, // 是否验证成功
      valid: false, // 是否有效
      initialValue: null
    };
    return _this;
  }

  FormItem.prototype.componentDidMount = function componentDidMount() {
    var field = this.props.field;
    var _props = this.props,
        isRequired = _props.isRequired,
        help = _props.help;


    if (field) {
      var value = this.getInitialValue();
      this.parent().addField(this);
      // 是否必填处理
      var rules = this.getRules();
      if (rules && rules.length) {
        rules.every(function (rule) {
          if (rule && rule.required) isRequired = true;
          return rule;
        });
      }
      this.setState({
        isRequired: isRequired, help: help,
        initialValue: value
      });
    }
  };

  FormItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.fieldValue()) {
      this.validate('blur');
    }
  };

  FormItem.prototype.getInitialValue = function getInitialValue() {
    var model = this.parent().props.model;
    return model[this.props.field];
  };
  // 获取 Form组件的 校验规则


  FormItem.prototype.getRules = function getRules() {
    var formRules = this.parent().props.rules;
    return [].concat(this.props.rules || formRules ? formRules[this.props.field] : [] || []);
  };

  FormItem.prototype.resetField = function resetField() {
    var _state = this.state,
        valid = _state.valid,
        error = _state.error;


    valid = true;
    error = '';

    this.setState({ valid: valid, error: error });

    var val = this.fieldValue();
    var model = this.parent().props.model;
    if (Array.isArray(val)) {
      model[this.props.field] = this.state.initialValue || [];
    } else {
      model[this.props.field] = this.state.initialValue;
    }
  };

  FormItem.prototype.getFilteredRule = function getFilteredRule() {
    var rules = this.getRules();
    // 过滤数组中的undefined
    return rules.filter(function (rule) {
      return rule;
    });
  };

  FormItem.prototype.validate = function validate(trigger, cb) {
    var _descriptor, _model;

    var _state2 = this.state,
        validating = _state2.validating,
        valid = _state2.valid,
        error = _state2.error;

    var rules = this.getFilteredRule();

    if (!rules || rules.length === 0) {
      cb && cb();
      return true;
    }

    validating = true;
    var descriptor = (_descriptor = {}, _descriptor[this.props.field] = rules, _descriptor);
    var validator = new AsyncValidator(descriptor);
    var model = (_model = {}, _model[this.props.field] = this.fieldValue(), _model);

    validator.validate(model, { firstFields: true }, function (errors) {
      valid = !errors;
      error = errors ? errors[0].message : '';
      cb && cb(errors);
      validating = false;
    });

    this.setState({ validating: validating, valid: valid, error: error });
  };

  FormItem.prototype.fieldValue = function fieldValue() {
    var model = this.parent().props.model;
    if (!model || !this.props.field) {
      return;
    }
    var str = model[this.props.field];
    return str;
  };

  FormItem.prototype.parent = function parent() {
    return this.context.component;
  };

  FormItem.prototype.onFieldChange = function onFieldChange() {
    this.validate('change');
  };

  FormItem.prototype.layoutFilter = function layoutFilter(col) {
    var layout = this.parent().props.layout;

    if (layout === "vertical") {
      return { span: 0 };
    }
    if (layout === "inline") {
      return { span: 0 };
    }
    return col;
  };

  FormItem.prototype.renderLabel = function renderLabel() {
    var _props2 = this.props,
        label = _props2.label,
        labelCol = _props2.labelCol,
        prefixCls = _props2.prefixCls;

    var labelColClassName = this.classNames(prefixCls + '-label', labelCol && labelCol.className);

    return React.createElement(
      Col,
      _extends({}, this.layoutFilter(labelCol), { className: labelColClassName }),
      label && React.createElement(
        'label',
        { className: prefixCls + '-field' },
        label
      )
    );
  };

  FormItem.prototype.renderWrapper = function renderWrapper() {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        wrapperCol = _props3.wrapperCol,
        children = _props3.children;
    var _state3 = this.state,
        error = _state3.error,
        help = _state3.help;


    var className = this.classNames(prefixCls + '-control', wrapperCol && wrapperCol.className);
    return React.createElement(
      Col,
      _extends({}, this.layoutFilter(wrapperCol), {
        className: className,
        onChange: this.onFieldChange.bind(this)
      }),
      children,
      (error || help) && React.createElement(
        'div',
        { className: this.classNames(prefixCls + '-explain') },
        error || help
      )
    );
  };

  FormItem.prototype.render = function render() {
    var _classNames;

    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        className = _props4.className,
        style = _props4.style;
    var _state4 = this.state,
        isRequired = _state4.isRequired,
        error = _state4.error,
        help = _state4.help;

    var cls = this.classNames(className, (_classNames = {}, _classNames['' + prefixCls] = true, _classNames['required'] = isRequired, _classNames['error'] = error !== '', _classNames['help'] = help !== '', _classNames));
    return React.createElement(
      Row,
      { style: style, className: cls },
      this.renderLabel.bind(this)(),
      this.renderWrapper.bind(this)()
    );
  };

  return FormItem;
}(Component);

export default FormItem;


FormItem.contextTypes = {
  component: PropTypes.any
};

FormItem.propTypes = {
  prefixCls: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  name: PropTypes.string
};

FormItem.defaultProps = {
  prefixCls: 'w-form-item',
  label: ''
};