import React from 'react';
import {Component, PropTypes} from '../utils/';
import Icon from '../icon'

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:""
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
      onSearch&&onSearch(e,e.target.value)
    }
    onKeyUp&&onKeyUp(e)
  }

  handleChange(e){
    const { onChange } = this.props;
    this.setState({
      value:e.target.value
    })
    onChange&&onChange(e)
  }
  handleClick(...attr){
    if(this.props[attr[0]]){
      this.props[attr[0]](this.state.value)
    }
  }

  render() {
    const {prefixCls,className,style,type,size,preIcon,icon,onIconClick,onPreIconClick,...other} = this.props;
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
        [`${prefixCls}-icon-a-left`]:onPreIconClick,
        [`${prefixCls}-icon-a-right`]:onIconClick,
      })}>
        {typeof preIcon != 'string' ? preIcon : <Icon type={preIcon} onClick={this.handleClick.bind(this,'onPreIconClick')} />}
        <input 
          {...other}
          ref="input"
          type={type}
          className={`${prefixCls}-inner`}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          />
        {typeof icon != 'string' ? icon : <Icon type={icon}  onClick={this.handleClick.bind(this,'onIconClick')}/>}
      </div>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'mini']),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onSearch: PropTypes.func,
}

Input.defaultProps = {
  prefixCls: 'w-input',
  type:"text",
}
