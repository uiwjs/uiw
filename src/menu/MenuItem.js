import React from 'react';
import {PropTypes} from '../utils/';
import MixinComponent from './MixinComponent';

export default class MenuItem extends MixinComponent {
  active(){
    return this.props.index === this.menu().state.defaultActive;
  }
  handleClick(){
    if(!this.props.disabled){
      this.menu().handleSelect(this.props.index,this)
    }
  }
  render() {
    const { prefixCls,className,style} = this.props;
    return (
      <li style={style} className={this.classNames(className,`${prefixCls}`,{
        'active':this.active(),
        'disabled':this.props.disabled,
      })} onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </li>
    )
  }
}

MenuItem.propTypes = {
  prefixCls:PropTypes.string,
  index:PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  prefixCls: "w-menu-item",
}
