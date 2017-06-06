import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Icon extends Component {
  render() {
    const {prefixCls,type} = this.props;
    return <i className={classNames(`${prefixCls}-${type}`)}></i>;
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string
}

Icon.defaultProps = {
  prefixCls: 'w-icon',
}
