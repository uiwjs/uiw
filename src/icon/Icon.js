import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class Icon extends Component {
  render() {
    const {prefixCls,type,onClick} = this.props;
    return <i onClick={onClick} className={this.classNames(`${prefixCls}-${type}`)}></i>;
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string
}

Icon.defaultProps = {
  prefixCls: 'w-icon',
}
