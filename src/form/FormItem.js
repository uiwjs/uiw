import React from 'react';
import {Component, PropTypes} from '../utils/';

export default class FormItem extends Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={this.classNames(`${prefixCls}-item`)}>
        {this.props.children}
      </div>
    );
  }
}

FormItem.propTypes = {
  prefixCls: PropTypes.string
}

FormItem.defaultProps = {
  prefixCls: 'w-form',
}
