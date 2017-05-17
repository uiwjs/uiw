
import React, { Component } from 'react';
import classNames from 'classnames';

export default class Buttons extends Component {
  render() {
    const {type, size, className, children, ...others } = this.props;
    const cls = classNames({
          'w-btn': true,
          'w-btn-small': size === 'small',
          'w-btn-primary': type === 'primary',
          'w-btn-default': type === 'default',
          'w-btn-warn': type === 'warn',
          'w-btn-disabled': this.props.disabled,
          [className]: className
      });
    return (
      <button { ...others } className={ cls }>{ children }</button>
    );
  }
}
