import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class FormItem extends Component {
  render() {
    return (
      <div className={classNames(`${prefixCls}-item-${this.props.type}`)}>
        {this.props.children}
      </div>
    );
  }
}

FormItem.propTypes = {
  prefixCls: PropTypes.string
}

FormItem.propTypes = {
  prefixCls: 'w-form',
}
