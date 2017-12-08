import React from 'react';
import { PropTypes } from '../utils/';
import MixinComponent from './MixinComponent';
import Icon from '../icon';

export default class SubMenu extends MixinComponent {
  constructor(props) {
    super(props);
    this.instanceType = 'SubMenu';
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    // 记录 组件对象
    this.menu().state.submenus[this.props.index] = this;
    this.initEvents();
  }
  initEvents() {
    if (this.menu().props.mode !== 'horizontal') {
      this.submenu.addEventListener('click', this.handleClick.bind(this));
    }
  }
  handleClick() {
    this.menu().handleSubmenuClick(this.props.index);
  }

  opened() {
    return this.menu().state.openedMenu.indexOf(this.props.index) !== -1;
  }
  render() {
    const { prefixCls, className } = this.props;

    return (
      <li className={this.classNames(className, `${prefixCls}`, { opened: this.opened() })} >
        <div ref={(elm) => { this.submenu = elm; }} className={`${prefixCls}-title`}>
          <span>{this.props.title}</span>
          <Icon
            className={this.classNames(`${prefixCls}-arrow`, {
              opened: this.opened(),
            })}
            type="arrow-down"
          />
        </div>
        <ul className={this.classNames(`${prefixCls}-con`, { opened: this.opened() })} >
          {this.props.children}
        </ul>
      </li>
    );
  }
}

SubMenu.propTypes = {
  prefixCls: PropTypes.string,
};

SubMenu.defaultProps = {
  prefixCls: 'w-sub-menu',
};
