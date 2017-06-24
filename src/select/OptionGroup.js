import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class OptionGroup extends Component {
  render() {
    const { style, prefixCls } = this.props;
    return (
      <li className={`${prefixCls}-warp`}>
        <h2 className={`${prefixCls}-title`}>{this.props.label}</h2>
        <ul className={`${prefixCls}`}>
          {this.props.children}
        </ul>
      </li>
    )
  }
}



OptionGroup.propTypes = {
  prefixCls: PropTypes.string,
  label: PropTypes.string,
};

OptionGroup.defaultProps = {
  prefixCls: 'w-select-group',
  label: '',
};