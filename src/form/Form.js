import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class Form extends Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <form className={this.classNames(`${prefixCls}-`)}>
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
