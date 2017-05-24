import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Chackbox extends Component{
  constructor(props){
    super(props);
    const {checked,indeterminate} = this.props;
    this.state = {
      checked:checked,
      indeterminate:indeterminate
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    const {onChange} = this.props;
    this.setState({
      checked:!this.state.checked,
      indeterminate:false
    });
    onChange(e);
  }
  render(){
    const { prefixCls, className, children, disabled} = this.props;
    const {checked,indeterminate} = this.state;
    const cls = classNames(prefixCls,{
        'disabled': disabled,             // 禁用状态
        'indeterminate': indeterminate,   // 激活状态
        'checked': checked,               //（块级元素）Block level 
        [className]: className
      });
    return(
      <label className={`${prefixCls}-warpper`}>
        <span className={cls}>
          <input type="checkbox" disabled={disabled} checked={checked} value="{children}" onChange={this.handleChange} />
        </span>
        <span>{children}</span>
      </label>
    )
  }
}

Chackbox.defaultProps = {
  prefixCls: 'w-chackbox',
  checked:false,
  onChange: e => (e),
};
Chackbox.propTypes = {
  prefixCls: PropTypes.string,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}