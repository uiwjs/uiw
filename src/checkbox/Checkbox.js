import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class Chackbox extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked:props.checked,
      indeterminate:props.indeterminate,
      value:props.children
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillReceiveProps(nextProps,nextState) {
    if(this.props.indeterminate!==nextProps.indeterminate){
      this.setState({indeterminate: nextProps.indeterminate, checked:false });
    }
    if(this.props.checked!==nextProps.checked){
      this.setState({checked:nextProps.checked});
    }
  }
  handleChange(e){
    const {onChange,children} = this.props;
    let checked = !this.state.checked;
    this.setState({
      checked:checked,
      indeterminate:false,
      value:children
    });
    onChange(e,checked);
  }
  render(){
    const { prefixCls, className,  children, disabled} = this.props;
    const {checked,indeterminate} = this.state;
    const cls = this.classNames(prefixCls,{
      'disabled': disabled,             // 禁用状态
      'indeterminate': indeterminate,   // 半选中
      'checked': checked,               // 选中
    });
    const lablestr = <span>{children}</span>
    return(
      <label className={this.classNames(`${prefixCls}-warpper`,className)}>
        <span className={cls}>
          <input type="checkbox" disabled={disabled} checked={checked} value={children} onChange={this.handleChange } />
        </span>
        {children&&lablestr}
      </label>
    )
  }
}

Chackbox.defaultProps = {
  prefixCls: 'w-chackbox',
  checked:false,
  indeterminate:false,
  onChange: e => (e),
};
Chackbox.propTypes = {
  prefixCls: PropTypes.string,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}