import React, { Component } from 'react';

export default class Buttons extends Component {
  static defaultProps = {
    "size":"default",   //大large、默认default、小small
    "type":"text",
    "disabled":false,
    "className":"wui-inputs"
  }
  render() {
    const props = this.props;

    // const inputClassName = classNames(prefixCls, {
    //   [`${prefixCls}-sm`]: props.size === 'small',
    //   [`${prefixCls}-lg`]: props.size === 'large',
    // }, props.className);

    return (
      <input
        className={inputClassName}
        onKeyDown={this.handleKeyDown}
        ref="input"
      />
    );
  }
}
