import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Icon extends Component {
  render() {
    return <i className={classNames(`${prefixCls}-${this.props.type}`)}></i>;
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string
}

Icon.propTypes = {
  prefixCls: 'w-icon',
}
