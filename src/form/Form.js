import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <form className={classNames(`${prefixCls}-`)}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  prefixCls: PropTypes.string
}

Form.defaultProps = {
  prefixCls: 'w-form',
}
