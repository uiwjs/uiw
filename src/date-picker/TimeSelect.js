import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class TimeSelect extends Component {
  render() {
    const { prefixCls, className } = this.props;
    return <i className={this.classNames(`${prefixCls}`, className)}></i>;
  }
}

TimeSelect.propTypes = {
  prefixCls: PropTypes.string
}

TimeSelect.defaultProps = {
  prefixCls: 'w-timeselect',
}
