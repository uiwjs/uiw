import React from 'react';
import { PropTypes } from '../utils/';
import MixinComponent from './MixinComponent';
import Icon from '../icon';

/**
 * getMenuKeyList 获取菜单选中的，一条线的所有key
 * @param {String} key 当前选中的 key
 * @param {Array} menus 菜单
 * @param {Array} keys 返回 key 的数组 => ['1','1-2','1-2-3'];
 */
function getMenuKeyList(key, menus) {
  const menuFilter = menus.filter(item => item.props.index === key);
  if (menuFilter.length > 0) return true;
  let isAtive = false;
  menus.forEach((item) => {
    if (toString.apply(item.props.children) === '[object Array]' && getMenuKeyList(key, item.props.children)) {
      isAtive = true;
    } else if (item.props && item.props.index === key) {
      isAtive = true;
    }
  });
  return isAtive;
}

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
  isCheckMenuItem(idx) {
    if (!idx) return false;
    return getMenuKeyList(this.menu().state.defaultActive, this.props.children);
  }
  opened() {
    return this.menu().state.openedMenu.indexOf(this.props.index) !== -1;
  }
  render() {
    const { prefixCls, index, className, title, ...resetProps } = this.props;
    const isSelected = this.isCheckMenuItem(index);
    return (
      <li
        className={this.classNames(className, `${prefixCls}`, {
          opened: this.opened(),
          [`${prefixCls}-selected`]: isSelected,
        })}
        {...resetProps}
      >
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
