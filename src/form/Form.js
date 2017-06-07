import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class Form extends Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      fields: []
    }
  }

  addField(field) {
    this.state.fields.push(field);
  }
  // https://facebook.github.io/react/docs/context.html
  // 通过添加 childContextTypes 和 getChildContext()
  // 自动向下传递数据然后在组件树中的任意组件
  // 都能通过定义 contextTypes 访问
  getChildContext(){
    return {
      component: this
    }
  }

  // 验证数据
  validate = (callback) => {
    // console.log("-22ww-->",this)
    console.log("fields:::::::",this.state.fields)

  }
  // 重置字段方法
  resetFields(callback){

  }
  render() {
    const {prefixCls,...other} = this.props;

    delete other.model;
    delete other.rules;
    delete other.labelWidth;

    return (
      <form {...other} className={this.classNames(`${prefixCls}`)}>
        {this.props.children}
      </form>
    );
  }
}

Form.childContextTypes = {
  component: PropTypes.any
};

Form.propTypes = {
  prefixCls: PropTypes.string,
  model: PropTypes.object,
}

Form.defaultProps = {
  prefixCls: 'w-form',
}
