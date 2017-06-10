import React from 'react';
import {Component, PropTypes} from '../utils/';
import Icon from '../icon'

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:props.value
    }
  }
  focus(){
    (this.refs.input || this.refs.textarea).focus();
  }

  blur(){
    (this.refs.input || this.refs.textarea).blur();
  }
  handleKeyUp(e){
    const { onSearch,onKeyUp } = this.props;
    if(e.key == "Enter"){
      onSearch&&onSearch(e.target.value,e)
    }
    onKeyUp&&onKeyUp(e)
  }

  handleChange(e){
    const { onChange,length } = this.props;
    let val = e.target.value
    if(val.length>length){
      val=val.slice(0,length); 
      e.target.value = val;
    }
    this.state.value = val;
    onChange&&onChange(e,val)
  }
  handleClick(type,e){
    if(this.props[type]){
      this.props[type](e,this.state.value)
    }
  }

  renderIcon(type){
    const {prefixCls,preIcon,icon,onIconClick,onPreIconClick} = this.props;
    let icons = type === 'icon' ? icon: preIcon;
    return (
      <div className={this.classNames({
        [`${prefixCls}-icon-left`]:type === 'preIcon' &&preIcon,
        [`${prefixCls}-icon-right`]:type === 'icon' &&icon,
        [`event`]: type === 'preIcon' && onPreIconClick || type === 'icon' && onIconClick
      })}>
      {
        typeof preIcon == 'string' || typeof icon == 'string' 
        ? <Icon type={icons}  onClick={this.handleClick.bind(this, type === 'icon' ? 'onIconClick' : 'onPreIconClick')}/> 
        : (type == 'icon'?icon:preIcon)
      }
      </div>
    )
  }
  render() {
    const {prefixCls,className,style,type,size,length,preIcon,icon,onIconClick,onPreIconClick,...other} = this.props;
    const cls = this.classNames(`${prefixCls}`,className,{
      'textarea':type === 'textarea',
      'disabled':this.props.disabled
    })

    delete other.onSearch;
    delete other.onChange;

    if(type === 'textarea') return (
      <textarea 
        className={  this.classNames(cls,`${prefixCls}-inner`)}
        {...other}
        ref="textarea"
        type={type}
        style={style}
        onChange={this.handleChange.bind(this)}
        >
      </textarea>
    );


    return (
      <div style={style} className={this.classNames(cls,{
        [`${prefixCls}-${size}`]:size,
        [`${prefixCls}-icon`]:preIcon || icon,
      })}>
        {preIcon&&this.renderIcon.bind(this)('preIcon')}
        {icon&&this.renderIcon.bind(this)('icon')}
        <input 
          {...other}
          ref="input"
          type={type}
          className={this.classNames(`${prefixCls}-inner`,{
            [`${prefixCls}-p-left`]:preIcon,
            [`${prefixCls}-p-right`]:icon
          })}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          />
      </div>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'mini']),
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onSearch: PropTypes.func,
}

Input.defaultProps = {
  prefixCls: 'w-input',
  type:"text",
}
