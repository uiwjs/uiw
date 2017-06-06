import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon'

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const {prefixCls,type,size,preIcon,icon,...other} = this.props;
    const cls = this.classNames(`${prefixCls}`,{
      'textarea':type === 'textarea',
      'disabled':this.props.disabled
    })
    if(type === 'textarea') return (
      <div className={cls}>
        <textarea 
          {...other}
          ref="textarea"
          type={type}
          className={`${prefixCls}-inner`}
          >
        </textarea>
      </div>
    );
    return (
      <div className={this.classNames(cls,{
        [`${prefixCls}-${size}`]:size,
        [`${prefixCls}-icon`]:preIcon || icon,
      })}>
        {typeof preIcon != 'string' ? preIcon : <Icon type={preIcon} />}
        <input 
          {...other}
          ref="input"
          type={type}
          className={`${prefixCls}-inner`}
          />
        {typeof icon != 'string' ? icon : <Icon type={icon} />}
      </div>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'mini']),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

Input.defaultProps = {
  prefixCls: 'w-input',
  type:"text",
}
