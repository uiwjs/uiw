import React from 'react';
import {Component, PropTypes} from '../utils/';
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
    const {max,min,length} = this.props;
    let val = e.target.value;

    this.setState({value:val})
  }
  renderSelectable(){
    const {prefixCls} = this.props;
    return(
      <div className={`${prefixCls}-control`}>
        <div className={this.classNames(`${prefixCls}-push`,'w-transition-base')}><Icon type="arrow-up"/></div>
        <div className={this.classNames(`${prefixCls}-minus`,'w-transition-base')}><Icon type="arrow-down"/></div>
      </div>
    )
  }
  render() {
    const {prefixCls,defaultValue,onChange,min,max,...other} = this.props;

    return (
      <div className={`${prefixCls}`}>
        <Input 
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
  prefixCls: PropTypes.string
}

InputNumber.defaultProps = {
  prefixCls: 'w-input-number',
}
