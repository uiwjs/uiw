import React from 'react';
import {Component, PropTypes} from '../utils/';
import {accAdd, accSub} from '../utils/number';
import {default as Input } from '../input/';
import {default as Icon } from '../icon/';

export default class InputNumber extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  handleInput(e){
    const {value} = this.state;
    let val = e.target.value;
    this.setState({value:val})
  }
  handleClick(type,e){
    let {value} = this.state;
    this.refs.input.focus();
    const {max,min,step,onChange} = this.props;

    if(type == "up"){
      value = accAdd(Number(value || 0),step);
      if(value > Number(max)) return;
    }
    if(type == "down"){
      value = accSub(Number(value || 0),step);
      if(value < Number(min)) return;
    }

    this.setState({value},()=>{
      onChange(this.refs.input,value)
    })
  }
  renderSelectable(){
    const {prefixCls} = this.props;
    return(
      <div className={`${prefixCls}-control`}>
        <div className={this.classNames(`${prefixCls}-push`,'w-transition-base')} onClick={this.handleClick.bind(this,'up')}><Icon type="arrow-up"/></div>
        <div className={this.classNames(`${prefixCls}-minus`,'w-transition-base')} onClick={this.handleClick.bind(this,'down')}><Icon type="arrow-down"/></div>
      </div>
    )
  }
  render() {
    const {prefixCls,defaultValue,onChange,min,max,...other} = this.props;

    return (
      <div className={`${prefixCls}`}>
        <Input 
         ref="input"
          {...other}
         type="number" 
         icon={this.renderSelectable.bind(this)()}
         value={this.state.value}
         onInput={this.handleInput.bind(this)}/>
      </div>
    )
  }
}

InputNumber.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InputNumber.defaultProps = {
  prefixCls: 'w-input-number',
  onChange:(v)=>v,
  // value:1,
  step:1,
}
