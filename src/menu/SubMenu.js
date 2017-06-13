import React, { Component} from 'react';
import {Component, PropTypes} from '../utils/';

export default class SubMenu extends Component {
  render() {
    const { prefixCls,className,...others } = this.props;


    return (
      <ul>

      </ul>
    )
  }
}

SubMenu.propTypes = {
  prefixCls:PropTypes.string,
}

SubMenu.defaultProps = {
  prefixCls: "w-sub-menu",
}
