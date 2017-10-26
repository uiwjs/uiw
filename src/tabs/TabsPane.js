import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class TabsPane extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

TabsPane.propTypes = {
  prefixCls: PropTypes.string
}

TabsPane.defaultProps = {
  prefixCls: 'w-tabsPane',
}
