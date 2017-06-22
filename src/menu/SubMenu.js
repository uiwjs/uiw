import React from 'react';
import {PropTypes} from '../utils/';
import MixinComponent from './MixinComponent';
import Icon from '../icon';

export default class SubMenu extends MixinComponent {
  constructor(props: Object) {
    super(props);
    this.instanceType = 'SubMenu';
    this.state = {
      active: false
    };
  }
  componentDidMount() {
    // 记录 组件对象
    this.menu().state.submenus[this.props.index] = this;
    this.initEvents();
  }
  initEvents(){
    if(this.menu().props.mode === 'horizontal'){
      
    }else{
      this.refs.submenu.addEventListener('click', this.handleClick.bind(this));
    }
  }
  handleClick(){
    this.menu().handleSubmenuClick(this.props.index);
  }

  opened(){
    return this.menu().state.openedMenu.indexOf(this.props.index) !== -1;
  }
  render() {
    const { prefixCls,className} = this.props;

    return (
      <li className={this.classNames(className,`${prefixCls}`, {
        // 'is-active': this.state.active,
        'opened': this.opened()
      })}>
        <div ref="submenu" className={`${prefixCls}-title`}>
          <span>{this.props.title}</span>
          <Icon type="arrow-down" />
        </div>
        <ul className={this.classNames(`${prefixCls}-con`, {
          // 'is-active': this.state.active,
          'opened': this.opened()
        })}>
          {this.props.children}
        </ul>
      </li>
    )
  }
}

SubMenu.propTypes = {
  prefixCls:PropTypes.string,
}

SubMenu.defaultProps = {
  prefixCls: "w-sub-menu",
}
