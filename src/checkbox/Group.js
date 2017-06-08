import React from 'react';
import {Component, PropTypes} from '../utils/';
import Checkbox from './';


export default class Group extends Component{
  constructor(props){
    super(props);
    this.checkedValuesResult = this.checkedValuesResult.bind(this);
  }
  checkedValuesResult(checkedValues,value,checked){
    let values = []
    for(let i=0;i< checkedValues.length;i++){
      let _value = this.refs['checkbox'+i].state.value;
      let _checked = this.refs['checkbox'+i].state.checked;
      if( (_checked&&value!=_value) || (checked&&value==_value) ){
        values.push(_value)
      }
    }
    return values;
  }
  render(){
    const { prefixCls, style, onChange,options,checkedValues, disabled, className } = this.props;

    let attr = {}
    return(
      <div style={style} className={this.classNames(prefixCls,className)}>
      {Array.from(options,(item, i)=>{
        let value = item.value?item.value:item;
        attr = {key:i }
        if(checkedValues.indexOf(value)>-1){
          attr.checked = true;
        }
        if(disabled){
          attr.disabled = item.disabled===false ? false : disabled;
        }
        if(onChange){
          attr.onChange = (e,checked)=>{
            let values = this.checkedValuesResult(options,value,checked);
            onChange(e,values,value,checked);
          }
        }
        return (
          <Checkbox ref={`checkbox${i}`} {...attr}>{value}</Checkbox>
        )
      })}
      </div>
    )
  }
}

Group.defaultProps = {
  prefixCls: 'w-checkbox-group',
  options:[],
  checkedValues:[],
  onChange: e => (e),
};
Group.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func,
}