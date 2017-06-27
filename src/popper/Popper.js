import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition/'

export default class Popper extends Component {
  render() {
    const { style, className, prefixCls, tag, children, visible } = this.props;
    let wrapStyle = Object.assign.apply(null, [style, {}])
    return (
      <Transition type="fade-in">
        {visible &&
          React.createElement(tag, { style: wrapStyle, className: this.classNames(prefixCls, className) }, children)
        }
      </Transition>
    )
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
