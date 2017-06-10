import React from 'react';
import {Component, PropTypes} from '../utils/';
import Tag from './Tag';

export default class CheckedTag extends Component {
  state = { 
    checked: false || this.props.checked,
    checkedValue:[]
  }
  componentDidMount() {
    let {checkedValues,isRadio} = this.parent().props;
    let {checkedValue} = this.state;
    this.setState({
      checkedValue:checkedValues
    })
  }
  parent(){
    return this.context.component;
  }
  handleChange = (checked,e) => {
    const {children} = this.props;
    const {options,checkedValues,onChange,isRadio} = this.parent().props;
    const {checkedValue} = this.state;

    if(options&&checked){
      let values = []
      if(isRadio){
        values.push(children)
      }else{
        values = [...checkedValue]
        let idx = values.indexOf(children);
        idx >-1 ? values.splice(idx, 1) : values.push(children);
      }
      this.setState({checkedValue:values,checked:!this.state.checked },()=>{
        //父组件的props.onChange
        onChange&&onChange(e,values)
      });
    }
  }
  render() {
    const {...props} = this.props;
    return <Tag {...props} checked={this.state.checked} onClick={this.handleChange} >{this.props.children}</Tag>;
  }
}
CheckedTag.contextTypes = {
  component: PropTypes.any
};