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
    let {checkedValue} = this.parent().state;
    this.setState({
      checkedValue:checkedValues
    })
  }
  parent(){
    return this.context.component;
  }
  handleChange = (checked,e) => {
    const {children} = this.props;
    let {options,checkedValues,onChange,isRadio} = this.parent().props;
    let {checkedValue} = this.state;

    if(options&&checked){
      if(isRadio){
        checkedValue = []
        checkedValue.push(children)
        checkedValues = [children]
      }else{
        console.log("children::",children)
        let idx = checkedValue.indexOf(children);
        idx >-1 ? checkedValue.splice(idx, 1) : checkedValue.push(children);
      }
      this.setState({ checked:!this.state.checked },()=>{
        //父组件的props.onChange
        onChange&&onChange(e,checkedValue)
      });
    }
  }
  render() {
    const {...props} = this.props;
    // delete props.isRadio;
    return <Tag {...props} checked={this.state.checked} onClick={this.handleChange} >{this.props.children}</Tag>;
  }
}
CheckedTag.contextTypes = {
  component: PropTypes.any
};