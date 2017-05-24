import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Checkboxs from './';

export default class Loading extends Component{
  renderCheckbox(item, i){
    const {onChange,defaultChecked,disabled} = this.props;
    let value = item.value?item.value:item;
    let attri = { key:i, onChange:(str)=>{
      console.log("--->",str)
    }}
    if(defaultChecked.indexOf(value)>-1){
      attri.checked = true
    }
    if(disabled){
      attri.disabled = item.disabled===false ? false : disabled;
    }
    return (
      <Checkboxs {...attri}> {value}</Checkboxs>
    )
  }
  render(){
    const { prefixCls, style, options, className } = this.props;
    return(
      <div style={style} className={classNames(prefixCls,className)}>
      {options.map((item, i) => this.renderCheckbox(item, i))}
      </div>
    )
  }
}

Loading.defaultProps = {
  prefixCls: 'w-checkbox-group',
  options:[],
  defaultChecked:[],
  onChange: e => (e),
};
Loading.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  defaultChecked: PropTypes.array,
  onChange: PropTypes.func,
}