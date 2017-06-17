import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class MenuItemGroup extends Component {
  render() {
    const { prefixCls,className,...others } = this.props;


    return (
      <ul>

      </ul>
    )
  }
}

MenuItemGroup.propTypes = {
  prefixCls:PropTypes.string,
}

MenuItemGroup.defaultProps = {
  prefixCls: "w-menu-item-group",
}
