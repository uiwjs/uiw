import React from 'react';
import {Component, PropTypes} from '../utils/';
import Layout from '../layout/';

const {Row,Col} = Layout;

export default class FormItem extends Component {

  constructor(props) {
    super(props);
    this.state={
      isRequired:false, // 是否
    }
  }

  componentDidMount() {
    const { field } = this.props;

    if(field){
      this.parent().addField(this);
      // 是否必填处理
      let rules = this.getRules();
      if (rules.length) rules.every(rule => {
          rule.required && this.setState({
            isRequired:true
          })
      });
    }
    
  }

  // 获取 Form组件的 校验规则
  getRules() {
    let formRules = this.parent().props.model;
    formRules = formRules? formRules[this.props.field] : [];
    return [].concat( formRules.rules || []);
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

  validate(trigger,cb){
    // console.dir("=2=>",this)
    // console.log("=1=>",this.parent)
    // console.log("=3=>",this.context)
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
      </Col>
    )
  }
  render() {
    const {prefixCls,className,style} = this.props;
    const {isRequired } = this.state;
    const cls = this.classNames(className,{
      [`${prefixCls}`]: true,
      'required': isRequired
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
