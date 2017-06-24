import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Popper extends Component {
  render() {
    const { style, className, prefixCls, tag, children } = this.props;
    let wrapStyle = Object.assign.apply(null, [style, {}])
    return React.createElement(tag, { style: wrapStyle, className: this.classNames(prefixCls, className) }, children)
  }
}

Popper.propTypes = {
  prefixCls: PropTypes.string,
  tag: PropTypes.string,
  visible: PropTypes.bool,
}

Popper.defaultProps = {
  prefixCls: 'w-popper',
  tag: 'div',
  style: {},
}
