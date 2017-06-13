import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class MenuItem extends Component {
  render() {
    const { prefixCls,className,...others } = this.props;


    return (
      <ul>

      </ul>
    )
  }
}

MenuItem.propTypes = {
  prefixCls:PropTypes.string,
}

MenuItem.defaultProps = {
  prefixCls: "w-menu-item",
}
