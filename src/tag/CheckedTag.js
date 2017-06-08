import React from 'react';
import {Component, PropTypes} from '../utils/';
import Tag from './Tag';

export default class CheckedTag extends Component {
  state = { checked: false || this.props.checked };
  parent(){
    return this.context.component;
  }
  handleChange = (checked,e) => {
    let {options,onChange} = this.parent().props;
    if(options){
      options[this.props.idx].checked = !this.state.checked;
      this.setState({ checked:!this.state.checked },()=>{
        let values = []
        options.map((item,idx)=>{
          if(item.checked){
            values.push(item.value);
          }
        })
        //父组件的props.onChange
        onChange&&onChange(e,values)
      });
    }
  }
  render() {
    const {...props} = this.props;
    delete props.checkedTags;
    delete props.idx;
    return <Tag {...props} checked={this.state.checked} onClick={this.handleChange} >{this.props.children}</Tag>;
  }
}
CheckedTag.contextTypes = {
  component: PropTypes.any
};