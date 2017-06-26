import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Icon extends Component {
  render() {
    const { prefixCls, type, className, ...other } = this.props;
    return <i {...other} className={this.classNames(`${prefixCls}-${type}`, className)}></i>;
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string.isRequired
}

Icon.defaultProps = {
  prefixCls: 'w-icon',
}
