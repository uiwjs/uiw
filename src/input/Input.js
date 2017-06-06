import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <form className={classNames(`${prefixCls}-`)}>
        {this.props.children}
      </form>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string
}

Input.defaultProps = {
  prefixCls: 'w-input',
}
