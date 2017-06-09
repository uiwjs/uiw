import React from 'react';
import {Component, PropTypes} from '../utils/';
import Tag from './Tag';
import CheckedTag from './CheckedTag';
import "./style/tag-group.less";


export default class TagGroup extends Component {
  constructor(props){
    super(props)
    this.state = {
        dynamicTags:props.options
    }
  }
  // 不要删除
  getChildContext(){
    return {component: this}
  }
  onFieldChange(e){this.getValue(e)}
  getValue(e){
    const {options,onChange} = this.props;
    onChange(e,this.getFilteredTags(options));
  }
  getFilteredTags(tags){
    return tags.map(tag => {
      return typeof(tag)==='object' ?tag.value:tag;
    });
  }
  handleClose(tag,e) {
    const {onChange} = this.props;
    let {dynamicTags} = this.state;
    dynamicTags.splice(dynamicTags.indexOf(tag), 1);

    this.setState({dynamicTags },()=>{
      onChange(e,this.getFilteredTags(dynamicTags))
    })
  }
  render() {
    const { prefixCls, children, options, isRadio, checkedValues,onChange,checked, className, ...other} = this.props;
    const cls = this.classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });

    return (
      <div className={cls} {...other}>
        {
          options.map((tag, idx) => {
            let prop = {};
            if(typeof(tag) === "object" ){
              prop.color = tag.color ? tag.color : "";
              tag = tag.value? tag.value : "";
            }
            if (Array.isArray(checkedValues)&&(checked || isRadio)){
              return (
                <CheckedTag checked={checkedValues.indexOf(tag) > -1} {...prop} key={Math.random()}>{tag}</CheckedTag>
              )
            }
            return <Tag {...prop}  key={Math.random()} onClose={this.handleClose.bind(this,tag)}>{tag}</Tag>
          })
        }
        {children&&
          <div 
            className={this.classNames(`${prefixCls}-children`)}
            onBlur={this.onFieldChange.bind(this)} 
            onKeyUp={this.onFieldChange.bind(this)}
          > 
            {children} 
          </div>
        }
      </div>
    );
  }
};


TagGroup.childContextTypes = {
  component: PropTypes.any
};

TagGroup.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  checked: PropTypes.bool,
  isRadio: PropTypes.bool,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func,
};

TagGroup.defaultProps = {
  prefixCls: "w-tag-group",
  checkedValues: [],
  onChange:v => (v)
};