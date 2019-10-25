import React from 'react';
import Abstract, { AbstractProps } from './Abstract';
import './style/index.less';

export interface RadioProps extends AbstractProps {}

export default class Radio extends React.Component<RadioProps> {
  public static defaultProps: AbstractProps = {
    prefixCls: 'w-radio',
    type: 'radio',
    disabled: false,
    checked: false,
    value: '',
  }
  render() {
    return <Abstract {...this.props} />;
  }
}