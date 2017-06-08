import React from 'react';
import {Component, PropTypes} from '../utils/';
import Layout from '../layout/';
import AsyncValidator from 'async-validator';

const {Row,Col} = Layout;

export default class FormItem extends Component {

  constructor(props) {
    super(props);
    this.state={
      error: '', // 错误信息
      help: '',  // 帮助信息
      isRequired:false, // 是否 【必填】
      validating:false, // 是否验证成功
      valid: false,     // 是否有效
    }
  }

  componentDidMount() {
    const { field } = this.props;
    let { isRequired,help } = this.props;

    if(field){
      const value = this.getInitialValue()
      this.parent().addField(this);
      this.initialValue = value.value;
      // 是否必填处理
      let rules = this.getRules();
      if (rules.length) rules.every(rule => {
          if(rule.required) isRequired = true;
      });

      help = value.help ? value.help :'';
      this.setState({
        isRequired,help
      })
    }
  }
  getInitialValue(){
    let model = this.parent().props.model
    return model[this.props.field]
  }
  // 获取 Form组件的 校验规则
  getRules() {
    let formRules = this.parent().props.model;
    formRules = formRules? formRules[this.props.field] : [];
    return [].concat( formRules? (formRules.rules || [] ) : [] );
  }

  resetField(): void {
    let { valid, error } = this.state;

    valid = true;
    error = '';

    this.setState({ valid, error });

    let val =  this.fieldValue()
    let model = this.parent().props.model

    if (Array.isArray(val) && val.length > 0) {
      model[this.props.field] = [];
    }else{
      model[this.props.field].value = this.initialValue
    }

  }

  validate(trigger,cb){
    let { validating, valid, error } = this.state;
    const rules = this.getRules();

    if (!rules || rules.length === 0) {
      cb && cb();
      return true;
    }

    const descriptor = { [this.props.field]: rules };
    const validator = new AsyncValidator(descriptor);
    const model = { [this.props.field]: this.fieldValue()};

    validator.validate(model, { firstFields: true }, errors => {
      valid = !errors;
      error = errors ? errors[0].message : '';
      cb && cb(errors);
      validating = false;
    });

    this.setState({ validating, valid, error });

  }

  fieldValue(){
    const model = this.parent().props.model;
    if (!model || !this.props.field) { return; }
    let str = model[this.props.field].value;
    return str;
  }

  parent(){
    return this.context.component;
  }
  onFieldBlur(){
    this.validate('blur');
  }
  onFieldChange(){
    this.validate('change');
  }


  renderLabel(){
    const {label,labelCol,prefixCls} = this.props;
    const labelColClassName = this.classNames(
      `${prefixCls}-label`,
      labelCol && labelCol.className,
    );
    let labelChildren = label;
    return (
      <Col {...labelCol} className={labelColClassName}>
        {label&&<label className={`${prefixCls}-field`}>{label}</label>}
      </Col>
    )
  }
  renderWrapper(){
    const {prefixCls,label,wrapperCol,children} = this.props;
    const {error,help} = this.state;

    const className = this.classNames(
      `${prefixCls}-control`,
      wrapperCol && wrapperCol.className,
    )
    return (
      <Col {...wrapperCol} 
        className={className}
        onBlur={this.onFieldBlur.bind(this)} 
        onChange={this.onFieldChange.bind(this)}
      >
        {children}
        {
          (error || help) && <div className={this.classNames(`${prefixCls}-explain`)}>{error || help}</div>
        }
      </Col>
    )
  }
  render() {
    const {prefixCls,className,style} = this.props;
    const {isRequired,error,help} = this.state;
    const cls = this.classNames(className,{
      [`${prefixCls}`]: true,
      'required': isRequired,
      'error': error!='',
      'help': help!='',
    })
    return (
      <Row className={cls}>
        {this.renderLabel.bind(this)()}
        {this.renderWrapper.bind(this)()}
      </Row>
    );
  }
}

FormItem.contextTypes = {
  component: PropTypes.any
};

FormItem.propTypes = {
  prefixCls: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  name: PropTypes.string,
}

FormItem.defaultProps = {
  prefixCls: 'w-form-item',
  label: '',
}
