import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    return (
      <form className={classNames(`${prefixCls}-${this.props.type}`)}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  prefixCls: PropTypes.string
}

Form.propTypes = {
  prefixCls: 'w-form',
}
