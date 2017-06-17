import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class Menu extends Component {
  render() {
    const { prefixCls,className,...others } = this.props;
    return (
      <ul>

      </ul>
    )
  }
}

Menu.propTypes = {
  prefixCls:PropTypes.string,
}

Menu.defaultProps = {
  prefixCls: "w-menu",
}
