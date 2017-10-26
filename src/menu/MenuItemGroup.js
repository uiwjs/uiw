import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class MenuItemGroup extends Component {
  constructor(props) {
    super(props);
    this.instanceType = 'SubMenu';
    this.state = {
      active: false
    };
  }
  render() {
    const { prefixCls, className, ...others } = this.props;
    return (
      <li className={this.classNames(`${prefixCls}`, {
        // 'is-active': this.state.active,
        // 'is-opened': this.opened()
      })}>
      </li>
    )
  }
}

MenuItemGroup.propTypes = {
  prefixCls: PropTypes.string,
}

MenuItemGroup.defaultProps = {
  prefixCls: "w-menu-item-group",
}
