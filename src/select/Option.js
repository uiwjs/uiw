import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Select extends Component {
  render() {
    return (
      <li>{this.props.children || <span>{this.props.label}</span>}</li>
    );
  }
}

Select.propTypes = {
  prefixCls: PropTypes.string,
}

Select.defaultProps = {
  prefixCls: 'w-select',
}
